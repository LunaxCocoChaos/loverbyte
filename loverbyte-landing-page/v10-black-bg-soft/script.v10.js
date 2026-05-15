(() => {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const apply = () => {
    nav.classList.toggle("lb-nav--scrolled", window.scrollY > 2);
  };

  apply();
  window.addEventListener("scroll", apply, { passive: true });
})();

// Final CTA reveal: fades in when entering viewport.
(() => {
  const finalCta = document.querySelector("[data-final-cta]");
  if (!finalCta) return;

  const reveal = () => finalCta.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    window.addEventListener("load", reveal, { once: true });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      reveal();
      io.disconnect();
    },
    { threshold: 0.24, rootMargin: "0px 0px -12% 0px" },
  );

  io.observe(finalCta);
})();

// Pillars stage: slides swap in the same frame (not a long page).
(() => {
  const stage = document.querySelector("[data-stage]");
  if (!stage) return;

  const slides = Array.from(stage.querySelectorAll("[data-slide]"));
  const dots = Array.from(stage.querySelectorAll("[data-stage-dot]"));
  if (slides.length < 2) return;

  // NOTE: For this prototype, we always run the micro-sequences so you can see them.
  // If you want to respect OS reduce-motion later, we can gate this behind a flag.
  const reduceMotion = false;

  const thread = stage.querySelector("[data-thread]");
  const threadSlide = thread ? thread.closest("[data-slide]") : null;
  const threadItems = thread ? Array.from(thread.querySelectorAll(".lb-thread__item")) : [];
  let threadCleanupTimer = null;
  let nextTimer = null;
  let started = false;
  let idx = 0;

  const lunaSlide = stage.querySelector("[data-luna-slide]");
  const lunaTextEl = lunaSlide ? lunaSlide.querySelector("[data-luna-text]") : null;
  const lunaToasts = lunaSlide ? lunaSlide.querySelector("[data-luna-toasts]") : null;
  let lunaTimers = [];


  const LUNA_MESSAGE = "It's Thursday a.k.a Thurst Trap Day. Post something worth a crush 😉";

  function toMs(cssTime) {
    const t = String(cssTime || "").trim();
    if (!t) return 0;
    if (t.endsWith("ms")) return Number.parseFloat(t);
    if (t.endsWith("s")) return Number.parseFloat(t) * 1000;
    return Number.parseFloat(t) || 0;
  }

  function threadDurationMs() {
    if (!thread) return 0;
    const step = getComputedStyle(thread).getPropertyValue("--lb-step");
    const stepMs = toMs(step) || 2250;
    return stepMs * Math.max(threadItems.length, 1) + 220;
  }

  function stopThread() {
    if (!thread) return;
    if (threadCleanupTimer) window.clearTimeout(threadCleanupTimer);
    threadCleanupTimer = null;
    thread.classList.remove("lb-thread--animate");
  }

  function playThread() {
    if (!thread || reduceMotion) return;
    if (threadCleanupTimer) window.clearTimeout(threadCleanupTimer);

    // Remove/re-add so the sequence restarts even if it already played.
    thread.classList.remove("lb-thread--animate");
    // Force reflow so removing/adding restarts CSS animations reliably.
    thread.offsetHeight;
    thread.classList.add("lb-thread--animate");

    // Return to the static (all-visible) layout after the cinematic pass.
    threadCleanupTimer = window.setTimeout(() => {
      thread.classList.remove("lb-thread--animate");
      threadCleanupTimer = null;
    }, threadDurationMs());
  }

  function clearLuna() {
    if (!lunaSlide) return;
    lunaTimers.forEach((t) => window.clearTimeout(t));
    lunaTimers = [];
    lunaSlide.classList.remove("is-typing", "is-luna-out", "is-toasts");
    if (lunaTextEl) lunaTextEl.textContent = "";
    if (lunaToasts) lunaToasts.setAttribute("aria-hidden", "true");
  }

  function runLuna() {
    if (!lunaSlide || !lunaTextEl) return;
    clearLuna();

    if (reduceMotion) {
      lunaTextEl.textContent = LUNA_MESSAGE;
      lunaSlide.classList.add("is-toasts");
      if (lunaToasts) lunaToasts.setAttribute("aria-hidden", "false");
      return;
    }

    lunaSlide.classList.add("is-typing");
    const chars = Array.from(LUNA_MESSAGE);
    const stepMs = 50;

    chars.forEach((ch, i) => {
      lunaTimers.push(
        window.setTimeout(() => {
          lunaTextEl.textContent += ch;
        }, i * stepMs),
      );
    });

    const typingDoneAt = chars.length * stepMs + 160;
    lunaTimers.push(
      window.setTimeout(() => {
        lunaSlide.classList.remove("is-typing");
      }, typingDoneAt),
    );

    lunaTimers.push(
      window.setTimeout(() => {
        lunaSlide.classList.add("is-toasts");
        if (lunaToasts) lunaToasts.setAttribute("aria-hidden", "false");
      }, typingDoneAt + 120),
    );
  }

  function setActive(nextIdx) {
    idx = ((nextIdx % slides.length) + slides.length) % slides.length;

    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));

    const activeSlide = slides[idx];
    if (thread && threadSlide === activeSlide) {
      playThread();
    } else {
      stopThread();
    }

    if (lunaSlide && activeSlide === lunaSlide) runLuna();
    else clearLuna();

  }

  function scheduleNext() {
    if (reduceMotion) return;
    if (nextTimer) window.clearTimeout(nextTimer);

    const activeSlide = slides[idx];
    const configuredHold = Number.parseInt(activeSlide.getAttribute("data-hold") || "", 10);
    const holdMs = Number.isFinite(configuredHold) && configuredHold > 0
      ? configuredHold
      : (thread && threadSlide === activeSlide ? threadDurationMs() + 850 : 7600);

    nextTimer = window.setTimeout(() => {
      setActive(idx + 1);
      scheduleNext();
    }, holdMs);
  }

  dots.forEach((btn) => {
    btn.addEventListener("click", () => {
      const n = Number.parseInt(btn.getAttribute("data-stage-dot") || "0", 10);
      setActive(Number.isFinite(n) ? n : 0);
      scheduleNext();
    });
  });

  // Click the feed itself to replay its sequence.
  if (thread) thread.addEventListener("click", playThread);

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        if (started) return;
        started = true;
        setActive(0);
        scheduleNext();
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(stage);
  } else {
    // Fallback: start on load.
    window.addEventListener("load", () => {
      if (started) return;
      started = true;
      setActive(0);
      scheduleNext();
    }, { once: true });
  }

  // Failsafe: local `file://` pages sometimes don't trigger IntersectionObserver reliably.
  // Starting on load keeps the stage running consistently.
  window.addEventListener("load", () => {
    if (started) return;
    started = true;
    setActive(0);
    scheduleNext();
  }, { once: true });
})();

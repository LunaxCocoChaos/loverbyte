(() => {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const apply = () => {
    nav.classList.toggle("lb-nav--scrolled", window.scrollY > 2);
  };

  apply();
  window.addEventListener("scroll", apply, { passive: true });
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

  const datingSlide = stage.querySelector("[data-dating-slide]");
  const datingStage = datingSlide ? datingSlide.querySelector("[data-dating-stage]") : null;
  const datingScenes = datingStage
    ? Array.from(datingStage.querySelectorAll("[data-dating-scene]"))
    : [];
  let datingTimers = [];

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

  // Dating platform = a base profile card + overlay “moments”.
  // Profile is always visible as context; overlays (toasts/match/private) swap above it.
  function showDatingScene(name) {
    if (!datingStage) return;
    datingScenes.forEach((scene) => {
      const sceneName = scene.getAttribute("data-dating-scene");
      const isProfile = sceneName === "profile";
      const isActive = isProfile || sceneName === name;

      scene.classList.toggle("is-active", isActive);

      // Keep profile always rendered so slide 02 is never “empty”.
      // Overlays are the only things we actually toggle via `hidden`.
      if (isProfile) {
        scene.hidden = false;
        scene.setAttribute("aria-hidden", "false");
        return;
      }

      scene.hidden = !isActive;
      scene.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    datingStage.setAttribute("data-dating-moment", name);
  }

  function clearDating() {
    if (!datingStage) return;
    datingTimers.forEach((t) => window.clearTimeout(t));
    datingTimers = [];
    const toasts = Array.from(datingStage.querySelectorAll("[data-dating-toast]"));
    toasts.forEach((t) => t.classList.remove("is-show", "is-in", "is-out"));
    showDatingScene("profile");
  }

  function showToast(el) {
    if (!el) return;
    el.classList.remove("is-out");
    el.classList.add("is-show", "is-in");
    // allow replays
    el.offsetHeight;
    el.classList.add("is-in");
    window.setTimeout(() => el.classList.remove("is-in"), 600);
  }

  function hideToast(el) {
    if (!el) return;
    el.classList.remove("is-in");
    el.classList.add("is-out");
    window.setTimeout(() => {
      el.classList.remove("is-show", "is-out");
    }, 460);
  }

  function runDating() {
    if (!datingStage) return;
    clearDating();

    if (reduceMotion) {
      // Keep it simple for reduce-motion users.
      showDatingScene("profile");
      return;
    }

    const toast1 = datingStage.querySelector('[data-dating-toast="1"]');
    const toast2 = datingStage.querySelector('[data-dating-toast="2"]');

    // Moment 1: Dating card
    showDatingScene("profile");

    // Moment 2: Crush notifications
    datingTimers.push(
      window.setTimeout(() => {
        showDatingScene("toasts");
        // Give the eye a beat to land, then pop notifications.
        datingTimers.push(window.setTimeout(() => toast1 && showToast(toast1), 220));
        datingTimers.push(window.setTimeout(() => toast1 && hideToast(toast1), 3600));
        datingTimers.push(window.setTimeout(() => toast2 && showToast(toast2), 3900));
        datingTimers.push(window.setTimeout(() => toast2 && hideToast(toast2), 7300));
      }, 2600),
    );

    // Moment 3: Match
    datingTimers.push(
      window.setTimeout(() => showDatingScene("match"), 10400),
    );

    // Moment 4 (Private Room + Quiz) intentionally disabled for now.
    // We'll bring this back once the notification + match moment feels right.
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

    if (datingSlide && activeSlide === datingSlide) runDating();
    else clearDating();
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

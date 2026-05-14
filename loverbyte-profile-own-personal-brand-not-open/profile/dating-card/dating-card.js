(() => {
  const slides = Array.from(document.querySelectorAll('[data-photo-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-photo-dot]'));
  const prevButton = document.querySelector('[data-photo-prev]');
  const nextButton = document.querySelector('[data-photo-next]');
  const counter = document.querySelector('[data-photo-count]');
  const crushButton = document.querySelector('[data-send-crush]');
  const crushToast = document.querySelector('[data-crush-toast]');
  const horizontalScrollers = Array.from(document.querySelectorAll('.lb-horizontal-scroller'));

  if (!slides.length) return;

  let activeIndex = 0;
  let toastTimer = null;

  const renderSlides = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeIndex);
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });

    if (counter) {
      counter.textContent = `${activeIndex + 1} / ${slides.length}`;
    }
  };

  const setSlide = (index) => {
    const total = slides.length;
    if (!total) return;
    activeIndex = (index + total) % total;
    renderSlides();
  };

  prevButton?.addEventListener('click', () => {
    setSlide(activeIndex - 1);
  });

  nextButton?.addEventListener('click', () => {
    setSlide(activeIndex + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = Number.parseInt(dot.dataset.photoDot || '-1', 10);
      if (!Number.isInteger(index) || index < 0) return;
      setSlide(index);
    });
  });

  crushButton?.addEventListener('click', () => {
    if (!crushToast) return;
    crushToast.hidden = false;
    if (toastTimer) {
      window.clearTimeout(toastTimer);
    }
    toastTimer = window.setTimeout(() => {
      crushToast.hidden = true;
    }, 1600);
  });

  const syncHorizontalScroller = (scrollerRoot) => {
    const track = scrollerRoot.querySelector('.lb-horizontal-scroller__track');
    const hint = scrollerRoot.parentElement?.querySelector('.lb-horizontal-scroller__hint');
    if (!track) return;

    const scrollLeft = track.scrollLeft;
    const clientWidth = track.clientWidth;
    const scrollWidth = track.scrollWidth;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    const isScrollable = maxScroll > 2;
    const atStart = scrollLeft <= 2;
    const atEnd = scrollLeft >= maxScroll - 2;

    scrollerRoot.classList.toggle('is-scrollable', isScrollable);
    scrollerRoot.classList.toggle('is-at-start', atStart);
    scrollerRoot.classList.toggle('is-at-end', atEnd);
    scrollerRoot.classList.toggle('has-scrolled', scrollLeft > 6);

    if (hint) {
      hint.hidden = !isScrollable;
    }
  };

  horizontalScrollers.forEach((scrollerRoot) => {
    const track = scrollerRoot.querySelector('.lb-horizontal-scroller__track');
    if (!track) return;
    track.addEventListener('scroll', () => syncHorizontalScroller(scrollerRoot), { passive: true });
    syncHorizontalScroller(scrollerRoot);
  });

  window.addEventListener('resize', () => {
    horizontalScrollers.forEach((scrollerRoot) => {
      syncHorizontalScroller(scrollerRoot);
    });
  });

  renderSlides();
})();

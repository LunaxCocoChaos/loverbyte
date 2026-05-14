(() => {
  const mandatoryTopStripFields = [
    {
      id: 'lifestyle',
      label: 'Lifestyle',
      required: true,
      options: ['Homebody', 'Social butterfly', 'Night owl', 'Early bird'],
      selectedValue: 'Homebody'
    },
    {
      id: 'personality',
      label: 'Personality',
      required: true,
      options: ['Introvert', 'Extrovert', 'Ambivert'],
      selectedValue: 'Ambivert'
    },
    {
      id: 'race_culture_openness',
      label: 'Race / Culture Openness',
      required: true,
      options: ['Open across race/culture', 'Prefer shared race/culture', 'Open, but culture matters'],
      selectedValue: 'Open across race/culture'
    },
    {
      id: 'age_range_openness',
      label: 'Age Range Openness',
      required: true,
      options: ['Prefer closer to my age/age range', 'Open to age gaps'],
      selectedValue: 'Open to age gaps'
    }
  ];

  const slides = Array.from(document.querySelectorAll('[data-dcv2-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-dcv2-dot]'));
  const prevButton = document.querySelector('[data-dcv2-prev]');
  const nextButton = document.querySelector('[data-dcv2-next]');
  const countLabel = document.querySelector('[data-dcv2-count]');
  const crushButton = document.querySelector('[data-dcv2-crush]');
  const crushToast = document.querySelector('[data-dcv2-toast]');

  const scroller = document.querySelector('[data-dcv2-scroller]');
  const scrollerTrack = document.querySelector('[data-dcv2-scroller-track]');
  const scrollerHint = document.querySelector('[data-dcv2-scroller-hint]');
  const scrollerThumb = document.querySelector('[data-dcv2-scroller-thumb]');

  const carousel = document.querySelector('[data-dcv2-carousel]');
  const lightbox = document.querySelector('[data-dcv2-lightbox]');
  const lightboxImg = document.querySelector('[data-dcv2-lightbox-img]');
  const lightboxClose = document.querySelector('[data-dcv2-lightbox-close]');

  const renderTopStrip = () => {
    if (!scrollerTrack) return;
    scrollerTrack.innerHTML = '';

    mandatoryTopStripFields.forEach((field) => {
      if (!field?.selectedValue) return;
      const chip = document.createElement('span');
      chip.className = 'lb-dcv2-chip';
      chip.setAttribute('role', 'listitem');
      chip.title = field.label;
      chip.textContent = field.selectedValue;
      scrollerTrack.appendChild(chip);
    });
  };

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

    if (countLabel) {
      countLabel.textContent = `${activeIndex + 1} / ${slides.length}`;
    }
  };

  const setSlide = (index) => {
    const total = slides.length;
    if (!total) return;
    activeIndex = (index + total) % total;
    renderSlides();
  };

  const syncScrollerState = () => {
    if (!scroller || !scrollerTrack) return;

    const scrollLeft = scrollerTrack.scrollLeft;
    const clientWidth = scrollerTrack.clientWidth;
    const scrollWidth = scrollerTrack.scrollWidth;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    const isScrollable = maxScroll > 2;
    const atStart = scrollLeft <= 2;
    const atEnd = scrollLeft >= maxScroll - 2;

    scroller.classList.toggle('is-scrollable', isScrollable);
    scroller.classList.toggle('is-at-start', atStart);
    scroller.classList.toggle('is-at-end', atEnd);
    scroller.classList.toggle('has-scrolled', scrollLeft > 6);

    if (scrollerHint) {
      scrollerHint.hidden = !isScrollable;
      scrollerHint.style.opacity = scrollLeft > 6 ? '0.28' : '1';
    }

    if (scrollerThumb) {
      if (!isScrollable) {
        scrollerThumb.style.width = '100%';
        scrollerThumb.style.transform = 'translateX(0)';
      } else {
        const thumbWidth = Math.max(20, (clientWidth / scrollWidth) * 100);
        const maxTranslate = 100 - thumbWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        const translate = progress * maxTranslate;
        scrollerThumb.style.width = `${thumbWidth}%`;
        scrollerThumb.style.transform = `translateX(${translate}%)`;
      }
    }
  };

  prevButton?.addEventListener('click', () => {
    setSlide(activeIndex - 1);
  });

  nextButton?.addEventListener('click', () => {
    setSlide(activeIndex + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = Number.parseInt(dot.dataset.dcv2Dot || '-1', 10);
      if (!Number.isInteger(index) || index < 0) return;
      setSlide(index);
    });
  });

  scrollerTrack?.addEventListener('scroll', syncScrollerState, { passive: true });
  window.addEventListener('resize', syncScrollerState);

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = '';
  };

  carousel?.addEventListener('click', (e) => {
    const img = e.target.closest('.lb-dcv2-slide__img');
    if (!img) return;
    openLightbox(img.src, img.alt);
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  crushButton?.addEventListener('click', () => {
    window.parent.postMessage({ type: 'lb-crush-sent' }, '*');
  });

  renderTopStrip();
  renderSlides();
  syncScrollerState();
})();

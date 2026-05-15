(() => {
  const options = Array.from(document.querySelectorAll('.lb-signup3__option'));
  const continueBtn = document.querySelector('[data-continue]');
  const helper = document.querySelector('[data-helper]');
  const countEl = document.querySelector('[data-count]');
  if (!options.length || !continueBtn || !helper || !countEl) return;

  const MAX_SELECTION = 3;
  const selectedValues = new Set();

  const updateCount = () => {
    const selectedCount = selectedValues.size;
    countEl.textContent = `${selectedCount}/${MAX_SELECTION} selected`;
    countEl.classList.toggle('is-max', selectedCount === MAX_SELECTION);
  };

  const updateLockedState = () => {
    const maxReached = selectedValues.size >= MAX_SELECTION;

    options.forEach((option) => {
      const isSelected = option.classList.contains('is-selected');
      const shouldLock = maxReached && !isSelected;
      option.classList.toggle('is-locked', shouldLock);
      option.setAttribute('aria-disabled', shouldLock ? 'true' : 'false');
    });
  };

  const updateHelper = (blocked = false) => {
    if (blocked) {
      helper.textContent = 'Three’s the limit. Save some chaos for the feed.';
      return;
    }

    helper.textContent = selectedValues.size >= MAX_SELECTION
      ? 'Three’s the limit. Save some chaos for the feed.'
      : 'Pick up to 3.';
  };

  const updateButtonState = () => {
    continueBtn.disabled = selectedValues.size === 0;
  };

  const syncAll = (blocked = false) => {
    updateCount();
    updateLockedState();
    updateHelper(blocked);
    updateButtonState();
  };

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const value = option.dataset.value || '';
      if (!value) return;

      const isSelected = option.classList.contains('is-selected');

      if (isSelected) {
        option.classList.remove('is-selected');
        selectedValues.delete(value);
        syncAll(false);
        return;
      }

      if (selectedValues.size >= MAX_SELECTION) {
        syncAll(true);
        return;
      }

      option.classList.add('is-selected');
      selectedValues.add(value);
      syncAll(false);
    });
  });

  continueBtn.addEventListener('click', () => {
    if (selectedValues.size === 0) return;

    const intents = Array.from(selectedValues);
    const postProfileRoute = sessionStorage.getItem('lb_after_intent_route') || './signup-step6-room-ready.html';
    const nextRoute = './signup-step4-profile-trailer.html';

    try {
      sessionStorage.setItem('lb_user_intent', JSON.stringify(intents));
      sessionStorage.setItem('lb_next_onboarding_route', nextRoute);
      sessionStorage.setItem('lb_post_profile_route', postProfileRoute);
    } catch (error) {
      // Ignore storage issues for prototype flow.
    }

    window.location.href = nextRoute;
  });

  syncAll(false);
})();

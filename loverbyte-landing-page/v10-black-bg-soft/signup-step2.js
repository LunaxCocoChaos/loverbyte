(() => {
  const options = Array.from(document.querySelectorAll('.lb-signup2__option'));
  const continueBtn = document.querySelector('[data-continue]');
  if (!options.length || !continueBtn) return;

  let selectedValue = '';
  let romanticallyOpen = null;

  function updateState() {
    continueBtn.disabled = !selectedValue;
  }

  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((item) => {
        item.classList.remove('is-selected');
        item.setAttribute('aria-checked', 'false');
      });

      option.classList.add('is-selected');
      option.setAttribute('aria-checked', 'true');

      selectedValue = option.dataset.value || '';
      romanticallyOpen = option.dataset.open === 'true';
      updateState();
    });
  });

  continueBtn.addEventListener('click', () => {
    if (!selectedValue) return;

    const nextRoute = './signup-step3-room-energy.html';
    const afterIntentRoute = romanticallyOpen
      ? './signup-step5-dating-card-setup.html'
      : './signup-step6-room-ready.html';

    try {
      sessionStorage.setItem('lb_approach_energy', selectedValue);
      sessionStorage.setItem('lb_romantically_open', String(romanticallyOpen));
      sessionStorage.setItem('lb_next_onboarding_route', nextRoute);
      sessionStorage.setItem('lb_after_intent_route', afterIntentRoute);
    } catch (error) {
      // Ignore storage issues for prototype flow.
    }

    window.location.href = nextRoute;
  });

  updateState();
})();

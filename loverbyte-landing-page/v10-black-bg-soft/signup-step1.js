(() => {
  const options = Array.from(document.querySelectorAll('.lb-signup1__option'));
  const continueBtn = document.querySelector('[data-continue]');
  if (!options.length || !continueBtn) return;

  let selectedValue = '';

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
      updateState();
    });
  });

  continueBtn.addEventListener('click', () => {
    if (!selectedValue) return;

    try {
      sessionStorage.setItem('lb_relationship_status', selectedValue);
    } catch (error) {
      // Ignore storage issues for prototype flow.
    }

    window.location.href = './signup-step2.html';
  });

  updateState();
})();

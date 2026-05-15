(() => {
  const startBtn = document.querySelector('[data-start]');
  if (!startBtn) return;

  const goToStep1 = () => {
    window.location.href = './signup-step1-account.html';
  };

  startBtn.addEventListener('click', goToStep1);
})();

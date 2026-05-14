(() => {
  const toast = document.querySelector('[data-toast]');
  let toastTimer = null;

  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };

  document.querySelector('[data-composer]')?.addEventListener('click', () => {
    showToast('Private room preview · messaging UI for demo only');
  });
})();

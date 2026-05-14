(() => {
  /* ── countdown ── */
  const EXPIRES = new Date('2026-05-21T18:42:00');

  const pad = (n) => String(n).padStart(2, '0');

  const dEl  = document.getElementById('cd-d');
  const hEl  = document.getElementById('cd-h');
  const mEl  = document.getElementById('cd-m');
  const sEl  = document.getElementById('cd-s');

  const tick = () => {
    const diff = Math.max(0, EXPIRES - Date.now());
    const totalSec = Math.floor(diff / 1000);
    const d = Math.floor(totalSec / 86400);
    const h = Math.floor((totalSec % 86400) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (dEl) dEl.textContent = d;
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
  };

  tick();
  setInterval(tick, 1000);

  /* ── composer tap toast ── */
  const toast = document.getElementById('pr-toast');
  let timer = null;

  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };

  document.getElementById('pr-composer')?.addEventListener('click', () => {
    showToast('Private room preview · messaging UI for demo only');
  });
})();

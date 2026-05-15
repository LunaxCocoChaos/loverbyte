(() => {
  const dayButtons = Array.from(document.querySelectorAll('.lb-week-tabs__tab'));
  if (!dayButtons.length) return;

  let selectedDay = 'Mon';

  const setActiveDay = (day) => {
    selectedDay = day;
    dayButtons.forEach((button) => {
      const isActive = button.dataset.day === day;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  dayButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const day = button.dataset.day;
      if (!day || day === selectedDay) return;
      setActiveDay(day);
    });
  });

  setActiveDay(selectedDay);
})();

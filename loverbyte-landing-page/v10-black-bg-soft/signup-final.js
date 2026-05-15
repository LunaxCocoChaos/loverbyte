(() => {
  const mode = document.body.dataset.finalMode || '';
  const enterBtn = document.querySelector('[data-enter-app]');
  if (!enterBtn) return;

  const isRomanticallyOpen = sessionStorage.getItem('lb_romantically_open') === 'true';
  const hasDatingCard = sessionStorage.getItem('lb_dating_card_active') === 'true';
  const isDatingCardPinned = sessionStorage.getItem('lb_dating_card_pinned') === 'true';

  const routeToApp = () => {
    window.location.href = './index.html';
  };

  if (mode === 'room-ready') {
    if (isRomanticallyOpen) {
      window.location.href = hasDatingCard && isDatingCardPinned
        ? './signup-step6-youre-in.html'
        : './signup-step5-dating-card-setup.html';
      return;
    }

    enterBtn.addEventListener('click', routeToApp);
    return;
  }

  if (mode !== 'youre-in') return;

  if (!isRomanticallyOpen) {
    window.location.href = './signup-step6-room-ready.html';
    return;
  }

  if (!hasDatingCard || !isDatingCardPinned) {
    window.location.href = './signup-step5-dating-card-setup.html';
    return;
  }

  const viewCardBtn = document.querySelector('[data-view-card]');
  const previewCard = document.querySelector('[data-card-preview]');
  const previewPhoto = document.querySelector('[data-preview-photo]');
  const previewName = document.querySelector('[data-preview-name]');
  const previewLocation = document.querySelector('[data-preview-location]');
  const previewIntent = document.querySelector('[data-preview-intent]');
  const previewPrompt = document.querySelector('[data-preview-prompt]');

  const hydratePreview = () => {
    let payload = null;
    try {
      payload = JSON.parse(sessionStorage.getItem('lb_dating_card') || '{}');
    } catch (error) {
      payload = {};
    }

    const photo = payload.datingCardPhotos && payload.datingCardPhotos[0]
      ? payload.datingCardPhotos[0]
      : '';

    if (photo && previewPhoto) {
      previewPhoto.style.backgroundImage = `url(${photo})`;
    }

    if (previewName) {
      previewName.textContent = (sessionStorage.getItem('lb_display_name') || '').trim() || 'You';
    }

    if (previewLocation) {
      const city = (payload.city || '').trim();
      const region = (payload.stateProvinceRegion || '').trim();
      previewLocation.textContent = city && region ? `${city}, ${region}` : (region || city || 'Location pending');
    }

    if (previewIntent) {
      previewIntent.textContent = payload.connectionIntent || 'Connection intent';
    }

    if (previewPrompt) {
      const promptLabel = (payload.selectedPrompt || '').trim();
      const promptAnswer = (payload.promptAnswer || '').trim();
      previewPrompt.textContent = promptLabel && promptAnswer
        ? `${promptLabel} ${promptAnswer}`
        : 'Prompt preview';
    }
  };

  enterBtn.addEventListener('click', routeToApp);

  if (viewCardBtn && previewCard) {
    hydratePreview();
    viewCardBtn.addEventListener('click', () => {
      const isOpen = !previewCard.hidden;
      previewCard.hidden = isOpen;
      viewCardBtn.textContent = isOpen ? 'View My Dating Card' : 'Hide My Dating Card';
    });
  }
})();

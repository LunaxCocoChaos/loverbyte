(() => {
  const dayButtons = Array.from(document.querySelectorAll('.lb-week-tabs__tab'));
  let selectedDay = 'Mon';

  if (dayButtons.length) {
    const setActiveDay = (day) => {
      selectedDay = day;
      dayButtons.forEach((button) => {
        const baseLabel = button.dataset.day || button.textContent.trim();
        const isActive = button.dataset.day === day;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
        button.textContent = isActive ? `${baseLabel} · Today` : baseLabel;
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
  }

  const composeRoot = document.querySelector('[data-compose]');
  const composeOpen = document.querySelector('.lb-user-entry__trigger');
  const composeClose = document.querySelector('[data-compose-close]');
  const composeCancel = document.querySelector('[data-compose-cancel]');
  const composeText = document.querySelector('[data-compose-text]');
  const composeImageBtn = document.querySelector('[data-compose-image]');
  const composeImageInput = document.querySelector('[data-compose-image-input]');
  const composeImageMeta = document.querySelector('[data-compose-image-meta]');
  const composeChar = document.querySelector('[data-compose-char]');
  const composeError = document.querySelector('[data-compose-error]');
  const composePreview = document.querySelector('[data-compose-preview]');
  const composePost = document.querySelector('[data-compose-post]');

  if (!composeRoot || !composeOpen || !composeText || !composePost) return;

  let images = [];

  const syncComposerState = () => {
    const text = (composeText.value || '').trim();
    const hasContent = text.length > 0 || images.length > 0;
    composePost.disabled = !hasContent;
    if (composeChar) composeChar.textContent = `${composeText.value.length}/1000`;
    if (composeImageMeta) composeImageMeta.textContent = `${images.length}/2 images`;

    if (composePreview) {
      composePreview.innerHTML = '';
      if (images.length > 0) {
        images.forEach((item) => {
          const img = document.createElement('img');
          img.className = 'lb-compose__thumb';
          img.src = item.url;
          img.alt = 'Selected upload';
          composePreview.appendChild(img);
        });
        composePreview.hidden = false;
      } else {
        composePreview.hidden = true;
      }
    }
  };

  const clearComposer = () => {
    images.forEach((item) => URL.revokeObjectURL(item.url));
    images = [];
    composeText.value = '';
    if (composeImageInput) composeImageInput.value = '';
    if (composeError) composeError.textContent = '';
    syncComposerState();
  };

  const openComposer = () => {
    composeRoot.hidden = false;
    requestAnimationFrame(() => composeText.focus());
  };

  const closeComposer = () => {
    composeRoot.hidden = true;
    clearComposer();
  };

  composeOpen.addEventListener('click', openComposer);
  composeClose?.addEventListener('click', closeComposer);
  composeCancel?.addEventListener('click', closeComposer);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !composeRoot.hidden) {
      closeComposer();
    }
  });

  composeImageBtn?.addEventListener('click', () => {
    composeImageInput?.click();
  });

  composeImageInput?.addEventListener('change', () => {
    const selectedFiles = Array.from(composeImageInput.files || []);
    if (!selectedFiles.length) return;

    const nextImages = [...images];
    if (composeError) composeError.textContent = '';

    selectedFiles.forEach((file) => {
      if (nextImages.length >= 2) return;
      if (file.type === 'image/gif') {
        if (composeError) composeError.textContent = 'GIFs aren’t available in MVP.';
        return;
      }
      const allowed = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'];
      if (!allowed.includes(file.type)) {
        if (composeError) composeError.textContent = 'Use PNG, JPG, WEBP, or HEIC images.';
        return;
      }
      nextImages.push({ file, url: URL.createObjectURL(file) });
    });

    if (selectedFiles.length + images.length > 2 && composeError && !composeError.textContent) {
      composeError.textContent = 'You can add up to 2 images.';
    }

    images.forEach((item) => URL.revokeObjectURL(item.url));
    images = nextImages;
    if (composeImageInput) composeImageInput.value = '';
    syncComposerState();
  });

  composeText.addEventListener('input', () => {
    if (composeError) composeError.textContent = '';
    syncComposerState();
  });

  composePost.addEventListener('click', () => {
    if (composePost.disabled) return;
    closeComposer();
  });

  syncComposerState();
})();

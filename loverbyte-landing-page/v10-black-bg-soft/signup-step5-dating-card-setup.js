(() => {
  const photoInput = document.querySelector('[data-photo-input]');
  const photoGrid = document.querySelector('[data-photo-grid]');
  const photoHint = document.querySelector('[data-photo-hint]');
  const photoError = document.querySelector('[data-photo-error]');
  const genderWrap = document.querySelector('[data-gender-identity]');
  const genderError = document.querySelector('[data-gender-error]');
  const genderCustomWrap = document.querySelector('[data-gender-custom-wrap]');
  const genderCustomInput = document.querySelector('[data-gender-custom]');
  const intentWrap = document.querySelector('[data-connection-intent]');
  const intentError = document.querySelector('[data-intent-error]');
  const longDistanceInput = document.querySelector('[data-long-distance]');
  const openToWrap = document.querySelector('[data-open-to]');
  const openToError = document.querySelector('[data-opento-error]');
  const openNote = document.querySelector('[data-open-note]');
  const countryInput = document.querySelector('[data-country]');
  const regionInput = document.querySelector('[data-region]');
  const regionLabel = document.querySelector('[data-region-label]');
  const cityInput = document.querySelector('[data-city]');
  const countryError = document.querySelector('[data-country-error]');
  const regionError = document.querySelector('[data-region-error]');
  const promptSelect = document.querySelector('[data-prompt-select]');
  const promptAnswer = document.querySelector('[data-prompt-answer]');
  const promptCount = document.querySelector('[data-prompt-count]');
  const promptError = document.querySelector('[data-prompt-error]');
  const pinBtn = document.querySelector('[data-pin]');
  const backBtn = document.querySelector('[data-back-openness]');
  const previewPhoto = document.querySelector('[data-preview-photo]');
  const previewName = document.querySelector('[data-preview-name]');
  const previewLocation = document.querySelector('[data-preview-location]');
  const previewLookingFor = document.querySelector('[data-preview-lookingfor]');
  const previewPrompt = document.querySelector('[data-preview-prompt]');

  if (
    !photoInput ||
    !photoGrid ||
    !genderWrap ||
    !genderError ||
    !genderCustomWrap ||
    !genderCustomInput ||
    !intentWrap ||
    !intentError ||
    !longDistanceInput ||
    !openToWrap ||
    !countryInput ||
    !regionInput ||
    !regionLabel ||
    !promptSelect ||
    !promptAnswer ||
    !previewName ||
    !countryError ||
    !regionError ||
    !pinBtn ||
    !backBtn
  ) return;

  const photos = ['', '', ''];
  let activePhotoSlot = 0;
  let selectedGender = '';
  let selectedIntent = '';
  const openTo = new Set();

  const displayNameFromSession = (sessionStorage.getItem('lb_display_name') || '').trim();
  previewName.textContent = displayNameFromSession || 'You';

  const slotEls = Array.from(photoGrid.querySelectorAll('.lb-photoSlot'));

  const updatePhotoUi = () => {
    slotEls.forEach((slotEl, idx) => {
      const img = slotEl.querySelector(`[data-photo-preview="${idx}"]`);
      const hasPhoto = Boolean(photos[idx]);
      slotEl.classList.toggle('has-photo', hasPhoto);
      if (img) {
        if (hasPhoto) img.src = photos[idx];
        else img.removeAttribute('src');
      }
    });

    const count = photos.filter(Boolean).length;
    if (count === 0) {
      photoHint.textContent = 'Add at least one photo.';
    } else if (count === 1) {
      photoHint.textContent = 'One works. Two gives people more to go on.';
    } else {
      photoHint.textContent = `${count}/3 photos added.`;
    }

    const mainPhoto = photos[0] || photos.find(Boolean);
    if (mainPhoto) {
      previewPhoto.style.backgroundImage = `url(${mainPhoto})`;
      previewPhoto.style.backgroundSize = 'cover';
      previewPhoto.style.backgroundPosition = 'center';
      previewPhoto.textContent = '';
    } else {
      previewPhoto.style.backgroundImage = '';
      previewPhoto.textContent = 'Main photo';
    }
  };

  const toggleSet = (set, value, max = 99) => {
    if (set.has(value)) {
      set.delete(value);
      return true;
    }
    if (set.size >= max) return false;
    set.add(value);
    return true;
  };

  const syncChipGroup = (wrap, set) => {
    wrap.querySelectorAll('button').forEach((btn) => {
      const value = btn.dataset.value || '';
      btn.classList.toggle('is-selected', set.has(value));
    });
  };

  const syncSingleChipGroup = (wrap, selectedValue) => {
    wrap.querySelectorAll('button[data-value]').forEach((button) => {
      const value = button.dataset.value || '';
      button.classList.toggle('is-selected', value === selectedValue);
    });
  };

  const updatePreviewText = () => {
    const region = (regionInput.value || '').trim();
    const city = (cityInput.value || '').trim();
    const country = (countryInput.value || '').trim();
    if (city && region) {
      previewLocation.textContent = country ? `${city}, ${region}` : `${city}, ${region}`;
    } else if (region) {
      previewLocation.textContent = region;
    } else if (country) {
      previewLocation.textContent = country;
    } else {
      previewLocation.textContent = 'Location pending';
    }

    previewLookingFor.innerHTML = '';
    if (selectedIntent) {
      const chip = document.createElement('span');
      chip.textContent = selectedIntent;
      previewLookingFor.appendChild(chip);
    }

    const prompt = (promptSelect.value || '').trim();
    const answer = (promptAnswer.value || '').trim();
    previewPrompt.textContent = prompt && answer ? `${prompt} ${answer}` : 'Pick one line for your card';
  };

  const validate = () => {
    const photoCount = photos.filter(Boolean).length;
    const hasPhoto = photoCount >= 1;
    photoError.textContent = hasPhoto ? '' : 'At least one photo is needed to pin your card.';

    const intentValid = selectedIntent.length > 0;
    intentError.textContent = intentValid ? '' : 'Choose your connection intent.';

    const genderValid = selectedGender.length > 0;
    const genderCustomValid = selectedGender !== 'Self-describe'
      || (genderCustomInput.value || '').trim().length > 0;
    genderError.textContent = !genderValid
      ? 'Select your gender identity.'
      : (!genderCustomValid ? 'Add your gender identity text.' : '');

    const openValid = openTo.size >= 1;
    openToError.textContent = openValid ? '' : 'Pick who can send romantic energy.';

    const countryValid = (countryInput.value || '').trim().length > 0;
    countryError.textContent = countryValid ? '' : 'Country is required for your card.';

    const regionValid = (regionInput.value || '').trim().length > 0;
    regionError.textContent = regionValid ? '' : getRegionErrorMessage();

    const promptSelected = (promptSelect.value || '').trim().length > 0;
    const answerValid = (promptAnswer.value || '').trim().length > 0;
    promptError.textContent = promptSelected && answerValid
      ? ''
      : 'Choose one prompt and add a short answer.';

    pinBtn.disabled = !(
      hasPhoto &&
      genderValid &&
      genderCustomValid &&
      intentValid &&
      openValid &&
      countryValid &&
      regionValid &&
      promptSelected &&
      answerValid
    );
  };

  photoGrid.addEventListener('click', (event) => {
    const pick = event.target.closest('[data-pick-photo]');
    if (pick) {
      activePhotoSlot = Number.parseInt(pick.dataset.pickPhoto || '0', 10);
      photoInput.click();
      return;
    }

    const replace = event.target.closest('[data-replace-photo]');
    if (replace) {
      activePhotoSlot = Number.parseInt(replace.dataset.replacePhoto || '0', 10);
      photoInput.click();
      return;
    }

    const remove = event.target.closest('[data-remove-photo]');
    if (remove) {
      const idx = Number.parseInt(remove.dataset.removePhoto || '0', 10);
      photos[idx] = '';
      updatePhotoUi();
      validate();
      return;
    }
  });

  photoInput.addEventListener('change', () => {
    const file = photoInput.files && photoInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      photos[activePhotoSlot] = String(reader.result || '');
      updatePhotoUi();
      validate();
    };
    reader.readAsDataURL(file);
  });

  genderWrap.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-value]');
    if (!button) return;

    selectedGender = button.dataset.value || '';
    syncSingleChipGroup(genderWrap, selectedGender);

    const needsCustom = selectedGender === 'Self-describe';
    genderCustomWrap.classList.toggle('is-hidden', !needsCustom);
    if (!needsCustom) {
      genderCustomInput.value = '';
    }

    validate();
  });

  genderCustomInput.addEventListener('input', validate);

  intentWrap.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-value]');
    if (!btn) return;

    const value = btn.dataset.value || '';
    selectedIntent = value;
    syncSingleChipGroup(intentWrap, selectedIntent);
    updatePreviewText();
    validate();
  });

  openToWrap.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-value]');
    if (!btn) return;
    const value = btn.dataset.value || '';

    if (value === 'Everyone') {
      if (openTo.has('Everyone')) openTo.delete('Everyone');
      else {
        openTo.clear();
        openTo.add('Everyone');
      }
    } else if (value === 'Prefer to specify later') {
      if (openTo.has(value)) openTo.delete(value);
      else {
        openTo.clear();
        openTo.add(value);
      }
    } else {
      if (openTo.has('Everyone')) openTo.delete('Everyone');
      if (openTo.has('Prefer to specify later')) openTo.delete('Prefer to specify later');
      if (openTo.has(value)) openTo.delete(value);
      else openTo.add(value);
    }

    openNote.textContent = openTo.has('Prefer to specify later')
      ? 'No problem. You can refine this later.'
      : '';

    syncChipGroup(openToWrap, openTo);
    validate();
  });

  const updateRegionField = () => {
    const country = (countryInput.value || '').trim();
    if (country === 'Canada') {
      regionLabel.textContent = 'Province';
      regionInput.placeholder = 'Select province';
      return;
    }

    if (country === 'Other / Not listed yet') {
      regionLabel.textContent = 'Region';
      regionInput.placeholder = 'Region';
      return;
    }

    regionLabel.textContent = 'State';
    regionInput.placeholder = 'Select state';
  };

  const getRegionErrorMessage = () => {
    const country = (countryInput.value || '').trim();
    if (country === 'Other / Not listed yet') return 'Region is required for your card.';
    if (country === 'Canada') return 'Province is required for your card.';
    return 'State is required for your card.';
  };

  countryInput.addEventListener('change', () => {
    updateRegionField();
    updatePreviewText();
    validate();
  });

  regionInput.addEventListener('input', () => {
    updatePreviewText();
    validate();
  });

  cityInput.addEventListener('input', () => {
    updatePreviewText();
  });

  promptSelect.addEventListener('change', () => {
    updatePreviewText();
    validate();
  });

  promptAnswer.addEventListener('input', () => {
    const length = promptAnswer.value.length;
    promptCount.textContent = `${length}/120`;
    promptCount.classList.toggle('is-max', length >= 120);
    updatePreviewText();
    validate();
  });

  pinBtn.addEventListener('click', () => {
    if (pinBtn.disabled) return;

    const payload = {
      datingCardActive: true,
      datingCardPinned: true,
      datingCardPhotos: photos.filter(Boolean),
      genderIdentity: selectedGender,
      genderIdentityCustom: selectedGender === 'Self-describe'
        ? (genderCustomInput.value || '').trim()
        : '',
      connectionIntent: selectedIntent,
      openToLongDistance: Boolean(longDistanceInput.checked),
      openToMeeting: Array.from(openTo),
      country: (countryInput.value || '').trim(),
      stateProvinceRegion: (regionInput.value || '').trim(),
      city: (cityInput.value || '').trim(),
      selectedPrompt: promptSelect.value,
      promptAnswer: (promptAnswer.value || '').trim(),
    };

    try {
      sessionStorage.setItem('lb_dating_card_active', 'true');
      sessionStorage.setItem('lb_dating_card_pinned', 'true');
      sessionStorage.setItem('lb_dating_card', JSON.stringify(payload));
    } catch (error) {
      // Ignore storage issues for prototype flow.
    }

    window.location.href = './signup-step6-youre-in.html';
  });

  backBtn.addEventListener('click', () => {
    window.location.href = './signup-step2.html';
  });

  updateRegionField();
  updatePhotoUi();
  updatePreviewText();
  validate();
})();

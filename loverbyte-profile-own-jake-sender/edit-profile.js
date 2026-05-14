(() => {
  const form = document.getElementById('editProfileForm');
  if (!form) return;

  const saveButton = document.querySelector('[data-edit-save]');
  const backButton = document.querySelector('[data-edit-back]');
  const statusLine = document.querySelector('[data-form-status]');

  const photoInput = document.querySelector('[data-photo-input]');
  const changePhotoButton = document.querySelector('[data-change-photo]');
  const removePhotoButton = document.querySelector('[data-remove-photo]');
  const photoPreview = document.querySelector('[data-profile-photo-preview]');
  const photoFallback = document.querySelector('[data-profile-photo-fallback]');

  const pronounsSelect = document.getElementById('pronounsSelect');
  const pronounsCustomWrap = document.querySelector('[data-pronouns-custom-wrap]');
  const pronounsCustomInput = document.getElementById('pronounsCustomInput');

  const genderSelect = document.getElementById('genderSelect');
  const genderCustomWrap = document.querySelector('[data-gender-custom-wrap]');
  const genderCustomInput = document.getElementById('genderCustomInput');

  const showAgeToggle = document.getElementById('showAgeToggle');
  const agePreview = document.querySelector('[data-age-preview]');
  const ageBandPreview = document.querySelector('[data-age-band-preview]');

  const displayNameInput = document.getElementById('displayNameInput');
  const bioInput = document.getElementById('bioInput');
  const occupationInput = document.getElementById('occupationInput');

  const displayNameMeta = document.querySelector('[data-display-name-meta]');
  const bioMeta = document.querySelector('[data-bio-meta]');
  const occupationMeta = document.querySelector('[data-occupation-meta]');

  const datingCardBody = document.querySelector('[data-dating-card-body]');

  const connectLinkUrlInput = document.getElementById('connectLinkUrlInput');
  const cashAppTipInput = document.getElementById('cashAppTipInput');
  const venmoTipInput = document.getElementById('venmoTipInput');
  const paypalTipInput = document.getElementById('paypalTipInput');
  const connectLinkError = document.querySelector('[data-error-for="connectLinkUrl"]');
  const cashAppTipError = document.querySelector('[data-error-for="cashAppLinkOrHandle"]');
  const venmoTipError = document.querySelector('[data-error-for="venmoLinkOrHandle"]');
  const paypalTipError = document.querySelector('[data-error-for="paypalLink"]');

  const STORAGE_KEY = 'lb_profile_edit_data_jake';
  const defaultState = {
    profilePhotoDataUrl: '',
    displayName: 'Jake',
    username: '@jakegymienerd',
    pronouns: 'he_him',
    pronounsCustom: '',
    gender: 'man',
    genderCustom: '',
    ageBand: '30s',
    showAgeRange: true,
    bio: 'Equal parts gym playlist, late-night questions, and "say what you mean." I\'m here for chemistry that can survive daylight. Let\'s go 😤',
    occupation: 'Principal Software Engineer',
    showOccupation: true,
    connectLinkLabel: 'Website',
    connectLinkUrl: 'https://loverbyte.app',
    cashAppLinkOrHandle: '',
    venmoLinkOrHandle: '',
    paypalLink: '',
    datingCardActive: false,
    romanticallyOpen: false,
    showDatingCardOnProfile: true,
  };

  const pronounsLabelByValue = {
    she_her: 'She/her',
    he_him: 'He/him',
    they_them: 'They/them',
    she_they: 'She/they',
    he_they: 'He/they',
    any: 'Any pronouns',
    self_describe: 'Self-describe',
    prefer_not: 'Prefer not to say',
  };

  const genderLabelByValue = {
    woman: 'Woman',
    man: 'Man',
    nonbinary: 'Nonbinary',
    trans_woman: 'Trans woman',
    trans_man: 'Trans man',
    genderqueer_fluid: 'Genderqueer / gender-fluid',
    self_describe: 'Self-describe',
    prefer_not: 'Prefer not to say',
  };

  const cloneState = (value) => JSON.parse(JSON.stringify(value));
  const normalizeText = (value) => String(value || '').trim();

  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return cloneState(defaultState);
      const parsed = JSON.parse(raw);
      return {
        ...cloneState(defaultState),
        ...parsed,
      };
    } catch (error) {
      console.warn('Loverbyte Edit Profile: failed to load saved state.', error);
      return cloneState(defaultState);
    }
  };

  let initialState = loadState();
  if (!normalizeText(initialState.connectLinkLabel) && normalizeText(initialState.mainLinkLabel)) {
    initialState.connectLinkLabel = normalizeText(initialState.mainLinkLabel);
  }
  if (!normalizeText(initialState.connectLinkUrl) && normalizeText(initialState.mainLinkUrl)) {
    initialState.connectLinkUrl = normalizeText(initialState.mainLinkUrl);
  }
  let draftState = cloneState(initialState);

  const updateTextCounter = (input, target, max) => {
    if (!input || !target) return;
    target.textContent = `${input.value.length}/${max}`;
  };

  const isValidHttpUrl = (value) => {
    if (!value) return true;
    return /^https?:\/\//i.test(value);
  };

  const isValidCashAppValue = (value) => {
    const input = normalizeText(value);
    if (!input) return true;
    if (input.startsWith('$')) {
      return /^\$[A-Za-z0-9._-]+$/.test(input);
    }
    if (!isValidHttpUrl(input)) return false;
    try {
      const parsed = new URL(input);
      const host = String(parsed.hostname || '').toLowerCase().replace(/^www\./, '');
      return host === 'cash.app' || host.endsWith('.cash.app') || host === 'cashapp.com' || host.endsWith('.cashapp.com');
    } catch (error) {
      return false;
    }
  };

  const isValidVenmoValue = (value) => {
    const input = normalizeText(value);
    if (!input) return true;
    if (input.startsWith('@')) {
      return /^@[A-Za-z0-9._-]+$/.test(input);
    }
    if (!isValidHttpUrl(input)) return false;
    try {
      const parsed = new URL(input);
      const host = String(parsed.hostname || '').toLowerCase().replace(/^www\./, '');
      return host === 'venmo.com' || host.endsWith('.venmo.com');
    } catch (error) {
      return false;
    }
  };

  const isValidPayPalValue = (value) => {
    const input = normalizeText(value);
    if (!input) return true;
    if (!isValidHttpUrl(input)) return false;
    try {
      const parsed = new URL(input);
      const host = String(parsed.hostname || '').toLowerCase().replace(/^www\./, '');
      if (host === 'paypal.me' || host.endsWith('.paypal.me')) return true;
      if (host === 'paypal.com' || host.endsWith('.paypal.com')) {
        const path = String(parsed.pathname || '').toLowerCase();
        return path.startsWith('/paypalme');
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const updatePhotoPreview = () => {
    if (!photoPreview || !photoFallback) return;

    if (draftState.profilePhotoDataUrl) {
      photoPreview.src = draftState.profilePhotoDataUrl;
      photoPreview.hidden = false;
      photoFallback.hidden = true;
      return;
    }

    const initials = (draftState.displayName || 'CO')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();

    photoFallback.textContent = initials || 'CO';
    photoPreview.hidden = true;
    photoFallback.hidden = false;
  };

  const syncSelfDescribeFields = () => {
    const pronounsNeedsCustom = pronounsSelect?.value === 'self_describe';
    const genderNeedsCustom = genderSelect?.value === 'self_describe';

    if (pronounsCustomWrap) pronounsCustomWrap.hidden = !pronounsNeedsCustom;
    if (genderCustomWrap) genderCustomWrap.hidden = !genderNeedsCustom;

    if (!pronounsNeedsCustom && pronounsCustomInput) {
      pronounsCustomInput.value = '';
      draftState.pronounsCustom = '';
    }

    if (!genderNeedsCustom && genderCustomInput) {
      genderCustomInput.value = '';
      draftState.genderCustom = '';
    }
  };

  const syncAgePreview = () => {
    if (!agePreview || !ageBandPreview) return;
    const showPreview = Boolean(draftState.showAgeRange);
    ageBandPreview.textContent = draftState.ageBand || '30s';
    agePreview.hidden = !showPreview;
  };

  const renderDatingCardModule = () => {
    if (!datingCardBody) return;

    if (!(draftState.datingCardActive && draftState.romanticallyOpen)) {
      datingCardBody.innerHTML = `
        <article class="lb-dating-cardStatus" data-dating-module-state="inactive">
          <span class="lb-dating-pill">Not active yet</span>
          <h3>Dating Card</h3>
          <p>Turn this on when you want people to know you’re open before they send a Crush.</p>
          <div class="lb-dating-cardStatus__actions">
            <button class="lb-btn lb-btn--glass" type="button" data-dating-action="turn-on">Turn On Dating Card</button>
          </div>
        </article>
      `;
      return;
    }

    const checked = draftState.showDatingCardOnProfile ? 'checked' : '';
    datingCardBody.innerHTML = `
      <article class="lb-dating-cardStatus" data-dating-module-state="active">
        <span class="lb-dating-pill">Pinned to your profile</span>
        <h3>Dating Card</h3>
        <p>Update the card people see before they send a Crush.</p>
        <div class="lb-dating-cardStatus__actions">
          <button class="lb-btn lb-btn--glass" type="button" data-dating-action="edit-card">Edit Dating Card</button>
          <button class="lb-btn lb-btn--ghost" type="button" data-dating-action="unpin-card">Unpin Dating Card</button>
        </div>
        <label class="lb-toggleRow" for="showDatingCardToggle">
          <span>Show Dating Card on profile</span>
          <span class="lb-toggle">
            <input id="showDatingCardToggle" type="checkbox" data-field="showDatingCardOnProfile" ${checked} />
            <span class="lb-toggle__ui" aria-hidden="true"></span>
          </span>
        </label>
      </article>
    `;
  };

  const clearFieldErrors = () => {
    [displayNameInput, pronounsCustomInput, genderCustomInput, connectLinkUrlInput, cashAppTipInput, venmoTipInput, paypalTipInput].forEach((field) => {
      field?.classList.remove('is-invalid');
    });

    if (connectLinkError) connectLinkError.textContent = '';
    if (cashAppTipError) cashAppTipError.textContent = '';
    if (venmoTipError) venmoTipError.textContent = '';
    if (paypalTipError) paypalTipError.textContent = '';
    if (statusLine) statusLine.textContent = '';
  };

  const validateDraft = () => {
    clearFieldErrors();

    const errors = [];

    if (!normalizeText(draftState.displayName)) {
      errors.push('Display Name is required.');
      displayNameInput?.classList.add('is-invalid');
    }

    if (normalizeText(draftState.displayName).length > 40) {
      errors.push('Display Name must be 40 characters or fewer.');
      displayNameInput?.classList.add('is-invalid');
    }

    if (normalizeText(draftState.bio).length > 180) {
      errors.push('Bio must be 180 characters or fewer.');
      bioInput?.classList.add('is-invalid');
    }

    if (normalizeText(draftState.occupation).length > 60) {
      errors.push('Occupation must be 60 characters or fewer.');
      occupationInput?.classList.add('is-invalid');
    }

    if (draftState.pronouns === 'self_describe' && !normalizeText(draftState.pronounsCustom)) {
      errors.push('Add your self-described pronouns or choose another option.');
      pronounsCustomInput?.classList.add('is-invalid');
    }

    if (draftState.gender === 'self_describe' && !normalizeText(draftState.genderCustom)) {
      errors.push('Add your self-described gender or choose another option.');
      genderCustomInput?.classList.add('is-invalid');
    }

    if (!isValidHttpUrl(normalizeText(draftState.connectLinkUrl))) {
      errors.push('Enter a valid link.');
      connectLinkUrlInput?.classList.add('is-invalid');
      if (connectLinkError) connectLinkError.textContent = 'Enter a valid link.';
    }

    if (!isValidCashAppValue(draftState.cashAppLinkOrHandle)) {
      errors.push("That doesn't look like a Cash App link.");
      cashAppTipInput?.classList.add('is-invalid');
      if (cashAppTipError) cashAppTipError.textContent = "That doesn't look like a Cash App link.";
    }

    if (!isValidVenmoValue(draftState.venmoLinkOrHandle)) {
      errors.push("That doesn't look like a Venmo link.");
      venmoTipInput?.classList.add('is-invalid');
      if (venmoTipError) venmoTipError.textContent = "That doesn't look like a Venmo link.";
    }

    if (!isValidPayPalValue(draftState.paypalLink)) {
      errors.push("That doesn't look like a PayPal link.");
      paypalTipInput?.classList.add('is-invalid');
      if (paypalTipError) paypalTipError.textContent = "That doesn't look like a PayPal link.";
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  };

  const sanitizeForCompare = (state) => ({
    ...state,
    displayName: normalizeText(state.displayName),
    username: normalizeText(state.username),
    pronouns: String(state.pronouns || ''),
    pronounsCustom: normalizeText(state.pronounsCustom),
    gender: String(state.gender || ''),
    genderCustom: normalizeText(state.genderCustom),
    bio: normalizeText(state.bio),
    occupation: normalizeText(state.occupation),
    connectLinkLabel: normalizeText(state.connectLinkLabel),
    connectLinkUrl: normalizeText(state.connectLinkUrl),
    cashAppLinkOrHandle: normalizeText(state.cashAppLinkOrHandle),
    venmoLinkOrHandle: normalizeText(state.venmoLinkOrHandle),
    paypalLink: normalizeText(state.paypalLink),
  });

  const isDirty = () => {
    const before = JSON.stringify(sanitizeForCompare(initialState));
    const after = JSON.stringify(sanitizeForCompare(draftState));
    return before !== after;
  };

  const syncSaveState = () => {
    const validation = validateDraft();
    if (!saveButton) return;
    saveButton.disabled = !isDirty() || !validation.valid;
  };

  const applyStateToForm = () => {
    const fieldMap = {
      displayName: displayNameInput,
      username: form.querySelector('[data-field="username"]'),
      bio: bioInput,
      pronouns: pronounsSelect,
      pronounsCustom: pronounsCustomInput,
      gender: genderSelect,
      genderCustom: genderCustomInput,
      showAgeRange: showAgeToggle,
      occupation: occupationInput,
      showOccupation: document.querySelector('[data-field="showOccupation"]'),
      connectLinkLabel: document.querySelector('[data-field="connectLinkLabel"]'),
      connectLinkUrl: connectLinkUrlInput,
      cashAppLinkOrHandle: cashAppTipInput,
      venmoLinkOrHandle: venmoTipInput,
      paypalLink: paypalTipInput,
    };

    Object.entries(fieldMap).forEach(([key, element]) => {
      if (!element) return;
      if (element.type === 'checkbox') {
        element.checked = Boolean(draftState[key]);
      } else {
        element.value = String(draftState[key] ?? '');
      }
    });

    updatePhotoPreview();
    syncSelfDescribeFields();
    syncAgePreview();
    renderDatingCardModule();

    updateTextCounter(displayNameInput, displayNameMeta, 40);
    updateTextCounter(bioInput, bioMeta, 180);
    updateTextCounter(occupationInput, occupationMeta, 60);
    syncSaveState();
  };

  const writeDraftFromForm = () => {
    draftState.displayName = String(displayNameInput?.value || '');
    draftState.bio = String(bioInput?.value || '');
    draftState.pronouns = String(pronounsSelect?.value || '');
    draftState.pronounsCustom = String(pronounsCustomInput?.value || '');
    draftState.gender = String(genderSelect?.value || '');
    draftState.genderCustom = String(genderCustomInput?.value || '');
    draftState.showAgeRange = Boolean(showAgeToggle?.checked);
    draftState.occupation = String(occupationInput?.value || '');

    const showOccupationInput = document.querySelector('[data-field="showOccupation"]');
    draftState.showOccupation = Boolean(showOccupationInput?.checked);

    const connectLinkLabelInput = document.querySelector('[data-field="connectLinkLabel"]');

    draftState.connectLinkLabel = String(connectLinkLabelInput?.value || '');
    draftState.connectLinkUrl = String(connectLinkUrlInput?.value || '');
    draftState.cashAppLinkOrHandle = String(cashAppTipInput?.value || '');
    draftState.venmoLinkOrHandle = String(venmoTipInput?.value || '');
    draftState.paypalLink = String(paypalTipInput?.value || '');

    const showDatingCardInput = document.querySelector('[data-field="showDatingCardOnProfile"]');
    if (showDatingCardInput) {
      draftState.showDatingCardOnProfile = Boolean(showDatingCardInput.checked);
    }
  };

  const persistState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draftState));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draftState));

    localStorage.setItem('lb_display_name', normalizeText(draftState.displayName));
    localStorage.setItem('lb_short_bio', normalizeText(draftState.bio));
    localStorage.setItem('lb_pronouns', draftState.pronouns === 'self_describe' ? normalizeText(draftState.pronounsCustom) : (pronounsLabelByValue[draftState.pronouns] || ''));

    sessionStorage.setItem('lb_display_name', normalizeText(draftState.displayName));
    sessionStorage.setItem('lb_short_bio', normalizeText(draftState.bio));
    sessionStorage.setItem('lb_pronouns', draftState.pronouns === 'self_describe' ? normalizeText(draftState.pronounsCustom) : (pronounsLabelByValue[draftState.pronouns] || ''));
  };

  const showStatus = (message) => {
    if (!statusLine) return;
    statusLine.textContent = message;
  };

  form.addEventListener('input', () => {
    writeDraftFromForm();
    updatePhotoPreview();

    updateTextCounter(displayNameInput, displayNameMeta, 40);
    updateTextCounter(bioInput, bioMeta, 180);
    updateTextCounter(occupationInput, occupationMeta, 60);

    syncSaveState();
  });

  form.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target === pronounsSelect || target === genderSelect) {
      writeDraftFromForm();
      syncSelfDescribeFields();
      syncSaveState();
      return;
    }

    if (target === showAgeToggle) {
      writeDraftFromForm();
      syncAgePreview();
      syncSaveState();
      return;
    }

    if (target.matches('[data-field="showDatingCardOnProfile"]')) {
      writeDraftFromForm();
      syncSaveState();
      return;
    }

    writeDraftFromForm();
    syncSaveState();
  });

  changePhotoButton?.addEventListener('click', () => {
    photoInput?.click();
  });

  photoInput?.addEventListener('change', () => {
    const file = photoInput.files?.[0];
    if (!file) return;

    const fileType = String(file.type || '').toLowerCase();
    if (!fileType.startsWith('image/')) {
      showStatus('Images only for profile photo.');
      photoInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      draftState.profilePhotoDataUrl = String(reader.result || '');
      photoInput.value = '';
      updatePhotoPreview();
      syncSaveState();
      showStatus('Photo updated. Save to apply.');
    };
    reader.readAsDataURL(file);
  });

  removePhotoButton?.addEventListener('click', () => {
    draftState.profilePhotoDataUrl = '';
    updatePhotoPreview();
    syncSaveState();
    showStatus('Photo removed. Save to apply.');
  });

  datingCardBody?.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-dating-action]');
    if (!actionButton) return;

    const action = actionButton.dataset.datingAction;

    if (action === 'turn-on') {
      showStatus('TODO: Route to Dating Card setup flow.');
      return;
    }

    if (action === 'edit-card') {
      showStatus('TODO: Route to Dating Card edit flow.');
      return;
    }

    if (action === 'unpin-card') {
      draftState.showDatingCardOnProfile = false;
      const toggle = datingCardBody.querySelector('[data-field="showDatingCardOnProfile"]');
      if (toggle) toggle.checked = false;
      syncSaveState();
      showStatus('Dating Card unpinned. Save to apply.');
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    writeDraftFromForm();

    const validation = validateDraft();
    if (!validation.valid) {
      showStatus(validation.errors[0] || 'Please fix the highlighted fields.');
      syncSaveState();
      return;
    }

    persistState();
    initialState = cloneState(draftState);
    syncSaveState();
    showStatus('Profile changes saved.');
  });

  backButton?.addEventListener('click', () => {
    window.location.href = './profile-own.html';
  });

  const attachDirtyNavigationWarning = () => {
    window.addEventListener('beforeunload', (event) => {
      if (!isDirty()) return;
      event.preventDefault();
      event.returnValue = '';
    });
  };

  attachDirtyNavigationWarning();
  applyStateToForm();

  const genderOptionValue = String(draftState.gender || '');
  if (!genderLabelByValue[genderOptionValue] && genderOptionValue) {
    draftState.gender = 'self_describe';
    draftState.genderCustom = draftState.genderCustom || genderOptionValue;
    applyStateToForm();
  }
})();

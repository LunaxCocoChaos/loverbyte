(() => {
  const displayNameInput = document.querySelector('[data-display-name]');
  const usernameInput = document.querySelector('[data-username]');
  const birthdateInput = document.querySelector('[data-birthdate]');
  const displayError = document.querySelector('[data-display-error]');
  const usernameError = document.querySelector('[data-username-error]');
  const birthdateError = document.querySelector('[data-birthdate-error]');
  const usernameStatus = document.querySelector('[data-username-status]');
  const suggestionsWrap = document.querySelector('[data-suggestions-wrap]');
  const suggestionsContainer = document.querySelector('[data-suggestions]');
  const continueButton = document.querySelector('[data-continue]');

  if (
    !displayNameInput ||
    !usernameInput ||
    !birthdateInput ||
    !displayError ||
    !usernameError ||
    !birthdateError ||
    !usernameStatus ||
    !suggestionsWrap ||
    !suggestionsContainer ||
    !continueButton
  ) {
    return;
  }

  const USERNAME_MIN = 3;
  const USERNAME_MAX = 20;
  const USERNAME_PATTERN = /^[a-z0-9_]+$/;

  const reservedUsernames = new Set([
    'admin', 'support', 'loverbyte', 'luna', 'moderator', 'settings', 'api', 'root',
    'system', 'official', 'team', 'creator', 'onboarding', 'null', 'undefined',
  ]);

  const defaultTakenUsernames = [
    'nina', 'mia', 'omar', 'kiara', 'jamal', 'jessica', 'michael', 'mei', 'carlos',
    'love', 'crush', 'dating', 'single', 'roomcheck', 'profile',
  ];

  let touchedDisplayName = false;
  let touchedUsername = false;
  let touchedBirthdate = false;
  let usernameAvailability = null;
  let latestAvailabilityRequestId = 0;
  let checkDebounceTimer = null;

  const loadClaimedUsernames = () => {
    try {
      const raw = localStorage.getItem('lb_claimed_usernames');
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return new Set(defaultTakenUsernames);
      const normalized = parsed
        .map((value) => String(value || '').trim().toLowerCase())
        .filter(Boolean);
      return new Set([...defaultTakenUsernames, ...normalized]);
    } catch (error) {
      return new Set(defaultTakenUsernames);
    }
  };

  const claimedUsernames = loadClaimedUsernames();

  const setStatus = (message, state = '') => {
    usernameStatus.textContent = message;
    usernameStatus.classList.remove('is-checking', 'is-ok', 'is-taken', 'is-error');
    if (state) {
      usernameStatus.classList.add(state);
    }
  };

  const normalizeUsername = (value) => String(value || '').trim().toLowerCase();

  const validateDisplayName = () => {
    const value = (displayNameInput.value || '').trim();
    if (!value) {
      displayError.textContent = touchedDisplayName ? 'Add the name you want shown in the room.' : '';
      return false;
    }

    if (value.length < 2) {
      displayError.textContent = 'Use at least 2 characters so people can read your name.';
      return false;
    }

    displayError.textContent = '';
    return true;
  };

  const validateUsernameFormat = () => {
    const value = normalizeUsername(usernameInput.value);
    usernameInput.value = value;

    if (!value) {
      usernameError.textContent = touchedUsername ? 'Pick a username so people can find you.' : '';
      setStatus('Choose a username to check availability.');
      return false;
    }

    if (value.length < USERNAME_MIN || value.length > USERNAME_MAX) {
      usernameError.textContent = `Usernames must be ${USERNAME_MIN}-${USERNAME_MAX} characters.`;
      setStatus('Username needs a valid length.', 'is-error');
      return false;
    }

    if (!USERNAME_PATTERN.test(value)) {
      usernameError.textContent = 'Use lowercase letters, numbers, or underscores only.';
      setStatus('Only lowercase letters, numbers, and underscore are allowed.', 'is-error');
      return false;
    }

    usernameError.textContent = '';
    return true;
  };

  const getAgeFromBirthdate = (birthdateValue) => {
    if (!birthdateValue) return null;
    const [year, month, day] = String(birthdateValue).split('-').map((part) => Number.parseInt(part, 10));
    if (!year || !month || !day) return null;

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    if (Number.isNaN(birthDate.getTime())) return null;

    let age = today.getFullYear() - year;
    const hasHadBirthdayThisYear = (
      today.getMonth() > birthDate.getMonth()
      || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
    );
    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    return age;
  };

  const validateBirthdate = () => {
    const rawValue = (birthdateInput.value || '').trim();
    const todayIso = new Date().toISOString().slice(0, 10);
    const computedAge = getAgeFromBirthdate(rawValue);

    if (!rawValue) {
      birthdateError.textContent = touchedBirthdate ? 'Add your birthdate so we can keep the room 18+.' : '';
      return false;
    }

    if (rawValue > todayIso) {
      birthdateError.textContent = 'Birthdate can’t be in the future.';
      return false;
    }

    if (!Number.isFinite(computedAge)) {
      birthdateError.textContent = 'Enter a valid birthdate.';
      return false;
    }

    if (computedAge < 18) {
      birthdateError.textContent = 'Loverbyte is 18+ only.';
      return false;
    }

    if (computedAge > 120) {
      birthdateError.textContent = 'Enter a valid birthdate.';
      return false;
    }

    birthdateError.textContent = '';
    return true;
  };

  const generateSuggestions = (baseInput) => {
    const cleanedBase = normalizeUsername(baseInput).replace(/[^a-z0-9_]/g, '');
    const fallbackBase = cleanedBase || 'lover';
    const todaySuffix = String(new Date().getFullYear()).slice(-2);
    const candidatePool = [
      `${fallbackBase}_lb`,
      `${fallbackBase}${todaySuffix}`,
      `${fallbackBase}_room`,
      `${fallbackBase}_talk`,
      `${fallbackBase}_tea`,
      `${fallbackBase}_signals`,
      `${fallbackBase}_vibe`,
      `${fallbackBase}_real`,
    ];

    const suggestions = [];
    for (const candidate of candidatePool) {
      const normalizedCandidate = normalizeUsername(candidate).slice(0, USERNAME_MAX);
      if (
        normalizedCandidate.length >= USERNAME_MIN &&
        USERNAME_PATTERN.test(normalizedCandidate) &&
        !reservedUsernames.has(normalizedCandidate) &&
        !claimedUsernames.has(normalizedCandidate) &&
        !suggestions.includes(normalizedCandidate)
      ) {
        suggestions.push(normalizedCandidate);
      }

      if (suggestions.length >= 4) break;
    }

    if (!suggestions.length) {
      const randomSeed = Math.floor(Math.random() * 900 + 100);
      suggestions.push(`lover_${randomSeed}`);
    }

    return suggestions;
  };

  const renderSuggestions = (sourceUsername) => {
    const suggestions = generateSuggestions(sourceUsername);
    suggestionsContainer.innerHTML = '';

    suggestions.forEach((suggestion) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'lb-signup-id__suggestChip';
      chip.textContent = `@${suggestion}`;
      chip.addEventListener('click', () => {
        usernameInput.value = suggestion;
        touchedUsername = true;
        suggestionsWrap.hidden = true;
        runUsernameCheck(true);
      });
      suggestionsContainer.appendChild(chip);
    });

    suggestionsWrap.hidden = false;
  };

  const checkAvailabilityAsync = async (username, requestId) => {
    setStatus('Checking availability…', 'is-checking');

    await new Promise((resolve) => {
      window.setTimeout(resolve, 260 + Math.floor(Math.random() * 220));
    });

    if (requestId !== latestAvailabilityRequestId) return;

    const isReserved = reservedUsernames.has(username);
    const isClaimed = claimedUsernames.has(username);

    if (isReserved || isClaimed) {
      usernameAvailability = false;
      setStatus(`@${username} is taken. Try a fresh variation.`, 'is-taken');
      renderSuggestions(username);
      updateContinueState();
      return;
    }

    usernameAvailability = true;
    suggestionsWrap.hidden = true;
    setStatus(`@${username} is available.`, 'is-ok');
    updateContinueState();
  };

  const runUsernameCheck = (immediate = false) => {
    usernameAvailability = null;
    updateContinueState();

    if (!validateUsernameFormat()) {
      suggestionsWrap.hidden = true;
      return;
    }

    if (checkDebounceTimer) {
      window.clearTimeout(checkDebounceTimer);
      checkDebounceTimer = null;
    }

    const username = normalizeUsername(usernameInput.value);
    latestAvailabilityRequestId += 1;
    const requestId = latestAvailabilityRequestId;

    const executeCheck = () => {
      void checkAvailabilityAsync(username, requestId);
    };

    if (immediate) {
      executeCheck();
      return;
    }

    checkDebounceTimer = window.setTimeout(executeCheck, 260);
  };

  const updateContinueState = () => {
    const displayNameValid = validateDisplayName();
    const usernameFormatValid = validateUsernameFormat();
    const birthdateValid = validateBirthdate();
    const usernameIsAvailable = usernameAvailability === true;

    continueButton.disabled = !(displayNameValid && usernameFormatValid && usernameIsAvailable && birthdateValid);
  };

  displayNameInput.addEventListener('blur', () => {
    touchedDisplayName = true;
    validateDisplayName();
    updateContinueState();
  });

  displayNameInput.addEventListener('input', () => {
    touchedDisplayName = true;
    validateDisplayName();
    updateContinueState();
  });

  usernameInput.addEventListener('blur', () => {
    touchedUsername = true;
    runUsernameCheck(true);
  });

  usernameInput.addEventListener('input', () => {
    touchedUsername = true;
    usernameAvailability = null;
    setStatus('Checking will run as you type…');
    runUsernameCheck(false);
  });

  birthdateInput.addEventListener('blur', () => {
    touchedBirthdate = true;
    validateBirthdate();
    updateContinueState();
  });

  birthdateInput.addEventListener('input', () => {
    touchedBirthdate = true;
    validateBirthdate();
    updateContinueState();
  });

  continueButton.addEventListener('click', () => {
    touchedDisplayName = true;
    touchedUsername = true;
    touchedBirthdate = true;

    const displayNameValid = validateDisplayName();
    const usernameFormatValid = validateUsernameFormat();
    const birthdateValid = validateBirthdate();
    const usernameIsAvailable = usernameAvailability === true;

    if (!(displayNameValid && usernameFormatValid && birthdateValid && usernameIsAvailable)) {
      updateContinueState();
      if (!usernameIsAvailable && usernameFormatValid) {
        runUsernameCheck(true);
      }
      return;
    }

    const birthdate = (birthdateInput.value || '').trim();
    const age = getAgeFromBirthdate(birthdate);

    const profileIdentity = {
      displayName: (displayNameInput.value || '').trim(),
      username: normalizeUsername(usernameInput.value),
      birthdate,
      age,
    };

    claimedUsernames.add(profileIdentity.username);

    try {
      localStorage.setItem('lb_claimed_usernames', JSON.stringify(Array.from(claimedUsernames)));
      sessionStorage.setItem('lb_display_name', profileIdentity.displayName);
      sessionStorage.setItem('lb_username', profileIdentity.username);
      sessionStorage.setItem('lb_age', String(profileIdentity.age));
      sessionStorage.setItem('lb_birthdate', profileIdentity.birthdate);
      sessionStorage.setItem('lb_identity', JSON.stringify(profileIdentity));
    } catch (error) {
      // Ignore storage issues for prototype flow.
    }

    window.location.href = './signup-step1.html';
  });

  setStatus('Choose a username to check availability.');
  const todayIso = new Date().toISOString().slice(0, 10);
  birthdateInput.setAttribute('max', todayIso);
  updateContinueState();
})();

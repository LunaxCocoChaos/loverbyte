(() => {
  const bioInput = document.querySelector('[data-bio]');
  const locationInput = document.querySelector('[data-location]');
  const ageDisplayInput = document.querySelector('[data-age-display]');
  const continueBtn = document.querySelector('[data-continue]');
  const bioCount = document.querySelector('[data-bio-count]');
  const bioError = document.querySelector('[data-bio-error]');

  const photoInput = document.querySelector('[data-photo-input]');
  const addPhotoBtn = document.querySelector('[data-add-photo]');
  const skipPhotoBtn = document.querySelector('[data-skip-photo]');
  const removePhotoBtn = document.querySelector('[data-remove-photo]');
  const avatarWrap = document.querySelector('[data-avatar-wrap]');
  const avatarImg = document.querySelector('[data-avatar]');

  if (!bioInput || !locationInput || !ageDisplayInput || !continueBtn || !bioCount || !bioError || !photoInput || !addPhotoBtn || !skipPhotoBtn || !removePhotoBtn || !avatarWrap || !avatarImg) {
    return;
  }

  const bioPlaceholders = [
    'Pop culture brain, soft heart, strong opinions.',
    'Here for good takes, better flirting, and fewer red flags.',
    'Mostly healed. Still nosey.',
    'Laughs at dating chaos, learns from it occasionally.',
  ];

  let placeholderIndex = Math.floor(Math.random() * bioPlaceholders.length);
  let bioFocused = false;
  let selectedPhotoData = '';
  let touchedBio = false;
  const DEFAULT_AVATARS = {
    female: './assets/default-avatar-female-neon.png',
    male: './assets/default-avatar-male-neon.png',
  };

  const hashString = (value) => {
    let hash = 0;
    const input = String(value || '');
    for (let index = 0; index < input.length; index += 1) {
      hash = ((hash << 5) - hash) + input.charCodeAt(index);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const resolveDefaultAvatarVariant = () => {
    const storedVariant = sessionStorage.getItem('lb_default_avatar_variant');
    if (storedVariant === 'female' || storedVariant === 'male') {
      return storedVariant;
    }

    const genderIdentity = (
      sessionStorage.getItem('lb_gender_identity')
      || sessionStorage.getItem('lb_dating_gender_identity')
      || ''
    ).toLowerCase();

    if (genderIdentity.includes('woman') || genderIdentity.includes('female')) {
      sessionStorage.setItem('lb_default_avatar_variant', 'female');
      return 'female';
    }

    if (genderIdentity.includes('man') || genderIdentity.includes('male')) {
      sessionStorage.setItem('lb_default_avatar_variant', 'male');
      return 'male';
    }

    const seed = (
      sessionStorage.getItem('lb_username')
      || sessionStorage.getItem('lb_display_name')
      || String(Date.now())
    );
    const fallbackVariant = hashString(seed) % 2 === 0 ? 'female' : 'male';
    sessionStorage.setItem('lb_default_avatar_variant', fallbackVariant);
    return fallbackVariant;
  };

  const defaultAvatarVariant = resolveDefaultAvatarVariant();
  const defaultAvatarSrc = DEFAULT_AVATARS[defaultAvatarVariant];

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
    if (!hasHadBirthdayThisYear) age -= 1;
    return age;
  };

  const hydrateAgeDisplay = () => {
    const storedAge = Number.parseInt(sessionStorage.getItem('lb_age') || '', 10);
    const birthdate = sessionStorage.getItem('lb_birthdate') || '';
    const computedAge = Number.isFinite(storedAge) ? storedAge : getAgeFromBirthdate(birthdate);
    ageDisplayInput.value = Number.isFinite(computedAge) ? String(computedAge) : '18+';
  };

  bioInput.placeholder = bioPlaceholders[placeholderIndex];

  setInterval(() => {
    if (bioFocused) return;
    if ((bioInput.value || '').trim().length > 0) return;
    placeholderIndex = (placeholderIndex + 1) % bioPlaceholders.length;
    bioInput.placeholder = bioPlaceholders[placeholderIndex];
  }, 4200);

  const setPhotoState = (dataUrl = '') => {
    selectedPhotoData = dataUrl;

    if (dataUrl) {
      avatarImg.src = dataUrl;
      avatarWrap.classList.add('has-photo');
      avatarWrap.classList.remove('has-default-avatar');
      removePhotoBtn.classList.remove('is-hidden');
      return;
    }

    avatarImg.src = defaultAvatarSrc;
    avatarWrap.classList.remove('has-photo');
    avatarWrap.classList.add('has-default-avatar');
    removePhotoBtn.classList.add('is-hidden');
    photoInput.value = '';
  };

  const validateBio = () => {
    const value = (bioInput.value || '').trim();
    if (!value) {
      if (touchedBio) bioError.textContent = 'Drop a quick line so the room can place you.';
      else bioError.textContent = '';
      return false;
    }

    bioError.textContent = '';
    return true;
  };

  const updateCount = () => {
    const count = bioInput.value.length;
    bioCount.textContent = `${count}/140`;
    bioCount.classList.toggle('is-max', count >= 140);
  };

  const updateContinue = () => {
    const isValid = validateBio();
    continueBtn.disabled = !isValid;
  };

  addPhotoBtn.addEventListener('click', () => photoInput.click());

  skipPhotoBtn.addEventListener('click', () => {
    setPhotoState('');
  });

  removePhotoBtn.addEventListener('click', () => {
    setPhotoState('');
  });

  photoInput.addEventListener('change', () => {
    const file = photoInput.files && photoInput.files[0];
    if (!file) {
      setPhotoState('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPhotoState(String(reader.result || ''));
    reader.readAsDataURL(file);
  });

  bioInput.addEventListener('focus', () => { bioFocused = true; });
  bioInput.addEventListener('blur', () => {
    bioFocused = false;
    touchedBio = true;
    validateBio();
    updateContinue();
  });

  bioInput.addEventListener('input', () => {
    touchedBio = true;
    updateCount();
    updateContinue();
  });

  continueBtn.addEventListener('click', () => {
    touchedBio = true;

    const bioOk = validateBio();
    if (!bioOk) {
      updateContinue();
      return;
    }

    const profile = {
      profilePhoto: selectedPhotoData,
      shortBio: (bioInput.value || '').trim(),
      location: (locationInput.value || '').trim(),
    };

    try {
      sessionStorage.setItem('lb_profile_photo', profile.profilePhoto || '');
      sessionStorage.setItem('lb_short_bio', profile.shortBio);
      sessionStorage.setItem('lb_location', profile.location);
      sessionStorage.setItem('lb_profile_basics', JSON.stringify(profile));
    } catch (error) {
      // Ignore storage issues for prototype flow.
    }

    const nextRoute = sessionStorage.getItem('lb_post_profile_route') || './signup-step6-room-ready.html';
    window.location.href = nextRoute;
  });

  updateCount();
  hydrateAgeDisplay();
  updateContinue();
})();

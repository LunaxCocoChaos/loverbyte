(() => {
  const defaultState = document.querySelector('[data-state-default]');
  const emailState = document.querySelector('[data-state-email]');
  const openEmailButton = document.querySelector('[data-open-email]');
  const backToOptionsButton = document.querySelector('[data-back-options]');
  const googleButton = document.querySelector('[data-google]');
  const createAccountButton = document.querySelector('[data-create-account]');

  const emailInput = document.querySelector('[data-email]');
  const passwordInput = document.querySelector('[data-password]');
  const confirmInput = document.querySelector('[data-confirm-password]');
  const ageCheck = document.querySelector('[data-age-check]');
  const termsCheck = document.querySelector('[data-terms-check]');

  const emailError = document.querySelector('[data-email-error]');
  const passwordError = document.querySelector('[data-password-error]');
  const confirmError = document.querySelector('[data-confirm-error]');
  const checkError = document.querySelector('[data-check-error]');

  const legalLinks = Array.from(document.querySelectorAll('[data-legal-link]'));
  const legalOverlay = document.querySelector('[data-legal-overlay]');
  const legalTitle = document.querySelector('[data-legal-title]');
  const legalBody = document.querySelector('[data-legal-body]');
  const legalCloseButton = document.querySelector('[data-legal-close]');
  const toggleButtons = Array.from(document.querySelectorAll('[data-toggle-password]'));

  if (
    !defaultState ||
    !emailState ||
    !openEmailButton ||
    !backToOptionsButton ||
    !googleButton ||
    !createAccountButton ||
    !emailInput ||
    !passwordInput ||
    !confirmInput ||
    !ageCheck ||
    !termsCheck ||
    !emailError ||
    !passwordError ||
    !confirmError ||
    !checkError
  ) {
    return;
  }

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const LEGAL_PLACEHOLDERS = {
    terms: {
      title: 'Terms',
      paragraphs: [
        'Placeholder Terms copy for MVP testing. This framed view is where your full Terms will live.',
        'Section example: account use, acceptable conduct, and community participation expectations.',
        'Section example: content ownership, moderation rights, and enforcement actions when rules are broken.',
        'Section example: service limitations, updates, and legal jurisdiction language.',
        'Additional placeholder text: by using Loverbyte, users agree to follow platform safety expectations and moderation policies designed to protect the room.',
        'Additional placeholder text: repeated/serious violations can result in content removal, temporary account restrictions, or permanent account loss.',
        'Additional placeholder text: users are responsible for content they post, links they share, and interactions they initiate with others.',
        'Additional placeholder text: this test section intentionally includes extra copy so scrolling behavior can be verified in QA.',
        'Additional placeholder text: these paragraphs will be replaced with approved legal copy before production launch.',
        'Additional placeholder text: this demo also validates keyboard, pointer, and focus handling inside the legal frame.'
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      paragraphs: [
        'Placeholder Privacy Policy copy for MVP testing. This is the scrollable policy frame users should review.',
        'Section example: what information Loverbyte collects during signup and while using the app.',
        'Section example: how data is used for safety, personalization, and product improvements.',
        'Section example: data retention, user controls, and contact path for privacy requests.',
        'Additional placeholder text: profile data, usage data, and moderation data may be processed to keep the platform safe and functional.',
        'Additional placeholder text: account owners can request updates/corrections where appropriate, per final policy language.',
        'Additional placeholder text: external links shared by users may have separate privacy practices outside Loverbyte control.',
        'Additional placeholder text: this test section intentionally includes extra copy so scrolling behavior can be verified in QA.',
        'Additional placeholder text: these paragraphs will be replaced with approved privacy copy before production launch.',
        'Additional placeholder text: this demo also validates keyboard, pointer, and focus handling inside the legal frame.'
      ]
    },
    rules: {
      title: 'House Rules',
      paragraphs: [
        'Placeholder House Rules copy for MVP testing. This is where your full behavior guidelines will appear.',
        'Section example: respect boundaries, no harassment, and no doxxing or hateful behavior.',
        'Section example: no scams, impersonation, or non-consensual explicit content.',
        'Section example: reporting flow, moderation decisions, and repeat-violation consequences.',
        'Additional placeholder text: if someone disrupts the room, users can report, mute, block, or disengage safely.',
        'Additional placeholder text: content should invite conversation, not targeted abuse, intimidation, or exploitation.',
        'Additional placeholder text: safety expectations apply to posts, replies, private rooms, profile text, and linked media.',
        'Additional placeholder text: this test section intentionally includes extra copy so scrolling behavior can be verified in QA.',
        'Additional placeholder text: these paragraphs will be replaced with approved rules copy before production launch.',
        'Additional placeholder text: this demo also validates keyboard, pointer, and focus handling inside the legal frame.'
      ]
    }
  };

  const clearFieldErrors = () => {
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmError.textContent = '';
  };

  const animateStateIn = (stateElement) => {
    if (!stateElement) return;
    stateElement.classList.remove('is-entering');
    void stateElement.offsetWidth;
    stateElement.classList.add('is-entering');
    window.setTimeout(() => {
      stateElement.classList.remove('is-entering');
    }, 260);
  };

  const setDefaultState = () => {
    defaultState.hidden = false;
    defaultState.setAttribute('aria-hidden', 'false');
    emailState.hidden = true;
    emailState.setAttribute('aria-hidden', 'true');
    clearFieldErrors();
    animateStateIn(defaultState);
  };

  const setEmailState = () => {
    defaultState.hidden = true;
    defaultState.setAttribute('aria-hidden', 'true');
    emailState.hidden = false;
    emailState.setAttribute('aria-hidden', 'false');
    animateStateIn(emailState);
    requestAnimationFrame(() => {
      const backButton = emailState.querySelector('[data-back-options]');
      (backButton || emailInput).focus();
    });
  };

  const areBasicsConfirmed = () => ageCheck.checked && termsCheck.checked;

  const validateEmail = () => {
    const value = (emailInput.value || '').trim();
    if (!value) {
      emailError.textContent = '';
      return false;
    }
    const valid = EMAIL_PATTERN.test(value);
    emailError.textContent = valid ? '' : 'Enter a valid email.';
    return valid;
  };

  const validatePassword = () => {
    const password = passwordInput.value || '';
    if (!password) {
      passwordError.textContent = '';
      return false;
    }
    passwordError.textContent = '';
    return true;
  };

  const validateConfirm = () => {
    const password = passwordInput.value || '';
    const confirm = confirmInput.value || '';
    if (!confirm) {
      confirmError.textContent = '';
      return false;
    }
    const matches = password === confirm;
    confirmError.textContent = matches ? '' : 'Passwords need to match.';
    return matches;
  };

  const syncCreateState = () => {
    const valid = areBasicsConfirmed() && validateEmail() && validatePassword() && validateConfirm();
    createAccountButton.disabled = !valid;
  };

  const requireBasicsBeforeProceed = () => {
    if (areBasicsConfirmed()) {
      checkError.textContent = '';
      return true;
    }
    checkError.textContent = 'Confirm the basics first.';
    return false;
  };

  const storeAuthState = ({ method, email }) => {
    try {
      localStorage.setItem('lb_auth_method', method);
      localStorage.setItem('lb_account_email', email);
      localStorage.setItem('lb_age_confirmed', String(ageCheck.checked));
      localStorage.setItem('lb_legal_confirmed', String(termsCheck.checked));
    } catch (error) {
      console.warn('Unable to persist auth state in localStorage.', error);
    }
  };

  const continueToIdentity = () => {
    window.location.href = './signup-step1-identity.html';
  };

  const closeLegalModal = () => {
    if (!legalOverlay) return;
    legalOverlay.hidden = true;
    legalOverlay.setAttribute('aria-hidden', 'true');
  };

  const openLegalModal = (key) => {
    if (!legalOverlay || !legalTitle || !legalBody) return;
    const content = LEGAL_PLACEHOLDERS[key];
    if (!content) return;

    legalTitle.textContent = content.title;
    legalBody.innerHTML = content.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
    legalOverlay.hidden = false;
    legalOverlay.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
      (legalCloseButton || legalBody).focus();
    });
  };

  openEmailButton.addEventListener('click', () => {
    if (!requireBasicsBeforeProceed()) return;
    setEmailState();
    syncCreateState();
  });

  backToOptionsButton.addEventListener('click', () => {
    setDefaultState();
  });

  googleButton.addEventListener('click', () => {
    if (!requireBasicsBeforeProceed()) return;

    const placeholderGoogleEmail = 'google.user@example.com';
    storeAuthState({ method: 'google', email: placeholderGoogleEmail });
    console.info('Loverbyte MVP placeholder: Continue with Google');
    continueToIdentity();
  });

  const submitEmailSignup = () => {
    syncCreateState();
    if (createAccountButton.disabled) {
      if (!areBasicsConfirmed()) {
        checkError.textContent = 'Confirm the basics first.';
      }
      return false;
    }

    storeAuthState({ method: 'email', email: (emailInput.value || '').trim() });
    continueToIdentity();
    return true;
  };

  createAccountButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitEmailSignup();
  });

  emailState.addEventListener('submit', (event) => {
    event.preventDefault();
    submitEmailSignup();
  });

  [emailInput, passwordInput, confirmInput].forEach((input) => {
    input.addEventListener('input', syncCreateState);
    input.addEventListener('blur', syncCreateState);
  });

  [ageCheck, termsCheck].forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (areBasicsConfirmed()) checkError.textContent = '';
      syncCreateState();
    });
  });

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.togglePassword;
      const input = target === 'password' ? passwordInput : confirmInput;
      const nextType = input.type === 'password' ? 'text' : 'password';
      input.type = nextType;
      button.textContent = nextType === 'password' ? 'Show' : 'Hide';
    });
  });

  legalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openLegalModal(link.dataset.legalLink);
    });
  });

  if (legalCloseButton) {
    legalCloseButton.addEventListener('click', closeLegalModal);
  }

  if (legalOverlay) {
    legalOverlay.addEventListener('click', (event) => {
      if (event.target === legalOverlay) {
        closeLegalModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && legalOverlay && !legalOverlay.hidden) {
      closeLegalModal();
    }
  });

  setDefaultState();
  syncCreateState();
})();

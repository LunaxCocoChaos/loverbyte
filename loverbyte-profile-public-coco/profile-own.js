(() => {
  const tabs = Array.from(document.querySelectorAll('[data-profile-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-profile-panel]'));

  const miniToast = document.querySelector('[data-mini-toast]');
  let miniToastTimer = null;

  const showMiniToast = (message) => {
    if (!miniToast) return;
    miniToast.textContent = message;
    miniToast.hidden = false;
    miniToast.classList.add('is-visible');
    if (miniToastTimer) {
      window.clearTimeout(miniToastTimer);
    }
    miniToastTimer = window.setTimeout(() => {
      miniToast.classList.remove('is-visible');
      window.setTimeout(() => {
        miniToast.hidden = true;
      }, 180);
    }, 1800);
  };

  const setActiveTab = (tabId) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.profileTab === tabId;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.profilePanel === tabId;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.profileTab || 'posts';
      setActiveTab(tabId);
    });
  });

  setActiveTab('posts');

  const editProfileButton = document.querySelector('[data-open-edit-profile]');
  const copyProfileLinkButton = document.querySelector('[data-copy-profile-link]');
  const profileName = document.querySelector('[data-profile-name]');
  const profileMetaLine = document.querySelector('[data-profile-meta-line]');
  const profileBio = document.querySelector('[data-profile-bio]');
  const profileRomanceRow = document.querySelector('[data-profile-romance-row]');
  const datingCardClose = document.querySelector('[data-close-dating-card]');
  const profileAvatar = document.querySelector('[data-profile-avatar]');
  const connectLink = document.querySelector('[data-connect-link]');
  const connectLinkLabel = document.querySelector('[data-connect-link-label]');
  const tipLinkButton = document.querySelector('[data-tip-link-button]');
  const tipModal = document.querySelector('[data-tip-modal]');
  const tipModalCloseTriggers = Array.from(document.querySelectorAll('[data-tip-modal-close]'));
  const tipModalTitle = document.querySelector('[data-tip-modal-title]');
  const tipModalOptions = document.querySelector('[data-tip-modal-options]');
  const tipModalSub = document.querySelector('[data-tip-modal-sub]');
  const tipModalEmpty = document.querySelector('[data-tip-modal-empty]');
  const tipModalEmptyHandle = document.querySelector('[data-tip-modal-empty-handle]');
  const tipModalFine = document.querySelector('[data-tip-modal-fine]');
  const tipModalNote = document.querySelector('[data-tip-modal-note]');
  const profileStats = document.querySelector('[data-profile-stats]');
  const profileComposeOpenTriggers = Array.from(document.querySelectorAll('[data-profile-compose-open]'));
  const profileComposeHandle = document.querySelector('[data-profile-compose-handle]');
  const profileComposeAvatar = document.querySelector('[data-profile-compose-avatar]');
  const profileComposeSheetAvatar = document.querySelector('[data-profile-compose-sheet-avatar]');
  const profileComposeSheetHandle = document.querySelector('[data-profile-compose-sheet-handle]');
  const profileComposeRoot = document.querySelector('[data-profile-compose]');
  const profileComposeCloseTriggers = Array.from(document.querySelectorAll('[data-profile-compose-close]'));
  const profileComposeText = document.querySelector('[data-profile-compose-text]');
  const profileComposeImageBtn = document.querySelector('[data-profile-compose-image]');
  const profileComposeEmojiBtn = document.querySelector('[data-profile-compose-emoji]');
  const profileComposeLabelBtn = document.querySelector('[data-profile-compose-label]');
  const profileComposeImageInput = document.querySelector('[data-profile-compose-image-input]');
  const profileComposeCounts = document.querySelector('[data-profile-compose-counts]');
  const profileComposeLabels = document.querySelector('[data-profile-compose-labels]');
  const profileComposeError = document.querySelector('[data-profile-compose-error]');
  const profileComposePreview = document.querySelector('[data-profile-compose-preview]');
  const profileComposePost = document.querySelector('[data-profile-compose-post]');
  const labelPickerRoot = document.querySelector('[data-label-picker]');
  const labelPickerClose = document.querySelector('[data-label-picker-close]');
  const labelPickerDone = document.querySelector('[data-label-done]');
  const labelCounter = document.querySelector('[data-label-counter]');
  const labelGroups = document.querySelector('[data-label-groups]');
  const profilePostsEmpty = document.querySelector('[data-profile-posts-empty]');
  const profilePostsList = document.querySelector('[data-profile-posts-list]');
  const profileRepliesEmpty = document.querySelector('[data-profile-replies-empty]');
  const profileRepliesList = document.querySelector('[data-profile-replies-list]');
  const viewByteEmpty = document.querySelector('[data-view-byte-empty]');
  const viewByteList = document.querySelector('[data-view-byte-list]');
  const viewByteBackButton = document.querySelector('[data-view-byte-back]');
  const feedPostTemplate = document.querySelector('[data-feed-post-template]');
  const reactionPickerRoot = document.querySelector('[data-reaction-picker]');
  const reactionPickerCloseTriggers = Array.from(document.querySelectorAll('[data-reaction-picker-close]'));
  const reactionPickerTabButtons = Array.from(document.querySelectorAll('[data-reaction-tab]'));
  const reactionPickerGrid = document.querySelector('[data-reaction-picker-grid]');
  let currentProfileLink = 'https://loverbyte.app/u/coco';
  let currentProfileHandle = '@femfounder_loverbyte';
  let currentProfilePhotoUrl = '';
  let currentTipOptions = [];

  const profileRomanceSnapshot = {
    mode: 'not_open_to_crushes', // 'open_to_crushes' | 'not_open_to_crushes' | 'social_only' | 'not_looking' | null
    seeking: 'F4M',
    ageBand: '30s',
    location: 'CA/USA',
    intent: 'Long-term',
  };
  let activeTipTarget = null;

  const defaultProfileSnapshot = {
    displayName: 'Nina Coco 👑',
    username: '@femfounder_loverbyte',
    pronouns: 'she_her',
    ageBand: '30s',
    showAgeRange: false,
    bio: 'Mom to Luna, my beautiful Frankenstein. I turned heartbreak into a revenge build. Now I\'m building Loverbyte to bring substance, play, and hope back to modern love.\n\nIf this isn\'t a calling, I don\'t know what is.',
    occupation: 'Founder. Host of Loverbyte',
    showOccupation: true,
    profilePhotoDataUrl: './Asset/Nina coco.jpg',
    connectLinkLabel: 'Website',
    connectLinkUrl: 'https://loverbyte.app',
    cashAppLinkOrHandle: '',
    venmoLinkOrHandle: '@ninacoco',
    paypalLink: '',
  };

  const pronounsLabelByValue = {
    she_her: 'she/her',
    he_him: 'he/him',
    they_them: 'they/them',
    she_they: 'she/they',
    he_they: 'he/they',
    any: 'any pronouns',
    prefer_not: '',
  };
  const profilePostsStorageKey = 'lb_profile_posts';
  const savedItemsStorageKey = 'lb_saved_items_v1';
  const seededProfilePosts = [];
  const mockProfileReplies = [
    {
      replyId: 'reply_1',
      authorUsername: '@coco',
      createdAtLabel: '2h',
      replyText: 'Consistency is sexier than a grand gesture with bad follow-through.',
      replyImageUrl: '',
      originalType: 'post',
      originalId: 'post_123',
      originalAuthorUsername: '@maya',
      originalTextPreview: 'Soft launch just dropped and now my standards have standards. Who else is in their romantic audit era?',
      originalImageThumbnail: '',
      originalAvailable: true,
    },
    {
      replyId: 'reply_2',
      authorUsername: '@coco',
      createdAtLabel: '4h',
      replyText: 'The outfit is cute, but the caption is doing half the flirting.',
      replyImageUrl: '',
      originalType: 'post',
      originalId: 'post_456',
      originalAuthorUsername: '@jay',
      originalTextPreview: 'Rate my date fit. Be honest but not evil.',
      originalImageThumbnail: '../loverbyte-feed-page/assets/Stickers:emojis/ Pop Culture Coded W:names/sunglasses-shocked-reaction.jpg',
      originalAvailable: true,
    },
    {
      replyId: 'reply_3',
      authorUsername: '@coco',
      createdAtLabel: '1d',
      replyText: 'I came late to this thread but yes, this whole arc felt predictable.',
      replyImageUrl: '',
      originalType: 'comment',
      originalId: 'comment_missing_1',
      originalAuthorUsername: '@unknown',
      originalTextPreview: '',
      originalImageThumbnail: '',
      originalAvailable: false,
    },
  ];

  const numberFormatter = new Intl.NumberFormat();
  const buildProfileLinkFromUsername = (username) => {
    const normalized = String(username || '@coco').replace(/^@+/, '').trim().toLowerCase();
    const slug = normalized || 'coco';
    return `https://loverbyte.app/u/${encodeURIComponent(slug)}`;
  };

  const copyTextToClipboard = async (value) => {
    const text = String(value || '');
    if (!text) return false;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      console.warn('Loverbyte profile: clipboard API copy failed, trying fallback.', error);
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textArea);
      return copied;
    } catch (error) {
      console.warn('Loverbyte profile: fallback copy failed.', error);
      return false;
    }
  };

  const getUrlHost = (value) => {
    try {
      return String(new URL(value).hostname || '').toLowerCase().replace(/^www\./, '');
    } catch (error) {
      return '';
    }
  };

  const isHttpUrl = (value) => /^https?:\/\//i.test(String(value || '').trim());

  const resolveCashAppUrl = (value) => {
    const input = String(value || '').trim();
    if (!input) return '';
    if (input.startsWith('$') && /^\$[A-Za-z0-9._-]+$/.test(input)) {
      return `https://cash.app/${encodeURIComponent(input)}`;
    }
    if (!isHttpUrl(input)) return '';
    const host = getUrlHost(input);
    if (host === 'cash.app' || host.endsWith('.cash.app') || host === 'cashapp.com' || host.endsWith('.cashapp.com')) {
      return input;
    }
    return '';
  };

  const resolveVenmoUrl = (value) => {
    const input = String(value || '').trim();
    if (!input) return '';
    if (input.startsWith('@') && /^@[A-Za-z0-9._-]+$/.test(input)) {
      return `https://venmo.com/${encodeURIComponent(input.slice(1))}`;
    }
    if (!isHttpUrl(input)) return '';
    const host = getUrlHost(input);
    if (host === 'venmo.com' || host.endsWith('.venmo.com')) {
      return input;
    }
    return '';
  };

  const resolvePayPalUrl = (value) => {
    const input = String(value || '').trim();
    if (!input || !isHttpUrl(input)) return '';
    const host = getUrlHost(input);
    if (host === 'paypal.me' || host.endsWith('.paypal.me')) return input;
    if (host === 'paypal.com' || host.endsWith('.paypal.com')) {
      try {
        const parsed = new URL(input);
        const path = String(parsed.pathname || '').toLowerCase();
        return path.startsWith('/paypalme') ? input : '';
      } catch (error) {
        return '';
      }
    }
    return '';
  };

  const setAvatarNodeImageState = (node, photoUrl) => {
    if (!node) return;
    if (photoUrl) {
      node.style.backgroundImage = `url(\"${photoUrl}\")`;
      node.classList.add('has-photo');
      return;
    }
    node.style.backgroundImage = '';
    node.classList.remove('has-photo');
  };

  const formatRelativePostTime = (timestamp) => {
    const diffMs = Date.now() - Number(timestamp || 0);
    if (diffMs < 60_000) return 'now';
    const minutes = Math.floor(diffMs / 60_000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
  };

  const fileToDataUrl = (file) => new Promise((resolve, reject) => {
    if (!(file instanceof File)) {
      resolve('');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });

  const readProfilePosts = () => {
    try {
      const raw = localStorage.getItem(profilePostsStorageKey) || sessionStorage.getItem(profilePostsStorageKey);
      if (!raw) return [...seededProfilePosts];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [...seededProfilePosts];
      const cleaned = parsed.filter((post) => post && typeof post.text === 'string');
      return cleaned.length ? cleaned : [...seededProfilePosts];
    } catch (error) {
      console.warn('Loverbyte profile: failed to parse profile posts.', error);
      return [...seededProfilePosts];
    }
  };

  const persistProfilePosts = (posts) => {
    const serialized = JSON.stringify(posts);
    localStorage.setItem(profilePostsStorageKey, serialized);
    sessionStorage.setItem(profilePostsStorageKey, serialized);
  };

  const getCurrentUserId = () => 'viewer_local';

  const readSavedItems = () => {
    try {
      const raw = localStorage.getItem(savedItemsStorageKey) || sessionStorage.getItem(savedItemsStorageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((item) => item && typeof item === 'object')
        .map((item) => ({
          id: String(item.id || ''),
          userId: String(item.userId || ''),
          itemType: item.itemType === 'comment' ? 'comment' : 'post',
          itemId: String(item.itemId || ''),
          savedAt: Number(item.savedAt || 0) || Date.now(),
          authorUsername: String(item.authorUsername || '@username'),
          authorAvatarUrl: String(item.authorAvatarUrl || ''),
          textPreview: String(item.textPreview || ''),
          imageThumbnail: String(item.imageThumbnail || ''),
          contextAuthorUsername: String(item.contextAuthorUsername || ''),
          contextPreview: String(item.contextPreview || ''),
          originalType: String(item.originalType || ''),
          originalId: String(item.originalId || ''),
          originalAvailable: item.originalAvailable !== false,
        }))
        .filter((item) => item.userId && item.itemId);
    } catch (error) {
      console.warn('Loverbyte profile: failed to parse saved items.', error);
      return [];
    }
  };

  const persistSavedItems = (items) => {
    const serialized = JSON.stringify(items);
    localStorage.setItem(savedItemsStorageKey, serialized);
    sessionStorage.setItem(savedItemsStorageKey, serialized);
  };

  let profilePosts = readProfilePosts();
  let profileReplies = [...mockProfileReplies];
  let savedItems = readSavedItems();
  let profileComposeImages = [];
  let profileComposeLabelIds = [];
  let activeLabelContext = 'profile_compose';
  const postLabels = [
    { id: 'rate-my-date-fit', label: 'Rate My Date Fit', group: 'Rate & Review' },
    { id: 'roast-my-profile', label: 'Roast My Profile', group: 'Rate & Review' },
    { id: 'spot-dem-flags', label: 'Spot Dem Flags', group: 'Rate & Review' },
    { id: 'aita', label: 'AITA?', group: 'Rate & Review' },
    { id: 'crush-worthy', label: 'Crush-Worthy?', group: 'Rate & Review' },
    { id: 'soft-launch', label: 'Soft Launch', group: 'Rate & Review' },
    { id: 'situationship', label: 'Situationship', group: 'Dating Situations' },
    { id: 'married-but-single', label: 'Married But Single', group: 'Dating Situations' },
    { id: 'waiting-to-be-wed', label: 'Waiting to Be Wed', group: 'Dating Situations' },
    { id: 'dead-bedroom', label: 'Dead Bedroom', group: 'Dating Situations' },
    { id: 'ethical-non-monogamy', label: 'Ethical Non-Monogamy', group: 'Dating Situations' },
    { id: 'poly-life', label: 'Poly Life', group: 'Dating Situations' },
    { id: 'work-love-balance', label: 'Work-Love Balance', group: 'Dating Situations' },
    { id: 'never-have-i-ever', label: 'Never Have I Ever', group: 'Games' },
    { id: 'truth-or-dare', label: 'Truth or Dare', group: 'Games' },
    { id: 'two-truths-a-lie', label: 'Two Truths & A Lie', group: 'Games' },
    { id: 'find-my-match', label: 'Find My Match', group: 'Games' },
    { id: 'ama', label: 'AMA', group: 'Games' },
    { id: 'ask-women', label: 'Ask Women', group: 'Games' },
    { id: 'ask-men', label: 'Ask Men', group: 'Games' },
    { id: 'unpopular-opinion', label: 'Unpopular Opinion', group: 'Debates' },
    { id: 'hot-take', label: 'Hot Take', group: 'Debates' },
    { id: 'cmv', label: 'CMV', group: 'Debates' },
    { id: 'til', label: 'TIL', group: 'Debates' },
    { id: 'eli5', label: 'ELI5', group: 'Debates' },
    { id: 'i-know-youre-lying', label: 'I Know You’re Lying', group: 'Debates' },
    { id: 'storytime', label: 'Storytime', group: 'Storytime / Eras' },
    { id: 'update', label: 'Update', group: 'Storytime / Eras' },
    { id: 'healing-era', label: 'Healing Era', group: 'Storytime / Eras' },
    { id: 'soft-life-era', label: 'Soft Life Era', group: 'Storytime / Eras' },
    { id: 'lgbtq-parade', label: 'LGBTQ+ Parade', group: 'Community & Culture' },
    { id: 'swirl-life', label: 'Swirl Life', group: 'Community & Culture' },
    { id: 'sisterhood', label: 'Sisterhood', group: 'Community & Culture' },
    { id: 'brotherhood', label: 'Brotherhood', group: 'Community & Culture' },
    { id: 'pick-me', label: 'Pick Me', group: 'Community & Culture' },
    { id: 'simp', label: 'Simp', group: 'Community & Culture' },
  ];
  const labelById = new Map(postLabels.map((item) => [item.id, item]));
  const labelGroupsOrder = [
    'Rate & Review',
    'Dating Situations',
    'Games',
    'Debates',
    'Storytime / Eras',
    'Community & Culture',
  ];
  const allowedComposeImageMimeTypes = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif']);
  const reactionInteractionMode = 'increment_only';
  let activeReactionPostId = '';
  let activeReactionPickerTab = 'standard';
  const reactionCategoryOrder = ['standard', 'byte_tea_coded', 'pop_culture_coded'];
  const compactImageReactionIds = new Set(['byte_red_flag', 'byte_yellow_flag', 'byte_green_flag']);
  const reactionCatalog = {
    standard: [],
    byte_tea_coded: [],
    pop_culture_coded: [],
  };
  let reactionLibrary = [];
  let reactionLibraryById = new Map();

  const resolveProfileReactionAssetSrc = (src) => {
    const value = String(src || '').trim();
    if (!value) return '';
    if (value.startsWith('/assets/')) return `../loverbyte-feed-page${value}`;
    return value;
  };

  const usesStickerSizing = (asset) =>
    Boolean(asset?.type === 'image' && !compactImageReactionIds.has(String(asset.id || '')));

  const hydrateSharedReactionLibrary = () => {
    const shared = Array.isArray(window.lbReactionLibrary) ? window.lbReactionLibrary : [];
    reactionLibrary = shared
      .filter((asset) => asset && reactionCategoryOrder.includes(asset.category))
      .map((asset) => ({
        id: String(asset.id || ''),
        category: String(asset.category || ''),
        type: asset.type === 'image' ? 'image' : 'emoji',
        value: asset.type === 'emoji' ? String(asset.value || '') : '',
        src: asset.type === 'image' ? String(asset.src || '') : '',
        label: String(asset.label || asset.id || ''),
      }))
      .filter((asset) => asset.id);

    reactionLibraryById = new Map(reactionLibrary.map((asset) => [asset.id, asset]));
    Object.keys(reactionCatalog).forEach((categoryId) => {
      reactionCatalog[categoryId] = reactionLibrary.filter((asset) => asset.category === categoryId);
    });

    console.log('[Loverbyte] Profile shared reaction library counts:', {
      standard: reactionCatalog.standard.length,
      byteTeaCoded: reactionCatalog.byte_tea_coded.length,
      popCultureCoded: reactionCatalog.pop_culture_coded.length,
    });
  };

  hydrateSharedReactionLibrary();

  const railIconPathByType = {
    react: 'M12 20.6c-.2 0-.3-.1-.4-.2l-1.8-1.7C5.1 14.5 2 11.7 2 8.2 2 5.4 4.2 3.2 7 3.2c1.6 0 3.2.8 4.1 2.1.9-1.3 2.5-2.1 4.1-2.1 2.8 0 5 2.2 5 5 0 3.5-3.1 6.3-7.8 10.5l-1.8 1.7c-.2.1-.4.2-.6.2z',
    reply: 'M4 5.5c0-1.4 1.1-2.5 2.5-2.5h11c1.4 0 2.5 1.1 2.5 2.5v8c0 1.4-1.1 2.5-2.5 2.5H10l-4.6 3.6c-.5.4-1.2 0-1.2-.7V16H6.5C5.1 16 4 14.9 4 13.5v-8z',
    save: 'M7 3.5h10a2 2 0 0 1 2 2V21l-7-4-7 4V5.5a2 2 0 0 1 2-2z',
  };
  const profileReplyById = new Map();

  const normalizeProfilePost = (post) => {
    const normalizedReactions = Array.isArray(post?.reactions)
      ? post.reactions
        .map((reaction) => {
          if (!reaction || !reaction.id) return null;
          const reactionId = String(reaction.id);
          const libraryAsset = reactionLibraryById.get(reactionId) || null;
          const count = Math.max(0, Number.parseInt(String(reaction.count ?? 0), 10) || 0);
          const isImage = libraryAsset?.type === 'image' || (reaction.type === 'image' && String(reaction.src || '').trim());
          return {
            id: reactionId,
            label: String(libraryAsset?.label || reaction.label || reactionId),
            type: isImage ? 'image' : 'emoji',
            value: isImage ? '' : String(libraryAsset?.value || reaction.value || '❤️'),
            src: isImage ? String(libraryAsset?.src || reaction.src || '') : '',
            count,
          };
        })
        .filter(Boolean)
      : [];

    const actions = {
      react: Math.max(0, Number.parseInt(String(post?.actions?.react ?? 0), 10) || 0),
      reply: Math.max(0, Number.parseInt(String(post?.actions?.reply ?? 0), 10) || 0),
      save: Math.max(0, Number.parseInt(String(post?.actions?.save ?? 0), 10) || 0),
    };

    const signals = {
      tip: Math.max(0, Number.parseInt(String(post?.signals?.tip ?? 0), 10) || 0),
      poke: Math.max(0, Number.parseInt(String(post?.signals?.poke ?? 0), 10) || 0),
      crush: Math.max(0, Number.parseInt(String(post?.signals?.crush ?? 0), 10) || 0),
    };

    const viewerEngagement = {
      reactions: Array.from(new Set(Array.isArray(post?.viewerEngagement?.reactions) ? post.viewerEngagement.reactions.map(String) : [])),
      actions: Array.from(new Set(Array.isArray(post?.viewerEngagement?.actions) ? post.viewerEngagement.actions.map(String) : [])),
      signals: Array.from(new Set(Array.isArray(post?.viewerEngagement?.signals) ? post.viewerEngagement.signals.map(String) : [])),
    };

    return {
      ...post,
      reactions: normalizedReactions,
      actions,
      signals,
      viewerEngagement,
      isPinned: Boolean(post?.isPinned),
      pinnedAt: Number(post?.pinnedAt || 0),
    };
  };

  const closeProfilePostMenus = () => {
    if (!profilePostsList) return;
    profilePostsList.querySelectorAll('[data-profile-post-menu]').forEach((menu) => {
      menu.hidden = true;
    });
    profilePostsList.querySelectorAll('[data-profile-post-menu-toggle]').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
    });
  };

  const getPinnedProfilePostCount = () =>
    profilePosts.reduce((total, entry) => total + (normalizeProfilePost(entry).isPinned ? 1 : 0), 0);

  const togglePinProfilePost = (postId) => {
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const isPinned = Boolean(current.isPinned);
    if (!isPinned && getPinnedProfilePostCount() >= 2) {
      showMiniToast('You can pin up to 2 posts.');
      return;
    }

    current.isPinned = !isPinned;
    current.pinnedAt = current.isPinned ? Date.now() : 0;
    profilePosts[index] = current;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
    showMiniToast(current.isPinned ? 'Post pinned' : 'Post unpinned');
  };

  const deleteProfilePost = (postId) => {
    const next = profilePosts.filter((entry) => String(entry?.id || '') !== String(postId || ''));
    profilePosts = next;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
    showMiniToast('Post deleted');
  };

  const formatSignalLabel = (signalType, count) => {
    const total = Math.max(0, Number.parseInt(String(count ?? 0), 10) || 0);
    if (total <= 0) {
      if (signalType === 'tip') return 'Tip';
      if (signalType === 'poke') return 'Poke';
      if (signalType === 'crush') return 'Crush';
      return '';
    }
    if (signalType === 'tip') return `${total} ${total === 1 ? 'tip' : 'tips'}`;
    if (signalType === 'poke') return `${total} ${total === 1 ? 'poke' : 'pokes'}`;
    if (signalType === 'crush') return `${total} ${total === 1 ? 'crush' : 'crushes'}`;
    return `${total}`;
  };

  const parseCountValue = (value) => {
    const rawCount = Number.parseInt(value || '0', 10);
    return Number.isFinite(rawCount) ? Math.max(0, rawCount) : 0;
  };

  const setStandardActionCount = (actionButton, nextCount) => {
    if (!actionButton) return;
    const count = Math.max(0, nextCount);
    actionButton.dataset.actionCount = String(count);
    const label = actionButton.querySelector('[data-action-count-label]');
    if (!label) return;
    label.textContent = count > 0 ? String(count) : '';
    label.hidden = count <= 0;
  };

  const setSignalActionCount = (signalButton, nextCount) => {
    if (!signalButton) return;
    const count = Math.max(0, nextCount);
    signalButton.dataset.signalCount = String(count);
    const label = signalButton.querySelector('[data-post-signal-label]');
    if (!label) return;
    const type = signalButton.dataset.signalType || '';
    label.textContent = formatSignalLabel(type, count);
  };

  const createActionGradient = (svg, type, gradientId) => {
    if (!svg) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', gradientId);
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');

    const stopPaletteByType = {
      react: [
        { offset: '0%', color: '#61A9FF' },
        { offset: '36%', color: '#FF72CC' },
        { offset: '72%', color: '#54E9D8' },
        { offset: '100%', color: '#FFFFFF' },
      ],
      save: [
        { offset: '0%', color: '#4D96FF' },
        { offset: '38%', color: '#FF67C6' },
        { offset: '76%', color: '#45E0D1' },
        { offset: '100%', color: '#FFFFFF' },
      ],
    };

    const stops = stopPaletteByType[type] || stopPaletteByType.react;
    stops.forEach(({ offset, color }) => {
      const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop.setAttribute('offset', offset);
      stop.setAttribute('stop-color', color);
      gradient.appendChild(stop);
    });

    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
  };

  const setEngagementActionState = (button, isEngaged) => {
    const actionType = button.dataset.actionType;
    if (actionType !== 'react' && actionType !== 'save') return;
    const iconPath = button.querySelector('.lb-rail-action__iconSvg path');
    if (!iconPath) return;
    const gradientId = iconPath.dataset.gradientId || '';
    iconPath.style.fill = isEngaged && gradientId ? `url(#${gradientId})` : '';
    button.classList.toggle('is-engaged', isEngaged);
    button.setAttribute('aria-pressed', String(isEngaged));
  };

  const buildSavedKey = (itemType, itemId) => `${itemType}:${itemId}`;

  const isSavedItem = (itemType, itemId) => {
    const userId = getCurrentUserId();
    const targetKey = buildSavedKey(itemType, itemId);
    return savedItems.some((item) => item.userId === userId && buildSavedKey(item.itemType, item.itemId) === targetKey);
  };

  const upsertSavedItem = (entry) => {
    const userId = getCurrentUserId();
    const targetKey = buildSavedKey(entry.itemType, entry.itemId);
    const next = savedItems.filter((item) => !(item.userId === userId && buildSavedKey(item.itemType, item.itemId) === targetKey));
    next.unshift({ ...entry, userId });
    savedItems = next;
    persistSavedItems(savedItems);
  };

  const removeSavedItem = (itemType, itemId) => {
    const userId = getCurrentUserId();
    const targetKey = buildSavedKey(itemType, itemId);
    const next = savedItems.filter((item) => !(item.userId === userId && buildSavedKey(item.itemType, item.itemId) === targetKey));
    savedItems = next;
    persistSavedItems(savedItems);
  };

  const getCurrentUserSavedItems = () => {
    const userId = getCurrentUserId();
    return savedItems
      .filter((item) => item.userId === userId)
      .sort((a, b) => Number(b.savedAt || 0) - Number(a.savedAt || 0));
  };

  const formatSavedAtLabel = (timestamp) => {
    const value = Number(timestamp || 0);
    if (!value) return 'Saved now';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Saved now';
    const time = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    return `Saved ${time}`;
  };

  const getPostIndexById = (postId) => profilePosts.findIndex((entry) => String(entry?.id || '') === String(postId || ''));

  const renderViewByteList = () => {
    if (!viewByteEmpty || !viewByteList) return;
    const items = getCurrentUserSavedItems();
    viewByteList.innerHTML = '';

    if (!items.length) {
      viewByteEmpty.hidden = false;
      viewByteList.hidden = true;
      return;
    }

    viewByteEmpty.hidden = true;
    viewByteList.hidden = false;

    items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'lb-view-byte-item';
      card.dataset.savedItemType = item.itemType;
      card.dataset.savedItemId = item.itemId;

      const type = document.createElement('p');
      type.className = 'lb-view-byte-item__type';
      type.textContent = item.itemType === 'comment' ? 'Saved Reply' : 'Saved Post';
      card.appendChild(type);

      const head = document.createElement('header');
      head.className = 'lb-view-byte-item__head';
      const avatar = document.createElement('span');
      avatar.className = 'lb-view-byte-item__avatar';
      if (item.authorAvatarUrl) {
        avatar.style.backgroundImage = `url("${item.authorAvatarUrl}")`;
      }
      const meta = document.createElement('p');
      meta.className = 'lb-view-byte-item__meta';
      meta.innerHTML = `${item.authorUsername || '@username'} <span class="lb-view-byte-item__dot" aria-hidden="true">·</span> ${formatSavedAtLabel(item.savedAt)}`;
      head.append(avatar, meta);
      card.appendChild(head);

      const text = document.createElement('p');
      text.className = 'lb-view-byte-item__text';
      text.textContent = item.originalAvailable === false ? 'This Byte is no longer available.' : (item.textPreview || 'This Byte is no longer available.');
      card.appendChild(text);

      if (item.itemType === 'comment' && item.contextPreview) {
        const context = document.createElement('p');
        context.className = 'lb-view-byte-item__context';
        const contextAuthor = item.contextAuthorUsername || '@unknown';
        context.textContent = `Replying to ${contextAuthor}: "${item.contextPreview}"`;
        card.appendChild(context);
      }

      if (item.imageThumbnail) {
        const thumb = document.createElement('img');
        thumb.className = 'lb-view-byte-item__thumb';
        thumb.src = item.imageThumbnail;
        thumb.alt = `${item.itemType === 'comment' ? 'Reply' : 'Post'} image`;
        card.appendChild(thumb);
      }

      const actions = document.createElement('div');
      actions.className = 'lb-view-byte-item__actions';

      const viewButton = document.createElement('button');
      viewButton.className = 'lb-view-byte-item__viewBtn';
      viewButton.type = 'button';
      viewButton.dataset.viewSavedByte = `${item.itemType}:${item.itemId}`;
      viewButton.textContent = 'View Byte';
      actions.appendChild(viewButton);

      const unsaveButton = document.createElement('button');
      unsaveButton.className = 'lb-view-byte-item__saveBtn is-active';
      unsaveButton.type = 'button';
      unsaveButton.dataset.unsaveItemType = item.itemType;
      unsaveButton.dataset.unsaveItemId = item.itemId;
      unsaveButton.setAttribute('aria-label', 'Remove from View Byte');
      unsaveButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="${railIconPathByType.save}"></path>
        </svg>
      `;
      actions.appendChild(unsaveButton);

      card.appendChild(actions);
      viewByteList.appendChild(card);
    });
  };

  const buildSavedPostSnapshot = (post) => ({
    id: `saved-post-${post.id}`,
    itemType: 'post',
    itemId: String(post.id),
    savedAt: Date.now(),
    authorUsername: String(post.handle || '@username'),
    authorAvatarUrl: currentProfilePhotoUrl || '',
    textPreview: String(post.text || '').trim(),
    imageThumbnail: Array.isArray(post.images) && post.images.length ? String(post.images[0]) : '',
    originalType: 'post',
    originalId: String(post.id || ''),
    originalAvailable: true,
  });

  const buildSavedReplySnapshot = (reply) => ({
    id: `saved-reply-${reply.replyId}`,
    itemType: 'comment',
    itemId: String(reply.replyId),
    savedAt: Date.now(),
    authorUsername: String(reply.authorUsername || currentProfileHandle || '@username'),
    authorAvatarUrl: currentProfilePhotoUrl || '',
    textPreview: String(reply.replyText || '').trim(),
    imageThumbnail: String(reply.replyImageUrl || ''),
    contextAuthorUsername: String(reply.originalAuthorUsername || '@unknown'),
    contextPreview: String(reply.originalTextPreview || ''),
    originalType: String(reply.originalType || 'comment'),
    originalId: String(reply.originalId || ''),
    originalAvailable: reply.originalAvailable !== false,
  });

  const toggleSavedPost = (postId) => {
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const engagedBucket = current.viewerEngagement.actions;
    const actionIndex = engagedBucket.indexOf('save');
    const currentValue = Number(current.actions?.save || 0);

    if (actionIndex >= 0 || isSavedItem('post', postId)) {
      current.viewerEngagement.actions = engagedBucket.filter((item) => item !== 'save');
      current.actions.save = Math.max(0, currentValue - 1);
      removeSavedItem('post', postId);
      showMiniToast('Removed from View Byte.');
    } else {
      if (!engagedBucket.includes('save')) engagedBucket.push('save');
      current.actions.save = currentValue + 1;
      upsertSavedItem(buildSavedPostSnapshot(current));
      showMiniToast('Saved to View Byte.');
    }

    profilePosts[index] = current;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
    renderViewByteList();
  };

  const toggleSavedReply = (replyId) => {
    const index = profileReplies.findIndex((entry) => String(entry?.replyId || '') === String(replyId || ''));
    if (index < 0) return;
    const reply = { ...profileReplies[index] };
    const currentValue = Math.max(0, Number.parseInt(String(reply.saveCount || 0), 10) || 0);

    if (isSavedItem('comment', replyId)) {
      reply.saveCount = Math.max(0, currentValue - 1);
      removeSavedItem('comment', replyId);
      showMiniToast('Removed from View Byte.');
    } else {
      reply.saveCount = currentValue + 1;
      upsertSavedItem(buildSavedReplySnapshot(reply));
      showMiniToast('Saved to View Byte.');
    }

    profileReplies[index] = reply;
    renderProfileReplies();
    renderViewByteList();
  };

  const toggleProfilePostAction = (postId, key) => {
    if (key === 'save') {
      toggleSavedPost(postId);
      return;
    }
    if (key !== 'react') return;
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const engagedBucket = current.viewerEngagement.actions;
    const actionIndex = engagedBucket.indexOf(key);
    const currentValue = Number(current.actions?.[key] || 0);

    if (actionIndex >= 0) {
      engagedBucket.splice(actionIndex, 1);
      current.actions[key] = Math.max(0, currentValue - 1);
    } else {
      engagedBucket.push(key);
      current.actions[key] = currentValue + 1;
    }

    profilePosts[index] = current;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
  };

  const toggleProfilePostSignal = (postId, key) => {
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const engagedBucket = current.viewerEngagement.signals;
    const signalIndex = engagedBucket.indexOf(key);
    const currentValue = Number(current.signals?.[key] || 0);
    if (signalIndex >= 0) {
      engagedBucket.splice(signalIndex, 1);
      current.signals[key] = Math.max(0, currentValue - 1);
    } else {
      engagedBucket.push(key);
      current.signals[key] = currentValue + 1;
    }
    profilePosts[index] = current;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
  };

  const bumpProfilePostReaction = (postId, reactionId) => {
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const targetReaction = current.reactions.find((entry) => entry.id === reactionId);
    if (!targetReaction) return;
    if (!current.viewerEngagement.reactions.includes(reactionId)) {
      current.viewerEngagement.reactions.push(reactionId);
    }
    targetReaction.count += 1;
    profilePosts[index] = current;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
  };

  const addOrBumpReaction = (postId, reactionChoice) => {
    if (!reactionChoice?.id) return;
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const existingReaction = current.reactions.find((entry) => entry.id === reactionChoice.id);
    if (existingReaction) {
      existingReaction.count += 1;
    } else {
      current.reactions.push({
        id: reactionChoice.id,
        label: reactionChoice.label || reactionChoice.id,
        type: reactionChoice.type === 'image' ? 'image' : 'emoji',
        value: reactionChoice.type === 'image' ? '' : (reactionChoice.value || '🙂'),
        src: reactionChoice.type === 'image' ? String(reactionChoice.src || '') : '',
        count: 1,
      });
    }
    if (!current.viewerEngagement.reactions.includes(reactionChoice.id)) {
      current.viewerEngagement.reactions.push(reactionChoice.id);
    }
    profilePosts[index] = current;
    persistProfilePosts(profilePosts);
    renderProfilePosts();
  };

  const findReactionChoiceById = (reactionId) => {
    return reactionLibraryById.get(String(reactionId || '')) || null;
  };

  const setActiveReactionPickerTab = (tabId) => {
    activeReactionPickerTab = reactionCategoryOrder.includes(tabId) ? tabId : 'standard';
    reactionPickerTabButtons.forEach((button) => {
      const isActive = button.dataset.reactionTab === activeReactionPickerTab;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
  };

  const renderReactionPickerGrid = () => {
    if (!reactionPickerGrid) return;
    reactionPickerGrid.innerHTML = '';

    Object.entries(reactionCatalog).forEach(([categoryId, options]) => {
      const section = document.createElement('section');
      section.className = 'lb-reaction-picker__category';
      section.dataset.reactionPickerCategory = categoryId;
      section.hidden = categoryId !== activeReactionPickerTab;

      const row = document.createElement('div');
      row.className = 'lb-reaction-picker__categoryRow';

      options.forEach((option) => {
        const btn = document.createElement('button');
        btn.className = 'lb-reaction-picker__option';
        btn.type = 'button';
        btn.dataset.pickerReactionId = option.id;
        btn.setAttribute('aria-label', option.label);

        if (option.type === 'image' && option.src) {
          const isCustomSticker = usesStickerSizing(option);
          if (isCustomSticker) {
            btn.classList.add('lb-reaction-picker__option--customSticker');
          }
          const img = document.createElement('img');
          img.className = 'lb-reaction-picker__optionImage';
          if (isCustomSticker) {
            img.classList.add('lb-reaction-picker__optionImage--customSticker');
          }
          img.src = resolveProfileReactionAssetSrc(option.src);
          img.alt = option.label;
          btn.appendChild(img);
        } else {
          btn.textContent = option.value || '🙂';
        }

        row.appendChild(btn);
      });

      section.appendChild(row);
      reactionPickerGrid.appendChild(section);
    });
  };

  const openReactionPickerForPost = (postId) => {
    if (!reactionPickerRoot) return;
    activeReactionPostId = String(postId || '');
    if (!activeReactionPostId) return;
    reactionPickerRoot.hidden = false;
    setActiveReactionPickerTab(activeReactionPickerTab);
    renderReactionPickerGrid();
  };

  const closeReactionPicker = () => {
    if (!reactionPickerRoot) return;
    reactionPickerRoot.hidden = true;
    activeReactionPostId = '';
  };

  const renderProfilePosts = () => {
    if (!profilePostsList || !profilePostsEmpty || !feedPostTemplate) return;

    profilePostsList.innerHTML = '';
    profilePostsEmpty.hidden = profilePosts.length > 0;

    const orderedPosts = [...profilePosts].sort((a, b) => {
      const left = normalizeProfilePost(a);
      const right = normalizeProfilePost(b);
      if (left.isPinned !== right.isPinned) {
        return left.isPinned ? -1 : 1;
      }
      if (left.isPinned && right.isPinned) {
        return (right.pinnedAt || 0) - (left.pinnedAt || 0);
      }
      return Number(right.createdAt || 0) - Number(left.createdAt || 0);
    });

    orderedPosts.forEach((rawPost, index) => {
      const post = normalizeProfilePost(rawPost);
      const card = feedPostTemplate.cloneNode(true);
      card.removeAttribute('hidden');
      card.removeAttribute('aria-hidden');
      card.removeAttribute('data-feed-post-template');
      const postId = String(post.id || `profile_post_${index + 1}`);
      card.dataset.postId = postId;
      card.classList.add('lb-profile-feedPost');
      card.classList.toggle('is-pinned', Boolean(post.isPinned));

      const author = card.querySelector('.lb-post-card__author');
      const avatar = card.querySelector('.lb-post-card__avatar');
      const handle = card.querySelector('.lb-post-card__handle');
      const time = card.querySelector('.lb-post-card__time');
      const body = card.querySelector('.lb-post-card__body');
      const labelsRow = card.querySelector('[data-post-labels]');
      const reactionRow = card.querySelector('[data-reaction-chips]');
      const postMenuAction = card.querySelector('[data-profile-post-action="pin"]');
      const postMenuToggle = card.querySelector('[data-profile-post-menu-toggle]');
      if (postMenuAction) {
        postMenuAction.textContent = post.isPinned ? 'Unpin post' : 'Pin post';
      }
      if (postMenuToggle) {
        postMenuToggle.setAttribute('aria-expanded', 'false');
      }

      if (author) {
        author.setAttribute('aria-label', `Open ${(post.handle || currentProfileHandle)} profile`);
        author.addEventListener('click', (event) => event.preventDefault());
      }

      if (avatar && currentProfilePhotoUrl) {
        avatar.style.backgroundImage = `url("${currentProfilePhotoUrl}")`;
      }

      if (handle) handle.textContent = post.handle || currentProfileHandle;
      if (time) time.textContent = formatRelativePostTime(post.createdAt);
      if (body) body.textContent = String(post.text || '').trim();

      if (labelsRow) {
        labelsRow.innerHTML = '';
        (post.labels || []).forEach((labelValue) => {
          const normalizedId = String(labelValue || '').trim();
          const labelDef = labelById.get(normalizedId);
          const chip = document.createElement('span');
          chip.className = 'lb-post-card__labelChip';
          chip.textContent = labelDef ? labelDef.label : normalizedId;
          if (labelDef) {
            chip.dataset.labelGroup = labelDef.group;
          }
          labelsRow.appendChild(chip);
        });
        labelsRow.hidden = labelsRow.children.length === 0;
      }

      if (reactionRow) {
        reactionRow.innerHTML = '';
        const addChip = document.createElement('button');
        addChip.className = 'lb-reaction-chip lb-reaction-chip--add';
        addChip.type = 'button';
        addChip.dataset.addReaction = '';
        addChip.dataset.postId = postId;
        addChip.setAttribute('aria-label', 'Add reaction');
        addChip.title = 'Add reaction';
        addChip.innerHTML = `
          <span class="lb-reaction-chip__plusFace" aria-hidden="true">
            <span class="lb-reaction-chip__face">☺</span>
            <span class="lb-reaction-chip__plus">+</span>
          </span>
        `;
        reactionRow.appendChild(addChip);

        post.reactions.forEach((reaction) => {
          const chip = document.createElement('button');
          chip.className = 'lb-reaction-chip';
          chip.type = 'button';
          chip.dataset.reactionId = reaction.id;
          chip.dataset.postId = postId;
          chip.setAttribute('aria-label', `${reaction.label} reaction count ${reaction.count}`);

          if (reaction.type === 'image' && reaction.src) {
            chip.classList.add('lb-reaction-chip--sticker');
            const img = document.createElement('img');
            img.src = resolveProfileReactionAssetSrc(reaction.src);
            img.alt = '';
            img.setAttribute('aria-hidden', 'true');
            chip.appendChild(img);
          } else {
            const emoji = document.createElement('span');
            emoji.className = 'lb-reaction-chip__emoji';
            emoji.setAttribute('aria-hidden', 'true');
            emoji.textContent = reaction.value || '❤️';
            chip.appendChild(emoji);
          }

          const count = document.createElement('span');
          count.className = 'lb-reaction-chip__count';
          count.textContent = String(Math.max(0, Number.parseInt(String(reaction.count || 0), 10) || 0));
          chip.appendChild(count);

          if (post.viewerEngagement.reactions.includes(reaction.id)) {
            chip.classList.add('is-engaged');
          }

          reactionRow.appendChild(chip);
        });
      }

      const railButtons = Array.from(card.querySelectorAll('.lb-rail-action[data-action-type]'));
      railButtons.forEach((button, railIndex) => {
        const actionType = button.dataset.actionType || '';
        button.dataset.postId = postId;
        const countValue = Number.parseInt(String(post.actions[actionType] || 0), 10);
        let nextCount = Number.isFinite(countValue) ? Math.max(0, countValue) : 0;
        if (actionType === 'save' && isSavedItem('post', postId) && nextCount <= 0) {
          nextCount = 1;
        }
        setStandardActionCount(button, nextCount);

        const iconSvg = button.querySelector('.lb-rail-action__iconSvg');
        const iconPath = button.querySelector('.lb-rail-action__iconSvg path');
        if (iconSvg && iconPath && (actionType === 'react' || actionType === 'save')) {
          const gradientId = `lbProfileActionGradient-${postId}-${actionType}-${railIndex}`;
          createActionGradient(iconSvg, actionType, gradientId);
          iconPath.dataset.gradientId = gradientId;
        }

        const isEngaged = actionType === 'save'
          ? isSavedItem('post', postId)
          : post.viewerEngagement.actions.includes(actionType);
        if (actionType === 'react' || actionType === 'save') {
          setEngagementActionState(button, isEngaged);
        } else {
          button.classList.toggle('is-engaged', isEngaged);
          button.setAttribute('aria-pressed', String(isEngaged));
        }
      });

      const signalButtons = Array.from(card.querySelectorAll('.lb-signal-action[data-signal-type]'));
      signalButtons.forEach((button) => {
        const signalType = button.dataset.signalType || '';
        button.dataset.postId = postId;
        const countValue = Number.parseInt(String(post.signals[signalType] || 0), 10);
        setSignalActionCount(button, Number.isFinite(countValue) ? Math.max(0, countValue) : 0);
        const isEngaged = post.viewerEngagement.signals.includes(signalType);
        button.classList.toggle('is-engaged', isEngaged);
        button.setAttribute('aria-pressed', String(isEngaged));
      });

      const mediaSources = Array.isArray(post.images) ? post.images.filter(Boolean) : [];
      if (mediaSources.length) {
        const media = document.createElement('div');
        media.className = 'lb-profile-feedPost__media';
        mediaSources.forEach((src) => {
          const img = document.createElement('img');
          img.className = 'lb-profile-feedPost__image';
          img.src = src;
          img.alt = 'Profile post upload';
          img.loading = 'lazy';
          media.appendChild(img);
        });
        const contentCol = card.querySelector('.lb-post-card__contentCol');
        contentCol?.appendChild(media);
      }

      profilePostsList.appendChild(card);
    });
  };

  const openProfileReplyThread = (reply) => {
    if (!reply) return;
    if (!reply.originalAvailable) {
      showMiniToast('Original context unavailable.');
      return;
    }
    showMiniToast('View Byte placeholder');
    console.info('TODO: route to original thread', {
      originalType: reply.originalType,
      originalId: reply.originalId,
      replyId: reply.replyId,
    });
  };

  const renderProfileReplies = () => {
    if (!profileRepliesList || !profileRepliesEmpty) return;
    profileRepliesList.innerHTML = '';
    profileReplyById.clear();

    const replies = Array.isArray(profileReplies) ? profileReplies : [];
    profileRepliesEmpty.hidden = replies.length > 0;
    if (!replies.length) return;

    replies.forEach((reply) => {
      if (!reply?.replyId) return;
      profileReplyById.set(reply.replyId, reply);

      const card = document.createElement('article');
      card.className = 'lb-profile-replyCard';
      card.dataset.replyId = reply.replyId;
      card.dataset.openReplyThread = 'true';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Open thread for reply by ${reply.authorUsername || '@coco'}`);

      const head = document.createElement('header');
      head.className = 'lb-profile-replyCard__head';

      const avatar = document.createElement('span');
      avatar.className = 'lb-profile-replyCard__avatar';
      if (currentProfilePhotoUrl) {
        avatar.style.backgroundImage = `url("${currentProfilePhotoUrl}")`;
      }

      const meta = document.createElement('p');
      meta.className = 'lb-profile-replyCard__meta';
      const handle = String(reply.authorUsername || currentProfileHandle || '@coco');
      const time = String(reply.createdAtLabel || formatRelativePostTime(Date.now()));
      meta.innerHTML = `${handle} <span class="lb-profile-replyCard__dot" aria-hidden="true">·</span> ${time}`;

      head.append(avatar, meta);
      card.appendChild(head);

      const body = document.createElement('p');
      body.className = 'lb-profile-replyCard__text is-clamped';
      body.textContent = String(reply.replyText || '');
      card.appendChild(body);

      const needsReadMore = body.textContent.length > 180;

      if (reply.replyImageUrl) {
        const thumb = document.createElement('img');
        thumb.className = 'lb-profile-replyCard__thumb';
        thumb.src = String(reply.replyImageUrl);
        thumb.alt = 'Reply image';
        card.appendChild(thumb);
      }

      const context = document.createElement('div');
      context.className = 'lb-profile-replyCard__context';

      const contextLine = document.createElement('p');
      contextLine.className = 'lb-profile-replyCard__contextLine';

      const contextPreview = document.createElement('p');
      contextPreview.className = 'lb-profile-replyCard__contextPreview';

      if (!reply.originalAvailable) {
        if (reply.originalType === 'post') {
          contextLine.textContent = 'Original post unavailable.';
        } else if (reply.originalType === 'comment') {
          contextLine.textContent = 'Original comment unavailable.';
        } else {
          contextLine.textContent = 'Original context unavailable.';
        }
        contextPreview.textContent = '';
      } else {
        contextLine.textContent = `Replying to ${reply.originalAuthorUsername || '@unknown'}`;
        contextPreview.textContent = String(reply.originalTextPreview || '');
      }

      context.append(contextLine, contextPreview);

      if (reply.originalAvailable && reply.originalImageThumbnail) {
        const contextThumb = document.createElement('img');
        contextThumb.className = 'lb-profile-replyCard__contextThumb';
        contextThumb.src = String(reply.originalImageThumbnail);
        contextThumb.alt = 'Original context image';
        context.appendChild(contextThumb);
      }

      card.appendChild(context);

      const actions = document.createElement('div');
      actions.className = 'lb-profile-replyCard__actions';

      if (needsReadMore) {
        const readMore = document.createElement('button');
        readMore.className = 'lb-profile-replyCard__readMore';
        readMore.type = 'button';
        readMore.dataset.replyReadMore = reply.replyId;
        readMore.textContent = 'Read more';
        actions.appendChild(readMore);
      }

      const viewThread = document.createElement('button');
      viewThread.className = 'lb-profile-replyCard__viewThread';
      viewThread.type = 'button';
      viewThread.dataset.viewReplyThread = reply.replyId;
      viewThread.textContent = 'View Byte';
      actions.appendChild(viewThread);

      const saveButton = document.createElement('button');
      const replySaved = isSavedItem('comment', reply.replyId);
      const replySaveCount = Math.max(0, Number.parseInt(String(reply.saveCount || 0), 10) || 0);
      saveButton.className = `lb-profile-replyCard__save${replySaved ? ' is-active' : ''}`;
      saveButton.type = 'button';
      saveButton.dataset.replySaveId = reply.replyId;
      saveButton.setAttribute('aria-label', replySaved ? 'Remove from View Byte' : 'Save to View Byte');
      saveButton.setAttribute('aria-pressed', String(replySaved));
      saveButton.innerHTML = `
        <svg class="lb-profile-replyCard__saveIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="${railIconPathByType.save}"></path>
        </svg>
        <span class="lb-profile-replyCard__saveCount" ${replySaveCount > 0 ? '' : 'hidden'}>${replySaveCount}</span>
      `;
      actions.appendChild(saveButton);

      card.appendChild(actions);
      profileRepliesList.appendChild(card);
    });
  };

  const readProfileEditState = () => {
    try {
      const raw = localStorage.getItem('lb_profile_edit_data') || sessionStorage.getItem('lb_profile_edit_data');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (error) {
      console.warn('Loverbyte profile: failed to parse edited profile state.', error);
      return null;
    }
  };

  const renderProfileMetaLine = ({ username, pronouns, ageBand, occupation, showAgeRange, showOccupation }) => {
    if (!profileMetaLine) return;
    const normalizedUsername = String(username || '@coco').trim();
    const usernameText = normalizedUsername.startsWith('@') ? normalizedUsername : `@${normalizedUsername}`;

    const metaParts = [usernameText];

    const normalizedPronouns = String(pronouns || '').trim();
    if (normalizedPronouns && normalizedPronouns.toLowerCase() !== 'prefer not to say') {
      metaParts.push(normalizedPronouns);
    }

    if (Boolean(showAgeRange) && String(ageBand || '').trim()) {
      metaParts.push(String(ageBand).trim());
    }

    if (Boolean(showOccupation) && String(occupation || '').trim()) {
      metaParts.push(String(occupation).trim());
    }

    profileMetaLine.textContent = '';
    metaParts.forEach((part, index) => {
      if (index > 0) {
        const dot = document.createElement('span');
        dot.className = 'lb-profile-header__metaDot';
        dot.setAttribute('aria-hidden', 'true');
        dot.textContent = '·';
        profileMetaLine.appendChild(dot);
      }

      const span = document.createElement('span');
      span.textContent = part;
      if (index === 0) {
        span.className = 'lb-profile-header__metaUsername';
      }
      profileMetaLine.appendChild(span);
    });
  };

  const renderRomanceRow = () => {
    if (!profileRomanceRow) return;
    profileRomanceRow.innerHTML = '';
    const { mode, seeking, ageBand, location, intent } = profileRomanceSnapshot;

    if (!mode || mode === 'not_looking') {
      profileRomanceRow.hidden = true;
      return;
    }

    if (mode === 'not_open_to_crushes') {
      profileRomanceRow.hidden = false;
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'lb-romance-pill lb-romance-pill--closed';
      pill.textContent = '🚫 😅 Not Open to Crushes';
      pill.addEventListener('click', () => {
        showMiniToast(`${currentProfileHandle} isn't accepting Crushes right now.`);
      });
      profileRomanceRow.appendChild(pill);
      return;
    }

    if (mode === 'social_only') {
      profileRomanceRow.hidden = false;
      const tag = document.createElement('span');
      tag.className = 'lb-romance-chip lb-romance-chip--social';
      tag.textContent = '☕ Here for the Tea, Not the Crushes';
      profileRomanceRow.appendChild(tag);
      return;
    }

    // open_to_crushes
    profileRomanceRow.hidden = false;
    const chips = [seeking, ageBand, location, intent].filter(Boolean);
    chips.forEach((label) => {
      const chip = document.createElement('span');
      chip.className = 'lb-romance-chip';
      chip.textContent = label;
      profileRomanceRow.appendChild(chip);
    });

    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'lb-romance-pill';
    pill.dataset.openDatingCard = '';
    pill.textContent = '💘 Open to Crushes';
    pill.addEventListener('click', () => {
      const datingCardSection = document.querySelector('[data-dating-card]');
      if (!datingCardSection) {
        showMiniToast('Dating Card coming soon.');
        return;
      }
      datingCardSection.hidden = false;
      datingCardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      datingCardSection.classList.add('lb-profile-datingCard--highlight');
      setTimeout(() => {
        datingCardSection.classList.remove('lb-profile-datingCard--highlight');
      }, 1200);
    });
    profileRomanceRow.appendChild(pill);
  };

  const applyProfileSnapshot = () => {
    const edited = readProfileEditState() || {};
    const snapshot = {
      ...defaultProfileSnapshot,
      ...edited,
      username: defaultProfileSnapshot.username,
    };

    if (!String(snapshot.connectLinkLabel || '').trim() && String(snapshot.mainLinkLabel || '').trim()) {
      snapshot.connectLinkLabel = String(snapshot.mainLinkLabel || '').trim();
    }
    if (!String(snapshot.connectLinkUrl || '').trim() && String(snapshot.mainLinkUrl || '').trim()) {
      snapshot.connectLinkUrl = String(snapshot.mainLinkUrl || '').trim();
    }

    const displayName = String(snapshot.displayName || '').trim();
    if (displayName && profileName) profileName.textContent = displayName;
    currentProfileLink = buildProfileLinkFromUsername(snapshot.username);
    const normalizedUsername = String(snapshot.username || '@coco').trim();
    currentProfileHandle = normalizedUsername.startsWith('@') ? normalizedUsername : `@${normalizedUsername}`;

    let resolvedPronouns = '';
    if (snapshot.pronouns === 'self_describe') {
      resolvedPronouns = String(snapshot.pronounsCustom || '').trim();
    } else if (typeof snapshot.pronouns === 'string' && snapshot.pronouns) {
      resolvedPronouns = pronounsLabelByValue[snapshot.pronouns] ?? String(snapshot.pronouns).trim();
    }
    renderProfileMetaLine({
      username: snapshot.username,
      pronouns: resolvedPronouns,
      ageBand: snapshot.ageBand,
      occupation: snapshot.occupation,
      showAgeRange: snapshot.showAgeRange,
      showOccupation: snapshot.showOccupation,
    });

    const bio = String(snapshot.bio || '').trim();
    if (bio && profileBio) profileBio.textContent = bio;
    if (profileComposeHandle) profileComposeHandle.textContent = currentProfileHandle;
    if (profileComposeSheetHandle) profileComposeSheetHandle.textContent = currentProfileHandle;

    const photoUrl = String(snapshot.profilePhotoDataUrl || '').trim();
    currentProfilePhotoUrl = photoUrl;
    setAvatarNodeImageState(profileAvatar, photoUrl);
    setAvatarNodeImageState(profileComposeAvatar, photoUrl);
    setAvatarNodeImageState(profileComposeSheetAvatar, photoUrl);

    if (connectLink && connectLinkLabel) {
      const label = String(snapshot.connectLinkLabel || '').trim();
      const url = String(snapshot.connectLinkUrl || '').trim();
      const hasLink = Boolean(label && isHttpUrl(url));
      connectLink.hidden = !hasLink;
      if (hasLink) {
        connectLinkLabel.textContent = label;
        connectLink.href = url;
      }
    }

    currentTipOptions = [
      { provider: 'Cash App', url: resolveCashAppUrl(snapshot.cashAppLinkOrHandle) },
      { provider: 'Venmo', url: resolveVenmoUrl(snapshot.venmoLinkOrHandle) },
      { provider: 'PayPal', url: resolvePayPalUrl(snapshot.paypalLink) },
    ].filter((entry) => entry.url);
    if (tipLinkButton) {
      tipLinkButton.hidden = currentTipOptions.length === 0;
    }

    if (profileStats) {
      const followers = numberFormatter.format(Number.isFinite(Number(snapshot.followersCount)) ? Number(snapshot.followersCount) : 28953);
      const following = numberFormatter.format(Number.isFinite(Number(snapshot.followingCount)) ? Number(snapshot.followingCount) : 203);
      profileStats.innerHTML = `${followers} followers <span aria-hidden=\"true\">·</span> ${following} following`;
    }

    renderRomanceRow();
  };

  datingCardClose?.addEventListener('click', () => {
    const datingCardSection = document.querySelector('[data-dating-card]');
    if (datingCardSection) datingCardSection.hidden = true;
  });

  editProfileButton?.addEventListener('click', () => {
    window.location.href = './edit-profile.html';
  });

  const followButton = document.querySelector('[data-follow-btn]');
  followButton?.addEventListener('click', () => {
    const isFollowing = followButton.getAttribute('aria-pressed') === 'true';
    if (isFollowing) {
      followButton.setAttribute('aria-pressed', 'false');
      followButton.textContent = 'Follow';
      showMiniToast(`Unfollowed ${currentProfileHandle}`);
    } else {
      followButton.setAttribute('aria-pressed', 'true');
      followButton.textContent = 'Following';
      showMiniToast(`Following ${currentProfileHandle}`);
    }
  });

  copyProfileLinkButton?.addEventListener('click', async () => {
    const copied = await copyTextToClipboard(currentProfileLink);
    if (copied) {
      showMiniToast('Profile link copied');
      return;
    }
    showMiniToast('Could not copy. Link ready.');
    console.info('Loverbyte profile link:', currentProfileLink);
  });

  const applyTipToProfilePost = (postId) => {
    const index = getPostIndexById(postId);
    if (index < 0) return;
    const current = normalizeProfilePost(profilePosts[index]);
    const engagedBucket = current.viewerEngagement.signals;
    if (!engagedBucket.includes('tip')) {
      engagedBucket.push('tip');
      current.signals.tip = Math.max(0, Number(current.signals?.tip || 0)) + 1;
      profilePosts[index] = current;
      persistProfilePosts(profilePosts);
      renderProfilePosts();
      showMiniToast('Tip counted ☕');
    }
  };

  const isTipModalOpen = () => Boolean(tipModal && !tipModal.hidden);

  const closeTipModal = ({ restoreFocus = true } = {}) => {
    if (!tipModal) return;
    tipModal.hidden = true;
    syncBodyScrollLock();
    if (restoreFocus) {
      if (activeTipTarget?.kind === 'post') {
        const tipButton = document.querySelector(`.lb-signal-action[data-post-id="${activeTipTarget.postId}"][data-signal-type="tip"]`);
        if (tipButton instanceof HTMLElement) {
          tipButton.focus();
        } else {
          tipLinkButton?.focus();
        }
      } else {
        tipLinkButton?.focus();
      }
    }
    activeTipTarget = null;
  };

  const openTipModal = ({ target = null } = {}) => {
    if (!tipModal || !tipModalOptions) return;
    activeTipTarget = target;
    const handle = target?.handle || currentProfileHandle;
    if (tipModalTitle) tipModalTitle.textContent = `Tip ${handle}`;
    if (tipModalEmptyHandle) tipModalEmptyHandle.textContent = handle;

    tipModalOptions.innerHTML = '';
    currentTipOptions.forEach((entry) => {
      const button = document.createElement('button');
      button.className = 'lb-tip-modal__option';
      button.type = 'button';
      button.dataset.tipProvider = entry.provider;
      button.dataset.tipUrl = entry.url;
      button.textContent = entry.provider;
      tipModalOptions.appendChild(button);
    });

    const hasLinks = currentTipOptions.length > 0;
    if (tipModalOptions) tipModalOptions.hidden = !hasLinks;
    if (tipModalSub) tipModalSub.hidden = !hasLinks;
    if (tipModalFine) tipModalFine.hidden = !hasLinks;
    if (tipModalNote) tipModalNote.hidden = !hasLinks;
    if (tipModalEmpty) tipModalEmpty.hidden = hasLinks;

    tipModal.hidden = false;
    syncBodyScrollLock();
  };

  tipLinkButton?.addEventListener('click', () => {
    openTipModal({
      target: {
        kind: 'profile',
        handle: currentProfileHandle,
      },
    });
  });

  tipModalCloseTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      closeTipModal();
    });
  });

  tipModalOptions?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest('[data-tip-url]');
    if (!button) return;
    const url = String(button.getAttribute('data-tip-url') || '').trim();
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
    if (activeTipTarget?.kind === 'post' && activeTipTarget.postId) {
      applyTipToProfilePost(activeTipTarget.postId);
    }
    closeTipModal({ restoreFocus: false });
  });

  applyProfileSnapshot();

  const menuRoot = document.querySelector('[data-menu]');
  const menuTrigger = document.querySelector('.lb-profile-topbar__iconBtn');
  const menuBackdrop = document.querySelector('[data-menu-close]');
  const menuClose = document.querySelector('[data-menu-close-btn]');
  const menuDrawer = document.querySelector('[data-menu-drawer]');
  const menuItems = Array.from(document.querySelectorAll('[data-menu-item]'));
  const menuToggles = Array.from(document.querySelectorAll('[data-menu-toggle]'));
  const menuPanels = Array.from(document.querySelectorAll('[data-menu-panel]'));
  const menuSubitems = Array.from(document.querySelectorAll('[data-menu-subitem]'));
  const menuScreenRoot = document.querySelector('[data-menu-screen-root]');
  const menuScreenTitle = document.querySelector('[data-menu-screen-title]');
  const menuBackBtn = document.querySelector('[data-menu-back]');
  const menuViews = Array.from(document.querySelectorAll('[data-menu-view]'));
  const menuOpenScreenButtons = Array.from(document.querySelectorAll('[data-open-screen]'));

  const accountSettingsForm = document.querySelector('[data-menu-form="account-settings"]');
  const tipsSupportForm = document.querySelector('[data-menu-form="tips-support-links"]');
  const accountSettingsNote = document.querySelector('[data-menu-form-note="account-settings"]');
  const tipsSupportNote = document.querySelector('[data-menu-form-note="tips-support-links"]');
  const accountDisplayNameInput = document.querySelector('[data-account-display-name]');
  const accountPronounsInput = document.querySelector('[data-account-pronouns]');
  const accountShortBioInput = document.querySelector('[data-account-short-bio]');
  const accountUsernameInput = document.querySelector('[data-account-username]');
  const accountEmailInput = document.querySelector('[data-account-email]');
  const accountRecoveryEmailInput = document.querySelector('[data-account-recovery-email]');

  const notificationsRoot = document.querySelector('[data-notifications]');
  const notificationsOpen = document.querySelector('[data-notification-open]');
  const notificationsCloseTriggers = Array.from(document.querySelectorAll('[data-notification-close]'));

  const signalRoot = document.querySelector('[data-signal]');
  const signalOpenButton = document.querySelector('[data-signal-open]');
  const signalCloseBackdrop = document.querySelector('[data-signal-close]');
  const signalCancelButtons = Array.from(document.querySelectorAll('[data-signal-cancel]'));
  const signalText = document.querySelector('[data-signal-text]');
  const signalSend = document.querySelector('[data-signal-send]');
  const signalTime = document.querySelector('[data-signal-time]');
  const signalImageBtn = document.querySelector('[data-signal-image]');
  const signalEmojiBtn = document.querySelector('[data-signal-emoji]');
  const signalLabelBtn = document.querySelector('[data-signal-label]');
  const signalImageInput = document.querySelector('[data-signal-image-input]');
  const signalCounts = document.querySelector('[data-signal-counts]');
  const signalError = document.querySelector('[data-signal-error]');
  const signalPreview = document.querySelector('[data-signal-preview]');
  const signalLabels = document.querySelector('[data-signal-labels]');

  const menuFocusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const menuState = {
    supportLinks: {
      cashApp: '',
      venmo: '',
      paypal: '',
    },
  };

  const readStoredValue = (key, fallback = '') => {
    const sessionValue = sessionStorage.getItem(key);
    if (sessionValue !== null) return sessionValue;
    const localValue = localStorage.getItem(key);
    if (localValue !== null) return localValue;
    return fallback;
  };

  const readStoredSupportLinks = () => {
    const sessionValue = sessionStorage.getItem('lb_support_links');
    const localValue = localStorage.getItem('lb_support_links');
    const raw = sessionValue || localValue;
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return {
        cashApp: String(parsed.cashApp || ''),
        venmo: String(parsed.venmo || ''),
        paypal: String(parsed.paypal || ''),
      };
    } catch (error) {
      console.warn('Loverbyte profile: failed to parse support links.', error);
      return null;
    }
  };

  const isMenuOpen = () => Boolean(menuRoot && !menuRoot.hidden && menuRoot.classList.contains('is-open'));
  const isNotificationsOpen = () => Boolean(notificationsRoot && !notificationsRoot.hidden);
  const isSignalOpen = () => Boolean(signalRoot && !signalRoot.hidden);
  const isProfileComposeOpen = () => Boolean(profileComposeRoot && !profileComposeRoot.hidden);
  const isLabelPickerOpen = () => Boolean(labelPickerRoot && !labelPickerRoot.hidden);

  const syncBodyScrollLock = () => {
    const hasOpenOverlay = isMenuOpen() || isSignalOpen() || isNotificationsOpen() || isProfileComposeOpen() || isLabelPickerOpen() || isTipModalOpen();
    document.body.style.overflow = hasOpenOverlay ? 'hidden' : '';
  };

  const getMenuFocusables = () => {
    if (!menuDrawer) return [];
    return Array.from(menuDrawer.querySelectorAll(menuFocusableSelector));
  };

  const setAccordion = (target, shouldOpen) => {
    menuToggles.forEach((toggle) => {
      const key = toggle.dataset.menuToggle;
      const panel = menuPanels.find((entry) => entry.dataset.menuPanel === key);
      const isTarget = key === target;
      const expanded = isTarget && shouldOpen;
      toggle.setAttribute('aria-expanded', String(expanded));
      if (panel) panel.hidden = !expanded;
    });
  };

  const resetMenuToMainState = ({ collapseAccordions = true } = {}) => {
    if (menuDrawer) menuDrawer.classList.remove('is-subscreen');
    if (menuScreenRoot) menuScreenRoot.hidden = true;
    menuViews.forEach((view) => {
      view.hidden = true;
    });
    if (menuScreenTitle) menuScreenTitle.textContent = 'Menu';
    if (collapseAccordions) setAccordion('', false);
  };

  const menuViewTitles = {
    'account-settings': 'Account Settings',
    'privacy-safety': 'Privacy & Safety',
    'tips-support-links': 'Tips & Support Links',
    'blocked-users': 'Blocked Users',
    faq: 'FAQ',
    'contact-support': 'Contact Support',
    'report-problem': 'Report a Problem',
    'terms-policies': 'Terms & Policies',
    'house-rules': 'House Rules',
    'how-loverbyte-works': 'How Loverbyte Works',
    'dating-safety-tips': 'Dating Safety Tips',
    'tips-better-posts': 'Tips for Better Posts',
  };

  let lastFocusedElement = null;
  let menuCloseTimer = null;

  const openMenuScreen = (screenKey) => {
    if (!menuDrawer || !menuScreenRoot) return;
    const targetView = menuViews.find((view) => view.dataset.menuView === screenKey);
    if (!targetView) return;

    menuDrawer.classList.add('is-subscreen');
    menuScreenRoot.hidden = false;
    menuViews.forEach((view) => {
      view.hidden = view !== targetView;
    });
    if (menuScreenTitle) menuScreenTitle.textContent = menuViewTitles[screenKey] || 'Menu';

    requestAnimationFrame(() => {
      const focusables = getMenuFocusables();
      (focusables[0] || menuDrawer)?.focus();
    });
  };

  const closeMenuScreen = () => {
    if (!menuDrawer || !menuScreenRoot) return;
    resetMenuToMainState({ collapseAccordions: false });
    requestAnimationFrame(() => {
      menuToggles[0]?.focus();
    });
  };

  const openMenu = () => {
    if (!menuRoot || !menuDrawer) return;
    if (menuCloseTimer) {
      window.clearTimeout(menuCloseTimer);
      menuCloseTimer = null;
    }

    lastFocusedElement = document.activeElement;
    resetMenuToMainState({ collapseAccordions: true });
    menuRoot.hidden = false;
    menuTrigger?.setAttribute('aria-expanded', 'true');
    syncBodyScrollLock();

    requestAnimationFrame(() => {
      menuRoot.classList.add('is-open');
      const focusables = getMenuFocusables();
      (focusables[0] || menuDrawer)?.focus();
    });
  };

  const closeMenu = ({ restoreFocus = true } = {}) => {
    if (!menuRoot) return;
    menuRoot.classList.remove('is-open');
    menuTrigger?.setAttribute('aria-expanded', 'false');
    resetMenuToMainState({ collapseAccordions: true });

    const completeClose = () => {
      menuRoot.hidden = true;
      menuCloseTimer = null;
      syncBodyScrollLock();
      if (restoreFocus && lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
      }
    };

    menuCloseTimer = window.setTimeout(completeClose, 260);
  };

  const handleMenuItem = (type) => {
    if (!type) return;
    closeMenu();
    if (type === 'logout') {
      showMiniToast('Log out placeholder');
      return;
    }
    showMiniToast('Menu action placeholder');
  };

  const hydrateAccountSettings = () => {
    if (!accountSettingsForm) return;

    const displayName = readStoredValue('lb_display_name', 'Coco');
    const username = readStoredValue('lb_username', 'coco');
    const email = readStoredValue('lb_account_email', 'coco@loverbyte.app');
    const pronouns = readStoredValue('lb_pronouns', 'she/her');
    const shortBio = readStoredValue('lb_short_bio', 'Pop culture brain, soft heart, strong opinions.');
    const recoveryEmail = readStoredValue('lb_recovery_email', '');

    if (accountDisplayNameInput) accountDisplayNameInput.value = displayName;
    if (accountPronounsInput) accountPronounsInput.value = pronouns;
    if (accountShortBioInput) accountShortBioInput.value = shortBio;
    if (accountUsernameInput) accountUsernameInput.value = `@${String(username).replace(/^@+/, '')}`;
    if (accountEmailInput) accountEmailInput.value = email;
    if (accountRecoveryEmailInput) accountRecoveryEmailInput.value = recoveryEmail;
  };

  const hydrateTipsSupportLinks = () => {
    const stored = readStoredSupportLinks();
    if (stored) menuState.supportLinks = stored;

    if (!tipsSupportForm) return;
    const cashInput = tipsSupportForm.querySelector('input[name="cashApp"]');
    const venmoInput = tipsSupportForm.querySelector('input[name="venmo"]');
    const paypalInput = tipsSupportForm.querySelector('input[name="paypal"]');
    if (cashInput) cashInput.value = menuState.supportLinks.cashApp;
    if (venmoInput) venmoInput.value = menuState.supportLinks.venmo;
    if (paypalInput) paypalInput.value = menuState.supportLinks.paypal;
  };

  const openNotifications = () => {
    if (!notificationsRoot) return;
    notificationsRoot.hidden = false;
    syncBodyScrollLock();
    requestAnimationFrame(() => {
      const closeBtn = notificationsRoot.querySelector('[data-notification-close]');
      closeBtn?.focus();
    });
  };

  const closeNotifications = ({ restoreFocus = true } = {}) => {
    if (!notificationsRoot) return;
    notificationsRoot.hidden = true;
    syncBodyScrollLock();
    if (restoreFocus) notificationsOpen?.focus();
  };

  let signalImages = [];
  let signalLabelIds = [];
  const allowedImageMimeTypes = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif']);

  const renderSignalPreview = () => {
    if (!signalPreview) return;
    signalPreview.innerHTML = '';

    if (!signalImages.length) {
      signalPreview.hidden = true;
      return;
    }

    signalImages.forEach((item, index) => {
      const wrap = document.createElement('div');
      wrap.className = 'lb-signal__thumbWrap';

      const img = document.createElement('img');
      img.className = 'lb-signal__thumb';
      img.src = item.url;
      img.alt = 'Selected signal upload';

      const removeBtn = document.createElement('button');
      removeBtn.className = 'lb-signal__thumbRemove';
      removeBtn.type = 'button';
      removeBtn.textContent = '×';
      removeBtn.setAttribute('aria-label', `Remove image ${index + 1}`);
      removeBtn.dataset.removeSignalImage = String(index);

      wrap.append(img, removeBtn);
      signalPreview.appendChild(wrap);
    });

    signalPreview.hidden = false;
  };

  const renderSignalLabelChips = () => {
    if (!signalLabels) return;
    signalLabels.innerHTML = '';

    if (!signalLabelIds.length) {
      signalLabels.hidden = true;
      return;
    }

    signalLabelIds.forEach((labelId) => {
      const label = labelById.get(labelId);
      if (!label) return;
      const chip = document.createElement('span');
      chip.className = 'lb-signal__labelChip';
      chip.textContent = label.label;

      const removeButton = document.createElement('button');
      removeButton.className = 'lb-signal__removeLabel';
      removeButton.type = 'button';
      removeButton.setAttribute('aria-label', `Remove label ${label.label}`);
      removeButton.dataset.removeLabelId = labelId;
      removeButton.textContent = '×';

      chip.appendChild(removeButton);
      signalLabels.appendChild(chip);
    });

    signalLabels.hidden = false;
  };

  const syncSignalState = () => {
    if (!signalText || !signalSend) return;

    const messageLength = signalText.value.length;
    const hasMessage = signalText.value.trim().length > 0;
    const hasImage = signalImages.length > 0;
    signalSend.disabled = !hasMessage && !hasImage;

    if (signalCounts) {
      signalCounts.textContent = `${signalImages.length}/2 images · ${messageLength}/280`;
    }

    signalImageBtn?.classList.toggle('is-active', signalImages.length > 0);
    signalLabelBtn?.classList.toggle('is-active', signalLabelIds.length > 0);

    renderSignalLabelChips();
    renderSignalPreview();
  };

  const formatSignalLocalTime = () => {
    const stamp = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date());

    return `Posting from your local time · ${stamp}`;
  };

  const openSignal = () => {
    if (!signalRoot) return;
    signalRoot.hidden = false;
    syncBodyScrollLock();
    if (signalTime) signalTime.textContent = formatSignalLocalTime();
    if (signalError) signalError.textContent = '';
    syncSignalState();
    requestAnimationFrame(() => signalText?.focus());
  };

  const closeSignal = ({ restoreFocus = true } = {}) => {
    if (!signalRoot) return;
    signalRoot.hidden = true;

    if (signalText) signalText.value = '';
    if (signalImageInput) signalImageInput.value = '';

    signalImages.forEach((item) => URL.revokeObjectURL(item.url));
    signalImages = [];
    signalLabelIds = [];
    if (isLabelPickerOpen() && activeLabelContext === 'signal') {
      closeLabelPicker({ restoreFocus: false });
    }

    if (signalError) signalError.textContent = '';

    syncSignalState();
    syncBodyScrollLock();
    if (restoreFocus) signalOpenButton?.focus();
  };

  const renderProfileComposeLabelChips = () => {
    if (!profileComposeLabels) return;
    profileComposeLabels.innerHTML = '';

    if (!profileComposeLabelIds.length) {
      profileComposeLabels.hidden = true;
      return;
    }

    profileComposeLabelIds.forEach((labelId) => {
      const label = labelById.get(labelId);
      if (!label) return;
      const chip = document.createElement('span');
      chip.className = 'lb-compose__labelChip';
      chip.textContent = label.label;
      chip.dataset.labelGroup = label.group;

      const removeButton = document.createElement('button');
      removeButton.className = 'lb-compose__labelRemove';
      removeButton.type = 'button';
      removeButton.setAttribute('aria-label', `Remove ${label.label}`);
      removeButton.dataset.removeProfileComposeLabel = labelId;
      removeButton.textContent = '×';

      chip.appendChild(removeButton);
      profileComposeLabels.appendChild(chip);
    });

    profileComposeLabels.hidden = false;
  };

  const renderProfileComposePreview = () => {
    if (!profileComposePreview) return;
    profileComposePreview.innerHTML = '';

    if (!profileComposeImages.length) {
      profileComposePreview.hidden = true;
      return;
    }

    profileComposeImages.forEach((item, index) => {
      const wrap = document.createElement('div');
      wrap.className = 'lb-compose__thumbWrap';

      const img = document.createElement('img');
      img.className = 'lb-compose__thumb';
      img.src = item.url;
      img.alt = 'Selected upload';

      const removeBtn = document.createElement('button');
      removeBtn.className = 'lb-compose__thumbRemove';
      removeBtn.type = 'button';
      removeBtn.textContent = '×';
      removeBtn.setAttribute('aria-label', `Remove image ${index + 1}`);
      removeBtn.dataset.removeProfileComposeImage = String(index);

      wrap.append(img, removeBtn);
      profileComposePreview.appendChild(wrap);
    });

    profileComposePreview.hidden = false;
  };

  const resetProfileComposeDraft = () => {
    if (profileComposeText) profileComposeText.value = '';
    if (profileComposeImageInput) profileComposeImageInput.value = '';
    profileComposeImages.forEach((item) => URL.revokeObjectURL(item.url));
    profileComposeImages = [];
    profileComposeLabelIds = [];
    if (profileComposeError) profileComposeError.textContent = '';
    if (isLabelPickerOpen() && activeLabelContext === 'profile_compose') {
      closeLabelPicker({ restoreFocus: false });
    }
  };

  const getActiveSelectedLabels = () => (activeLabelContext === 'signal' ? signalLabelIds : profileComposeLabelIds);

  const setActiveSelectedLabels = (nextValue) => {
    if (activeLabelContext === 'signal') {
      signalLabelIds = nextValue;
      return;
    }
    profileComposeLabelIds = nextValue;
  };

  const syncLabelCounter = () => {
    if (!labelCounter) return;
    const activeLabels = getActiveSelectedLabels();
    labelCounter.textContent = `${activeLabels.length}/2 selected`;
    labelCounter.classList.toggle('is-full', activeLabels.length >= 2);
  };

  const renderLabelPicker = () => {
    if (!labelGroups) return;
    labelGroups.innerHTML = '';

    labelGroupsOrder.forEach((groupName) => {
      const groupLabels = postLabels.filter((item) => item.group === groupName);
      if (!groupLabels.length) return;

      const group = document.createElement('section');
      group.className = 'lb-label-group';

      const title = document.createElement('p');
      title.className = 'lb-label-group__title';
      title.textContent = groupName;
      group.appendChild(title);

      const chips = document.createElement('div');
      chips.className = 'lb-label-group__chips';

      groupLabels.forEach((item) => {
        const chip = document.createElement('button');
        chip.className = 'lb-label-picker__chip';
        chip.type = 'button';
        chip.dataset.labelId = item.id;
        chip.dataset.labelGroup = item.group;
        chip.textContent = item.label;
        chip.classList.toggle('is-selected', getActiveSelectedLabels().includes(item.id));
        chips.appendChild(chip);
      });

      group.appendChild(chips);
      labelGroups.appendChild(group);
    });

    syncLabelCounter();
  };

  const openLabelPicker = (context = 'profile_compose') => {
    if (!labelPickerRoot) return;
    activeLabelContext = context;
    renderLabelPicker();
    labelPickerRoot.hidden = false;
    syncBodyScrollLock();
  };

  const closeLabelPicker = ({ restoreFocus = true } = {}) => {
    if (!labelPickerRoot) return;
    labelPickerRoot.hidden = true;
    syncBodyScrollLock();
    if (!restoreFocus) return;
    if (activeLabelContext === 'signal') {
      signalLabelBtn?.focus();
      return;
    }
    profileComposeLabelBtn?.focus();
  };

  const syncProfileComposeState = () => {
    if (!profileComposeText || !profileComposePost || !profileComposeCounts) return;
    const length = profileComposeText.value.length;
    const hasContent = profileComposeText.value.trim().length > 0;
    const hasImage = profileComposeImages.length > 0;
    profileComposePost.disabled = !hasContent && !hasImage;
    profileComposeCounts.textContent = `${profileComposeImages.length}/2 images · ${length}/1000`;
    profileComposeImageBtn?.classList.toggle('is-active', profileComposeImages.length > 0);
    profileComposeLabelBtn?.classList.toggle('is-active', profileComposeLabelIds.length > 0);
    renderProfileComposeLabelChips();
    renderProfileComposePreview();
  };

  const openProfileCompose = () => {
    if (!profileComposeRoot) return;
    profileComposeRoot.hidden = false;
    syncBodyScrollLock();
    syncProfileComposeState();
    requestAnimationFrame(() => profileComposeText?.focus());
  };

  const closeProfileCompose = ({ restoreFocus = true } = {}) => {
    if (!profileComposeRoot) return;
    profileComposeRoot.hidden = true;
    resetProfileComposeDraft();
    syncProfileComposeState();
    syncBodyScrollLock();
    if (restoreFocus && profileComposeOpenTriggers[0]) {
      profileComposeOpenTriggers[0].focus();
    }
  };

  setAccordion('', false);
  hydrateAccountSettings();
  hydrateTipsSupportLinks();
  renderProfilePosts();
  renderProfileReplies();
  renderViewByteList();
  setActiveReactionPickerTab('standard');
  renderReactionPickerGrid();
  syncProfileComposeState();

  menuTrigger?.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMenu();
      return;
    }
    openMenu();
  });

  menuBackdrop?.addEventListener('click', () => closeMenu());
  menuClose?.addEventListener('click', () => closeMenu());

  menuItems.forEach((item) => {
    item.addEventListener('click', () => handleMenuItem(item.dataset.menuItem));
  });

  menuToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const key = toggle.dataset.menuToggle;
      if (!key) return;
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      setAccordion(key, !isExpanded);
    });
  });

  menuSubitems.forEach((subitem) => {
    subitem.addEventListener('click', () => {
      const key = subitem.dataset.menuSubitem;
      if (!key) return;
      openMenuScreen(key);
    });
  });

  menuOpenScreenButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.openScreen;
      if (!target) return;
      openMenuScreen(target);
    });
  });

  menuBackBtn?.addEventListener('click', closeMenuScreen);

  accountSettingsForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const payload = {
      displayName: String(accountDisplayNameInput?.value || '').trim(),
      pronouns: String(accountPronounsInput?.value || '').trim(),
      shortBio: String(accountShortBioInput?.value || '').trim(),
      recoveryEmail: String(accountRecoveryEmailInput?.value || '').trim(),
    };

    sessionStorage.setItem('lb_display_name', payload.displayName);
    sessionStorage.setItem('lb_pronouns', payload.pronouns);
    sessionStorage.setItem('lb_short_bio', payload.shortBio);
    sessionStorage.setItem('lb_recovery_email', payload.recoveryEmail);
    localStorage.setItem('lb_display_name', payload.displayName);
    localStorage.setItem('lb_pronouns', payload.pronouns);
    localStorage.setItem('lb_short_bio', payload.shortBio);
    localStorage.setItem('lb_recovery_email', payload.recoveryEmail);

    if (accountSettingsNote) accountSettingsNote.textContent = 'Changes saved.';
    showMiniToast('Profile settings saved');
  });

  tipsSupportForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!tipsSupportForm) return;

    const formData = new FormData(tipsSupportForm);
    const cashApp = String(formData.get('cashApp') || '').trim();
    const venmo = String(formData.get('venmo') || '').trim();
    const paypal = String(formData.get('paypal') || '').trim();

    const invalidProvider =
      (!resolveCashAppUrl(cashApp) && cashApp && 'Cash App') ||
      (!resolveVenmoUrl(venmo) && venmo && 'Venmo') ||
      (!resolvePayPalUrl(paypal) && paypal && 'PayPal');
    if (invalidProvider) {
      if (tipsSupportNote) tipsSupportNote.textContent = `Use a valid ${invalidProvider} link only.`;
      return;
    }

    menuState.supportLinks = { cashApp, venmo, paypal };
    const serialized = JSON.stringify(menuState.supportLinks);
    sessionStorage.setItem('lb_support_links', serialized);
    localStorage.setItem('lb_support_links', serialized);

    if (tipsSupportNote) tipsSupportNote.textContent = 'Support links saved.';
    showMiniToast('Support links saved');
  });

  notificationsOpen?.addEventListener('click', openNotifications);
  notificationsCloseTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => closeNotifications());
  });

  signalOpenButton?.addEventListener('click', openSignal);
  signalCloseBackdrop?.addEventListener('click', () => closeSignal());
  signalCancelButtons.forEach((button) => {
    button.addEventListener('click', () => closeSignal());
  });

  signalText?.addEventListener('input', () => {
    if (signalError) signalError.textContent = '';
    syncSignalState();
  });

  signalImageBtn?.addEventListener('click', () => {
    signalImageInput?.click();
  });

  signalEmojiBtn?.addEventListener('click', () => {
    signalText?.focus();
  });

  signalLabelBtn?.addEventListener('click', () => {
    if (signalError) signalError.textContent = '';
    openLabelPicker('signal');
  });

  signalImageInput?.addEventListener('change', () => {
    const selectedFiles = Array.from(signalImageInput.files || []);
    if (!selectedFiles.length) return;

    const nextImages = [...signalImages];
    if (signalError) signalError.textContent = '';

    let overflowed = false;

    selectedFiles.forEach((file) => {
      if (nextImages.length >= 2) {
        overflowed = true;
        return;
      }

      const fileType = String(file.type || '').toLowerCase();
      if (fileType.startsWith('video/')) {
        if (signalError) signalError.textContent = 'Videos are not supported yet.';
        return;
      }

      if (!fileType.startsWith('image/') || !allowedImageMimeTypes.has(fileType)) {
        if (signalError) signalError.textContent = 'Images only for now.';
        return;
      }

      nextImages.push({ file, url: URL.createObjectURL(file) });
    });

    if (overflowed && signalError && !signalError.textContent) {
      signalError.textContent = 'You can add up to 2 images.';
    }

    signalImages.forEach((item) => URL.revokeObjectURL(item.url));
    signalImages = nextImages;
    signalImageInput.value = '';
    syncSignalState();
  });

  signalPreview?.addEventListener('click', (event) => {
    const removeBtn = event.target.closest('[data-remove-signal-image]');
    if (!removeBtn) return;

    const index = Number.parseInt(removeBtn.dataset.removeSignalImage || '-1', 10);
    if (!Number.isInteger(index) || index < 0 || index >= signalImages.length) return;

    URL.revokeObjectURL(signalImages[index].url);
    signalImages.splice(index, 1);
    if (signalError) signalError.textContent = '';
    syncSignalState();
  });

  signalLabels?.addEventListener('click', (event) => {
    const remove = event.target.closest('[data-remove-label-id]');
    if (!remove) return;
    const id = remove.dataset.removeLabelId || '';
    if (!id) return;
    signalLabelIds = signalLabelIds.filter((entry) => entry !== id);
    if (signalError) signalError.textContent = '';
    if (isLabelPickerOpen() && activeLabelContext === 'signal') {
      renderLabelPicker();
    }
    syncSignalState();
  });

  signalSend?.addEventListener('click', () => {
    if (!signalText || signalSend.disabled) return;

    const payload = {
      postType: 'teaSignal',
      handle: '@coco',
      message: signalText.value.trim(),
      labels: [...signalLabelIds],
      imageCount: signalImages.length,
      postedAt: new Date().toISOString(),
    };

    console.info('Loverbyte profile MVP placeholder: tea signal posted', payload);
    showMiniToast('Tea Signal sent');
    closeSignal();
  });

  profileComposeOpenTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openProfileCompose();
    });
  });

  profileComposeCloseTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      closeProfileCompose();
    });
  });

  profileComposeText?.addEventListener('input', () => {
    if (profileComposeError) profileComposeError.textContent = '';
    syncProfileComposeState();
  });

  profileComposeImageBtn?.addEventListener('click', () => {
    profileComposeImageInput?.click();
  });

  profileComposeEmojiBtn?.addEventListener('click', () => {
    profileComposeText?.focus();
  });

  profileComposeLabelBtn?.addEventListener('click', () => {
    if (profileComposeError) profileComposeError.textContent = '';
    openLabelPicker('profile_compose');
  });

  labelPickerClose?.addEventListener('click', () => closeLabelPicker());
  labelPickerDone?.addEventListener('click', () => closeLabelPicker());

  labelGroups?.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-label-id]');
    if (!chip) return;
    const id = chip.dataset.labelId || '';
    if (!id || !labelById.has(id)) return;

    const activeError = activeLabelContext === 'signal' ? signalError : profileComposeError;
    let activeLabels = [...getActiveSelectedLabels()];

    if (activeLabels.includes(id)) {
      activeLabels = activeLabels.filter((entry) => entry !== id);
      if (activeError) activeError.textContent = '';
    } else {
      if (activeLabels.length >= 2) {
        if (activeError) activeError.textContent = 'Two labels max. Don’t make the post wear too many necklaces.';
        return;
      }
      activeLabels.push(id);
      if (activeError) activeError.textContent = '';
    }

    setActiveSelectedLabels(activeLabels);
    renderLabelPicker();
    if (activeLabelContext === 'signal') {
      syncSignalState();
    } else {
      syncProfileComposeState();
    }
  });

  profileComposeImageInput?.addEventListener('change', () => {
    const selectedFiles = Array.from(profileComposeImageInput.files || []);
    if (!selectedFiles.length) return;

    const nextImages = [...profileComposeImages];
    if (profileComposeError) profileComposeError.textContent = '';
    let overflowed = false;

    selectedFiles.forEach((file) => {
      if (nextImages.length >= 2) {
        overflowed = true;
        return;
      }

      const fileType = String(file.type || '').toLowerCase();
      if (fileType.startsWith('video/')) {
        if (profileComposeError) profileComposeError.textContent = 'Videos are not supported yet.';
        return;
      }

      if (!fileType.startsWith('image/') || !allowedComposeImageMimeTypes.has(fileType)) {
        if (profileComposeError) profileComposeError.textContent = 'Images only for now.';
        return;
      }

      nextImages.push({ file, url: URL.createObjectURL(file) });
    });

    if (overflowed && profileComposeError && !profileComposeError.textContent) {
      profileComposeError.textContent = 'You can add up to 2 images.';
    }

    profileComposeImages.forEach((item) => URL.revokeObjectURL(item.url));
    profileComposeImages = nextImages;
    profileComposeImageInput.value = '';
    syncProfileComposeState();
  });

  profileComposePreview?.addEventListener('click', (event) => {
    const removeBtn = event.target.closest('[data-remove-profile-compose-image]');
    if (!removeBtn) return;
    const index = Number.parseInt(removeBtn.dataset.removeProfileComposeImage || '-1', 10);
    if (!Number.isInteger(index) || index < 0 || index >= profileComposeImages.length) return;

    URL.revokeObjectURL(profileComposeImages[index].url);
    profileComposeImages.splice(index, 1);
    if (profileComposeError) profileComposeError.textContent = '';
    syncProfileComposeState();
  });

  profileComposeLabels?.addEventListener('click', (event) => {
    const remove = event.target.closest('[data-remove-profile-compose-label]');
    if (!remove) return;
    const id = remove.dataset.removeProfileComposeLabel || '';
    if (!id) return;
    profileComposeLabelIds = profileComposeLabelIds.filter((entry) => entry !== id);
    if (profileComposeError) profileComposeError.textContent = '';
    if (isLabelPickerOpen() && activeLabelContext === 'profile_compose') {
      renderLabelPicker();
    }
    syncProfileComposeState();
  });

  profileComposePost?.addEventListener('click', async () => {
    if (!profileComposeText) return;
    const text = profileComposeText.value.trim();
    if (!text && !profileComposeImages.length) return;

    const labelsSnapshot = [...profileComposeLabelIds];
    let imageSnapshot = [];
    try {
      imageSnapshot = await Promise.all(
        profileComposeImages.map(async (item) => {
          if (item.file instanceof File) {
            const dataUrl = await fileToDataUrl(item.file);
            return dataUrl || item.url;
          }
          return item.url;
        })
      );
    } catch (error) {
      console.warn('Loverbyte profile: failed to encode compose image.', error);
      imageSnapshot = profileComposeImages.map((item) => item.url);
    }

    const nextPost = {
      id: `profile-post-${Date.now()}`,
      handle: currentProfileHandle,
      text,
      labels: labelsSnapshot,
      images: imageSnapshot,
      reactions: [],
      actions: { react: 0, reply: 0, save: 0 },
      signals: { tip: 0, poke: 0, crush: 0 },
      viewerEngagement: { reactions: [], actions: [], signals: [] },
      createdAt: Date.now(),
    };

    profilePosts = [nextPost, ...profilePosts];
    persistProfilePosts(profilePosts);
    renderProfilePosts();
    setActiveTab('posts');
    showMiniToast('Posted from profile');
    closeProfileCompose();
  });

  profilePostsList?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const menuToggle = target.closest('[data-profile-post-menu-toggle]');
    if (menuToggle) {
      const menuWrap = menuToggle.closest('.lb-profile-feedPost__menuWrap');
      const menu = menuWrap?.querySelector('[data-profile-post-menu]');
      if (!menu) return;
      const isOpen = !menu.hidden;
      closeProfilePostMenus();
      menu.hidden = isOpen;
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      return;
    }

    const menuAction = target.closest('[data-profile-post-action]');
    if (menuAction) {
      const action = menuAction.getAttribute('data-profile-post-action') || '';
      const postCard = menuAction.closest('[data-post-id]');
      const postId = postCard?.getAttribute('data-post-id') || '';
      if (!postId) return;
      closeProfilePostMenus();
      if (action === 'pin') {
        togglePinProfilePost(postId);
        return;
      }
      if (action === 'delete') {
        deleteProfilePost(postId);
        return;
      }
    }

    const addReaction = target.closest('[data-add-reaction]');
    if (addReaction) {
      const postId = addReaction.getAttribute('data-post-id') || '';
      if (!postId) return;
      closeProfilePostMenus();
      openReactionPickerForPost(postId);
      return;
    }

    const reactionChip = target.closest('[data-reaction-id]');
    if (reactionChip) {
      const postId = reactionChip.getAttribute('data-post-id') || '';
      const reactionId = reactionChip.getAttribute('data-reaction-id') || '';
      if (!postId || !reactionId) return;
      closeProfilePostMenus();
      bumpProfilePostReaction(postId, reactionId);
      return;
    }

    const railAction = target.closest('[data-action-type]');
    if (railAction) {
      const postId = railAction.getAttribute('data-post-id') || '';
      const actionType = railAction.getAttribute('data-action-type') || '';
      if (!postId || !['react', 'reply', 'save'].includes(actionType)) return;
      if (actionType === 'reply') {
        showMiniToast('Comment count updates after an actual comment.');
        return;
      }
      closeProfilePostMenus();
      toggleProfilePostAction(postId, actionType);
      return;
    }

    const signalAction = target.closest('[data-signal-type]');
    if (signalAction) {
      const postId = signalAction.getAttribute('data-post-id') || '';
      const signalType = signalAction.getAttribute('data-signal-type') || '';
      if (!postId || !['tip', 'poke', 'crush'].includes(signalType)) return;
      if (signalType === 'tip') {
        const index = getPostIndexById(postId);
        if (index < 0) return;
        const post = normalizeProfilePost(profilePosts[index]);
        openTipModal({
          target: {
            kind: 'post',
            postId,
            handle: post.handle || currentProfileHandle,
          },
        });
        return;
      }
      closeProfilePostMenus();
      toggleProfilePostSignal(postId, signalType);
      return;
    }

    closeProfilePostMenus();
  });

  profileRepliesList?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const saveReply = target.closest('[data-reply-save-id]');
    if (saveReply) {
      const replyId = saveReply.getAttribute('data-reply-save-id') || '';
      if (!replyId) return;
      toggleSavedReply(replyId);
      return;
    }

    const readMore = target.closest('[data-reply-read-more]');
    if (readMore) {
      const replyId = readMore.getAttribute('data-reply-read-more') || '';
      if (!replyId) return;
      const card = profileRepliesList.querySelector(`[data-reply-id="${replyId}"]`);
      const textNode = card?.querySelector('.lb-profile-replyCard__text');
      if (!textNode) return;
      const isClamped = textNode.classList.contains('is-clamped');
      textNode.classList.toggle('is-clamped', !isClamped);
      readMore.textContent = isClamped ? 'Show less' : 'Read more';
      return;
    }

    const viewThread = target.closest('[data-view-reply-thread]');
    if (viewThread) {
      const replyId = viewThread.getAttribute('data-view-reply-thread') || '';
      if (!replyId) return;
      const reply = profileReplyById.get(replyId);
      openProfileReplyThread(reply);
      return;
    }

    const replyCard = target.closest('[data-open-reply-thread]');
    if (!replyCard) return;
    const replyId = replyCard.getAttribute('data-reply-id') || '';
    if (!replyId) return;
    const reply = profileReplyById.get(replyId);
    openProfileReplyThread(reply);
  });

  profileRepliesList?.addEventListener('keydown', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (target.closest('[data-reply-save-id]') || target.closest('[data-reply-read-more]') || target.closest('[data-view-reply-thread]')) return;
    const card = target.closest('[data-open-reply-thread]');
    if (!card) return;
    event.preventDefault();
    const replyId = card.getAttribute('data-reply-id') || '';
    if (!replyId) return;
    const reply = profileReplyById.get(replyId);
    openProfileReplyThread(reply);
  });

  viewByteList?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const unsaveButton = target.closest('[data-unsave-item-type][data-unsave-item-id]');
    if (unsaveButton) {
      const itemType = unsaveButton.getAttribute('data-unsave-item-type') || '';
      const itemId = unsaveButton.getAttribute('data-unsave-item-id') || '';
      if (!itemType || !itemId) return;
      removeSavedItem(itemType, itemId);

      if (itemType === 'post') {
        const postIndex = getPostIndexById(itemId);
        if (postIndex >= 0) {
          const post = normalizeProfilePost(profilePosts[postIndex]);
          post.viewerEngagement.actions = post.viewerEngagement.actions.filter((entry) => entry !== 'save');
          post.actions.save = Math.max(0, Number(post.actions.save || 0) - 1);
          profilePosts[postIndex] = post;
          persistProfilePosts(profilePosts);
          renderProfilePosts();
        }
      } else if (itemType === 'comment') {
        const replyIndex = profileReplies.findIndex((entry) => String(entry?.replyId || '') === String(itemId));
        if (replyIndex >= 0) {
          const reply = { ...profileReplies[replyIndex] };
          reply.saveCount = Math.max(0, Number.parseInt(String(reply.saveCount || 0), 10) - 1);
          profileReplies[replyIndex] = reply;
          renderProfileReplies();
        }
      }

      renderViewByteList();
      showMiniToast('Removed from View Byte.');
      return;
    }

    const viewSaved = target.closest('[data-view-saved-byte]');
    if (viewSaved) {
      showMiniToast('View Byte placeholder');
      return;
    }
  });

  viewByteBackButton?.addEventListener('click', () => {
    try {
      window.location.href = '../loverbyte-feed-page/index.html';
    } catch (error) {
      setActiveTab('posts');
    }
  });

  reactionPickerCloseTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      closeReactionPicker();
    });
  });

  reactionPickerTabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.reactionTab || 'standard';
      setActiveReactionPickerTab(tabId);
      renderReactionPickerGrid();
    });
  });

  reactionPickerGrid?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const pickedReaction = target.closest('[data-picker-reaction-id]');
    if (!pickedReaction) return;
    const reactionId = pickedReaction.getAttribute('data-picker-reaction-id') || '';
    if (!activeReactionPostId || !reactionId) return;
    const choice = findReactionChoiceById(reactionId);
    if (!choice) return;
    addOrBumpReaction(activeReactionPostId, choice);
    closeReactionPicker();
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest('.lb-profile-feedPost__menuWrap')) return;
    closeProfilePostMenus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProfilePostMenus();
    }

    if (event.key === 'Escape' && isTipModalOpen()) {
      event.preventDefault();
      closeTipModal();
      return;
    }

    if (event.key === 'Escape') {
      closeReactionPicker();
    }

    if (event.key === 'Escape' && isLabelPickerOpen()) {
      event.preventDefault();
      closeLabelPicker();
      return;
    }

    if (event.key === 'Escape' && isProfileComposeOpen()) {
      event.preventDefault();
      closeProfileCompose();
      return;
    }

    if (event.key === 'Escape' && isSignalOpen()) {
      event.preventDefault();
      closeSignal();
      return;
    }

    if (event.key === 'Escape' && isNotificationsOpen()) {
      event.preventDefault();
      closeNotifications();
      return;
    }

    if (!isMenuOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key === 'Tab') {
      const focusables = getMenuFocusables();
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();

(() => {
  const popCultureStickerFiles = [
    'laughing-tongue-glam-hair-nails.png',
    'clockit-hand-pose-white-acrylics.png',
    'sassy-glam-lips-lashes.png',
    'smirk-pinch-pink-nails.jpg',
    'arms-over-head-stressed.webp',
    'cardi-b-confused-disgusted.png',
    'diamond-grillz-glam-doll.jpg',
    'disappointed-hands-on-hips.jpg',
    'disgusted-face-doll-headwrap.webp',
    'disgusted-face-doll-straight-hair.jpg',
    'doll-bed-smartphone-running-mascara.jpg',
    'doll-fire-explosion-tongue.jpg',
    'doll-peeking-through-bushes..jpg',
    'green-sweatsuit-suv-exit.jpg',
    'horrified-vintage-doll.jpg',
    'megan-thee-stallion-disgusted..png',
    'mona-lisa-baddie-peace-sign.png',
    'nene-leakes-laughing.png',
    'office-doll-gun-at-printer.jpg',
    'party-doll-dancing-purple-cup.jpg',
    'porsha-williams-awkward-smile.png',
    'ray-j-shifting-hat.png',
    'shocked-doll-clutching-pearls..jpg',
    'shocked-man-tie-gasp.png',
    'skeptical-kid-yellow-shirt.png',
    'stressed-doll-smoking-dr-pepper.jpg',
    'stressed-doll-smoking-whiskey.jpg',
    'suit-briefcase-railing-jump.webp',
    'sunglasses-shocked-reaction.jpg',
    'teacup-gun-unbothered..webp',
    'teyana-taylor-disgusted-shock.png',
    'that-part-receding-hairline.webp',
    'toddler-doll-afro-puffs-side-eye.jpg',
    'unimpressed-kid-gavin.png',
    'vintage-doll-disgusted-lips.jpg',
    'wine-glass-side-eye.webp',
    'woman-bonnet-covering-mouth.png',
  ];

  const toSlug = (value) => String(value || '')
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');

  const toReadableLabel = (value) => {
    const stem = String(value || '').replace(/\.[^.]+$/, '');
    const normalized = stem
      .replace(/[_-]+/g, ' ')
      .replace(/\.+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!normalized) return 'Sticker';
    return normalized.charAt(0).toUpperCase() + normalized.slice(1);
  };

  const standard = [
    { id: 'standard_heart', category: 'standard', type: 'emoji', value: '❤️', label: 'Heart' },
    { id: 'standard_laughing', category: 'standard', type: 'emoji', value: '😂', label: 'Laughing' },
    { id: 'standard_crying', category: 'standard', type: 'emoji', value: '😭', label: 'Crying' },
    { id: 'standard_angry', category: 'standard', type: 'emoji', value: '😡', label: 'Angry' },
    { id: 'standard_shocked', category: 'standard', type: 'emoji', value: '😮', label: 'Shocked' },
    { id: 'standard_sad', category: 'standard', type: 'emoji', value: '😢', label: 'Sad' },
    { id: 'standard_thumbs_up', category: 'standard', type: 'emoji', value: '👍', label: 'Thumbs up' },
    { id: 'standard_thumbs_down', category: 'standard', type: 'emoji', value: '👎', label: 'Thumbs down' },
  ];

  const byteTeaCoded = [
    { id: 'byte_red_flag', category: 'byte_tea_coded', type: 'image', src: '/assets/reactions/byte-tea-coded/red-flag.png', label: 'Red flag' },
    { id: 'byte_yellow_flag', category: 'byte_tea_coded', type: 'image', src: '/assets/reactions/byte-tea-coded/yellow-flag.png', label: 'Yellow flag' },
    { id: 'byte_green_flag', category: 'byte_tea_coded', type: 'image', src: '/assets/reactions/byte-tea-coded/green-flag.png', label: 'Green flag' },
    { id: 'byte_receipts', category: 'byte_tea_coded', type: 'emoji', value: '🧾', label: 'Receipts' },
    { id: 'byte_ghosting', category: 'byte_tea_coded', type: 'emoji', value: '👻', label: 'Ghosting' },
    { id: 'byte_drama', category: 'byte_tea_coded', type: 'emoji', value: '🍿', label: 'Drama' },
    { id: 'byte_trash', category: 'byte_tea_coded', type: 'emoji', value: '🗑️', label: 'Trash' },
    { id: 'byte_delusional', category: 'byte_tea_coded', type: 'emoji', value: '🤡', label: 'Delusional' },
    { id: 'byte_cold', category: 'byte_tea_coded', type: 'emoji', value: '🧊', label: 'Cold' },
    { id: 'byte_flirty', category: 'byte_tea_coded', type: 'emoji', value: '🫦', label: 'Flirty' },
    { id: 'byte_chemistry', category: 'byte_tea_coded', type: 'emoji', value: '🔥', label: 'Chemistry' },
    { id: 'byte_heartbreak', category: 'byte_tea_coded', type: 'emoji', value: '💔', label: 'Heartbreak' },
    { id: 'byte_watching', category: 'byte_tea_coded', type: 'emoji', value: '👀', label: 'Watching' },
    { id: 'byte_dead', category: 'byte_tea_coded', type: 'emoji', value: '💀', label: 'Dead' },
    { id: 'byte_clock_it', category: 'byte_tea_coded', type: 'emoji', value: '🤏', label: 'Clock it' },
    { id: 'byte_clock_it_dark', category: 'byte_tea_coded', type: 'emoji', value: '🤏🏾', label: 'Clock it' },
    { id: 'byte_tea', category: 'byte_tea_coded', type: 'emoji', value: '☕', label: 'Tea' },
  ];

  const popCultureCoded = popCultureStickerFiles.map((fileName) => ({
    id: `pop_${toSlug(fileName)}`,
    category: 'pop_culture_coded',
    type: 'image',
    src: `/assets/Stickers:emojis/ Pop Culture Coded W:names/${fileName}`,
    label: toReadableLabel(fileName),
  }));

  window.lbReactionLibrary = [
    ...standard,
    ...byteTeaCoded,
    ...popCultureCoded,
  ];
})();

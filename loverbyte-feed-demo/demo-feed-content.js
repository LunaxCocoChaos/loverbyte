/**
 * LOVERBYTE DEMO FEED CONTENT
 * ─────────────────────────────────────────────────────────────────
 * Edit this file to control what appears in the demo feed.
 * Posts load in array order — first item appears nearest the top.
 * Hard-refresh safe. No localStorage involved.
 *
 * VALID LABEL IDs (copy exactly):
 * ── Rate & Review ────────────────
 *   rate-my-date-fit, roast-my-profile, spot-dem-flags,
 *   aita, crush-worthy, soft-launch
 * ── Dating Situations ────────────
 *   situationship, married-but-single, waiting-to-be-wed,
 *   dead-bedroom, ethical-non-monogamy, poly-life, work-love-balance
 * ── Games ────────────────────────
 *   never-have-i-ever, truth-or-dare, two-truths-a-lie,
 *   find-my-match, ama, ask-women, ask-men, would-you-rather
 * ── Debates ──────────────────────
 *   unpopular-opinion, hot-take, cmv, til, eli5, i-know-youre-lying
 * ── Storytime / Eras ─────────────
 *   storytime, update, healing-era, soft-life-era
 * ── Community & Culture ──────────
 *   lgbtq-parade, swirl-life, sisterhood, brotherhood,
 *   pick-me, simp, new-to-loverbyte, new-to-loverbyte-first-byte
 * ── Letters ──────────────────────
 *   dear-future-wifey, dear-future-hubby
 *
 * SNAPSHOT (optional — shows dating chips under the handle):
 *   badge:  text after the 💘 icon  e.g. 'Open to Crushes'
 *   chips:  array of pill strings   e.g. ['Bi', '20s', 'New York, NY', 'Long-term, open to short']
 *   Set snapshot: null to hide the row entirely.
 *
 * IMAGES: drop files into ./assets/ and reference as './assets/filename.jpg'
 *
 * BODY LINE BREAKS: use \n\n for paragraph breaks, \n for single breaks.
 *
 * COMMENTS: add pre-written comments/replies to any post using the comments array.
 * Each comment needs a unique id, handle, text, and createdAt timestamp.
 * createdAt uses milliseconds — subtract from Date.now() to express "X minutes ago":
 *   Date.now() - (5 * 60 * 1000)   = 5 minutes ago
 *   Date.now() - (2 * 60 * 60 * 1000) = 2 hours ago
 *
 * Top-level comments go in the post's comments array.
 * Replies go inside a comment's replies array (one level deep only).
 * Set counts.reply to match the number of top-level comments you want shown on the card.
 *
 * actions (optional — controls like counts on a comment):
 *   heart / save / tip / poke / crush → { count: N, selected: false }
 *   Omit actions entirely to default everything to 0.
 * ─────────────────────────────────────────────────────────────────
 */

/**
 * DEMO AUTHOR TIP LINKS
 * ─────────────────────────────────────────────────────────────────
 * Add support link(s) for any post author so their Tip modal shows
 * provider buttons instead of "no links set up."
 *
 * Key   = the author's handle exactly as it appears in their post
 * Value = object with one or more of: cashApp, venmo, paypal
 *
 * cashApp  accepts a $handle or full URL
 * venmo    accepts a @handle or full URL
 * paypal   must be a full URL (https://paypal.me/...)
 *
 * Leave a field out (or set to '') to hide that provider for that author.
 * ─────────────────────────────────────────────────────────────────
 */
window.LB_DEMO_AUTHOR_LINKS = {
  '@kendratheblackgoddess': { cashApp: '$kendraNYC' },
};

window.LB_DEMO_POSTS = [

  // ── PINNED MONDAY POSTS ─────────────────────────────────────────────────────
  {
    id: 'pinned-luna-monday-1',
    day: 'Mon',
    pinned: true,
    pinnedLabel: 'PINNED',
    handle: '@lunaiverseofficial',
    displayName: 'Luna 👑',
    avatarSrc: './Assets /luna-thinking.png',
    time: '2h',
    labels: [],
    body: `Good morninggg my financially stressed but still sexy community 😭💘\n\nWelcome to Money Moves Monday.\n\nBefore y'all start falling in love in here…\ntell us how the hell y'all planning to AFFORD love in this economy???\n\nSo: – what are you building? – what goals are you chasing? – What's one move you're making right now to build a better future for yourself, your future partner, or your current relationship?\n\nLet the room know and don't be shy. Flex a little 👀`,
    images: [],
    snapshot: null,
    counts: { react: 318, reply: 24, save: 41, tip: 9, poke: 53, crush: 0 },
    reactions: [
      { id: 'standard_heart_eyes', count: 94 },
      { id: 'standard_clapping',   count: 76 },
      { id: 'byte_receipts',        count: 58 },
      { id: 'custom_rofl',          type: 'emoji', emoji: '🤣', label: 'ROFL', count: 43 },
      { id: 'custom_sticker_suit',  type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/suit-briefcase-railing-jump.webp', label: 'Suit briefcase railing jump', count: 31 },
      { id: 'custom_shaka',         type: 'emoji', emoji: '🤙', label: 'Shaka', count: 16 },
    ],
    comments: [],
  },
  {
    id: 'pinned-coco-monday-1',
    day: 'Mon',
    pinned: true,
    pinnedLabel: 'PINNED',
    handle: '@femfounder_loverbyte',
    displayName: 'Nina Coco 👑',
    avatarSrc: './Assets /Nina coco.jpg',
    time: 'now',
    labels: [],
    body: `Alright Loverbytersss 😭💘\n\nBig wins. Small wins. Side hustles. Going back to school. Leaving a toxic job. ALL of it counts.\n\nAnd if your current money move involves taking a cheating future ex-husband to the CLEANERS financially…\n\n👀\n\nListen. We watching.\nWe not judging honey ☕️`,
    images: [],
    snapshot: null,
    counts: { react: 214, reply: 17, save: 29, tip: 6, poke: 38, crush: 0 },
    reactions: [
      { id: 'standard_laughing',    count: 71 },
      { id: 'standard_clapping',    count: 58 },
      { id: 'byte_receipts',         count: 44 },
      { id: 'custom_rofl',           type: 'emoji', emoji: '🤣', label: 'ROFL', count: 27 },
      { id: 'custom_sticker_monalisa', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/mona-lisa-baddie-peace-sign.png', label: 'Mona Lisa baddie peace sign', count: 14 },
    ],
    comments: [],
  },
  // ── END PINNED MONDAY POSTS ─────────────────────────────────────────────────

  // ── PINNED WEDNESDAY POSTS ──────────────────────────────────────────────────
  {
    id: 'pinned-luna-wednesday-1',
    day: 'Wed',
    pinned: true,
    pinnedLabel: 'WISDOM WEDNESDAY',
    handle: '@lunaiverseofficial',
    displayName: 'Luna 👑',
    avatarSrc: './Assets /luna-thinking.png',
    time: '4h',
    labels: [],
    body: `Good morninggg Loveryitersss 💘\n\nIt's officially Weasdom Wednesday.\nYes it's spelled like that on purpose because around here we don't just want wisdom…\n\nWe want:\n✨ wisdom\n✨ strategy\n✨ life lessons\n✨ relationship lessons\n✨ AND the tea behind the lesson too 😌\n\nSo let's start with this 👀\n\n👉 What's one lesson about love, money, dating, marriage, business, or relationships you had to learn the HARD way?`,
    images: [],
    snapshot: null,
    counts: { react: 276, reply: 21, save: 63, tip: 11, poke: 34, crush: 0 },
    reactions: [
      { id: 'standard_clapping',    count: 89 },
      { id: 'standard_heart_eyes',  count: 67 },
      { id: 'byte_receipts',         count: 61 },
      { id: 'custom_sticker_skeptical', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/skeptical-kid-yellow-shirt.png', label: 'Skeptical kid yellow shirt', count: 33 },
      { id: 'custom_lips',           type: 'emoji', emoji: '👄', label: 'Lips', count: 18 },
      { id: 'custom_shaka',          type: 'emoji', emoji: '🤙', label: 'Shaka', count: 8 },
    ],
    comments: [],
  },
  // ── END PINNED WEDNESDAY POSTS ───────────────────────────────────────────────

  {
    id: 'demo-post-isabel-1',
    day: 'Wed',
    handle: '@isabelwithreceipts',
    displayName: 'Isabel G',
    avatarSrc: './Assets /Isabel G/IsabelG-headshot-lawyer.png',
    time: '1h',
    labels: ['storytime', 'would-you-rather'],
    body: `When my husband first started his carpentry business, I thought helping him would just mean reviewing contracts here and there after work. Fast forward and suddenly we arguing over invoices at 10PM, discussing taxes over dinner, and learning VERY quickly that love alone does not build structure.\n\nOne thing building together taught me is this: A healthy relationship can become a real economic advantage. Especially for Black and Brown communities. We spend so much time talking about struggle individually that sometimes we forget how powerful the right partnership can be financially, emotionally, and generationally.\n\nOne person builds the table. The other protects the business behind it. One person gets discouraged. The other reminds them why they started. That's real power couple energy to me. Not just matching outfits and vacation pictures.\n\nAnd yes, building together WILL expose flaws fast:\n– communication issues\n– ego\n– money habits\n– different risk tolerances\n\nBut if both people are committed to growing? It can genuinely change the trajectory of a family.\n\nSo now I'm curious about what are y'all lessons learned and…\n\nWould you rather:\nA) Build with someone from the ground up\nOR\nB) Meet them once they're already established?`,
    images: [],
    snapshot: { romanticallyOpen: false },
    counts: { react: 178, reply: 18, save: 52, tip: 6, poke: 28, crush: 0 },
    reactions: [
      { id: 'byte_receipts',      count: 11 },
      { id: 'byte_watching',      count: 14 },
      { id: 'standard_clapping',  count: 18 },
      { id: 'byte_chefs_kiss',    count: 9  },
      { id: 'standard_crying',    count: 8  },
      { id: 'byte_chemistry',     count: 6  },
      { id: 'standard_heart_eyes', count: 12 },
      { id: 'custom_isabel_monalisa', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/mona-lisa-baddie-peace-sign.png', label: 'Mona Lisa baddie peace sign', count: 5 },
      { id: 'custom_isabel_that_part', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/that-part-receding-hairline.webp', label: 'That part receding hairline', count: 16 },
    ],
    comments: [
      {
        id: 'ci1', handle: '@fiona.nevermore', avatarSrc: './Assets /Isabel G/Fiona.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '40s', locationState: 'GA/USA', relationshipGoal: 'Long-term relationship' },
        text: "I tried building with a man once 😭 helped him with marketing, connections, paperwork, all of it. Soon as the business took off, suddenly he \"needed space.\" Never again.",
        createdAt: Date.now() - (55 * 60 * 1000),
        actions: { heart: { count: 14, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ci1r1', handle: '@isabelwithreceipts', avatarSrc: './Assets /Isabel G/IsabelG-headshot-lawyer.png', parentId: 'ci1', text: "And THIS is why I always tell women: support should never mean disappearing inside somebody else's dream. Build together, yes — but protect yourself too.", createdAt: Date.now() - (53 * 60 * 1000), actions: { heart: { count: 21, selected: false }, tip: { count: 3, selected: false }, poke: { count: 2, selected: false }, crush: { count: 0, selected: false } } }
        ]
      },
      {
        id: 'ci2', handle: '@maia.done.building', avatarSrc: './Assets /Isabel G/Maia.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'NY/USA', relationshipGoal: 'Long-term relationship' },
        text: "Same thing happened to me. Respectfully? I'm not building nobody no more 😭 if it's not at least halfway established, I'm good.",
        createdAt: Date.now() - (50 * 60 * 1000),
        actions: { heart: { count: 9, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci3', handle: '@brahim.llc', avatarSrc: './Assets /Isabel G/Brahim.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '40s', locationState: 'TX/USA', relationshipGoal: 'Life partner' },
        text: "See and this is the issue now though 😭 everybody wants the finished product. Some of us ARE trying.\n\nI'm not rich yet, but I've been putting real work into becoming a better partner and man overall. Got diagnosed avoidant in my early 20s after hurting a lot of good women honestly. Went to therapy. Did the work. My last relationship lasted 6 years and ended because she wanted a completely different life path.\n\nNow I finally got my LLC to start my own tax business and honestly? It would be nice finding someone who actually wants to build WITH me instead of only showing up at the finish line.",
        createdAt: Date.now() - (44 * 60 * 1000),
        actions: { heart: { count: 11, selected: false }, poke: { count: 2, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'ci3r1', handle: '@isabelwithreceipts', avatarSrc: './Assets /Isabel G/IsabelG-headshot-lawyer.png', parentId: 'ci3', text: "First of all, congratulations on the LLC 👏🏽 A lot of people underestimate how much courage it takes to build something from scratch.\n\nAnd attorney tip since you mentioned taxes/business 👀: Please make sure you keep your business and personal finances separate EARLY. Separate bank account, separate records, clean contracts. It'll save you a headache later.\n\nAlso… emotional self-awareness + accountability + ambition is actually a strong combination. The right woman will see that.", createdAt: Date.now() - (42 * 60 * 1000), actions: { heart: { count: 18, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } } }
        ]
      },
      {
        id: 'ci4', handle: '@pam.formerly.avoidant', avatarSrc: './Assets /Isabel G/Pam.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'TX/USA', relationshipGoal: 'Long-term, open to short' },
        text: "Okay wait 😭 Emotionally self-aware, in therapy, AND building something for yourself??\n\nI'm listening.\n\nAlso funny enough I used to be fearful avoidant too, so I understand way more than you think. Did a lot of healing these last few years myself. And I work in branding/social media, so honestly our skillsets could probably complement each other really well 👀",
        createdAt: Date.now() - (38 * 60 * 1000),
        actions: { heart: { count: 16, selected: false }, poke: { count: 3, selected: false }, crush: { count: 2, selected: false } },
        replies: [
          { id: 'ci4r1', handle: '@brahim.llc', avatarSrc: './Assets /Isabel G/Brahim.jpg', parentId: 'ci4', text: "See now THIS is the kind of conversation I joined this app for 😭 Life be life-ing but I still believe the right partnership can level both people up.", createdAt: Date.now() - (36 * 60 * 1000), actions: { heart: { count: 14, selected: false }, poke: { count: 2, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'cl1', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Waittttt 👀\nTherapy. Self-awareness. Business owner. And now a branding girl enters the chat???\nOh yeah. I'm seated for this storyline 💘",
        createdAt: Date.now() - (34 * 60 * 1000),
        actions: { heart: { count: 28, selected: false }, tip: { count: 3, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci5', handle: '@carole.lurking', avatarSrc: './Assets /Isabel G/Carole.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4All', ageBand: '30s', locationState: 'IL/USA', relationshipGoal: 'Long-term relationship' },
        text: "Not me casually reading these comments to see if somebody in here matches my vibe too 👀☕️ Because where are the emotionally intelligent men that ALSO have goals??",
        createdAt: Date.now() - (30 * 60 * 1000),
        actions: { heart: { count: 7, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'cl2', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Not y'all accidentally networking and flirting at the same time 😭\nTHIS is the energy I wanted on here. 💘",
        createdAt: Date.now() - (29 * 60 * 1000),
        actions: { heart: { count: 24, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'cl3', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Okay but lowkey… this actually sounds like two people whose skillsets would complement each other REALLY well 👀\nSomebody better send a crush before I start shipping strangers again 😭",
        createdAt: Date.now() - (27 * 60 * 1000),
        actions: { heart: { count: 22, selected: false }, tip: { count: 2, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci6', handle: '@mike.asking.fr', avatarSrc: './Assets /Isabel G/Mike.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '20s', locationState: 'FL/USA', relationshipGoal: 'Long-term, open to short' },
        text: "Okay but serious question: Any women here ACTUALLY open to building with someone from the ground up anymore? Or everybody just looking for established already?",
        createdAt: Date.now() - (24 * 60 * 1000),
        actions: { heart: { count: 5, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'cl4', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Could this be the beginning of a Loverbyte success story???\nMy fingers are crossed BAD right now 💘",
        createdAt: Date.now() - (21 * 60 * 1000),
        actions: { heart: { count: 19, selected: false }, tip: { count: 3, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci7', handle: '@daisy.said.it', avatarSrc: './Assets /Isabel G/Daisy.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '50s', locationState: 'NC/USA', relationshipGoal: 'Long-term relationship' },
        text: "I think most women are open to building IF they see:\n– consistency\n– emotional maturity\n– effort\n– direction\n\nThe problem is too many people say \"build with me\" when they really mean \"struggle with me while I avoid accountability.\"",
        createdAt: Date.now() - (18 * 60 * 1000),
        actions: { heart: { count: 12, selected: false }, tip: { count: 5, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ci7r1', handle: '@isabelwithreceipts', avatarSrc: './Assets /Isabel G/IsabelG-headshot-lawyer.png', parentId: 'ci7', text: "Exactly ☕️ Building together should still feel like forward movement, not one person carrying the entire emotional and financial load alone.", createdAt: Date.now() - (16 * 60 * 1000), actions: { heart: { count: 15, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } } }
        ]
      },
      {
        id: 'cl5', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "See how different flirting feels when people actually talk about values, goals, healing, and life first?\nYeah. Exactly 😌☕️",
        createdAt: Date.now() - (14 * 60 * 1000),
        actions: { heart: { count: 25, selected: false }, tip: { count: 5, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci8', handle: '@sofia.firstgen', avatarSrc: './Assets /Isabel G/Sofia.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'AZ/USA', relationshipGoal: 'Life partner' },
        text: "As a first-generation daughter this post hit DIFFERENT. A lot of us grew up watching our parents survive, not build. So finding somebody who wants partnership AND stability becomes really important.",
        createdAt: Date.now() - (12 * 60 * 1000),
        actions: { heart: { count: 8, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ci8r1', handle: '@isabelwithreceipts', avatarSrc: './Assets /Isabel G/IsabelG-headshot-lawyer.png', parentId: 'ci8', text: "Whew. You understood the point immediately. A lot of Black and Brown families are starting from survival mode already, which is why healthy partnerships can genuinely change generations when done right.", createdAt: Date.now() - (10 * 60 * 1000), actions: { heart: { count: 12, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } } }
        ]
      },
      {
        id: 'cl6', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "I'm crying because this started as Wisdom Wednesday and somehow turned into LinkedIn with romantic tension 😭💘",
        createdAt: Date.now() - (9 * 60 * 1000),
        actions: { heart: { count: 21, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci9', handle: '@duke.married18', avatarSrc: './Assets /Isabel G/Duke.jpg', snapshot: { romanticallyOpen: false },
        text: "My wife and I started with absolutely nothing 18 years ago. Tiny apartment, one car, bad credit. Now we own a business together. Building together CAN work… but both people gotta be humble enough to evolve.",
        createdAt: Date.now() - (8 * 60 * 1000),
        actions: { heart: { count: 18, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'cl7', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Not me waiting for one of y'all to update the room in 6 months talking about: \"Remember that LLC comment?\" 👀",
        createdAt: Date.now() - (6 * 60 * 1000),
        actions: { heart: { count: 17, selected: false }, tip: { count: 3, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ci10', handle: '@brandylin.notsaying', avatarSrc: './Assets /Isabel G/Brandylin.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'TX/USA', relationshipGoal: 'Long-term relationship' },
        text: "I'm not saying I'm looking for my future husband in these comments… but I'm also not NOT saying that 👀",
        createdAt: Date.now() - (4 * 60 * 1000),
        actions: { heart: { count: 11, selected: false }, poke: { count: 2, selected: false }, crush: { count: 1, selected: false } },
        replies: []
      },
      {
        id: 'cl8', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "See this why I keep telling y'all: sometimes compatibility starts in conversations… not pickup lines 😭💘",
        createdAt: Date.now() - (2 * 60 * 1000),
        actions: { heart: { count: 23, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
    ],
  },

  {
    id: 'demo-post-1',
    day: 'Mon',
    handle: '@kendratheblackgoddess',
    displayName: 'Kendra',
    avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg',
    time: '2h',
    labels: ['new-to-loverbyte-first-byte', 'crush-worthy'],
    body: `Sup Loverbytersss? 👋 It's your girl Kendra Indie. New here.\n\nI'm a bottle girl, future accountant (yes a girl can rock both 😌), professional flirt, and unfortunately attracted to emotionally unavailable men with nice watches.\n\nLife been a movie lowkey. Got kicked out young, was homeless for a minute, then somebody at a club asked me if I ever thought about bottle service because "you got the look." I said bet… and the rest kinda became history. Now I'm back in school studying accounting because shaking ass near sparklers forever is NOT the retirement plan 😭\n\nAnd before y'all ask:\nYes, I've talked to rappers.\nYes, athletes too.\nYes, one of them almost had me acting stupid.\nNo, that man was not about to marry me so I respectfully returned him to the streets.\n\nAnywayyy I like flirting (dick or coochie don't matter).\n\nAnd girlsss… if y'all need tips on how to survive nightlife, spot a scammer, or finesse a rich man without losing your mind? I got tea.\n\nMy crushes are OPEN for now. How y'all like me so far? Crush-worthy or nah? Shit Ion givea damn 😭 😂\n\nSo if you cute, funny, emotionally semi-stable, and know how to hold a conversation… send the crush.\nAnd yes, tips are accepted baby. I'm still a bottle girl at the end of the day 💋 If the vibes are bad though?\n\nI'm turning my crushes OFF and becoming a full-time commentator on everybody else's mess 😌\n\nAnyway hi y'all. Let the chaos begin.`,
    images: [
      './Assets /Kendrafirstpic.png',
      './Assets /Kendra2ndpic.png',
    ],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'Bi',
      ageBand: '20s',
      locationState: 'New York, NY',
      relationshipGoal: 'Long-term, open to short'
    },
    counts: {
      react: 285,
      reply: 20,
      save: 14,
      tip: 3,
      poke: 42,
      crush: 62
    },
    reactions: [
      { id: 'custom_rofl',      type: 'emoji', emoji: '🤣', label: 'ROFL',   count: 3 },
      { id: 'kinky_peach',      count: 3 },
      { id: 'kinky_eggplant',   count: 3 },
      { id: 'custom_sticker_diamond',  type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/diamond-grillz-glam-doll.jpg',      label: 'Diamond grillz glam doll',      count: 12 },
      { id: 'custom_sticker_party',    type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/party-doll-dancing-purple-cup.jpg',  label: 'Party doll dancing purple cup', count: 9  },
      { id: 'custom_sticker_suit',     type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/suit-briefcase-railing-jump.webp',   label: 'Suit briefcase railing jump',   count: 6  },
      { id: 'custom_sticker_monalisa', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/mona-lisa-baddie-peace-sign.png',    label: 'Mona Lisa baddie peace sign',  count: 8  },
      { id: 'custom_sticker_skeptical',type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/skeptical-kid-yellow-shirt.png',     label: 'Skeptical kid yellow shirt',   count: 5  },
      { id: 'custom_banana',    type: 'emoji', emoji: '🍌', label: 'Banana', count: 1 },
      { id: 'custom_shaka',     type: 'emoji', emoji: '🤙', label: 'Shaka',  count: 1 },
      { id: 'custom_lips',      type: 'emoji', emoji: '👄', label: 'Lips',   count: 4 },
      { id: 'byte_chemistry',   count: 6 },
      { id: 'standard_heart_eyes', count: 1 },
      { id: 'standard_laughing',   count: 1 },
    ],
    comments: [
      {
        id: 'c1', handle: '@devon.thatguy', avatarSrc: '../loverbyte-profile-public-coco/Asset/Devon.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '20s', locationState: 'GA/USA', relationshipGoal: 'Long-term, open to short' },
        text: 'So the crushes open or what 👀🍆',
        createdAt: Date.now() - (120 * 60 * 1000),
        actions: { heart: { count: 5, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c1r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c1', text: "Y'all better be tipping the same energy y'all sending these emojis with 😭", createdAt: Date.now() - (118 * 60 * 1000), actions: { heart: { count: 18, selected: false }, poke: { count: 4, selected: false }, crush: { count: 6, selected: false } } }
        ]
      },
      {
        id: 'c2', handle: '@samantha.knows', avatarSrc: '../loverbyte-profile-public-coco/Asset/Samantha.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'TX/USA', relationshipGoal: 'Long-term relationship' },
        text: 'Professionally attracted to emotionally unavailable men with nice watches is INSANE 😭',
        createdAt: Date.now() - (105 * 60 * 1000),
        actions: { heart: { count: 8, selected: false }, tip: { count: 2, selected: false }, poke: { count: 0, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'c2r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c2', text: 'If he got trauma AND a Rolex I start losing motor skills unfortunately.', createdAt: Date.now() - (103 * 60 * 1000), actions: { heart: { count: 22, selected: false }, tip: { count: 3, selected: false }, poke: { count: 3, selected: false }, crush: { count: 5, selected: false } } }
        ]
      },
      {
        id: 'kl1', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Kendra baby… you walked in here talking about emotionally unavailable men with nice watches and half the room folded immediately 😭💘",
        createdAt: Date.now() - (98 * 60 * 1000),
        actions: { heart: { count: 36, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'c3', handle: '@sharon.needsthetea', avatarSrc: '../loverbyte-profile-public-coco/Asset/Sharon.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'IL/USA', relationshipGoal: 'Long-term relationship' },
        text: 'Girl name the rapper 👀',
        createdAt: Date.now() - (92 * 60 * 1000),
        actions: { heart: { count: 6, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c3r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c3', text: 'Nice try TMZ.', createdAt: Date.now() - (90 * 60 * 1000), actions: { heart: { count: 14, selected: false }, poke: { count: 2, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'c4', handle: '@deshawn_fr', avatarSrc: '../loverbyte-profile-public-coco/Asset/Deshawn.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '20s', locationState: 'TX/USA', relationshipGoal: 'Long-term, open to short' },
        text: "You talking all this game but what's your real red flag?",
        createdAt: Date.now() - (78 * 60 * 1000),
        actions: { heart: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c4r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c4', text: 'I be forgiving fine people too fast. God still working on me.', createdAt: Date.now() - (76 * 60 * 1000), actions: { heart: { count: 16, selected: false }, poke: { count: 3, selected: false }, crush: { count: 4, selected: false } } }
        ]
      },
      {
        id: 'c5', handle: '@peterthevibe', avatarSrc: '../loverbyte-profile-public-coco/Asset/Peter.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '20s', locationState: 'FL/USA', relationshipGoal: 'Short-term, open to long' },
        text: 'Future accountant but current city girl 😭',
        createdAt: Date.now() - (62 * 60 * 1000),
        actions: { heart: { count: 5, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c5r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c5', text: 'Baby the IRS still need bad bitches too.', createdAt: Date.now() - (60 * 60 * 1000), actions: { heart: { count: 19, selected: false }, tip: { count: 4, selected: false }, poke: { count: 2, selected: false }, crush: { count: 7, selected: false } } }
        ]
      },
      {
        id: 'c6', handle: '@janette.livin', avatarSrc: '../loverbyte-profile-public-coco/Asset/Janette.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4All', ageBand: '30s', locationState: 'CA/USA', relationshipGoal: 'Long-term, open to short' },
        text: "'Dick or coochie don't matter' 😭😭😭 Livin' ya best life, boo.",
        createdAt: Date.now() - (52 * 60 * 1000),
        actions: { heart: { count: 7, selected: false }, tip: { count: 2, selected: false }, poke: { count: 0, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'c6r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c6', text: 'And do!', createdAt: Date.now() - (50 * 60 * 1000), actions: { heart: { count: 11, selected: false }, poke: { count: 1, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
      {
        id: 'kl2', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Not the bottle girl/accountant combo eating this hard 👀☕️\n\nLadies hide your athletes.\nMen hide your wallets.\nThe bisexual chaos has arrived 😭",
        createdAt: Date.now() - (47 * 60 * 1000),
        actions: { heart: { count: 44, selected: false }, tip: { count: 5, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'c7', handle: '@claire.called.it', avatarSrc: '../loverbyte-profile-public-coco/Asset/Claire .jpg', snapshot: { romanticallyOpen: false },
        text: 'You definitely got at least 3 athletes on your roster right now.',
        createdAt: Date.now() - (44 * 60 * 1000),
        actions: { heart: { count: 4, selected: false }, tip: { count: 1, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c7r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c7', text: 'And 2 of them stressing ME out like they pay taxes here.', createdAt: Date.now() - (42 * 60 * 1000), actions: { heart: { count: 25, selected: false }, poke: { count: 5, selected: false }, crush: { count: 8, selected: false } } }
        ]
      },
      {
        id: 'c8', handle: '@peggy.secured', avatarSrc: '../loverbyte-profile-public-coco/Asset/Peggy.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '40s', locationState: 'MI/USA', relationshipGoal: 'Long-term relationship' },
        text: 'Bottle girl to accountant pipeline kinda fire actually.',
        createdAt: Date.now() - (37 * 60 * 1000),
        actions: { heart: { count: 6, selected: false }, poke: { count: 0, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'c8r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c8', text: 'One thing about me? Ima secure the bag legally AND emotionally 😌', createdAt: Date.now() - (35 * 60 * 1000), actions: { heart: { count: 17, selected: false }, poke: { count: 2, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'kl3', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "I'm crying because Kendra said:\n\"future accountant\"\nbut still accepting tips and crushes at the same time 💋\n\nA multifaceted queen honestly.",
        createdAt: Date.now() - (32 * 60 * 1000),
        actions: { heart: { count: 39, selected: false }, tip: { count: 3, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'c9', handle: '@juan.2cents', avatarSrc: '../loverbyte-profile-public-coco/Asset/Juan.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '20s', locationState: 'AZ/USA', relationshipGoal: 'Short-term dating' },
        text: '"Crush-worthy? Girl you sound like a 304."',
        createdAt: Date.now() - (28 * 60 * 1000),
        actions: { heart: { count: 2, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c9r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c9', text: 'And you sound broken ASF.', createdAt: Date.now() - (26 * 60 * 1000), actions: { heart: { count: 31, selected: false }, tip: { count: 3, selected: false }, poke: { count: 6, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
      {
        id: 'c10', handle: '@brie.that.girl', avatarSrc: '../loverbyte-profile-public-coco/Asset/Brie.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'NY/USA', relationshipGoal: 'Long-term, open to short' },
        text: 'Not you returning that man to the streets',
        createdAt: Date.now() - (22 * 60 * 1000),
        actions: { heart: { count: 9, selected: false }, tip: { count: 2, selected: false }, poke: { count: 0, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'c10r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c10', text: 'Baby I recycled him responsibly ♻️', createdAt: Date.now() - (20 * 60 * 1000), actions: { heart: { count: 28, selected: false }, tip: { count: 5, selected: false }, poke: { count: 4, selected: false }, crush: { count: 5, selected: false } } }
        ]
      },
      {
        id: 'c11', handle: '@daniella.divine', avatarSrc: '../loverbyte-profile-public-coco/Asset/Daniella.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'NC/USA', relationshipGoal: 'Long-term relationship' },
        text: 'I just know athletes ruined your trust.',
        createdAt: Date.now() - (17 * 60 * 1000),
        actions: { heart: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c11r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c11', text: 'No babe. DJs almost did though.', createdAt: Date.now() - (15 * 60 * 1000), actions: { heart: { count: 13, selected: false }, poke: { count: 1, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'c12', handle: '@sergio.noticing', avatarSrc: '../loverbyte-profile-public-coco/Asset/Sergio.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '30s', locationState: 'NV/USA', relationshipGoal: 'Short-term, open to long' },
        text: 'You getting a lil thick in pic 2 👀',
        createdAt: Date.now() - (12 * 60 * 1000),
        actions: { heart: { count: 3, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c12r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c12', text: "That was sponsored by section 102 at LIV and somebody's son with playoff money.", createdAt: Date.now() - (10 * 60 * 1000), actions: { heart: { count: 20, selected: false }, poke: { count: 3, selected: false }, crush: { count: 4, selected: false } } }
        ]
      },
      {
        id: 'c13', handle: '@marcus.realones', avatarSrc: './Assets /marcus.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '20s', locationState: 'TN/USA', relationshipGoal: 'Long-term relationship' },
        text: 'Respect for going back to school though fr.',
        createdAt: Date.now() - (8 * 60 * 1000),
        actions: { heart: { count: 5, selected: false }, tip: { count: 1, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c13r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c13', text: 'Thank you 🥺 life got messy for a minute but we outside rebuilding prettier this time.', createdAt: Date.now() - (6 * 60 * 1000), actions: { heart: { count: 15, selected: false }, poke: { count: 2, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
      {
        id: 'c14', handle: '@rachel.rising', avatarSrc: '../loverbyte-profile-public-coco/Asset/Rachel.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'PA/USA', relationshipGoal: 'Life partner' },
        text: 'I got kicked out young too. Glad things turned around for you ❤️',
        createdAt: Date.now() - (5 * 60 * 1000),
        actions: { heart: { count: 11, selected: false }, poke: { count: 1, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'c14r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c14', text: 'Aww thank you sis 🥺 honestly that phase almost broke me but it also made me hustle different. We all deserve another shot fr.', createdAt: Date.now() - (3 * 60 * 1000), actions: { heart: { count: 24, selected: false }, poke: { count: 3, selected: false }, crush: { count: 6, selected: false } } }
        ]
      },
      {
        id: 'c15', handle: '@annie.watching', avatarSrc: '../loverbyte-profile-public-coco/Asset/Annie.jpg', snapshot: { romanticallyOpen: false },
        text: 'Sis, you lowkey giving reality TV energy.',
        createdAt: Date.now() - (2 * 60 * 1000),
        actions: { heart: { count: 6, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'c15r1', handle: '@kendratheblackgoddess', avatarSrc: '../loverbyte-profile-public-kendra/assets/kENDRA.jpeg', parentId: 'c15', text: 'As long as the checks and outfits come with it, absolutely.', createdAt: Date.now() - (1 * 60 * 1000), actions: { heart: { count: 12, selected: false }, poke: { count: 1, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
    ],
    crushCardSrc: '../loverbyte-profile-public-kendra/profile/dating-card-v2/dating-card-v2.html'
  },

  {
    id: 'demo-post-andre-1',
    day: 'Mon',
    handle: '@andre.rn',
    displayName: 'Andre',
    avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg',
    time: '3h',
    labels: ['dear-future-wifey', 'find-my-match'],
    body: `Dear Future Wife,\n\nI don't know you yet… but I think about you a lot.\n\nI just became an RN at the hospital I used to dream about working at. The schedule brutal, the shifts long, but every paycheck, every exhausted drive home, every sacrifice feels like I'm building something bigger than myself.\n\nGrowing up, I watched my mom work while pregnant because my dad didn't step up the way he should've. I watched her exhausted, stressed, carrying everything while growing a whole human being at the same time.\nI never forgot that.\nSo if I ever become a husband and father, I already know the kind of man I want to be.\nI want to be the main provider. The one handling business. The one making sure my wife never HAS to work through pregnancy unless SHE genuinely wants to.\n\nAnyway 😭 Just know somewhere out here your future husband is clocking into night shift thinking about building that kind of life for you already.`,
    images: ['./Assets /andre comments profiles/Andre.png'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'M4F',
      ageBand: '30s',
      locationState: 'TX/USA',
      relationshipGoal: 'Life partner'
    },
    counts: { react: 214, reply: 18, save: 38, tip: 4, poke: 52, crush: 67 },
    reactions: [
      { id: 'byte_clockit_hand_pose_white_acrylics', count: 8 },
      { id: 'custom_andre_party_doll',    type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/party-doll-dancing-purple-cup.jpg',          label: 'Party doll dancing purple cup',       count: 6  },
      { id: 'custom_andre_doll_peeking',  type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/doll-peeking-through-bushes..jpg',            label: 'Doll peeking through bushes',         count: 14 },
      { id: 'custom_andre_megan',         type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/megan-thee-stallion-disgusted..png',          label: 'Megan Thee Stallion disgusted',       count: 5  },
      { id: 'custom_andre_that_part',     type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/that-part-receding-hairline.webp',            label: 'That part receding hairline',         count: 9  },
      { id: 'custom_andre_monalisa',      type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/mona-lisa-baddie-peace-sign.png',             label: 'Mona Lisa baddie peace sign',         count: 4  },
      { id: 'custom_andre_rayj',          type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/ray-j-shifting-hat.png',                      label: 'Ray J shifting hat',                  count: 7  },
      { id: 'custom_andre_doll_bed',      type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/doll-bed-smartphone-running-mascara.jpg',     label: 'Doll bed smartphone running mascara', count: 16 },
      { id: 'standard_crying',    count: 11 },
      { id: 'standard_heart_eyes', count: 9  },
      { id: 'standard_clapping',  count: 5  },
      { id: 'byte_chefs_kiss',    count: 7  },
      { id: 'byte_flirty',        count: 4  },
    ],
    comments: [
      {
        id: 'ca-top-1', handle: '@diane.locked.in', avatarSrc: './Assets /andre comments profiles/Diane.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'TX/USA', relationshipGoal: 'Long-term relationship' },
        text: 'Okayyyy emotional intelligence AND job stability?? Somebody lock this man down 😭',
        createdAt: Date.now() - (185 * 60 * 1000),
        actions: { heart: { count: 9, selected: false }, tip: { count: 1, selected: false }, poke: { count: 3, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'ca-top-1r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca-top-1', text: "Lmaooo I'm just out here trying not to get yelled at by patients and build a peaceful life one shift at a time 😭", createdAt: Date.now() - (183 * 60 * 1000), actions: { heart: { count: 16, selected: false }, poke: { count: 4, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'ca-top-2', handle: '@darius.warned', avatarSrc: './Assets /andre comments profiles/darius.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4F', ageBand: '30s', locationState: 'IL/USA', relationshipGoal: 'Long-term, open to short' },
        text: "Brother you better be careful before somebody uses that provider mindset to financially humble you 😭",
        createdAt: Date.now() - (178 * 60 * 1000),
        actions: { heart: { count: 5, selected: false }, poke: { count: 2, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ca-top-2r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca-top-2', text: "Nah I'm good. I know how to pick them, bro.", createdAt: Date.now() - (176 * 60 * 1000), actions: { heart: { count: 11, selected: false }, poke: { count: 3, selected: false }, crush: { count: 0, selected: false } } }
        ]
      },
      {
        id: 'ca1', handle: '@stephanie.obsessed', avatarSrc: './Assets /andre comments profiles/Stephanie.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'FL/USA', relationshipGoal: 'Long-term relationship' },
        text: 'She gonna be SO lucky omg 🥺',
        createdAt: Date.now() - (170 * 60 * 1000),
        actions: { heart: { count: 6, selected: false }, poke: { count: 2, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'ca1r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca1', text: "Honestly I'll probably feel luckier if I find somebody solid enough to build with.", createdAt: Date.now() - (168 * 60 * 1000), actions: { heart: { count: 14, selected: false }, poke: { count: 3, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'al1', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Okayyyy ladies 👀 A nurse. Emotionally available. Wants marriage. Wants to protect his pregnant wife from stress.\nAnd y'all just sitting here blinking???\nSEND THAT MAN A CRUSH 💘",
        createdAt: Date.now() - (162 * 60 * 1000),
        actions: { heart: { count: 31, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca2', handle: '@diane.thernn', avatarSrc: './Assets /andre comments profiles/Diane.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'TX/USA', relationshipGoal: 'Long-term, open to short' },
        text: "As another RN… these brutal schedules about to have y'all communicating through sticky notes and FaceTime 😭",
        createdAt: Date.now() - (155 * 60 * 1000),
        actions: { heart: { count: 8, selected: false }, tip: { count: 1, selected: false }, poke: { count: 3, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ca2r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca2', text: "Listen if she can survive me meal-prepping at 2AM after a 12-hour shift then that's real love already 😂", createdAt: Date.now() - (153 * 60 * 1000), actions: { heart: { count: 19, selected: false }, poke: { count: 2, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
      {
        id: 'al2', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "No because this lowkey made ME emotional 😭\nA man clocking into night shift thinking about becoming a good husband someday???\nYeah I need a success story outta this one immediately.",
        createdAt: Date.now() - (148 * 60 * 1000),
        actions: { heart: { count: 27, selected: false }, tip: { count: 5, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca3', handle: '@keisha.comeback', avatarSrc: './Assets /andre comments profiles/Keisha.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'NY/USA', relationshipGoal: 'Long-term relationship' },
        text: 'Not me suddenly respecting men again for 3 business minutes 😭',
        createdAt: Date.now() - (135 * 60 * 1000),
        actions: { heart: { count: 11, selected: false }, tip: { count: 3, selected: false }, poke: { count: 2, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'ca3r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca3', text: "LMAOOO let me try to extend the timer a little longer.", createdAt: Date.now() - (133 * 60 * 1000), actions: { heart: { count: 22, selected: false }, poke: { count: 5, selected: false }, crush: { count: 4, selected: false } } }
        ]
      },
      {
        id: 'al3', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Ladies please don't fumble the hospital prince 😭\nI already see emotional intelligence, accountability, AND health insurance in one package.",
        createdAt: Date.now() - (125 * 60 * 1000),
        actions: { heart: { count: 34, selected: false }, tip: { count: 3, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca4', handle: '@marla.seasoned', avatarSrc: './Assets /andre comments profiles/Marla.jpg', snapshot: { romanticallyOpen: false },
        text: "I'm too old for you but whewww the younger girls better not waste this man's time 😭",
        createdAt: Date.now() - (115 * 60 * 1000),
        actions: { heart: { count: 9, selected: false }, poke: { count: 2, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ca4r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca4', text: "😂😂 y'all acting like I'm getting drafted into the NBA relax.", createdAt: Date.now() - (113 * 60 * 1000), actions: { heart: { count: 17, selected: false }, poke: { count: 2, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
      {
        id: 'al4', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "I'm seeing a lot of fainting in the comments but not enough CRUSHES being sent 👀\nCome on now. Closed mouths don't get husbands 😭",
        createdAt: Date.now() - (105 * 60 * 1000),
        actions: { heart: { count: 29, selected: false }, tip: { count: 2, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca5', handle: '@kharrie.said.it', avatarSrc: './Assets /andre comments profiles/Kharrie .jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '30s', locationState: 'NC/USA', relationshipGoal: 'Life partner' },
        text: "See THIS is what women mean when they say provider mindset.",
        createdAt: Date.now() - (90 * 60 * 1000),
        actions: { heart: { count: 7, selected: false }, tip: { count: 1, selected: false }, poke: { count: 1, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ca5r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca5', text: "Exactly. It's not about control.", createdAt: Date.now() - (88 * 60 * 1000), actions: { heart: { count: 12, selected: false }, poke: { count: 2, selected: false }, crush: { count: 2, selected: false } } }
        ]
      },
      {
        id: 'al5', handle: '@femfounder_loverbyte', avatarSrc: './Assets /Nina coco.jpg', snapshot: null,
        text: "See THIS is why I built Loverbyte 💘\nOne person opens up honestly… and suddenly everybody starts connecting through real conversations instead of \"hey wyd.\"",
        createdAt: Date.now() - (80 * 60 * 1000),
        actions: { heart: { count: 26, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca6', handle: '@drew.lmaooo', avatarSrc: './Assets /andre comments profiles/Drew.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'M4M', ageBand: '20s', locationState: 'CA/USA', relationshipGoal: 'Short-term, open to long' },
        text: 'Damn why can\'t I get pregnant 😭🌈',
        createdAt: Date.now() - (65 * 60 * 1000),
        actions: { heart: { count: 38, selected: false }, tip: { count: 8, selected: false }, poke: { count: 3, selected: false }, crush: { count: 0, selected: false } },
        replies: [
          { id: 'ca6r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca6', text: "LMAOOOO y'all are insane on this app already 😭", createdAt: Date.now() - (63 * 60 * 1000), actions: { heart: { count: 24, selected: false }, poke: { count: 4, selected: false }, crush: { count: 1, selected: false } } }
        ]
      },
      {
        id: 'al6', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "This man said: \"I want my wife to REST during pregnancy.\"\nWhew. Somebody's grandma somewhere just screamed \"THAT'S A MAN\" 😭",
        createdAt: Date.now() - (55 * 60 * 1000),
        actions: { heart: { count: 38, selected: false }, tip: { count: 5, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca7', handle: '@ming.scouting', avatarSrc: './Assets /andre comments profiles/Ming.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4M', ageBand: '20s', locationState: 'TX/USA', relationshipGoal: 'Long-term, open to short' },
        text: 'Okay but where you located 👀',
        createdAt: Date.now() - (40 * 60 * 1000),
        actions: { heart: { count: 5, selected: false }, tip: { count: 1, selected: false }, poke: { count: 4, selected: false }, crush: { count: 2, selected: false } },
        replies: [
          { id: 'ca7r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca7', text: "Dallas for now but honestly I'm open-minded. Good people hard to find anywhere.", createdAt: Date.now() - (38 * 60 * 1000), actions: { heart: { count: 16, selected: false }, poke: { count: 5, selected: false }, crush: { count: 5, selected: false } } }
        ]
      },
      {
        id: 'al7', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "I know at least 4 women reading this post imagining matching scrubs for future baby appointments already 😭💘",
        createdAt: Date.now() - (30 * 60 * 1000),
        actions: { heart: { count: 24, selected: false }, tip: { count: 3, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
      {
        id: 'ca8', handle: '@joseline.said', avatarSrc: './Assets /Joseline.jpg', snapshot: { romanticallyOpen: true, openBadge: 'Open to Crushes', datingDirection: 'F4All', ageBand: '20s', locationState: 'TX/USA', relationshipGoal: 'Long-term relationship' },
        text: "Sir if you don't stop making us romanticize night-shift nurses 😭",
        createdAt: Date.now() - (15 * 60 * 1000),
        actions: { heart: { count: 8, selected: false }, poke: { count: 2, selected: false }, crush: { count: 1, selected: false } },
        replies: [
          { id: 'ca8r1', handle: '@andre.rn', avatarSrc: './Assets /andre comments profiles/andre headshot.jpeg', parentId: 'ca8', text: "Too late. Y'all already got Grey's Anatomy music playing in your heads.", createdAt: Date.now() - (13 * 60 * 1000), actions: { heart: { count: 20, selected: false }, tip: { count: 1, selected: false }, poke: { count: 4, selected: false }, crush: { count: 3, selected: false } } }
        ]
      },
      {
        id: 'al8', handle: '@lunaiverseofficial', avatarSrc: './Assets /luna-thinking.png', snapshot: null,
        text: "Protect him at all costs but also… ladies respectfully: ATTACK 💘😭",
        createdAt: Date.now() - (8 * 60 * 1000),
        actions: { heart: { count: 41, selected: false }, tip: { count: 4, selected: false }, poke: { count: 0, selected: false }, crush: { count: 0, selected: false } },
        replies: []
      },
    ],
  },

  // --- Thursday Posts ---

  {
    id: 'pinned-luna-thursday-1',
    day: 'Thu',
    pinned: true,
    pinnedLabel: 'THIRST TRAP THURSDAY',
    handle: '@lunaiverseofficial',
    displayName: 'Luna 👑',
    avatarSrc: './Assets /luna-thinking.png',
    time: '7h',
    labels: [],
    body: `Alright Loverbyterssss 💘\n\nIt's officially Thirst Trap Thursday.\n\nToday's mission: Drop the pic that had:\n– your ex lurking\n– people acting different\n– you feeling yourself again\n– OR your future crush needing to clock in immediately 👀\n\nGym pics? Mirror selfies? Nerd thirst traps? Scrubs? Blue collar hands?? ALL welcome.\n\nBUT don't just drop the photo and disappear.\nTell us a lil STORY behind it ☕️\n\nYour future person might literally be scrolling this feed 😌💋`,
    images: [],
    snapshot: null,
    counts: { react: 394, reply: 31, save: 52, tip: 13, poke: 67, crush: 0 },
    reactions: [
      { id: 'standard_heart_eyes',  count: 118 },
      { id: 'byte_flirty',           count: 89 },
      { id: 'standard_clapping',    count: 72 },
      { id: 'kinky_peach',           count: 44 },
      { id: 'custom_sticker_party', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/party-doll-dancing-purple-cup.jpg', label: 'Party doll dancing purple cup', count: 38 },
      { id: 'custom_lips',           type: 'emoji', emoji: '👄', label: 'Lips', count: 21 },
      { id: 'custom_rofl',           type: 'emoji', emoji: '🤣', label: 'ROFL', count: 12 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-kerrie-1',
    day: 'Thu',
    handle: '@kgold28',
    displayName: 'Kerrie',
    avatarSrc: './Assets /Thirst trap/Kerrie.jpg',
    time: '6h',
    labels: ['swirl-life', 'dear-future-hubby'],
    body: `Not me finally feeling confident again after that breakup. Anyway… if my future husband is somewhere on this app, just know I look GOOD in orange 👀`,
    images: ['./Assets /Thirst trap/Kerrie.jpg'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'F4M',
      ageBand: '30s',
      locationState: 'NY/USA',
      relationshipGoal: 'Long-term',
    },
    counts: { react: 342, reply: 28, save: 47, tip: 6, poke: 61, crush: 84 },
    reactions: [
      { id: 'standard_heart_eyes', count: 87 },
      { id: 'byte_flirty', count: 68 },
      { id: 'standard_clapping', count: 54 },
      { id: 'custom_kerrie_glam_doll', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/diamond-grillz-glam-doll.jpg', label: 'Diamond grillz glam doll', count: 31 },
      { id: 'custom_kerrie_mona_lisa', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/mona-lisa-baddie-peace-sign.png', label: 'Mona Lisa baddie peace sign', count: 24 },
      { id: 'byte_chemistry', count: 47 },
      { id: 'kinky_devil', count: 11 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-annalisa-1',
    day: 'Thu',
    handle: '@lisaxo.m',
    displayName: 'Anna-lisa',
    avatarSrc: './Assets /Thirst trap/anna-lisa.jpg',
    time: '5h',
    labels: ['felt-cute-might-delete', 'dear-future-hubby'],
    body: `Okay future bae… wherever you are… I'm outside looking this good and still emotionally available`,
    images: ['./Assets /Thirst trap/anna-lisa.jpg'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'F4M',
      ageBand: '20s',
      locationState: 'ATL/GA',
      relationshipGoal: 'Long-term',
    },
    counts: { react: 298, reply: 19, save: 38, tip: 4, poke: 52, crush: 71 },
    reactions: [
      { id: 'standard_heart_eyes', count: 79 },
      { id: 'custom_annalisa_smirk', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/smirk-pinch-pink-nails.jpg', label: 'Smirk pinch pink nails', count: 41 },
      { id: 'byte_flirty', count: 63 },
      { id: 'custom_annalisa_sassy', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/sassy-glam-lips-lashes.png', label: 'Sassy glam lips lashes', count: 34 },
      { id: 'standard_clapping', count: 48 },
      { id: 'byte_watching', count: 31 },
      { id: 'kinky_tongue', count: 9 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-bea-1',
    day: 'Thu',
    handle: '@bvoss_',
    displayName: 'Bea',
    avatarSrc: './Assets /Thirst trap/Bea.jpg',
    time: '4h',
    labels: ['storytime', 'find-my-match'],
    body: `Sent this to a guy I liked and he replied: 'nice.'\n\nAnyway his replacement can line up below`,
    images: ['./Assets /Thirst trap/Bea.jpg'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'F4M',
      ageBand: '20s',
      locationState: 'NJ/USA',
      relationshipGoal: 'Long-term',
    },
    counts: { react: 389, reply: 41, save: 58, tip: 7, poke: 52, crush: 63 },
    reactions: [
      { id: 'custom_bea_nene', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/nene-leakes-laughing.png', label: 'Nene Leakes laughing', count: 62 },
      { id: 'standard_laughing', count: 94 },
      { id: 'custom_bea_shocked', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/shocked-doll-clutching-pearls..jpg', label: 'Shocked doll clutching pearls', count: 48 },
      { id: 'standard_crying', count: 71 },
      { id: 'custom_bea_office_gun', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/office-doll-gun-at-printer.jpg', label: 'Office doll gun at printer', count: 33 },
      { id: 'byte_dead', count: 57 },
      { id: 'byte_drama', count: 44 },
      { id: 'kinky_peach', count: 16 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-brandon-1',
    day: 'Thu',
    handle: '@b.okafor',
    displayName: 'Brandon',
    avatarSrc: './Assets /Thirst trap/Brandon.png',
    time: '3h',
    labels: ['dear-future-wifey', 'find-my-match'],
    body: `Yeah I work construction management but I clean up pretty decent outside the steel-toe boots.\n\nFuture wife wherever you at… just know I flirt through acts of service and making sure your car got gas.\n\nCrushes open`,
    images: ['./Assets /Thirst trap/Brandon.png'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'M4F',
      ageBand: '30s',
      locationState: 'TX/USA',
      relationshipGoal: 'Life partner',
    },
    counts: { react: 317, reply: 34, save: 74, tip: 8, poke: 72, crush: 91 },
    reactions: [
      { id: 'byte_chefs_kiss', count: 71 },
      { id: 'custom_brandon_clockit', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/clockit-hand-pose-white-acrylics.png', label: 'Clockit hand pose white acrylics', count: 48 },
      { id: 'standard_heart_eyes', count: 63 },
      { id: 'custom_brandon_suit_jump', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/suit-briefcase-railing-jump.webp', label: 'Suit briefcase railing jump', count: 39 },
      { id: 'standard_clapping', count: 57 },
      { id: 'byte_flirty', count: 44 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-carl-1',
    day: 'Thu',
    handle: '@carlweston_',
    displayName: 'Carl',
    avatarSrc: './Assets /Thirst trap/carl.png',
    time: '2h',
    labels: ['find-my-match'],
    body: `Ladies be fr👀 Does knowing the entire Star Wars timeline count as a red flag or husband material??\n\nAnyway this is my thirst trap. I flirt through movie marathons and buying concert/comic-con tickets`,
    images: ['./Assets /Thirst trap/carl.png'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'M4F',
      ageBand: '20s',
      locationState: 'CA/USA',
      relationshipGoal: 'Long-term, open to short',
    },
    counts: { react: 221, reply: 14, save: 28, tip: 2, poke: 18, crush: 32 },
    reactions: [
      { id: 'custom_carl_skeptical', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/skeptical-kid-yellow-shirt.png', label: 'Skeptical kid yellow shirt', count: 31 },
      { id: 'standard_laughing', count: 58 },
      { id: 'custom_carl_unimpressed', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/unimpressed-kid-gavin.png', label: 'Unimpressed kid Gavin', count: 19 },
      { id: 'byte_watching', count: 44 },
      { id: 'custom_carl_porsha', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/porsha-williams-awkward-smile.png', label: 'Porsha Williams awkward smile', count: 14 },
      { id: 'standard_clapping', count: 37 },
      { id: 'byte_dead', count: 28 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-jason-1',
    day: 'Thu',
    handle: '@jreeves.x',
    displayName: 'Jason',
    avatarSrc: './Assets /Thirst trap/jason.png',
    time: '1h',
    labels: ['healing-era', 'find-my-match'],
    body: `Been focused on the gym, therapy, and getting my life together this year.\n\nWho wanna match my energy instead of my trauma?`,
    images: ['./Assets /Thirst trap/jason.png'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'M4F',
      ageBand: '30s',
      locationState: 'CO/USA',
      relationshipGoal: 'Long-term',
    },
    counts: { react: 267, reply: 11, save: 37, tip: 4, poke: 41, crush: 53 },
    reactions: [
      { id: 'standard_clapping', count: 71 },
      { id: 'custom_jason_stressed', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/arms-over-head-stressed.webp', label: 'Arms over head stressed', count: 24 },
      { id: 'byte_chemistry', count: 53 },
      { id: 'byte_chefs_kiss', count: 46 },
      { id: 'custom_jason_teacup', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/teacup-gun-unbothered..webp', label: 'Teacup gun unbothered', count: 16 },
      { id: 'standard_heart_eyes', count: 38 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-ronnie-1',
    day: 'Thu',
    handle: '@rdavis__',
    displayName: 'Ronnie',
    avatarSrc: './Assets /Thirst trap/Ronnie.jpg',
    time: '45m',
    labels: ['lgbtq-parade', 'find-my-match'],
    body: `Respectfully… if a man looked at me the way Pedro Pascal looks at people I'd fold immediately.\n\nAnyway this my thirst trap. Nerds and emotionally intelligent men to the front please`,
    images: ['./Assets /Thirst trap/Ronnie.jpg'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'M4M',
      ageBand: '20s',
      locationState: 'NY/USA',
      relationshipGoal: 'Long-term',
    },
    counts: { react: 194, reply: 9, save: 31, tip: 2, poke: 35, crush: 47 },
    reactions: [
      { id: 'custom_ronnie_wine', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/wine-glass-side-eye.webp', label: 'Wine glass side eye', count: 28 },
      { id: 'standard_laughing', count: 48 },
      { id: 'custom_ronnie_teyana', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/teyana-taylor-disgusted-shock.png', label: 'Teyana Taylor disgusted shock', count: 19 },
      { id: 'standard_clapping', count: 42 },
      { id: 'custom_ronnie_party', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/party-doll-dancing-purple-cup.jpg', label: 'Party doll dancing purple cup', count: 13 },
      { id: 'byte_flirty', count: 35 },
      { id: 'byte_watching', count: 27 },
      { id: 'kinky_unicorn', count: 14 },
      { id: 'kinky_eggplant', count: 11 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-stacy-1',
    day: 'Thu',
    handle: '@stacymk_',
    displayName: 'Stacy',
    avatarSrc: './Assets /Thirst trap/Stacybimbo.png',
    time: '30m',
    labels: ['soft-life-era', 'find-my-match'],
    body: `Yeah I'm fine… but can you hold a conversation and communicate during conflict??\n\nThat's the real thirst trap now`,
    images: ['./Assets /Thirst trap/Stacybimbo.png'],
    snapshot: {
      romanticallyOpen: true,
      openBadge: 'Open to Crushes',
      datingDirection: 'F4M',
      ageBand: '20s',
      locationState: 'DC/USA',
      relationshipGoal: 'Long-term',
    },
    counts: { react: 239, reply: 18, save: 29, tip: 2, poke: 22, crush: 39 },
    reactions: [
      { id: 'custom_stacy_bonnet', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/woman-bonnet-covering-mouth.png', label: 'Woman bonnet covering mouth', count: 38 },
      { id: 'standard_clapping', count: 68 },
      { id: 'custom_stacy_toddler', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/toddler-doll-afro-puffs-side-eye.jpg', label: 'Toddler doll afro puffs side eye', count: 29 },
      { id: 'byte_chefs_kiss', count: 51 },
      { id: 'custom_stacy_teacup', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/teacup-gun-unbothered..webp', label: 'Teacup gun unbothered', count: 22 },
      { id: 'standard_heart_eyes', count: 42 },
      { id: 'byte_watching', count: 31 },
    ],
    comments: [],
  },

  {
    id: 'demo-post-joyce-1',
    day: 'Thu',
    handle: '@joycebenton_',
    displayName: 'Joyce',
    avatarSrc: './Assets /Thirst trap/Joyceheadshot.jpg',
    time: '20m',
    labels: ['hard-launch'],
    body: `Hubby is my thirst trap … a great cook. Love ya hun.`,
    images: ['./Assets /Thirst trap/Joyce.png'],
    snapshot: { romanticallyOpen: false },
    counts: { react: 187, reply: 14, save: 31, tip: 3, poke: 7, crush: 0 },
    reactions: [
      { id: 'standard_heart_eyes', count: 48 },
      { id: 'custom_joyce_glam', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/diamond-grillz-glam-doll.jpg', label: 'Diamond grillz glam doll', count: 21 },
      { id: 'byte_chefs_kiss', count: 37 },
      { id: 'custom_joyce_shocked', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/shocked-doll-clutching-pearls..jpg', label: 'Shocked doll clutching pearls', count: 16 },
      { id: 'standard_clapping', count: 29 },
      { id: 'custom_joyce_sunglasses', type: 'image', stickerSrc: '/assets/Stickers:emojis/ Pop Culture Coded W:names/sunglasses-shocked-reaction.jpg', label: 'Sunglasses shocked reaction', count: 12 },
      { id: 'byte_chemistry', count: 18 },
    ],
    comments: [],
  },

];

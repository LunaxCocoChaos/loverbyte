# Loverbyte Prototype Asset Map + Product State Handoff

**Last updated:** 2026-05-14  
**Maintained by:** Nina / @femfounder_loverbyte  
**Purpose:** Engineering, design, and AI tools reference only. Not a storyboard. Not a script.

---

## 1. Purpose of This Document

This document maps every current Loverbyte prototype folder so that design tools, Codex, and future Claude sessions understand what each asset represents, what product state it demonstrates, and what must not be changed or reinvented.

These are **reusable product state assets**, not random mockups. Each folder represents a specific screen, user perspective, or mechanic in the Loverbyte product. Many were built to be used in a video demo, but they function as reusable, accurate representations of the product at a given state.

If you are Claude or Codex and your context was compacted, **re-read this document before making any patches.**

---

## 2. Core Product State Language

These terms are the canonical vocabulary for this product. Do not substitute, invent, or rename them.

| Term | Definition |
|---|---|
| **Own profile / owner view** | The logged-in user viewing or managing their own profile. Identified by the presence of Edit Profile controls and the post composer. |
| **Public profile / viewer view** | Someone viewing another person's public-facing profile. This does NOT automatically mean logged out. A logged-in viewer can still have app chrome (notification bell, menu, etc.). |
| **Open to Crushes** | The user accepts romantic/Crush attention and may show a Dating Card. |
| **Not Open to Crushes** | The user is NOT accepting Crushes. Do not call this "social only." Everyone on Loverbyte is social by default. The label is: `🚫 😅 Not Open to Crushes` |
| **Sender state** | The user who initiated / sent a Crush. |
| **Receiver state** | The user who received a Crush and must Accept or Decline. |
| **Match state** | After a Crush is accepted by the receiver. Both parties are matched. |
| **Private room state** | After match + Clock My Tea unlock concept. A time-limited private space for both parties. Not a paid feature in prototype. Not a real chat backend. |

---

## 3. Folder Inventory

All paths verified as of 2026-05-14.

| Folder | Product State | Main Files | Who / What | Notes / Warnings |
|---|---|---|---|---|
| `/loverbyte-feed-demo/` | Logged-in feed — Kendra as current user | `index.html`, `feed.js`, `feed.css`, `demo-feed-content.js`, `colors_and_type.css` | Kendra (logged-in identity). Feed contains posts from many seeded authors. | `demo-feed-content.js` is the editable content source. Do NOT hardcode posts in `feed.js`. Feed identity = Kendra. |
| `/loverbyte-feed-page/` | Feed UI foundation / experimental copy | `index.html`, `feed.js`, `feed.css` | Non-specific user. Used for UI experiments (After Hours pill, layout tests). | Treat as a test/foundation copy. Not the active demo feed. Do not use as the source of truth for feed content. |
| `/loverbyte-profile-own-jake-sender/` | Jake — own/owner profile, Open to Crushes, Sender state | `profile-own.html`, `profile-own.js`, `profile-own.css`, `edit-profile.*`, `profile/dating-card-v2/` | Jake (`@jakegymienerd`). Used for the Jake → Kelly Crush story. | Jake is the Crush sender. His Dating Card is in `profile/dating-card-v2/`. Comment thread on butterfly post includes Kelly, Jill, Fatimatou, Marisol, Hilary, Luna. |
| `/loverbyte-video-kelly-own-open-to-crushes/` | Kelly — own/owner profile, Open to Crushes, Receiver state | `profile-own.html`, `profile-own.js`, `profile-own.css`, `edit-profile.*`, `profile/dating-card-v2/` | Kelly (`@kellyafterglow`). Receives Jake's Crush. Accept/Decline flow. Match modal. | Kelly's Dating Card is in her own `profile/dating-card-v2/`. Embed mode (`?embed=1`) hides owner controls. Do not re-use Jake's images. |
| `/loverbyte-profile-own-dating-card/` | Base own profile + Dating Card (earlier reference build) | `profile-own.html`, `profile-own.js`, `profile-own.css`, `profile/dating-card-v2/` | Generic / early reference. May overlap with Kelly assets. | Use as reference only. Kelly's folder is the active receiver asset. Confirm before patching this folder. |
| `/loverbyte-profile-own-not-open-to-crushes/` | Own profile — Not Open to Crushes base state | `profile-own.html`, `profile-own.js`, `profile-own.css` | Generic user, not open to Crushes. Own/owner view. | Do not call this "social only." Badge = `🚫 😅 Not Open to Crushes`. |
| `/loverbyte-profile-public-not-open-to-crushes/` | Public profile — Not Open to Crushes, viewer view | `profile-own.html`, `profile-own.js`, `profile-own.css` | Generic user, public-facing, not open to Crushes. | Viewer can still be logged in. No Send Crush CTA. No Dating Card. |
| `/loverbyte-profile-public-kendra/` | Kendra — public profile, viewer view | `profile-own.html`, `profile-own.js`, `profile-own.css`, `assets/kENDRA.jpeg` | Kendra (`@kendratheeblackgoddess`). Creator/influencer-style profile. | Public-facing. Not owner view — no Edit Profile composer intent. Kendra is also the logged-in identity in feed demo. |
| `/loverbyte-profile-public-luna/` | Luna — official host/brand personality, public profile | `profile-own.html`, `profile-own.js`, `profile-own.css`, `Asset/luna-thinking.png` | Luna (`@lunaiverseofficial`). App co-host and personality. NOT a dating user. | Luna does NOT get Crushes (crush count = 0). Luna avatar = `Asset/luna-thinking.png`. Do not use `Luna_Headshot.jpg` from Dating Card folders for Luna's avatar. |
| `/loverbyte-profile-public-coco/` | Coco/Nina — femfounder, own profile or public representation | `profile-own.html`, `profile-own.js`, `profile-own.css`, `Asset/Nina coco.jpg` | Nina Coco (`@femfounder_loverbyte`). Founder personality. | Coco has seeded posts in her profile. Her avatar = `Asset/Nina coco.jpg`. Also appears as a commenter in the feed. |
| `/loverbyte-profile-own-personal-brand-not-open/` | Personal brand user — Not Open to Crushes | `profile-own.html`, `profile-own.js`, `profile-own.css` | Generic personal brand / professional user. Not open to Crushes. | Represents users who engage socially but are not in dating mode. |
| `/loverbyte-private-room-jake-kelly/` | Private room — locked preview state (v1) | `index.html`, `private-room.css`, `private-room.js` | Jake + Kelly. Room locked/preview, Day 1 of 7. | Standalone visual asset. NOT integrated into any flow. Shows the room before it is actively in use. |
| `/loverbyte-private-room-v2-jake-kelly/` | Private room — unlocked active state (v2) | `index.html`, `private-room.css`, `private-room.js` | Jake + Kelly. Room open. Live countdown. All chat blurred. CMT 91% score. | Standalone visual asset. NOT integrated into any flow. v2 is the active/unlocked version with live countdown timer. Use this one for demos. |

---

## 4. Product State Purpose by Asset

**Feed demo (`/loverbyte-feed-demo/`)**  
Shows the core Loverbyte social feed. Includes a themed feed with posts from multiple seeded authors, Kendra as the logged-in user identity (composer, avatar, handle), daily theme cards, pinned posts from Luna and Coco, engagement tools (hearts, tips, pokes, Crushes, saves, reactions), comment threads with Dating Card snapshots, and the Clock My Tea snapshot UI. This is the entry point of the product experience.

**Jake profile (`/loverbyte-profile-own-jake-sender/`)**  
Shows a logged-in male user's own profile. Demonstrates: bio, posts, images, comment threads with Dating Card snapshot chips, the Crush sender flow, and Jake's own Dating Card. Jake's butterfly post comment thread includes multiple female commenters with their own Open to Crushes chips. Jake is the sender in the Jake → Kelly romantic story.

**Kelly profile (`/loverbyte-video-kelly-own-open-to-crushes/`)**  
Shows the receiver side of the Crush flow. Kelly is Open to Crushes. Her Dating Card can be viewed in embed mode by a sender. She receives Jake's Crush, is shown the Accept/Decline modal, and upon acceptance, reaches the Match state. This is the receiver state asset.

**Not Open to Crushes own profile (`/loverbyte-profile-own-not-open-to-crushes/`)**  
Shows what the product looks like for a user who participates socially but has opted out of Crush/romantic features. No Dating Card. No Send Crush CTA visible to others. Badge displays correctly.

**Not Open to Crushes public profile (`/loverbyte-profile-public-not-open-to-crushes/`)**  
Same concept as above but shown from the viewer/public-facing side. A logged-in viewer sees the profile but no Crush entry point is available.

**Kendra public profile (`/loverbyte-profile-public-kendra/`)**  
Shows how a creator/influencer-style Loverbyte user appears to the public. Kendra is also used as the feed demo's logged-in identity, creating continuity across the demo.

**Luna public profile (`/loverbyte-profile-public-luna/`)**  
Luna is Loverbyte's official co-host and brand personality. Her profile is not a dating profile — she participates as a host and commentator. She appears in feed comments and on other users' posts as @lunaiverseofficial.

**Coco/Nina public profile (`/loverbyte-profile-public-coco/`)**  
The femfounder presence on the platform. Nina Coco (`@femfounder_loverbyte`) appears in the feed with pinned posts and comments. She is the founder's avatar on the product.

**Personal brand / Not Open profile (`/loverbyte-profile-own-personal-brand-not-open/`)**  
Represents a non-dating user type: professional, creator, or personal brand. Participates in the social feed without the Crush/dating layer.

**Private room v1 (`/loverbyte-private-room-jake-kelly/`)**  
Locked preview state. Shows the concept of a private room that exists after a match but before the room is actively used. Visual asset only.

**Private room v2 (`/loverbyte-private-room-v2-jake-kelly/`)**  
Unlocked active state. Jake and Kelly are already inside. Live countdown timer. All chat bubbles blurred for privacy. CMT 91% score. Luna copy. Use this version for demos.

---

## 5. Mechanic Connection Map

These are the product mechanics in sequence. This is NOT a storyboard.

```
Feed
  └─ User sees a post and gets curious about the author
       └─ Navigates to public profile
            └─ Sees whether user is Open to Crushes or Not Open
                 └─ If Open: can view Dating Card (quick romantic snapshot)
                      └─ Reviews Dating Card BEFORE sending Crush
                           └─ Confirms Crush intentionally (not on first click)
                                └─ Receiver gets a Crush notification
                                     └─ Receiver views sender's Dating Card
                                          └─ Receiver: Accept or Decline
                                               └─ Accept → Match state
                                                    └─ Match → Clock My Tea quiz
                                                         └─ CMT unlock → Private Room
                                                              └─ 7-day window to connect IRL
```

**Additional mechanic rules:**
- Tip counts update only after provider click — not on modal open, cancel, or absent link.
- Notification badge belongs to the logged-in viewer shell, not the profile owner's content.
- Crush count increments only after confirmation, not on first click.
- Dating Card in embed mode (`?embed=1`) hides internal owner controls (Send Crush button, Dating Card Settings button).
- Own-profile Dating Card Send Crush is preview/demo only.
- Public/viewer Dating Card Send Crush is the active entry point.
- Not Open to Crushes users show no Crush or Dating Card entry point.

---

## 6. Asset Path Map

| Category | Path | Notes |
|---|---|---|
| Loverbyte wordmark / logo | `/loverbyte-feed-demo/assets/loverbyte-wordmark-nav.png` | Do NOT recreate the logo. Use this asset. |
| Feed assets folder | `/loverbyte-feed-demo/assets/` | Icons, wordmark, teacup, reactions |
| Stickers / reactions | `/loverbyte-feed-demo/assets/Stickers:emojis/` and `/loverbyte-feed-demo/assets/reactions/` | Existing sticker sets. Do not replace. |
| Feed comment avatars | `/loverbyte-feed-demo/Assets /` (note trailing space in folder name) | Commenter profile images for Andre post, Kendra post, etc. |
| Jake headshot | `/loverbyte-profile-own-jake-sender/jake_whitemaleheadshot.png` | Used across Jake story assets |
| Jake Dating Card images | `/loverbyte-profile-own-jake-sender/profile/dating-card-v2/` | `Headshot.png`, `Body.jpeg`, `Hiking.jpeg` |
| Kelly headshot | `/loverbyte-video-kelly-own-open-to-crushes/profile/dating-card-v2/Headshot.png` | Used in private room, comment avatars, Dating Card |
| Kelly comment image (dog) | `/loverbyte-feed-demo/Assets /Jake comments/Kelly-dog1.png` | Image inside Kelly's comment on Jake's thread |
| Jill comment image (gym) | `/loverbyte-feed-demo/Assets /Jake comments/Jill-gym.jpg` | Image inside Jill's comment on Jake's thread |
| Jake comment avatars | `/loverbyte-feed-demo/Assets /Jake comments/` | Fatimatou, Hillary, Jill-headshot, Marisol, Kelly-headshot, Nitara |
| Luna avatar | `/loverbyte-profile-public-luna/Asset/luna-thinking.png` | THE canonical Luna avatar. Use only this path. |
| Coco/Nina avatar | `/loverbyte-profile-public-coco/Asset/Nina coco.jpg` | Also at `/loverbyte-feed-demo/Assets /Nina coco.jpg` |
| Kendra avatar | `/loverbyte-profile-public-kendra/assets/kENDRA.jpeg` | Also at `/loverbyte-feed-demo/assets/kENDRA.jpeg` |
| Private room assets (v2) | `/loverbyte-private-room-v2-jake-kelly/` | `index.html`, `private-room.css`, `private-room.js` |

---

## 7. Brand + Visual Rules

### Use

| Token | Value |
|---|---|
| Luna Pink | `#FF4FBF` |
| Digital Blue | `#4F66FF` |
| Nerdy Teal | `#00E0D3` |
| Glow Pink | `#FFB2E6` |
| Background | Jet Black / dark glass (`#070a12` or similar) |
| Text | White / soft lavender (`rgba(247, 244, 255, …)`) |
| Cards | Rounded premium glass cards with subtle gradient borders |
| Glow | Subtle — not harsh neon |

### Avoid

- Random green success colors (e.g., generic SaaS `#22c55e` or similar)
- Rainbow gradients not in the palette above
- Generic SaaS UI patterns
- New logo designs or wordmark variations
- Random icon systems not already in use
- Bright white backgrounds
- Off-brand accent colors
- Overdesigned visual clutter

**Critical distinction:** Teal (`#00E0D3`) is a Loverbyte brand color and is allowed. Random green is not. If a component looks green and teal was not explicitly specified, it is wrong.

---

## 8. Reusable Fixes / Decisions Already Made

These decisions have already been implemented. Do not undo them. Port the behavior when building new screens, not just the copy.

- **Composer avatar fix:** Pass `photoUrl` into composer avatar and hide the pseudo/placeholder avatar when a real photo exists.
- **Bio white-space:** `white-space: pre-wrap` on bio text to preserve line breaks.
- **Profile post images:** Use `object-position: top` where the subject is near the top of the frame.
- **Dating Card embed mode:** `?embed=1` hides both the Send Crush button AND the Dating Card Settings button. Applied to both Jake's and Kelly's dating-card-v2.js.
- **Own-profile Dating Card Send Crush:** Preview/demo behavior only. Does not fire a real Crush.
- **Public/viewer Dating Card Send Crush:** Active entry point into the Crush flow.
- **Tip count behavior:** Updates only after provider click. Does not update on modal open, cancel, or when no tip link is present.
- **Notification badge:** Increments for real new notifications. Clears on notification panel open. Belongs to the logged-in viewer shell, not the profile being viewed.
- **Crush count behavior:** Updates only after confirmation click, not on first/intent click.
- **Not Open to Crushes label:** Exact string = `🚫 😅 Not Open to Crushes`. Do not abbreviate, soften, or rename.
- **Do not call Not Open to Crushes "social only."** Everyone on Loverbyte is social. This label refers specifically to Crush/dating opt-out.
- **Feed demo user identity:** Kendra is the logged-in user in the feed demo. Seeded posts represent many different authors — the feed identity and the post authors are separate.
- **Content source separation:** `demo-feed-content.js` is the editable content layer for the feed. Post/comment copy does not belong in `feed.js`.
- **Luna handle:** `@lunaiverseofficial` — not `@luna`, not `@lunaofficial`.
- **Luna avatar path:** Always use `../loverbyte-profile-public-luna/Asset/luna-thinking.png`. Do not use `Luna_Headshot.jpg` from Dating Card folders.
- **Luna does not receive Crushes:** Luna's crush count = 0 always.
- **Composer placeholder text:** `What's poppin', floppin', byte-ing today? 👀☕️` — updated across all HTML files.

---

## 9. Known Issues / Loose Ends

These are incomplete areas. Do not attempt to fix them without explicit instruction.

- Profile comments are still being aligned with feed-style comment behavior across folders.
- Full Edit Dating Card flow is deferred.
- Full onboarding dating-card capture is deferred.
- Public profile Follow button still needs a product decision and implementation.
- You Up and After Hours mode are likely second-video / later feature reveals — not in current demo scope.
- Private room (both v1 and v2) is a standalone visual asset only. Not integrated into any existing user flow.
- Clock My Tea quiz, payment layer, and private chat backend are fully deferred.
- Storage key isolation may still need cleanup across some profile folders to prevent state bleed.
- Visual consistency pass still needed across badge styles, CTA pill colors, modal accent colors, and icon usage.
- `loverbyte-profile-own-dating-card/` folder overlaps with Kelly's asset structure — confirm which is active before patching.

---

## 10. Deferred Features

The following are intentionally out of scope for the current prototype. Do not attempt to build or wire these unless explicitly instructed.

- Full backend / database
- Payment integration
- Real Clock My Tea quiz integration
- Real private chat / messaging
- Real push notifications or email
- Weekly Crush limits / quotas
- Premium Crush unlocks
- After Hours mode logic
- You Up advanced state logic
- Full onboarding flow
- Full profile comment system across all profile types
- Real follow system / follower counts
- Algorithmic feed

---

## 11. Rules for Future Claude / Codex / Design Work

Follow these without exception.

- **Do not redesign unless explicitly asked.**
- **Do not recreate the logo.** Use the existing wordmark at `/loverbyte-feed-demo/assets/loverbyte-wordmark-nav.png`.
- **Do not invent new colors.** Use only the brand palette defined in Section 7.
- **Do not replace full files unless explicitly approved.** Patch only what is specified.
- **Do not move features across folders without approval.** Each folder represents a specific product state.
- **Do not assume public profile means logged out.** A logged-in viewer can see a public profile.
- **Do not assume a profile is owner view unless Edit Profile and the post composer are present.**
- **Do not copy Jake-specific content into other profiles.** Jake's name, images, bio, and posts belong only to his folder.
- **Port reusable fixes, not character content.** If a fix was applied to Jake's profile, extract the behavior logic — not Jake's data.
- **Ask before touching multiple folders in one task.** Cross-folder patches require explicit approval per folder.
- **Snapshot/backup before edits.** Follow the convention: `filename.ext.bak-description-YYYY-MM-DD`.
- **If using Jake as a reference build, copy the behavior/style fix only — not his name, images, bio, or posts.**
- **If context was compacted, re-read this document before patching anything.**
- **If a folder is not in this document, do not assume it is safe to edit. Confirm first.**

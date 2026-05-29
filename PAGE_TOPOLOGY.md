# nitex.com — Page Topology & Behaviors

Page height ~12,917px. Nuxt/Vue SPA, GSAP ScrollTrigger pinned-scroll choreography, Mux video, Sanity CMS.

## Design system
- **Background:** black `#000000`
- **Accent (signature):** lime `#D7FF00` (rgb 215,255,0)
- **Text:** white `#FFFFFF`, light grey `#E6E6E6` for some section panels
- **Fonts:**
  - `RightGrotesk` (PPRightGrotesk-SpatialBlack) — giant display headings, ultra-heavy, tight, uppercase
  - `PPNeueMontreal` — body / paragraph text
  - `Fragment Mono` — all the small UI labels, nav, section numbers `[01]`, button text (uppercase, letter-spaced)

## Sticky header (fixed top, z-high)
- Left: `◢ NITEX` logo (lime parallelogram mark + wordmark), turns lime/black depending on section bg
- Right cluster: `MEET NITEX` pill that doubles as a **scroll-progress bar** (lime fill sweeping L→R) with current section number `[01]…[05]` on its right edge; then `GET STARTED` pill
- Bordered, mono uppercase text

## Sections (top→bottom)
1. **HERO** — full screen, split into two video/image panels (LEFT: woman in white cap on blue = mux-1/cap img; RIGHT: indigo shibori fabric drying). Giant lime `N` (left) and `X` (right) overlaid at vertical center. Center: white paragraph "We power real-time fashion…" + lime `INSIDE NITEX` button.
2. **[01] OUR STORY** — pinned. Giant black display "FROM VISION / TO ⟨inline img⟩ GLOBAL / IMPACT" revealing over a field-woman bg image; a **lime info card** slides in bottom-right with paragraph + `◢ INSIDE NITEX`, `◢ REAL LIFE B2B SHOPPING`, `◢ ON DEMAND MANUFACTURING` links.
3. **[02] WHAT WE DO** — "THE NEW / STANDARD IN / FASHION / SUPPLY" + paragraph; B2B Design-Lab UI (mux-2) + manufacturing (mux-1) panels; lime card.
4. **[03] WHAT WE BELIEVE IN NITEX** — "FASHION MOVES / FAST, SO / SHOULD YOU" over motion-blur runner bg (60a6). Paragraphs + `◢ MAKING BRANDS SUCCEED`.
5. **N/X brand marquee band** — lime band, scrolling row of partner brand logos (SCALPERS, REISS, amazon, zalando, next, simons …) flanked by N (denim texture) / X (mesh-tee woman) panels.
6. **[04] HOW WE HELP** — "LAUNCH FASTER. / OPERATE LEANER. / SELL SMARTER." + 5 numbered cards (CHANGE FIXED COST TO VARIABLE / FOCUS ON YOUR BRAND / SCALE WITH EFFICIENCY / MOVE WITH SPEED / DELIVER WITH CONFIDENCE) + closing paragraph + `◢ MAKING BRANDS SUCCEED`.
7. **[05] YOUR NEEDS** — "LET'S BUILD THE / FUTURE OF FASHION, / TOGETHER" + 3 columns: FOR TALENT → `JOIN US`, FOR BRANDS → `SEE HOW`, FOR PARTNERS → `PARTNER WITH US`.
8. **FOOTER** — black. Links JOIN US / MEET NITEX / CONTACT / BLOG / LOGIN, `© 2025 NITEX INC. ALL RIGHTS RESERVED.`, PRIVACY POLICY, TERMS & CONDITIONS, GET STARTED, and a `[0%]` scroll indicator.

## Behaviors (approximated in clone via IntersectionObserver + CSS)
- Section display headings reveal line-by-line (clip/translate up) on enter.
- Lime info cards slide/fade in from the right on section enter.
- Header progress bar fills with overall scroll progress; section number updates per active section.
- Brand logos marquee auto-scrolls horizontally (infinite).
- Hover: buttons/links invert (lime↔black); the `◢` marker animates.
- Numbered "how we help" cards stagger-reveal.

## Interaction model note
Original uses GSAP pinned scroll-scrubbing (sections pin while inner content animates with scroll progress). Clone uses standard document flow + scroll-reveal + sticky header, which preserves the look/feel without the pin-scrub complexity.

# QC: ShubhBiodata maker (commit 5cffe55), Earn-Quality, 15 Oct 2026, ~5:55 AM IST
Read-only. Checked the source, style.css, app.js, variants.js, the qa/ exports (viewed) and QC-biodata-languages.md.

| Gate item | Score | Notes |
|---|---|---|
| 1 Visual | 4 | Clean, dignified sheet; 9 themed variants; exports look good |
| 2 Mobile | 4 | m-home.png at 375px has no overflow; 44px targets; the sheet preview scrolls inside .prevwrap (794px fixed, acceptable) |
| 3 Trust | **3** | The privacy copy is accurate. **Placeholder links:** `#TODO-GUMROAD-…` buttons, "Checkout links are not live yet (TODO)", "checkout link coming soon" on every page |
| 4 Empathy | 5 | Respectful variants, sample data labelled "(Sample)" |
| 5 Usability/a11y | 4 | All controls labelled (Format, Label language, Opening line, photo); real buttons; focus ring #7a1f2b (9.6:1); input border 3.66:1. Gold logo span #b8860b is 3.25:1 but large bold, so OK. Export footer #777 at 11px is 4.48:1 (just under; use #666). |
| 6 Accuracy | 4 | Labels match the language QC (see below). Mismatch: the home copy says "Hindi, Marathi and Gujarati labels coming soon", but the selector already offers them. |
| 7 Speed | 4 | Pages about 2–6 KB; heavy libraries (1.3 MB) are lazy-loaded only on export ✓ |
| 8 SEO | 4 | Unique titles/descriptions, FAQ schema, sitemap. Canonical points to saemali.github.io/biodata/, which is not deployed yet; fine once pushed. |
| 9 Competitors | 4 | Free, private, PDF/PNG/DOCX: on par with or better than typical biodata sites |
| Honest copy (₹99) | **2** | "Template pack · ₹99: **Premium designs** with editable Word + PDF files and no footer credit. **Instant download.**" (index, pricing, all variant pages). These designs aren't built. |

## Privacy
✓ No fetch, XHR, analytics, cookies or localStorage in app.js. The photo is read locally. Libraries are vendored (no CDN). The "stays in this browser tab" claim is true.

## Export quality (qa/)
- PDF: A4, 1 page, 270–285 KB ✓
- PNG: 1080×1920 ✓
- DOCX: about 8 KB, generated ✓
- **Bug:** in Ananya-Sharma-Sample.png/.pdf the absolutely positioned footer ("Made free at…") overlaps the last Contact row. When content is long, the footer collides. Fix: make `.foot` part of the flow (`position:static; margin-top:24px`), or add `padding-bottom:70px` to `#sheet`.

## Language check (vs QC-biodata-languages.md)
- Hindi: ॥ श्री गणेशाय नमः ॥, गोत्र / राशि / नक्षत्र / मांगलिक ✓
- Marathi:
  - Headers श्री गणेशाय / श्री स्वामी समर्थ / ॐ नमः शिवाय ✓
  - देवक is optional with the community note ✓
  - Rows ✓: गण, नाडी, कुळ, कुलदैवत, रास, नक्षत्र + चरण, मंगळ, मूळगाव, मामाचे कुळ
  - The nadi values are shown in Latin script ("aadya / madhya / antya") in the hint. Add the Devanagari आद्य / मध्य / अंत्य so the अंत्य spelling is used.
- Gujarati:
  - Headers || શ્રી ગણેશાય નમઃ || / || જય શ્રી કૃષ્ણ || / || જય સ્વામિનારાયણ || ✓
  - Rows ✓: સમાજ / જ્ઞાતિ, ગોત્ર, કુળદેવી, વતન, મોસાળ, મામાનું નામ
  - **Gujarati can be switched on.**
- Bengali and Malayalam: disabled "– coming soon" options ✓
- Caveat: the hi/mr/gu *core* labels and section titles (BD_I18N) are Earn-Build's own translations, not covered by the research QC. Mark them "beta" until a native review.

## Result: **FAIL** (Trust 3, Honest copy 2). Everything else is ≥4.

---
# Re-review at dde953d (Earn-Quality, 15 Oct 2026, ~6:00 AM IST)
New decision from Earn (on the user's behalf):
- launch **English-only**
- all regional label sets (HI/MR/GU/BN/ML) show as "coming soon" until a native speaker verifies them
- no [conv] labels ship

| Check | Result |
|---|---|
| Buy buttons / TODO links | ✓ None left. Done-for-you uses mailto:saemstudio@mail.grokbot.com; the text "To order, email …" is present |
| ₹99 card | ✓ "Template pack · ₹99 (coming soon): … not available yet", no button |
| Footer overlap | ✓ Fixed: `.foot` is static with margin-top 24px; `#sheet` has padding-bottom 72px; the Ananya export shows a clear gap |
| Footer contrast | ✓ #666 on #fff = 5.74:1 |
| qa/ exports | ✓ 5 samples × PDF (A4, 1 page, 235–284 KB) / PNG (1080×1920) / DOCX (about 8 KB) |
| **Regional labels** | **✗ CONFLICTS with Earn's decision.** `BD_LANGS` offers हिन्दी / मराठी / ગુજરાતી "– beta" as selectable options. The Hindu, Marathi and Gujarati variants set `lang:"hi"`, `lang:"mr"` and `lang:"gu"`, so their pages **open with regional labels by default**. qa/d-gujarati.png shows "ગુજરાતી (Gujarati) – beta" selected, with the [conv] title "લગ્ન બાયોડેટા" and section "વ્યક્તિગત માહિતી" on the sheet. BD_I18N (all [conv]) ships. The `?lang=` URL parameter can force them. The page copy says "Labels are available in Gujarati / Marathi" and "(beta: native-speaker review in progress)". |

## Verdict: **FAIL.** The only blocker is the English-only decision; everything else passes.

## Exact steps to make it English-only
1. `assets/variants.js`:
   - Set `BD_LANGS={en:"English"}`
   - Set `BD_SOON=["हिन्दी (Hindi)","मराठी (Marathi)","ગુજરાતી (Gujarati)","বাংলা (Bengali)","മലയാളം (Malayalam)"]`. These render as disabled "– coming soon" options, as BN/ML do now.
2. `assets/variants.js`:
   - Delete `lang:"hi"`, `lang:"mr"` and `lang:"gu"` from the hindu, marathi and gujarati entries.
   - Remove the `BD_I18N` hi/mr/gu blocks and the per-field `{hi:…}`, `{mr:…}`, `{gu:…}` label objects from the shipped file. Keep them in an unshipped file such as `tools/i18n-pending.js` for the native review.
   - Keep the English field names. Keep the research-verified opening lines (श्री गणेशाय नमः etc. and the 3 Gujarati headers); they are invocations, not labels, and passed QC.
3. `assets/app.js`:
   - L22 → `langSel.value='en'`.
   - L66: ignore `?lang` unless the value is `en`. Simplest: delete the line.
4. `tools/build-pages.js`, then regenerate:
   - Replace "Labels are available in Marathi…" and "Labels are available in Gujarati" with "Labels are in English for now; Marathi/Gujarati labels are coming soon."
   - Replace the index/variant line with: "Labels: English. Hindi, Marathi, Gujarati, Bengali and Malayalam labels coming soon (after native-speaker review). Your typed details stay as you write them."
   - Remove the word "beta" everywhere.
5. Re-run `tools/export-test.js` and regenerate `qa/d-gujarati.png`, plus a Marathi and a Hindu page screenshot. They must show "English" selected and English section titles ("Marriage Biodata", "Personal details").
6. Check: run `rg -n "beta|BD_I18N|lang:\"(hi|mr|gu)\"" assets tools *.html */index.html`. Expected: no hits except tools/i18n-pending.js.

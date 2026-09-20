# Sneha — Content Evidence Table

**Date:** 2026-09-19
**Revised:** After reviewing `assets/sneha_linkedin.pdf` (her own published LinkedIn profile)
**Scope:** Every factual claim currently rendered on the live site, traced to a source.

> Sanitized — no participant identities or transcript contents.

## Revision note

The first pass flagged five metrics as unsupported because the **asset archive** contains no
SevenMentor, Recruit N Refer, or Travel Discounters files. Her LinkedIn resolves most of them:
the numbers are **her own published claims**, already public under her name. That is a
materially different situation from fabrication, and most can stand.

Two claims remain unsourced anywhere.

## A. Numeric claims

| # | Claim | Location | Source | Verdict |
|---|---|---|---|---|
| 1 | "5+ yrs" experience | `portfolio.ts:7,20,29` | LinkedIn summary: *"Toronto based designer with 5+ years"* | **Keep** — though understated; see §B4 |
| 2 | "+80%" business (Travel Discounters) | `portfolio.ts:21` | LinkedIn: *"conducting user research which boosts the business by 80%"* | **Keep** — her public claim |
| 3 | "+11%" user satisfaction (SevenMentor) | `portfolio.ts:22,137,252`; `ProjectDetail.tsx:116` | LinkedIn: *"Increased user satisfaction by +11%"* | **Keep** |
| 4 | "−33%" bounce rate | `portfolio.ts:23,137,252`; `ProjectDetail.tsx:117` | LinkedIn: *"Decreased bounce rate by -33% on mobile"* | **Keep** |
| 5 | "50%" profit margin | `portfolio.ts:220,358` | LinkedIn: *"increased the profit margin by **roughly** 50%"* | **Keep, soften** — restore "roughly" |
| 6 | "40%" engagement | `ProjectDetail.tsx:63` | **Not in LinkedIn.** Reads as a design hypothesis stated as result | **Remove or reframe** |
| 7 | "52%" / "87%" (Recruit N Refer) | `ProjectDetail.tsx:127` | **Not in LinkedIn.** Her Recruit N Refer bullets cite no metrics at all | **Remove** |
| 8 | "10 weeks" | `ProjectDetail.tsx:105` | Consistent with BrainStation capstone cycle | Keep |

**Not currently on the site but available:** SevenMentor *"Increased student admission rate which
generated Rs. 500K per year"* — a stronger, more concrete outcome than either percentage.

These remain self-reported figures without stated method or window. That is normal for a
portfolio. The recommendation is to attribute them plainly to her role rather than present them
as measured study results.

## B. Biography — all conflicts resolved

LinkedIn is now the canonical timeline.

| # | Item | Resolution |
|---|---|---|
| 1 | **"Thirteen years"** (`DesignToBuild.tsx:10`) | **Definitively false.** Career begins with SevenMentor training in 2017. ~8 years maximum. Delete the section. |
| 2 | Both CSA roles showing "Present" | Not an error — LinkedIn's standard promotion display. Render as: Product Designer **Sept 2021 – Oct 2025**, Senior Product Designer **Oct 2025 – Present**. |
| 3 | SevenMentor dates | **Feb 2018 – Jan 2020**, Junior UI/UX Designer, Pune, Maharashtra |
| 4 | "5+ years" understates her | CSA alone is 5 yr 1 mo. Plus SevenMentor (2 yr) and 2020–21 roles ≈ **8 years**. Her summary is stale — it still reads *"I am seeking a position"*, language from 2021. Worth asking whether to update. |

**Full canonical timeline:**

| Role | Org | Dates |
|---|---|---|
| Senior Product Designer | CSA Group | Oct 2025 – Present |
| Product Designer | CSA Group | Sept 2021 – Oct 2025 |
| Product Designer | Travel Discounters | Jan – Aug 2021 |
| UI/UX Designer | Rafiki Digital | Oct – Dec 2020 |
| UI/UX Designer | Recruit 'N' Refer | Apr – Oct 2020 |
| Product Designer | Upwork | Feb – Oct 2020 |
| Junior UI/UX Designer | SevenMentor Pvt Ltd | Feb 2018 – Jan 2020 |
| Diploma, UX Design | BrainStation | 2020 |

## C. CSA — publishable after all

Her LinkedIn **already describes her CSA work publicly, in her own words.** Writing a CSA
section from it is not a confidentiality breach — she published it herself. Available:

- CSA Advantage — mobile and desktop application
- Standards Digital Transformation — led critical projects
- **UX Lead** on a comprehensive brand identity transformation
- **CSA Design System** — leading development, setting org-wide framework and standards
- Logo and identity updates
- WCAG accessibility across interfaces
- User interviews, journeys, focus groups
- Full lifecycle, concept to prototype, cross-functional

This supports a real text CSA section with leadership scope — no visuals, no new disclosure.

**Public domain context** (Wikipedia, CSA Group): Canadian standards development organization,
standards in 57 areas, HQ Toronto. Electrical, industrial, boilers and pressure vessels, gas
appliances, environmental, construction. **40% of CSA standards are referenced in Canadian
legislation.** Accredited by the Standards Council of Canada; a US OSHA Nationally Recognized
Testing Laboratory.

That framing is strong and entirely public: she designs software for professionals who must
find, read, and apply technical safety standards that often carry the force of law.

## D. Work-status labeling

| # | Issue |
|---|---|
| 1 | Moodofy presented alongside shipped products — it is a BrainStation capstone **concept** |
| 2 | No delivery labels anywhere (concept / prototype / shipped / summary) |
| 3 | `sprint-range` reuses a Moodofy image — wrong attribution |

## E. Confirmed defect

**Mobile navbar overflow.** At 390 px the document scrolls to 444 px — 54 px overflow.
Isolated to exactly two elements: `<nav>` and its `<a>` children. Logo wraps, "CONTACT" clipped.
`Navbar` sits outside `<Routes>` (`App.tsx:18`), so every page is affected. All other content
reflows correctly.

## F. Verified-good

Typecheck passes; production build clean (248 ms, 90.8 kB gzip JS); zero console errors; zero
npm vulnerabilities; case-study measure 742 px.

## G. Remaining asks for Sneha

Much shorter than before:

1. **Confirm the LinkedIn metrics still stand** — she published them; just verify she's comfortable.
2. **Current résumé** — newest on file is 2021.
3. **Portrait or personal artifact** for About.
4. **Confirm Moodofy may be labeled a capstone concept.**
5. **Optional:** update the stale "seeking a position" summary and the understated "5+ years".

Resolved without her: all dates, all role boundaries, the CSA narrative, five of seven metrics.

## H. Revised direction

CSA leads the site as a **written experience section** — Senior Product Designer, design system
ownership, UX Lead on brand identity, accessibility work in a regulatory domain. No visuals
required. Case studies follow from the projects that have material:

**Featured:** Moodofy · Capstone Final (Adidas) · Rafiki/PHICA
**Supporting:** Figo Friend · food-waste sprint · PatientsFirst · [24]7 AI
**Experience text only:** CSA · Travel Discounters · SevenMentor · Recruit N Refer · Upwork

`DesignToBuild.tsx` is deleted. Claims 6 and 7 are removed. Claim 5 regains "roughly".

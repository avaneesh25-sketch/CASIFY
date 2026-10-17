# Casify: continue from the showcase

## Existing work

The polished showcase is in `showcase/`: `index.html`, `style.css`, `app.js`, and `hero.png`. It uses plain HTML, CSS and JavaScript, with Google Fonts as an external font resource. Vercel serves `showcase/` using `vercel.json`; no build, account, payment integration, or database is required.

The pre-existing root `index.html` and `dashboard.html` are an older competition-management concept. They have been preserved, but are not the current product direction or Vercel landing page. The original README describes that earlier template.

The showcase is a prototype: case questions and feedback are local examples, XP and leaderboards are illustrative, and responses are not saved. Institutional access and premium access are planned, not implemented.

## Import into Emergent

Start a NEW Emergent job and import `https://github.com/avaneesh25-sketch/CASIFY`. Connect GitHub when asked. Import at job creation; do not assume an existing Emergent job can pull or merge the repository. See https://help.emergent.sh/faqs and https://help.emergent.sh/a-tour-of-the-workspace.

Keep the existing showcase as the visual reference. Save future product work to an `emergent-mvp` branch and review it before merging to `main`; main is intended to deploy to Vercel. Do not overwrite the landing-page backup while experimenting.

## Paste this as the first prompt

Continue Casify from this imported repository. Inspect EMERGENT_HANDOFF.md and showcase/ first. Preserve the current responsive lime-and-charcoal landing page, typography, artwork and brand. Casify helps college students prepare for business case competitions through progressively harder levels. Early levels are free, advanced access is premium, and the primary long-term buyers are universities, consulting clubs and case societies purchasing cohort access. This is a case-preparation learning platform, not a competition-registration portal.

Build the MVP in stages on an emergent-mvp branch. First explain the proposed stack and deployment plan, then implement stage 1: student sign-up/sign-in, a case library, a case detail/attempt page, saved drafts and submissions, and a personal dashboard showing actual progress. Seed only original or clearly permitted cases with source/licensing notes. Use a simple, explicit rubric; do not claim automated scoring or feedback exists unless implemented. Prevent users from reading or editing other students' attempts. Include loading, empty, validation, and error states.

Stage 2 is level progression with server-validated XP and unlock rules, duplicate-award prevention, and a separate opt-in cohort leaderboard. Stage 3 is institutional roles, invitation-based cohort membership, institutional entitlements, mentor progress views restricted to their cohorts, and case management. Stage 4 is premium billing only after the core learning flow is verified. Do not implement payments, AI grading, or institutional analytics in stage 1.

Keep the app deployable to Vercel. Do not assume an Emergent-managed backend or database is reachable from Vercel: document hosting, database connection, environment variables, auth redirects and migration steps before changing the stack. Store secrets only in environment/secret settings, never in GitHub or browser code. Provide setup instructions and verify the full sign-up → choose case → save draft → submit → return to saved progress flow. Keep prototype data clearly distinguished from real user records. Summarize each completed stage and its remaining limitations.

## Acceptance checks for the next stage

- The public landing page still works on mobile and desktop.
- A student can save and recover their own draft after signing out and back in.
- Another student cannot access that draft or submission.
- XP comes from verified completion and cannot be repeatedly awarded by resubmission.
- Institutional users cannot see other institutions' student data.
- No secrets are committed; deployment settings are documented.
- Production remains usable while changes are reviewed on a separate branch.

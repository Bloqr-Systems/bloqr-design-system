# Bloqr Admin & Operator Console — Design Contract

*The Filter design contract for Bloqr's **administrative** surfaces: the user
(tenant) admin panel at `app.bloqr.dev/admin` and the operator / system-admin
console at `admin.bloqr.dev` (served by the `bloqr-admin` worker). Read
[`BLOQR_BRAND_HANDOFF.md`](./BLOQR_BRAND_HANDOFF.md) first — this document does
not restate the tokens, it says how to apply them to dense, data-heavy admin
UI.*

*This file lives in `Bloqr-Systems/bloqr-design-system/guidelines/`.*

---

## Scope

Two admin surfaces share one visual language:

| Surface | Host | Audience |
|---|---|---|
| **User (tenant) admin** | `app.bloqr.dev/admin` | An account's own admins |
| **Operator / system admin** | `admin.bloqr.dev` | Bloqr operators (`super-admin`) |

Both are **product UI**, not marketing. They are denser, more utilitarian, and
may use the semantic palette (`--success`, `--warning`, `--error`, `--info`)
that marketing surfaces must not.

---

## Non-negotiables

- **Dark-first, always.** Canvas is `--bg-base` (`#070B14`). Never a white or
  light background — no exceptions, including tables, modals, and empty states.
- **Tokens only.** Every colour, space, radius, and font is a Filter custom
  property. No hardcoded hex in consuming code (Angular `frontend/`, the
  `bloqr-admin` worker's landing shell, etc.). Standalone surfaces that cannot
  link `styles.css` at runtime may inline `var(--token, <canonical fallback>)`,
  but the token name must come first so it resolves to Filter when available.
- **Orange is the operator accent.** Primary actions and the operator badge use
  `--accent` (`#FF5500`). Cyan (`--link` / `--accent-2`) is for links and
  informational emphasis.

---

## Surface hierarchy

Admin UI leans on the four-step background ramp to convey depth without borders
doing all the work:

| Token | Hex | Use in admin |
|---|---|---|
| `--bg-base` | `#070B14` | Page canvas |
| `--bg-surface` | `#0E1829` | Cards, panels, the left nav rail, table container |
| `--bg-elevated` | `#162035` | Table header row, row hover, code/JSON blocks, tooltips |
| `--bg-overlay` | `#1C2A45` | Modals, popovers, confirmation dialogs, dropdowns |

Borders use `--border` (default), `--border-subtle` (faint dividers between
rows), and `--border-accent` (focus / active nav item).

---

## Text

| Token | Use |
|---|---|
| `--text-1` (`#F1F5F9`) | Table cell values, headings, primary labels |
| `--text-2` (`#94A3B8`) | Column headers, descriptions, metadata, timestamps |
| `--text-3` (`#475569`) | Disabled, placeholder, "no data" states |
| `--text-inverse` (`#070B14`) | Text on an orange (`--accent`) button |

Body copy in admin uses the mono stack (`--font-mono`) for IDs, tokens, keys,
and any machine value; `--font-body` for prose and `--font-display` (Space
Grotesk) for headings everywhere else.

---

## Status & role semantics

Admin UI communicates state constantly (user status, role, tier, flag on/off,
audit outcome). Map state to the semantic tokens consistently — never invent a
new colour:

| Meaning | Token | Examples |
|---|---|---|
| Healthy / active / enabled / allowed | `--success` (`#22C55E`) | Active user, flag ON, audit "allowed", healthy check |
| Caution / pending / expiring | `--warning` (`#F59E0B`) | Role expiring soon, degraded, rate-limited |
| Failure / banned / denied / destructive | `--error` (`#EF4444`) | Banned user, audit "denied", failed job, delete actions |
| Informational / neutral | `--info` / `--link` (`#00D4FF`) | Tier badges, informational callouts |
| Operator / privileged | `--accent` (`#FF5500`) | `super-admin` badge, operator-only affordances |

Render these as **chips/badges**: semantic colour text on a low-opacity tint of
the same hue (use the `-glow`/`-dim` tints where a hue provides them, otherwise
a `color-mix`), inside a `--radius-full` pill with a 1px border of the same
colour. Do not fill a chip solid — reserve solid `--accent` fills for primary
buttons.

---

## The "danger zone" pattern

Operator actions are high-consequence (cross-tenant ban, role revoke, storage
vacuum, flag delete). Group destructive controls into a clearly delimited
**danger zone**:

- A panel with a `--error` 1px border and an `--error`-tinted heading.
- Destructive buttons are outline (`--error` text + border on `--bg-surface`),
  never solid, so they are not the visual default.
- Every destructive action requires an explicit confirm step in a
  `--bg-overlay` modal that restates *what* and *how many* are affected.

---

## Density & spacing

Admin is denser than marketing. Use the tighter end of the spacing scale:

- Table row padding: `--space-2` vertical, `--space-3` horizontal.
- Panel padding: `--space-6`; page gutter: `--space-8`.
- Nav rail item height driven by `--space-10`.
- Card radius `--radius-lg`; chips/badges `--radius-full`; inputs `--radius-md`.

Keep motion restrained — `--duration-fast` for hover/focus, no decorative
animation on data. Respect `prefers-reduced-motion`.

---

## Accessibility

- Body/label text must clear WCAG AA on its background. `--text-2` on
  `--bg-surface` is the minimum for secondary text; never put `--text-3` on
  anything but as a disabled/placeholder cue.
- Never encode state with colour alone — pair every semantic colour with a
  label or icon (Lucide, via Filter's `Icon`).
- Keep Filter's global `:focus-visible` ring (orange outline, from
  `effects.css`) on every interactive element — never remove it; admin users
  are keyboard-heavy. Use `--border-accent` for the *active* nav item, distinct
  from the focus ring.

---

## Operator console specifics (`admin.bloqr.dev`)

- The `bloqr-admin` worker serves a minimal **dark-first landing shell** using
  the tokens above with canonical fallbacks; it carries `noindex` and an
  operator/environment badge in `--accent`.
- The full operator panels are the Angular `/admin` bundle and must consume
  Filter exactly as the user admin panel does — there is **no** separate
  operator theme, only an operator *badge* and the danger-zone emphasis.

---

## Consuming references

- `bloqr-compiler` Angular admin panels: `frontend/src/app/admin/**`
- `bloqr-admin` worker landing shell: `worker/admin-app/admin-worker.ts`
- Developer/operator docs: `bloqr-compiler` → `docs/admin/bloqr-admin-worker.mdx`

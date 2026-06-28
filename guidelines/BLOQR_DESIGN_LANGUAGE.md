# Bloqr Design Language & Product Strategy Reference

*This document captures design decisions, product positioning, user personas, and voice guidelines established through the founding product sessions of Bloqr. It is a living reference — update it as decisions evolve. Every major product or copy decision should trace back here.*

*This file lives in `Bloqr-Systems/bloqr-design-system/guidelines/`.*

---

## Core Brand Mantras

These phrases anchor everything we write and build:

- **"Set it. Bloqr it. Forget it."** — The consumer promise. Zero ongoing maintenance.
- **"Bring your own. Or use ours."** — The vendor philosophy. No lock-in, ever.
- **"The privacy you didn't know you needed."** — The tagline. Simple, direct, applies to all personas.
- **"Internet Hygiene. Automated."** — Legacy tagline. Retired.
- **"Browsing Hygiene"** — Our coined concept for what we deliver. Not security, not anonymity — hygiene. Preventive, routine, invisible.

---

## Product Philosophy

### We Are Infrastructure, Not a Product

Bloqr is the connective tissue between filter lists and DNS vendors. We do not compete with AdGuard, NextDNS, Pi-hole, or list makers. We make them better. This must be reflected in every word we write about vendors and list makers — never adversarial, always additive.

### AI-First, Always

We use AI to:
1. Build and maintain real-time threat lists
2. Enable natural language rule creation ("block everything AWS")
3. Validate and optimize user configurations
4. Suggest list sources based on user behavior and preferences

AI is opt-in for anything that involves personal data. Queries are not stored or used for training unless the user explicitly opts in.

### Progressive Disclosure

The UI has two modes:
- **"Do it for me"** — AI builds the list, picks the vendor, configures everything. One switch.
- **"Let me drive"** — Full JSON/YAML configuration, API access, CLI, custom transformations.

Showing code on the landing page is intentional. The critical message accompanying every code block: *"You'll never write a line of this. The UI builds it for you. But it's here if you want it."*

---

## The Four User Personas

Identify which persona you're addressing before writing any copy or designing any UI.

### Persona 1: Everyday Consumer ("The Beneficiary")

**Who they are:** Has no idea DNS exists. Wants something that just works.

**Voice:** Warm, reassuring, zero jargon. Short sentences. Benefit-first. Never mention DNS by name.

**Our pitch:** "The internet you always thought you had. Now you actually do. No setup. No learning curve."

---

### Persona 2: Power User ("The Advocate")

**Who they are:** Privacy-conscious, already uses AdGuard/NextDNS/Pi-hole. Manages configurations for themselves and possibly family. Knows what a blocklist is. Has hit the scaling problem.

**Voice:** Peer-to-peer. Technical respect without condescension. Be specific about features and data governance.

**Our pitch:** "Keep your vendor. Keep your lists. Finally stop doing it in 12 places. One change, everywhere, instantly."

---

### Persona 3: Developer / List Maker ("The Builder")

**Who they are (Developer):** Builds privacy tooling, embeds filter capabilities in their own product, or uses Bloqr in a CI/CD pipeline.

**Who they are (List Maker):** Curates filter lists used by thousands or millions of users. Deeply reputation-conscious. Does not monetize their work. Extremely protective of sourcing methodology.

**Critical nuance (List Makers):** Never position our AI threat engine as a replacement for their curation — it's a complement. If we win list makers, power users follow.

**Voice (Developer):** Technical, direct, minimal marketing language. Show the API. Show the code.

**Voice (List Maker):** Respectful, collegial. Never imply AI replaces their judgment.

---

### Persona 4: Vendor / Partner ("The Ally")

**Who they are:** AdGuard, NextDNS, Pi-hole, uBlock Origin, or similar. May also include MSPs.

**Never publicly characterize any vendor negatively.** Even as we build competitive overlap, the message is: "Users have choices. We make every choice better."

**Our pitch:** "Your users trust you. We make that trust more powerful. Let us handle the list intelligence layer. You handle the filtering. Everyone wins."

---

## Landing Page Architecture

### Section Structure (Current)

```
Hero → Problem/VPN → Features → HowItWorks → Audiences → CTA Banner → Footer
```

### Section Structure (v2)

```
Hero → Problem/VPN → Features → HowItWorks → [BYO vs. Ours section] → Audiences → Pricing → CTA → Footer
```

### The Code/UI Toggle Pattern

Code blocks default to showing a **UI mockup**. A "Show code" button reveals the underlying JSON/YAML. The mockup UI should look like a real interface — form fields, dropdowns, toggles, vendor selectors — even if static.

---

## Voice & Tone Guidelines

### Overall Brand Voice

Confident without arrogance. Technical without jargon. Honest without caveating everything.

**Avoid:** "Leveraging", "Seamlessly", "Best-in-class", "Enterprise-grade", "Revolutionary", "game-changing", passive voice.

**Embrace:** Short declarative sentences for punch. Specificity ("48,291 rules deduplicated" not "thousands of rules"). Honest caveats when appropriate. "You" focused copy.

### Per-Persona Tone Summary

| Persona | Tone | Jargon level | Code shown? |
|---|---|---|---|
| Everyday Consumer | Warm, reassuring, zero acronyms | None | Hidden (show UI) |
| Power User | Peer, direct, transparent | Medium | Toggle (UI first) |
| Developer/List Maker | Technical, documentation-style | High | Yes, prominently |
| Vendor/Partner | B2B, ROI-aware, collegial | Medium | Minimal |

---

## AI Feature Principles

1. **AI is opt-in for personal data.** If a feature involves storing queries, voice input, or behavioral patterns, users must explicitly opt in.
2. **Nothing is used for training without explicit consent.**
3. **Data that isn't stored can't be leaked or subpoenaed.** Both a technical principle and a marketing message.
4. **Natural language list building is a v1 goal.** Text input first, voice input in v2.
5. **AI threat lists are the flagship.** Bloqr's proprietary intelligence layer and the primary reason to pay.

---

## Vendor Relationship Principles

- **Never competitive language about vendors in public copy.**
- **AdGuard is the recommended starter vendor** — active project, API we can integrate. Their UI is complex; that's our opening.
- **NextDNS users are easy converts.** Pitch: everything they have, actively maintained, with more.
- **Pi-hole users are self-hosters.** Offer Docker/self-hosted option, monetize via API features.
- **uBlock Origin users** want free, browser-only. Offer a free extension with upgrade hook: "uBlock works great for one browser. Bloqr works for all of them."

---

## Competitive Positioning: VPNs

The VPN myths page (`/vpn-myths`) is our primary SEO asset. Positioning:

- We are not a VPN replacement for anonymity use cases (Tor handles that)
- We are better for the actual use case most VPN buyers have: blocking ads, trackers, malware
- **What we never say:** "VPNs are useless." Some people legitimately need them.

---

*Source of truth: `Bloqr-Systems/bloqr-design-system` → `guidelines/BLOQR_DESIGN_LANGUAGE.md`*
*Maintained by Jayson Knight + Bloqr AI assistant*

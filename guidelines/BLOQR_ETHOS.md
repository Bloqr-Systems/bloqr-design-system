# Bloqr — Ethos & Product Philosophy

*This document is our north star. It articulates why Bloqr exists, what we believe, what we will never do, and the promise we make to every person who trusts us with their internet traffic.*

*This file lives in `Bloqr-Systems/bloqr-design-system/guidelines/`.*

---

## Where We Come From

Bloqr wasn't designed in a conference room. It was built by someone who had already solved this problem for himself — and couldn't stop thinking about how broken the path to get there was.

Twenty-plus years of working in enterprise IT teaches you things the marketing departments of consumer tech companies don't want you to know. One of them is this: the internet was never designed for privacy. DNS — the system that translates every web address you type into an actual server — was standardized in 1987, in a world where the internet was a handful of universities and government labs. It was never encrypted. It still isn't, by default.

That gap matters. A lot.

The founder of Bloqr spent years building his own solution: a custom filter list hosted on GitHub, synced to a cluster of AdGuard Home servers running on Red Hat Enterprise Linux, layered on top of device-level clients across a dozen machines, with custom AdGuard DNS instances handling encrypted DNS resolution and his own private key infrastructure so that he — and only he — held the certificates proving who was seeing his traffic. It worked beautifully. It took years to build and required expert-level knowledge of DNS, network architecture, public key infrastructure, and enterprise IT to maintain.

He then asked himself a question that turned into Bloqr: *Why should this require all of that?*

The answer — there's no good reason — is why we exist.

---

## The Mission

**Make the internet hygiene that protects experts automatically work for everyone.**

Not a VPN. Not another proxy. Not another "trust us" black box with a slick app and a monthly contract. A transparent, vendor-agnostic layer that sits between your internet traffic and the parts of the internet that are trying to exploit you — and gets completely out of the way for everything else.

"The privacy you didn't know you needed."

Most people who need Bloqr don't know what DNS is. They don't know their ISP can see and sell every domain they visit, even though their bank connection is encrypted. They don't know that clicking "reject cookies" on a European privacy popup doesn't stop the website from building a profile of them — it just switches them from cookie tracking to fingerprinting, which is more accurate and harder to block. They don't know that the VPN they're paying $12 a month for is a proxy server with a marketing budget, not a security tool.

We exist to bridge that gap — not by making our product complicated, but by making it invisible. Set it, Bloqr it, and the internet starts working the way you assumed it always did.

---

## What We Believe

**Privacy is not a product feature. It's a basic expectation.**

**Transparency is non-negotiable.**
Every rule we apply to your traffic is visible to you. Every list we use is documented. If we change something that affects your experience, you'll know. We don't operate black boxes.

**You own your data. We are temporary custodians of the minimum amount necessary.**
We don't log DNS queries. We don't build behavioral profiles. We don't sell data. What we do store — account-level information necessary to run the service — is documented explicitly, retained for the shortest period that allows us to function, and deletable by you on demand.

**We are infrastructure, not competition.**
AdGuard, NextDNS, Pi-hole, and other filtering tools are not our competitors. They are the tools our most sophisticated users have already mastered. Bloqr is the connective tissue that makes their rules portable, their lists intelligent, and their coverage consistent across every device.

**No single point of failure.**
Consumer VPNs are, architecturally, a single point of failure. Bloqr is built on Cloudflare's global network — the same infrastructure that handles roughly 20% of all internet traffic — with hundreds of edge nodes, no centralized data store for your queries.

**Simple enough for your grandmother. Honest enough for your attorney.**

---

## What We Will Never Do

- Log your DNS queries or browsing patterns
- Sell, share, or license your data to third parties — ever, under any circumstances
- Lock you into a contract you didn't consciously choose
- Use "no-log" as marketing language without full documentation of exactly what that means technically
- Pretend to be something we're not (we are not a VPN, not an anonymity tool, not Tor)
- Hide the rules we apply to your traffic
- Make it hard to leave

---

## The User Promise

**Coverage that follows you.** The same rules that protect your home network protect you at the coffee shop, on your phone, on a guest network in a hotel. One change, everywhere, instantly.

**Speed that improves, not degrades.** Unlike a VPN, which adds a full round-trip to every request, Bloqr eliminates requests to domains that would have slowed your browser down anyway.

**No new trust problem.** We're not asking you to trust us instead of your ISP. We're giving you the tools to reduce what either of us can see.

**A path to full coverage, however technical you are.** Zero configuration gets you 90% of the benefit. Full control gets you 100%. The floor is high. The ceiling is open.

---

## A Note on Anonymity

Bloqr is a privacy tool. Privacy and anonymity are different things, and we're careful about which one we claim to offer.

Privacy is about controlling the exposure of your data. Bloqr improves your privacy by filtering what reaches trackers and advertisers and by encrypting parts of your internet traffic that were never encrypted by default.

Anonymity is about hiding your identity from everyone, including the tools you use. That's what Tor does. If anonymity is your requirement — if you're a journalist, a whistleblower, someone in a country with an adversarial government — use Tor. We'll tell you that directly rather than take your money for a tool that isn't right for your threat model.

---

## The Origin Story, in Brief

This project started as a two-minute automation task: sync a personal filter list hosted on GitHub with four AdGuard DNS instances via their API. And then the question: *if this is useful for me, why doesn't it exist for everyone?*

The answer exposed a gap at the center of the consumer internet privacy market. The tools that actually work are all there. Separate. Requiring expertise to assemble. Invisible to the people who need them most.

Bloqr is the assembly. The expertise, automated. The gap, closed.

---

*Source of truth: `Bloqr-Systems/bloqr-design-system` → `guidelines/BLOQR_ETHOS.md`*
*This is a living document. As Bloqr grows, so will our commitments.*

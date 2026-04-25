# GoWin Tools — Roadmap

This roadmap describes planned directions for GoWin Tools. It is high-level and subject to change based on user feedback and priorities.

---

## Shipped

- **Text & Writing tools** — Word counter, case converter, lorem ipsum, duplicate line remover, reading time, slug generator, character counter (with platform limits for Twitter/X, Instagram, LinkedIn, Threads, Facebook)
- **Developer tools** — Hash generator, Base64, JWT decoder, JSON formatter/converter, UUID generator, hex/binary encoder, AES cipher, HMAC generator, HTML entity encoder
- **Math & Calculator tools** — BMI, compound interest, simple interest, EMI, tip calculator, age calculator, day of week, days between dates, discount, percentage, price per unit
- **Health tools** — Calorie/TDEE calculator, water intake calculator
- **Color & Design tools** — Color picker, color contrast checker, favicon generator, image metadata viewer
- **Business documents** — Invoice generator, credit note, debit note, delivery challan, purchase order, quotation, proforma invoice, receipt, packing list
- **Miscellaneous** — Coin flip, dice roller, typing speed test, px/rem converter, roman numeral converter, number formatter, CSV↔JSON, JSON↔YAML/TOML/XML

---

## In Progress / Near-Term

- Additional developer tools (more encoding/decoding, regex tester)
- Expanded business document templates
- Additional health calculators
- Unit converter (length, weight, temperature, volume)

---

## Planned / Considering

- **Offline PWA mode** — Install GoWin Tools as a local app via the browser
- **Tool chaining improvements** — More tools that can pass output to another tool in one click
- **PDF export** for business documents
- **Dark mode** — Currently light-only
- **More languages** — Tool metadata and SEO in additional languages

---

## Not Planned

These are intentionally out of scope:

- **User accounts** — No login, no saved data on a server — this is a core privacy guarantee
- **Collaborative features** — Real-time sharing or multi-user editing
- **AI/LLM integration** — GoWin Tools does one thing well: run logic locally. AI features would require sending data to a remote service, which conflicts with the privacy model.
- **Mobile app** — The web app is mobile-responsive; a native app would duplicate effort without adding value for locally-processed tools.

---

## Feedback

Have a tool you'd like to see? Open a [GitHub Issue](../../issues) with the label `suggestion`.

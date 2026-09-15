# Website prompt — Chandra Medical Store

## 1. First draft of the prompt

> Create a beautiful, modern, responsive website for "Chandra Medical Store", a 40-year-old
> medical store in Awagarh, Etah, Uttar Pradesh, on Etah–Agra Road. Owner: Ambrish
> Kulshreshtha. Mobile and WhatsApp: 9758627296. The store sells allopathic, ayurvedic and
> veterinary (animal) medicines at heavily discounted prices and is known for being
> trustworthy. Use the owner's photo. Add an advertisement for https://delyvanta.netlify.app/
> saying the site was created by them and that anyone can contact them for a business page.
> Make it look professional with a nice colour scheme and animations.

## 2. Review of the draft

The draft carries all the facts but gives a designer almost nothing to work with. Problems:

| Issue | Fix applied in the revision |
| --- | --- |
| "Beautiful, modern, professional, nice colour scheme" is subjective filler. Every pharmacy template claims it. | Name the actual palette, taken from the shop's own signboard (navy + medicine green), and name the mood: a neighbourhood chemist, not a hospital chain. |
| No audience or device stated. | Says it plainly: small-town customers in Awagarh and nearby villages, arriving on cheap Android phones over patchy 4G. Mobile-first, light page weight, no build step. |
| No primary action. A pharmacy site that only "looks nice" is useless. | One job: get the visitor to call or WhatsApp. Everything else supports that. |
| The owner photo is treated as a decoration to slot in somewhere. | The photo *is* the hero. In a town, people trust the man behind the counter, not a logo. |
| "Add animations" invites generic fade-in-on-scroll everywhere. | One deliberate load reveal, motion reduced if the visitor asks for it. Nothing else moves on its own. |
| Nothing about Hindi. | Hindi lines in Devanagari alongside English, since that's how the shop actually talks to customers. |
| The Delyvanta ad is undefined — could end up as a banner that cheapens the page. | Defined as a calm, separate credit section near the footer, clearly marked as an advertisement. |
| No facts are marked as missing, so an AI would invent opening hours and a pin code and present them as true. | Missing details are listed explicitly and must be left as marked placeholders. |

## 3. Revised prompt (this is what the site was built from)

> **Brief.** Build a one-page website for **Chandra Medical Store**, a family-run chemist that
> has been on the Etah–Agra Road in Awagarh, district Etah, Uttar Pradesh for 40 years. It is
> run by **Ambrish Kulshreshtha**, phone and WhatsApp **9758627296**. The shop stocks
> allopathic, ayurvedic and veterinary medicines, and its two selling points are heavy
> discounts and the fact that the town trusts it.
>
> **Audience and job.** Visitors are local residents and people from nearby villages, almost
> all on mid-range Android phones on unreliable mobile data. Many read Hindi more comfortably
> than English. The site has exactly one job: make them call or WhatsApp the shop. A call
> button must be reachable at every scroll position without hunting.
>
> **Tone.** A forty-year-old neighbourhood chemist — steady, plain-spoken, personal. Not a
> hospital, not a startup, not a discount e-commerce app. No stock photography of smiling
> models in lab coats, no invented awards, no fake five-star reviews.
>
> **Hero.** Lead with the owner's photograph, full bleed against a deep navy ground, with his
> name set beside it. In a small town the person is the brand. The headline states the forty
> years and the three kinds of medicine; a Hindi line sits under it. Two buttons: call, and
> WhatsApp.
>
> **Palette.** Pull it from the shop's own signboard: deep navy `#10233F` and medicine green
> `#1B7A4B` as the two structural colours, cool white `#FAFBFC` for the page, a pale mint-grey
> `#E9EFEC` for quiet panels, and marigold `#E08A1E` used only for the discount band. Do not
> use a cream background, a terracotta accent, or gradient washes.
>
> **Type.** Two families only. Fraunces for headings — a soft serif reads as long-established
> rather than newly launched. Inter Tight for everything else. Noto Sans Devanagari for the
> Hindi lines. Sentence case throughout; no tracked-out all-caps labels above headings.
>
> **Sections, in order.** Sticky call/WhatsApp bar; hero; what the shop stocks, as three
> entries divided like a counter rather than three identical rounded cards; a marigold band
> about the discounts; why the town trusts the shop, as short plain statements; how to reach
> the shop, with address, phone, hours and an embedded map; a small, clearly labelled
> advertisement for **https://delyvanta.netlify.app/** crediting them as the site's builder and
> inviting other businesses to get a page made; footer.
>
> **Craft.** Hand-written HTML, CSS and a few lines of JavaScript. No framework, no build step,
> no npm — it must run by opening `index.html`. Single orchestrated reveal on load and nothing
> else animating by itself; honour `prefers-reduced-motion`. Keyboard focus must stay visible.
> Include Open Graph tags and LocalBusiness/Pharmacy schema markup so the shop shows up well in
> search and when the link is shared on WhatsApp.
>
> **Do not invent facts.** Opening hours, pin code, email, licence number and exact map
> coordinates were not supplied. Leave them as obvious placeholders and list them in a README
> for the owner to fill in. Never write a fact about this shop that was not given.

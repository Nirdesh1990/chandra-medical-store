# Chandra Medical Store — website

A single-page site for Chandra Medical Store, Etah–Agra Road, Awagarh, district Etah, Uttar Pradesh.
Plain HTML, CSS and a little JavaScript. No build step, no npm, no framework — open `index.html`
in any browser and it runs.

```
chandra-medical-store/
├── index.html                          the whole page
├── css/styles.css                      all styling
├── js/main.js                          load reveal + nav highlight
├── images/
│   └── owner-ambrish-kulshreshtha.jpg   hero photograph
├── PROMPT.md                           the design brief, reviewed and revised
└── README.md                           this file
```

## Fill these in before publishing

Three things on the page are placeholders, because they were not supplied. Search `index.html`
for the word `PLACEHOLDER` to find them.

1. **Opening hours** — currently reads *8:00 am – 9:00 pm, all seven days* and carries a red
   "edit this line" flag on screen. Put in the real timings and delete the
   `<span class="edit-flag">edit this line</span>` bit.
2. **Map location** — the embedded map currently points at the Etah–Agra Road in Awagarh, not
   at the shop door. To fix it: open Google Maps, find the shop, choose **Share → Embed a map**,
   copy the `src` value and paste it over the one in the `.visit-map` iframe.
3. **Canonical and Open Graph URL** — `index.html` has
   `https://chandramedicalstore.example/` in two places. Replace with the real address once the
   site is live, so WhatsApp link previews work properly.

Optional additions, if the owner wants them: pin code, drug licence number, GST number, an email
address, and a line about home delivery.

## Changing the content

Everything is written plainly in `index.html`. The phone number appears nine times — six as
`tel:+919758627296` (top bar, hero, visit section, the address list, the footer, the phone dock)
and three as `wa.me/919758627296` (hero, visit section, phone dock). It is also in the
`telephone` field of the schema block in the `<head>`. If the number ever changes,
find-and-replace `9758627296` across the file and you will catch all of them.

## Changing the look

All colours live at the top of `css/styles.css` as variables:

| Variable | Value | Where it is used |
| --- | --- | --- |
| `--ink` | `#10233F` | Navy from the signboard — header, hero, advertisement |
| `--leaf` | `#1B7A4B` | Green from the signboard — WhatsApp buttons, icons, rules |
| `--marigold` | `#E08A1E` | The discount band and hover states, deliberately nowhere else |
| `--mint` | `#E9EFEC` | The quiet panel behind the visit section |
| `--paper` | `#FAFBFC` | Page background |

Typefaces are Fraunces for headings, Inter Tight for text, and Noto Sans Devanagari for the
Hindi lines, all loaded from Google Fonts in the `<head>`.

## Putting it online

Free and quick, in roughly this order of ease:

- **Netlify Drop** — go to `app.netlify.com/drop` and drag the whole unzipped folder onto the
  page. It is live in about ten seconds on a `something.netlify.app` address.
- **GitHub Pages** — push the folder to a repository, then Settings → Pages → deploy from the
  `main` branch.
- **Your own domain** — buy something like `chandramedicalstore.in` and point it at whichever of
  the above you used.

After it is live, add the address to the shop's Google Business Profile and to the WhatsApp
Business profile, so people searching "medical store Awagarh" actually land on it.

## Notes on accessibility and speed

Keyboard focus stays visible throughout, the page respects `prefers-reduced-motion`, the layout
works down to a 320px phone, and the only network requests are the fonts and the map. The map
loads lazily so it does not slow the first view on a weak connection. If page weight matters more
than the photograph's sharpness, compress `images/owner-ambrish-kulshreshtha.jpg` — it is
currently about 185 KB, which is fine, but a WebP version would be smaller still.

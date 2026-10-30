# PDD Home Services — SEO sheet & WordPress setup

Source of all facts: client intake form. Items marked **[CONFIRM]** need client confirmation before publishing.

## 1. SEO sheet

| Field | Value |
|---|---|
| Brand | PDD Home Services |
| Page | Home (single landing) |
| Language / market | English · United States (Central Florida) |
| SEO title (≤60) | Drywall, Texture & Metal Framing \| PDD Home Services FL |
| Meta description (≤155) | Drywall installation & finishing, texture, painting and metal framing in Orange & Polk County, FL. 18 years of experience. Request a quote. |
| H1 | Finishes that look right and last. |
| Primary keyword | drywall contractor Central Florida |
| Secondary keywords | drywall installation Polk County · drywall finishing Orange County FL · metal framing subcontractor Florida · wall texture contractor · drywall subcontractor for general contractors · painting and drywall Central Florida |
| Search intent | Commercial / local: contractors and homeowners looking for a drywall, texture, painting and metal framing crew |
| Priority audience | General contractors and construction companies needing subcontractors (client's top priority); also home builders, remodeling companies, homeowners |
| Priority area | Polk County (primary), Orange County |
| CTA | Request a Quote |
| Contact | (863) 812-3424 · Pddremodelingllc@hotmail.com |
| Canonical URL | **[CONFIRM]** — client has no domain yet |
| Social image (OG) | 1200×630, logo on black with gold. Pending |

### Heading structure
- H1: Finishes that look right and last.
- H2: The Problem · Services · Our Process · About PDD Home Services · Clients · FAQ · Request your quote
- H3: each service, each process step, each FAQ question

### Image alt text (use when photos arrive)
- hero: "Drywall finishing crew at work in Central Florida"
- problem: "Damaged drywall wall needing repair"
- team: "PDD Home Services crew on a remodeling job site"
Replace with a literal description of the real photo.

### Local SEO checklist
- Google Business Profile: category "Drywall contractor"; service areas Orange County and Polk County, FL; same phone and name as the site (NAP consistent). **[CONFIRM]** whether a public address exists (service-area business can hide it).
- Same name/phone/email on every directory (Google, Bing Places, Yelp, Facebook, Angi, Thumbtack).
- Ask satisfied clients for Google reviews (client has one testimonial, no online reviews yet).
- Structured data: LocalBusiness-type JSON-LD is already in the page head. Add `url`, `logo`, `image`, `sameAs` once domain and profiles exist. Do not add ratings until real reviews exist.

### FAQ copy to keep (matches the on-page FAQ)
Cost · areas served · work with contractors · warranty · timelines.

## 2. WordPress configuration

The page is static HTML/CSS/JS. Two ways to run it in WordPress:

**Option A (recommended): static files, WordPress only as host/SEO layer**
1. Upload `index.html`, `styles.css`, `main.js`, `favicon.svg` and the `assets/` folder to the site root (or a plugin like "Static HTML Output"/a blank theme).
2. Set Settings → Reading → "Your homepage displays" → static page if using a template instead of root files.

**Option B: inside WordPress with Elementor**
1. Create a page "Home" → Template: **Elementor Canvas**.
2. Add an HTML widget with the page body markup; load `styles.css`/`main.js` via the theme's header/footer injector (e.g. WPCode) and fonts: Oswald 400–700, Inter 400–600.
3. Replace the demo form with the CRM embed (see §3).

### Core settings
- Settings → General: Site title **PDD Home Services**; tagline "Drywall, texture, painting & metal framing in Central Florida"; language **English (United States)**; timezone New York (Eastern).
- Settings → Reading: homepage = static page "Home"; **uncheck** "Discourage search engines" at launch.
- Settings → Permalinks: "Post name".
- Settings → Media: upload brand logo (`logo-white.svg`) and favicon (`favicon.svg` + PNG 512×512 fallback). Allow SVG via a safe plugin (Safe SVG).
- Users: admin email = client's contact email; strong password + 2FA.

### SEO plugin (Rank Math or Yoast — pick one)
- Set the title, description and focus keyword from the sheet above.
- Site type: Local business / Organization; name PDD Home Services; logo; phone +1-863-812-3424; areas served Orange County & Polk County, FL.
- Social: default OG image 1200×630; Twitter card "summary large image".
- Sitemap on; submit `/sitemap_index.xml` to Google Search Console and Bing Webmaster Tools.
- Do not output a second schema block if the plugin generates LocalBusiness — keep one source (plugin or the JSON-LD in `<head>`, not both).

### Performance & security
- SSL on, force HTTPS. One caching plugin only (LiteSpeed/WP Rocket/hosting cache).
- Compress photos to WebP, hero ≤ 200 KB, others ≤ 120 KB; add `width`/`height` and `loading="lazy"` (not on the hero).
- Self-host Oswald and Inter if possible (faster, avoids Google Fonts request).
- Remove unused plugins/themes; auto-update minor core + plugin updates; daily backups.

### Tracking & forms
- Google Analytics 4 + Google Search Console verified. Event: form submit and click on `tel:` link (track as conversions).
- Meta Pixel only if the client will run Facebook ads.
- Form: replace the placeholder `data-lead-form` block with the GoHighLevel embed or webhook; confirmation message + notification to Pddremodelingllc@hotmail.com **[CONFIRM]**. Add a short privacy notice near the form.

### Pre-launch checklist
- [ ] Domain, DNS and SSL live
- [ ] Real photos placed, alt text written
- [ ] Form tested end-to-end (lead reaches CRM and email)
- [ ] Canonical, og:url, og:image added
- [ ] Phone/email confirmed with client
- [ ] Mobile and Lighthouse check (target 90+)
- [ ] Search Console + sitemap submitted
- [ ] Google Business Profile created/verified

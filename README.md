# Lanka Live

Music network for Sri Lanka. English, Sinhala, Tamil and Thai. Free registration, artist profiles, forum and contact form.

## Vercel
Connect `GTOenter/lankalive` in the existing **lankalive** project: Settings → Git → Connect Git Repository. Framework: Next.js. Build: `npm run build`. No custom output directory.

Community records and uploaded photos stay on the current ChatGPT Site during the transition. Vercel forwards `/api/community` and `/api/image` to that public Site. **Keep the original Site online and public** until a separate database migration is complete. Website photographs are included here.

## Contact form
Recipient: post@gtoenter.no. Without credentials, the form opens the visitor's email app. For direct sending configure `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in Vercel using a sender verified with Resend, then redeploy.

## Domain
Add trubadurforbundet.no in Vercel Settings → Domains. Use the DNS records Vercel returns, replacing earlier ChatGPT Sites DNS routing instructions.

## Local
Run `npm install`, then `npm run dev`. Build: `npm run build`.

# Cassify integration handoff

Production showcase: https://casify-two.vercel.app/

## Microsoft Clarity
Project yz7o35ev8e. integrations.js loads Clarity only on the production homepage after consent. Advertising storage is denied. Consent lasts up to 180 days and can be withdrawn in the footer. Case dialogs are masked. No account identity or answer text is sent as a custom event. Privacy and checkout demo pages do not load Clarity.

## Google Search Console
URL-prefix property https://casify-two.vercel.app/ verified using the HTML tag in index.html. Sitemap submitted successfully; Search Console reports Success and two discovered pages on 18 October 2026. This does not guarantee indexing. Keep the verification tag during future redesigns.

## Dodo Payments
TEST product pdt_0NpzXMK1UMHHFSWaw7WZ0: Cassify Premium — TEST, INR 200 monthly, tax-inclusive, Edtech category. Hosted payment link: https://test.checkout.dodopayments.com/buy/pdt_0NpzXMK1UMHHFSWaw7WZ0?quantity=1

The homepage links to /billing-test.html, a clearly marked sandbox demonstration. No secret API key is needed for this hosted link. No live payment, webhook, account mapping, subscription entitlement, or secure membership backend exists. Checkout rendering and the displayed price were verified; a payment was not submitted.

For Emergent: keep TEST and LIVE configuration separate. Implement verified sign-in, server-side roles, a server-created checkout tied to the authenticated user, signature-verified and idempotent Dodo webhooks, and database subscription state before granting paid access. A redirect or client-side flag must never grant access. Handle renewal, failure, cancellation, expiration and refunds. Configure secret keys only in server environment variables. Complete Dodo live verification and product policies before enabling live billing. Grant the owner's admin role only after verifying the identity avaneeshpramod25@gmail.com on the server; never trust a submitted email string.

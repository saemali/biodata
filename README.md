# ShubhBiodata – free in-browser marriage biodata maker
Static site, no backend; all data stays in the browser. Exports (client-side, vendored MIT libs in assets/vendor): PDF A4 (<2 MB, html2canvas+jsPDF), PNG 1080x1920, DOCX (docx).
- Regenerate pages: `node tools/build-pages.js` (variant copy, CTAs, sitemap live there)
- Export test: tools/export-test.js (puppeteer-core + Chrome); outputs in qa/
- Buy buttons hidden: set SHOW_BUY=true + GUMROAD_99/GUMROAD_DFY in tools/build-pages.js, then rerun it.
- Not pushed. Needs Earn-Quality review + native review of [conv] fields before launch.

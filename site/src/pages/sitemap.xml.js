import stanice from '../data/stanice.json';
import { radce } from '../data/radce.js';
const BASE = 'https://prehledstk.com';
export function GET() {
  const rutas = ['/', '/stanice/', '/radce/', '/o-webu/', '/kontakt/', '/ochrana-soukromi/'];
  for (const g of radce) rutas.push(`/${g.slug}/`);
  const set = { mesto: new Set(), okres: new Set(), kraj: new Set() };
  for (const s of stanice) {
    rutas.push(`/stanice/${s.slug}/`);
    set.mesto.add(s.mestoSlug); set.okres.add(s.okresSlug); set.kraj.add(s.krajSlug);
  }
  for (const m of set.mesto) rutas.push(`/stk/${m}/`);
  for (const o of set.okres) rutas.push(`/okres/${o}/`);
  for (const k of set.kraj) rutas.push(`/kraj/${k}/`);
  const unicas = [...new Set(rutas)];
  const hoy = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    unicas.map(r => `<url><loc>${BASE}${r}</loc><lastmod>${hoy}</lastmod></url>`).join('\n') + `\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}

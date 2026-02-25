import type { RequestHandler } from './$types';
import { base } from '$app/paths';
import { getAuctions } from '$lib/data/auctions';
import { SITE_URL } from '$lib/seo';

const pages = [{ path: '/' }, { path: '/inventory' }];

export const GET: RequestHandler = () => {
	const auctions = getAuctions();
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map((page) => `  <url><loc>${SITE_URL}${base}${page.path}</loc></url>`)
	.join('\n')}
${auctions
	.map((auction) => `  <url><loc>${SITE_URL}${base}/auctions/${auction.id}</loc></url>`)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

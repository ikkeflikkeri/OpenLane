import type { RequestHandler } from './$types';
import { base } from '$app/paths';
import { cars } from '$lib/data/cars';
import { SITE_URL } from '$lib/seo';

const pages = [{ path: '/' }, { path: '/inventory' }];

export const GET: RequestHandler = () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map((page) => `  <url><loc>${SITE_URL}${base}${page.path}</loc></url>`)
	.join('\n')}
${cars.map((car) => `  <url><loc>${SITE_URL}${base}/auctions/${car.id}</loc></url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

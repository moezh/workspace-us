import type { APIRoute } from "astro";

const getSitemapTxt = (url: URL) => {
  const site = `${url.protocol}//${url.hostname}`;

  return `\
<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${site}/</loc>
    </url>
    <url>
        <loc>${site}/contact</loc>
    </url>
   
    <url>
        <loc>${site}/privacy-policy</loc>
    </url>
    
    <url>
        <loc>${site}/terms-of-service</loc>
    </url>
    
  </urlset>
`;
};

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  return new Response(getSitemapTxt(url));
};

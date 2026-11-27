self.__BUILD_VERSION = "816abffb478cffee";
self.__PRECACHE = ["/cesta-certa/_next/static/9AR1k2Yyb8a6eFCuP-3Kq/_buildManifest.js","/cesta-certa/_next/static/9AR1k2Yyb8a6eFCuP-3Kq/_ssgManifest.js","/cesta-certa/_next/static/chunks/255-c699c9a850a1fc35.js","/cesta-certa/_next/static/chunks/4bd1b696-c023c6e3521b1417.js","/cesta-certa/_next/static/chunks/619-ba102abea3e3d0e4.js","/cesta-certa/_next/static/chunks/829-e449301f501c5751.js","/cesta-certa/_next/static/chunks/app/_not-found/page-00cda7fd72af6fc7.js","/cesta-certa/_next/static/chunks/app/cardapio/layout-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/cardapio/page-f90bdbffc0db0aae.js","/cesta-certa/_next/static/chunks/app/entrar/layout-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/entrar/page-a26f3f2cf9b6d929.js","/cesta-certa/_next/static/chunks/app/layout-466f14757d52641c.js","/cesta-certa/_next/static/chunks/app/lista/layout-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/lista/page-8cd91f74c5ae7d3e.js","/cesta-certa/_next/static/chunks/app/manifest.webmanifest/route-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/page-26b1605ab4f0190b.js","/cesta-certa/_next/static/chunks/app/planejar/layout-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/planejar/page-1452696a3afff591.js","/cesta-certa/_next/static/chunks/app/precos/page-29c721868ab32776.js","/cesta-certa/_next/static/chunks/app/receita/[slug]/page-591e2261adf381a3.js","/cesta-certa/_next/static/chunks/app/robots.txt/route-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/semana/layout-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/semana/lista/layout-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/app/semana/lista/page-c2e8f4430380e0d7.js","/cesta-certa/_next/static/chunks/app/semana/page-492ff97f315361e4.js","/cesta-certa/_next/static/chunks/app/sitemap.xml/route-1ce86dcab2a38ac9.js","/cesta-certa/_next/static/chunks/framework-28b60818f5cffd83.js","/cesta-certa/_next/static/chunks/main-6d37d3a467f85904.js","/cesta-certa/_next/static/chunks/main-app-2d5f81534da12541.js","/cesta-certa/_next/static/chunks/pages/_app-7d307437aca18ad4.js","/cesta-certa/_next/static/chunks/pages/_error-cb2a52f75f2162e2.js","/cesta-certa/_next/static/chunks/polyfills-42372ed130431b0a.js","/cesta-certa/_next/static/chunks/webpack-e7e44c0ab5097abe.js","/cesta-certa/_next/static/css/dcd8be62425a5452.css","/cesta-certa/_next/static/css/e37287860fb9243b.css","/cesta-certa/_next/static/media/11c4c3cba9a7e226-s.woff2","/cesta-certa/_next/static/media/279bb7a1be217873-s.woff2","/cesta-certa/_next/static/media/3352fdb488e19d84-s.woff2","/cesta-certa/_next/static/media/437e5f23c97e320c-s.p.woff2","/cesta-certa/_next/static/media/549c72aca63c3e8a-s.woff2","/cesta-certa/_next/static/media/55b35d87b6156eea-s.woff2","/cesta-certa/_next/static/media/58f386aa6b1a2a92-s.woff2","/cesta-certa/_next/static/media/5fb5c05ff73c0616-s.p.woff2","/cesta-certa/_next/static/media/73cb51aac9c97f90-s.woff2","/cesta-certa/_next/static/media/79f0f365efbf4f90-s.p.woff2","/cesta-certa/_next/static/media/82179190dde1591d-s.woff2","/cesta-certa/_next/static/media/8599be8653318abe-s.woff2","/cesta-certa/_next/static/media/93a6e477e1480c92-s.woff2","/cesta-certa/_next/static/media/9754fd1e347c437b-s.woff2","/cesta-certa/_next/static/media/9d5a263311222317-s.p.woff2","/cesta-certa/_next/static/media/adc67d25e358ad72-s.woff2","/cesta-certa/_next/static/media/bd4099f982a70777-s.woff2","/cesta-certa/_next/static/media/c67326d545bf0a00-s.woff2","/cesta-certa/_next/static/media/c7e0cf6c760983e7-s.woff2","/cesta-certa/_next/static/media/cdec7fa3927eb560-s.p.woff2","/cesta-certa/_next/static/media/d51fd126416ee4c8-s.woff2","/cesta-certa/_next/static/media/d6e015f239232eb3-s.woff2","/cesta-certa/_next/static/media/d9a2293b6b8212a5-s.p.woff2","/cesta-certa/_next/static/media/dc4d8d7cae82600c-s.woff2","/cesta-certa/","/cesta-certa/index.txt","/cesta-certa/lista/","/cesta-certa/lista/index.txt","/cesta-certa/planejar/","/cesta-certa/planejar/index.txt","/cesta-certa/semana/","/cesta-certa/semana/index.txt","/cesta-certa/semana/lista/","/cesta-certa/semana/lista/index.txt"];
/* The postbuild script prepends the version and app-shell URLs to the exported worker. */
const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const CACHE = `cesta-certa-${self.__BUILD_VERSION || "development"}`;
const DATA_CACHE = "cesta-certa-data";
// Abas abertas antes de uma publicação ainda podem pedir chunks do build anterior.
const ASSET_CACHE = "cesta-certa-assets";
const SHELL = self.__PRECACHE || [`${BASE}/`, `${BASE}/semana/`, `${BASE}/semana/lista/`];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const assets = await caches.open(ASSET_CACHE);
    for (const key of await caches.keys()) {
      if (!key.startsWith("cesta-certa-") || [CACHE, DATA_CACHE, ASSET_CACHE].includes(key)) continue;
      const old = await caches.open(key);
      for (const request of await old.keys()) {
        if (new URL(request.url).pathname.startsWith(`${BASE}/_next/static/`)) {
          const response = await old.match(request);
          if (response) await assets.put(request, response);
        }
      }
      await caches.delete(key);
    }
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || !url.pathname.startsWith(`${BASE}/`)) return;
  const relative = url.pathname.slice(BASE.length);
  if (relative.startsWith("/data/") && relative.endsWith(".json")) {
    // preços mudam todo dia: rede primeiro; o que ficou guardado só vale sem internet
    event.respondWith((async () => {
      const cache = await caches.open(DATA_CACHE);
      try {
        const response = await fetch(request, { cache: "no-cache" });
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        return (await cache.match(request, { ignoreSearch: true })) ||
          new Response(JSON.stringify({ error: "Sem conexão e sem dados salvos." }), { status: 503, headers: { "Content-Type": "application/json" } });
      }
    })());
  } else if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try { const response = await fetch(request); if (response.ok) await cache.put(request, response.clone()); return response; }
      catch { return (await cache.match(request, { ignoreSearch: true })) || (await cache.match(`${BASE}/`)) || Response.error(); }
    })());
  } else if (relative.startsWith("/_next/static/") || relative.endsWith(".txt")) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(request, { ignoreSearch: true }) ||
        (relative.startsWith("/_next/static/") && await (await caches.open(ASSET_CACHE)).match(request, { ignoreSearch: true }));
      if (cached) return cached;
      try { const response = await fetch(request); if (response.ok) await cache.put(request, response.clone()); return response; }
      catch { return Response.error(); }
    })());
  }
});

// Every request: send www.recordmockup.com to the root domain with a permanent redirect, keeping path and query,
// so search engines index one host and analytics are not split across two. Other hosts (the root domain,
// *.record-mockup.pages.dev previews, local dev) pass through untouched.
const WWW = 'www.recordmockup.com', ROOT = 'recordmockup.com';

export async function onRequest({request, next}) {
  const url = new URL(request.url);
  if (url.hostname !== WWW) return next();
  url.hostname = ROOT;
  return Response.redirect(url.toString(), 301);
}

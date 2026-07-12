const ADMIN_HOST = "admin.somosmaya.io";
const ADMIN_USER = "admin";
const ADMIN_CREDENTIAL_HASH = "SE/JRgjxOIbEjlgD4Uu6UXbjd2Ca2CFp0WsFlQPUCQE=";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const isAdminRequest = url.hostname === ADMIN_HOST || url.pathname.startsWith("/admin");

  if (!isAdminRequest) {
    return context.next();
  }

  if (!(await isAuthorized(context.request))) {
    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="SOSMAYA Admin", charset="UTF-8"',
        "Cache-Control": "no-store"
      }
    });
  }

  if (url.hostname === ADMIN_HOST && (url.pathname === "/" || url.pathname === "")) {
    url.pathname = "/admin/index.html";
    return context.env.ASSETS.fetch(new Request(url, context.request));
  }

  return context.next();
}

async function isAuthorized(request) {
  const authorization = request.headers.get("Authorization") || "";
  const [scheme, encoded] = authorization.split(" ");

  if (scheme !== "Basic" || !encoded) {
    return false;
  }

  let decoded = "";
  try {
    decoded = atob(encoded);
  } catch {
    return false;
  }

  if (!decoded.startsWith(`${ADMIN_USER}:`)) {
    return false;
  }

  return await sha256Base64(decoded) === ADMIN_CREDENTIAL_HASH;
}

async function sha256Base64(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  let binary = "";

  for (const byte of new Uint8Array(digest)) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
}

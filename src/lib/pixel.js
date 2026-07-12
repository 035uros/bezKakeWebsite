/* Meta Pixel helpers — safe no-ops when fbq isn't loaded,
   so the page never breaks in dev or with ad blockers. */

export function fbCustom(event, params = {}) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", event, params);
  }
}

export function fbStandard(event, params = {}) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

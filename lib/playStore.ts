const PLAY_STORE_APP_ID = "com.warehouseapp.Spendora";

export function getPlayStoreUrl(
  campaign = "website",
  medium = "website",
): string {
  const referrer = [
    "utm_source=cashnix_website",
    `utm_medium=${medium}`,
    `utm_campaign=${campaign}`,
  ].join("&");

  return `https://play.google.com/store/apps/details?id=${PLAY_STORE_APP_ID}&referrer=${encodeURIComponent(referrer)}`;
}

export const PLAY_STORE_URL = getPlayStoreUrl();

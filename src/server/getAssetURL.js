import hashString from './hashString';

const CDN_HOSTS = [
  'stevium.com',
];

/**
 * In production returns a CDN URL; otherwise returns the URL as is.
 */
export default function getAssetURL(asset) {
  if (__DEV__) {
    return asset;
  } else if (asset.startsWith('/')) {
    const host = CDN_HOSTS[Math.abs(hashString(asset)) % CDN_HOSTS.length];
    return '//' + host + asset;
  } else {
    return asset;
  }
}

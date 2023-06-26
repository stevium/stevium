export default function getURLForContentPath(type, path) {
  // TODO: possibly assert about `path` format here (expect /foo/etc).
  return `https://github.com/stevium/stevium/${type}/content/content${path}`;
}

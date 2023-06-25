export default function formatTitle(title) {
  return [...(title ? [title] : []), 'stevium.com'].join(' · ').toLowerCase();
}

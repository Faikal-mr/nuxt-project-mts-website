export function truncateText(text: string, limit = 100): string {
  return text.length > limit ? text.slice(0, limit) + '...' : text
}

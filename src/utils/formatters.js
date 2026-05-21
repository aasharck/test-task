/** "2026-03-04" → "04.03.2026" */
export function formatDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

/** "2026-06-18" → "In 29 days" | "Expired" | "Today" */
export function formatExpiry(iso) {
  if (!iso) return '—'
  const days = Math.ceil((new Date(iso) - new Date()) / 86_400_000)
  if (days < 0)  return 'Expired'
  if (days === 0) return 'Today'
  return `In ${days} days`
}

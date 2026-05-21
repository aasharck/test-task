import { useLocation } from 'react-router-dom'

/**
 * Maps path segments to display titles.
 * Add entries here for any route that needs a custom label.
 */
const TITLE_MAP = {
  'api-keys':     'API keys',
  'node-rewards': 'Node rewards',
}

function getTitle(pathname) {
  const segment = pathname.split('/').filter(Boolean)[0] ?? ''
  const label = TITLE_MAP[segment] ??
    segment.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return label || 'Dashboard'
}

export default function Header({ balance, initials }) {
  const { pathname } = useLocation()

  return (
    <header className="flex items-center h-[52px] shrink-0 border-b border-border bg-background px-5">

      {/* Mobile — page title only */}
      <span className="md:hidden text-xl font-semibold text-foreground">
        {getTitle(pathname)}
      </span>

      {/* Desktop — balance + avatar */}
      <div className="hidden md:flex items-center justify-end gap-2.5 w-full">
        <span className="text-sm font-medium text-foreground bg-surface border border-border px-2.5 py-1 rounded-md">
          {balance}
        </span>
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold tracking-wide shrink-0">
          {initials}
        </div>
      </div>

    </header>
  )
}

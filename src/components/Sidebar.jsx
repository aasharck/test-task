import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo         from '../assets/logo.svg'
import logoCollapsed from '../assets/logo-collapsed.svg'
import modelsIcon     from '../assets/icons/models.svg'
import apiIcon        from '../assets/icons/api.svg'
import usageIcon      from '../assets/icons/usage.svg'
import billingIcon    from '../assets/icons/billing.svg'
import playgroundIcon from '../assets/icons/playground.svg'
import nodeIcon       from '../assets/icons/node.svg'
import settingsIcon   from '../assets/icons/settings.svg'
import docsIcon       from '../assets/icons/docs.svg'
import collapseIcon   from '../assets/icons/navCollapse.svg'
import { cn } from '../lib/utils'

const NAV = [
  {
    section: 'Platform',
    items: [
      { label: 'Models',     path: '/models',     icon: modelsIcon },
      { label: 'API keys',   path: '/api-keys',   icon: apiIcon },
      { label: 'Usage',      path: '/usage',      icon: usageIcon },
      { label: 'Billing',    path: '/billing',    icon: billingIcon, badge: 8 },
      { label: 'Playground', path: '/playground', icon: playgroundIcon },
    ],
  },
  {
    section: 'Node',
    items: [
      { label: 'Node rewards', path: '/node-rewards', icon: nodeIcon },
    ],
  },
  {
    section: 'System',
    items: [
      { label: 'Settings', path: '/settings', icon: settingsIcon },
      { label: 'Docs',     path: '/docs',     icon: docsIcon },
    ],
  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        'hidden md:flex shrink-0 flex-col h-screen sticky top-0 border-r border-border bg-background',
        'overflow-hidden transition-[width] duration-200 ease-in-out',
        collapsed ? 'w-[68px]' : 'w-[240px]'
      )}
    >
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className={cn(
        'flex items-center min-h-[52px] shrink-0',
        collapsed ? 'justify-center px-2' : 'justify-between px-3.5'
      )}>
        {collapsed ? (
          <img src={logoCollapsed} alt="Fabla3s" className="h-7 w-auto select-none" />
        ) : (
          <>
            <img src={logo} alt="Fabla3s" className="h-8 w-auto select-none" />
            <button
              onClick={() => setCollapsed(true)}
              className="p-1 rounded text-muted hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Collapse sidebar"
            >
              <img src={collapseIcon} alt="" className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className={cn('flex flex-col p-2 flex-1 overflow-y-auto', collapsed ? 'gap-1' : 'gap-2')}>
        {NAV.map(({ section, items }, sectionIndex) => (
          <div key={section} className="flex flex-col">

            {/* Section label (expanded) or divider (collapsed) */}
            {collapsed ? (
              sectionIndex > 0 && (
                <div className="mx-1 my-1 border-t border-border" />
              )
            ) : (
              <span className="text-xs font-medium text-muted tracking-wide px-2 mb-1">
                {section}
              </span>
            )}

            {items.map(({ label, path, icon, badge }) => (
              <NavLink
                key={path}
                to={path}
                end
                title={collapsed ? label : undefined}
                className={({ isActive }) => cn(
                  'flex items-center w-full rounded-xl text-sm font-medium transition-colors duration-100',
                  collapsed
                    ? 'justify-center p-2.5'
                    : 'gap-2 px-2 py-1',
                  isActive
                    ? 'bg-surface text-foreground'
                    : 'text-foreground hover:bg-surface'
                )}
              >
                {/* Icon — badge overlays it when collapsed */}
                <span className="relative shrink-0">
                  <img src={icon} alt="" className={cn(collapsed ? 'w-[18px] h-[18px]' : 'w-3.5 h-3.5')} />
                  {collapsed && badge != null && (
                    <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-0.5 rounded-full bg-[#F8717199] flex items-center justify-center text-foreground text-xs font-bold leading-none">
                      {badge > 99 ? '99+' : badge}
                    </span>
                  )}
                </span>

                {/* Label + inline badge — only when expanded */}
                {!collapsed && (
                  <>
                    {label}
                    {badge != null && (
                      <span className="ml-auto min-w-5 h-5 px-1 rounded-full bg-[#F8717199] flex items-center justify-center text-foreground text-xs font-bold leading-none">
                        {badge > 99 ? '99+' : badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {/* ── Expand button (visible only when collapsed) ─────────── */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center justify-center m-2 p-2 rounded-xl text-muted hover:text-foreground hover:bg-surface transition-colors"
          aria-label="Expand sidebar"
        >
          <img src={collapseIcon} alt="" className="w-3.5 h-3.5 rotate-180" />
        </button>
      )}
    </aside>
  )
}

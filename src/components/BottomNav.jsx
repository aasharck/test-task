import { NavLink } from 'react-router-dom'
import modelsIcon  from '../assets/icons/models.svg'
import apiIcon     from '../assets/icons/api.svg'
import usageIcon   from '../assets/icons/usage.svg'
import billingIcon from '../assets/icons/billing.svg'
import accountIcon from '../assets/icons/account.svg'
import { cn } from '../lib/utils'

const ITEMS = [
  { label: 'Models',   path: '/models',   icon: modelsIcon },
  { label: 'API keys', path: '/api-keys', icon: apiIcon },
  { label: 'Usage',    path: '/usage',    icon: usageIcon },
  { label: 'Billing',  path: '/billing',  icon: billingIcon, badge: 8 },
  { label: 'Account',  path: '/account',  icon: accountIcon },
]

export default function BottomNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="flex md:hidden fixed bottom-0 py-2 left-0 right-0 h-20 border-t border-border bg-background z-50"
    >
      {ITEMS.map(({ label, path, icon, badge }) => (
        <NavLink
          key={path}
          to={path}
          end
          className={({ isActive }) => cn(
            'flex-1 flex flex-col items-center justify-center text-xs font-medium transition-colors duration-150',
            isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
          )}
        >
          {({ isActive }) => (
            <>
              <span className={cn(
                'flex flex-col items-center px-4 py-2 rounded-2xl transition-colors duration-150',
                isActive && 'bg-surface'
              )}>
                <span className="relative">
                  <img
                    src={icon}
                    alt=""
                    className={cn('w-5 h-5 shrink-0 transition-opacity duration-150', !isActive && 'opacity-40')}
                  />
                  {badge != null && (
                    <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-0.5 rounded-full bg-[#F8717199] flex items-center justify-center text-foreground text-xs font-bold leading-none">
                      {badge > 99 ? '99+' : badge}
                    </span>
                  )}
                </span>
              </span>
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

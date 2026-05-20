import { IconModels, IconKey, IconUsage, IconBilling, IconAccount } from './Icons'

const ITEMS = [
  { id: 'models',   label: 'Models',   Icon: IconModels },
  { id: 'api-keys', label: 'API keys', Icon: IconKey },
  { id: 'usage',    label: 'Usage',    Icon: IconUsage },
  { id: 'billing',  label: 'Billing',  Icon: IconBilling },
  { id: 'account',  label: 'Account',  Icon: IconAccount },
]

export default function BottomNav({ activeId, onNavigate }) {
  return (
    /*
     * flex on mobile  →  md:hidden
     * Correct production pattern — CSS only, zero JS.
     */
    <nav
      aria-label="Mobile navigation"
      className="flex md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#1a1a1f] border-t border-[#2a2a32] z-50 [padding-bottom:env(safe-area-inset-bottom)]"
    >
      {ITEMS.map(({ id, label, Icon }) => {
        const isActive = activeId === id
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            aria-current={isActive ? 'page' : undefined}
            className={`
              flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium relative
              transition-colors duration-150
              ${isActive ? 'text-[#f0f0f5]' : 'text-[#5a5a6e] hover:text-[#8b8b9e]'}
            `}
          >
            {/* Active indicator line at top */}
            {isActive && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#6b5ce7] rounded-b-sm" />
            )}
            <Icon size={20} />
            {label}
          </button>
        )
      })}
    </nav>
  )
}

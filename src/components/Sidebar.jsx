import {
    IconModels, IconKey, IconUsage, IconBilling,
    IconPlayground, IconNodeRewards, IconSettings, IconDocs, IconCollapse,
  } from './Icons'

  import logo from '../assets/logo.svg'
  
  const NAV = [
    {
      section: 'Platform',
      items: [
        { id: 'models',     label: 'Models',      Icon: IconModels },
        { id: 'api-keys',   label: 'API keys',    Icon: IconKey },
        { id: 'usage',      label: 'Usage',       Icon: IconUsage },
        { id: 'billing',    label: 'Billing',     Icon: IconBilling },
        { id: 'playground', label: 'Playground',  Icon: IconPlayground },
      ],
    },
    {
      section: 'Node',
      items: [
        { id: 'node-rewards', label: 'Node rewards', Icon: IconNodeRewards },
      ],
    },
    {
      section: 'System',
      items: [
        { id: 'settings', label: 'Settings', Icon: IconSettings },
        { id: 'docs',     label: 'Docs',     Icon: IconDocs },
      ],
    },
  ]
  
  export default function Sidebar({ activeId, onNavigate }) {
    return (
      <aside className="hidden md:flex w-[180px] shrink-0 flex-col h-screen sticky top-0 bg-[#1a1a1f] border-r border-[#2a2a32] overflow-y-auto">
  
        {/* Logo row */}
        <div className="flex items-center justify-between px-3.5 py-3.5 border-b border-[#2a2a32] min-h-[52px]">
          <span className="text-[15px] tracking-wide select-none" aria-label="Fabla3s">
            <span className="font-normal text-[#8b8b9e]">FAB</span>
            <span className="font-extrabold">LA</span>
            <span className="text-[10px] font-bold text-[#6b5ce7] relative -top-1 mx-px">3</span>
            <span className="font-extrabold">S</span>
          </span>
          <button className="p-1 rounded text-[#5a5a6e] hover:text-[#8b8b9e] hover:bg-[#222228] transition-colors" aria-label="Collapse sidebar">
            <IconCollapse />
          </button>
        </div>
  
        <nav className="flex flex-col gap-4 p-2 flex-1">
          {NAV.map(({ section, items }) => (
            <div key={section} className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-[#5a5a6e] tracking-wide px-2 mb-1">
                {section}
              </span>
              {items.map(({ id, label, Icon }) => {
                const isActive = activeId === id
                return (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      flex items-center gap-2.5 w-full text-left px-2 py-1.5 rounded-md text-[13px] font-medium transition-colors duration-100
                      ${isActive
                        ? 'bg-[#222228] text-[#f0f0f5] [&_svg]:text-[#6b5ce7]'
                        : 'text-[#8b8b9e] hover:bg-[#222228] hover:text-[#f0f0f5]'
                      }
                    `}
                  >
                    <Icon />
                    {label}
                  </button>
                )
              })}
            </div>
          ))}
        </nav>
      </aside>
    )
  }
  
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import { mockApiKeys, mockUser } from './data/mockData'

export default function App() {
  const [activePage, setActivePage] = useState('api-keys')

  const renderPage = () => {
    switch (activePage) {
      case 'api-keys': return (
        <div className="flex flex-col items-center justify-center h-full gap-2 text-[#5a5a6e]">
          <span className="text-lg font-semibold text-[#8b8b9e] capitalize">{activePage}</span>
          <p className="text-sm">Not yet implemented.</p>
        </div>
      )
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-[#5a5a6e]">
            <span className="text-lg font-semibold text-[#8b8b9e] capitalize">{activePage}</span>
            <p className="text-sm">Not yet implemented.</p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#111113]">

      {/* Sidebar: hidden on mobile, flex on md+ — pure CSS, no JS */}
      <Sidebar activeId={activePage} onNavigate={setActivePage} />

      {/* Main column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header balance={mockUser.balance} initials={mockUser.initials} />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      {/* Bottom nav: flex on mobile, hidden on md+ — pure CSS, no JS */}
      <BottomNav activeId={activePage} onNavigate={setActivePage} />

    </div>
  )
}

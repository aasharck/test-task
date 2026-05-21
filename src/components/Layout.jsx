import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import BottomNav from './BottomNav'
import { mockUser } from '../data/mockData'

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header balance={mockUser.balance} initials={mockUser.initials} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

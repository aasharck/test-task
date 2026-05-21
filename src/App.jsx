import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'

// Add new pages here: one import + one <Route>.
const ApiKeysPage = lazy(() => import('./pages/ApiKeysPage'))
const ChatPage    = lazy(() => import('./pages/ChatPage'))

function NotImplementedPage() {
  const { pathname } = useLocation()
  const name = pathname.slice(1).replace(/-/g, ' ')
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-muted">
      <span className="text-lg font-semibold capitalize">{name || 'Page'}</span>
      <p className="text-sm">Not yet implemented.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/api-keys" replace />} />

        <Route
          path="api-keys"
          element={
            <Suspense>
              <ApiKeysPage />
            </Suspense>
          }
        />

        <Route
          path="chat"
          element={
            <Suspense>
              <ChatPage />
            </Suspense>
          }
        />

        {/* Catch-all for nav items not yet built */}
        <Route path="*" element={<NotImplementedPage />} />
      </Route>
    </Routes>
  )
}

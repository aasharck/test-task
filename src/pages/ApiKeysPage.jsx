import { useState } from 'react'
import ApiKeysTable from '../components/ApiKeysTable'
import ApiKeysList from '../components/ApiKeysList'
import { Button } from '../components/ui/button'
import { mockApiKeys } from '../data/mockData'


export default function ApiKeysPage() {
  const [keys, setKeys] = useState(mockApiKeys)

  const handleCreate  = () => console.log('create')
  const handleEdit    = (id) => console.log('edit', id)
  const handleDisable = (id) => {
    setKeys((prev) => prev.map((k) => k.id === id ? { ...k, status: 'disabled' } : k))
  }
  const handleDelete  = (id) => {
    setKeys((prev) => prev.filter((k) => k.id !== id))
  }

  const tableProps = { keys, onEdit: handleEdit, onDisable: handleDisable, onDelete: handleDelete }

  return (
    <div className="flex flex-col gap-5 p-5 md:p-6">

      {/* Page header — desktop only; mobile title lives in the top bar */}
      <div className="hidden md:flex items-start justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold text-foreground tracking-tight">
            API keys
          </h1>
          <p className="text-sm text-muted mt-0.5">
            Manage your API keys to access all models
          </p>
        </div>
        <Button onClick={handleCreate} className="shrink-0">
          + Create API key
        </Button>
      </div>

      {/* TABLE — desktop (md+) */}
      <div className="hidden md:block">
        <ApiKeysTable {...tableProps} />
      </div>

      {/* LIST — mobile */}
      <div className="md:hidden pb-24">
        <ApiKeysList {...tableProps} />
      </div>

      {/* Floating action btn — mobile only, sits above the bottom nav */}
      <Button
        onClick={handleCreate}
        size="fab"
        aria-label="Create API key"
        className="md:hidden fixed bottom-20 right-4 shadow-[0_4px_16px_rgba(84,98,253,0.4)] active:scale-95 z-40"
      >
        +
      </Button>

    </div>
  )
}

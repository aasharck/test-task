import { Badge } from './ui/badge'
import ContextMenu from './ContextMenu'
import { formatExpiry } from '../utils/formatters'

const truncateKey = (key) => `${key.slice(0, 3)}…${key.slice(-3)}`

export default function ApiKeysList({ keys, onEdit, onDisable, onDelete }) {
  return (
    <ul className="flex flex-col gap-3">
      {keys.map((k) => {
        const expiry = formatExpiry(k.expires)

        return (
          <li
            key={k.id}
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 transition-colors"
          >
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-baseline gap-1.5 min-w-0">
                <span className="text-sm font-semibold text-foreground truncate">
                  {k.name}
                </span>
                <code className="font-mono text-xs text-muted shrink-0">
                  {truncateKey(k.key)}
                </code>
              </div>
              <span className="text-xs text-muted">
                {k.status === 'expired'
                  ? `Used ${k.lastUsed ?? 'Never'}`
                  : `Expires ${expiry}${k.lastUsed ? `, used ${k.lastUsed}` : ''}`
                }
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {k.status !== 'active' && (
                <Badge variant={k.status}>
                  {k.status.charAt(0).toUpperCase() + k.status.slice(1)}
                </Badge>
              )}
              <ContextMenu
                onEdit={() => onEdit(k.id)}
                onDisable={() => onDisable(k.id)}
                onDelete={() => onDelete(k.id)}
                size="md"
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

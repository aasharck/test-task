import { Badge } from './ui/badge'
import ContextMenu from './ContextMenu'
import { formatDate, formatExpiry } from '../utils/formatters'

const HEADERS = ['Name', 'API key', 'Status', 'Expires', 'Created', 'Last used', '']

export default function ApiKeysTable({ keys, onEdit, onDisable, onDelete }) {
  return (
    <div className="w-full overflow-x-auto border border-border rounded-xl">
      <table className="w-full border-collapse text-sm">

        <thead>
          <tr className="border-b border-border">
            {HEADERS.map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-left text-xs font-medium text-muted whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {keys.map((k) => (
            <tr
              key={k.id}
              className="border-b border-border last:border-b-0 hover:bg-white/[0.02] transition-colors"
            >
              <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                {k.name}
              </td>

              <td className="px-4 py-3">
                <code className="font-mono text-xs text-foreground px-1.5 py-0.5 rounded">
                  {k.key}
                </code>
              </td>

              <td className="px-4 py-3">
                <Badge variant={k.status}>
                  {k.status.charAt(0).toUpperCase() + k.status.slice(1)}
                </Badge>
              </td>

              <td className="px-4 py-3 text-foreground whitespace-nowrap">
                {formatExpiry(k.expires)}
              </td>

              <td className="px-4 py-3 text-foreground whitespace-nowrap">
                {formatDate(k.created)}
              </td>

              <td className="px-4 py-3 text-foreground whitespace-nowrap">
                {k.lastUsed ?? 'Never'}
              </td>

              <td className="px-2 py-3 w-10">
                <div className="flex justify-center">
                  <ContextMenu
                    onEdit={() => onEdit(k.id)}
                    onDisable={() => onDisable(k.id)}
                    onDelete={() => onDelete(k.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { cn } from '../lib/utils'

export default function ContextMenu({ onEdit, onDisable, onDelete, size = 'sm' }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Open actions"
          className={cn(
            'flex items-center justify-center rounded-md transition-colors',
            'text-muted hover:bg-surface hover:text-foreground',
            'data-[state=open]:bg-surface data-[state=open]:text-foreground',
            size === 'sm' ? 'w-7 h-7' : 'w-8 h-8'
          )}
        >
          ⋮
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={onDisable}>Disable</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={onDelete}
          className="text-red-400 focus:text-red-400 focus:bg-red-500/10"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

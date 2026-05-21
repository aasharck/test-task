import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
  {
    variants: {
      variant: {
        active:   'bg-primary text-foreground',
        expired:  'bg-[#F8717199] text-foreground',
        disabled: 'bg-muted/10 text-muted border border-border',
      },
    },
    defaultVariants: {
      variant: 'active',
    },
  }
)

export function Badge({ className, variant, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  )
}

export { badgeVariants }

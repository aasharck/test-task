import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        ghost:   'text-foreground hover:bg-surface',
        outline: 'border border-border bg-transparent text-foreground hover:bg-surface',
      },
      size: {
        default: 'px-3.5 py-1.5 rounded-lg text-[13px]',
        icon:    'w-7 h-7 rounded-md text-sm',
        fab:     'w-12 h-12 rounded-xl text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

export { buttonVariants }

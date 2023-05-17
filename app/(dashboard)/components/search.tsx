import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function Search({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn('hidden lg:flex', className)}>
      <Input
        type="search"
        placeholder="Search..."
        className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}

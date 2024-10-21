import { cn } from '@/helpers/tailwind'

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse h-[72px] w-[150px] bg-white/25 dark:bg-gray-700", className)} />
  )
}

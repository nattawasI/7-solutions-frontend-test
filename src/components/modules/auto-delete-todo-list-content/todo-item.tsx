'use client'

/** libs */
import { cn } from '@/libs/utils/cn'
import { useProgressAnimation } from '@/libs/hooks/use-progress-animation'

/** components */
import * as Progress from '@radix-ui/react-progress'

/** types */
import type { TodoItemType } from './type'

type TodoItemProps = {
  item: TodoItemType
  onClick: (item: TodoItemType) => void
  showProgress?: boolean
}

export const TodoItem = ({ item, onClick, showProgress = false }: TodoItemProps) => {
  const progress = useProgressAnimation({ isActive: showProgress, duration: 5000 })

  return (
    <button
      className={cn(
        'border-primary bg-card hover:bg-accent relative flex h-20 w-full cursor-pointer items-center justify-between gap-x-4 overflow-hidden rounded-lg border p-4 shadow transition-all',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      )}
      onClick={() => onClick(item)}
    >
      <span className="font-medium">{item.name}</span>
      {showProgress && (
        <Progress.Root className="absolute top-0 left-0 h-1 w-full overflow-hidden" value={progress}>
          <Progress.Indicator
            className="bg-primary h-full transition-transform"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      )}
    </button>
  )
}

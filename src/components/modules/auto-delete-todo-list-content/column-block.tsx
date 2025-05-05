import { cn } from '@/libs/utils/cn'

type ColumnBlockProps = React.ComponentProps<'div'> & { variant?: 'fruits' | 'vegetables' }

const ColumnBlock = ({ variant, children, className, ...props }: ColumnBlockProps) => {
  const titleText: Record<NonNullable<ColumnBlockProps['variant']>, string> = {
    fruits: 'Fruits',
    vegetables: 'Vegetables',
  }

  const titleBgColor: Record<NonNullable<ColumnBlockProps['variant']>, string> = {
    fruits: 'bg-fruits',
    vegetables: 'bg-vegetables',
  }

  return (
    <div
      className={cn(
        'border-primary bg-background flex h-full flex-col overflow-hidden rounded-lg border shadow',
        className,
      )}
      {...props}
    >
      {variant ? (
        <div className={cn('border-primary border-b py-5', titleBgColor[variant])}>
          <h2 className="text-center text-lg font-semibold">{titleText[variant]}</h2>
        </div>
      ) : null}
      <div className="scrollbar-hidden flex-1 overflow-y-auto p-5">{children}</div>
    </div>
  )
}

export { ColumnBlock }

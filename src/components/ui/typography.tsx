import { cn } from '@/libs/utils/cn'
import { ComponentProps } from 'react'

export function TypographyH1({ children, className, ...props }: ComponentProps<'h1'>) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl', className)} {...props}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  )
}

export function TypographyP({ children, className, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  )
}

export function TypographySmall({ children, className, ...props }: ComponentProps<'small'>) {
  return (
    <small className={cn('text-sm leading-none font-medium', className)} {...props}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)} {...props}>
      {children}
    </p>
  )
}

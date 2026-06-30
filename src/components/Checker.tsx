import type { CSSProperties, ElementType, ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/cn'

type CheckerProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
  style?: CSSProperties
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'style'>

export const Checker = <T extends ElementType = 'div'>({
  as,
  className,
  style,
  ...props
}: CheckerProps<T>) => {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag
      className={cn('bg-checker bg-teal text-lime', className)}
      style={{
        backgroundSize: '48px 48px',
        backgroundPosition: '0 0, 24px 24px',
        ...style,
      }}
      {...props}
    />
  )
}

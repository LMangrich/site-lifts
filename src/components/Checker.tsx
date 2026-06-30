import type { ElementType, ReactNode } from 'react'
import { cn } from '../utils/cn'

type CheckerTone = 'lime' | 'teal'

const TONE_CLASSES: Record<CheckerTone, string> = {
  lime: 'bg-lime text-teal',
  teal: 'bg-teal text-lime',
}

interface CheckerProps {
  as?: ElementType
  tone?: CheckerTone
  children?: ReactNode
  className?: string
}

export const Checker = ({ as: Tag = 'div', tone = 'teal', children, className }: CheckerProps) => (
  <Tag  className={cn(
      'bg-checker bg-[length:120px_50px] bg-[position:60px_130px,0px_30px] max-h-[300px]',
      TONE_CLASSES[tone],
      className,
    )}
  >
   {children}
  </Tag>
)

import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

interface ParagraphProps {
  children: ReactNode
  className?: string
}

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={cn('text-[15px] font-medium leading-[1.5] text-mist', className)}>{children}</p>
)

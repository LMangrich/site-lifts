import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const TAGS = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' } as const

const LEVEL_STYLES: Record<HeadingLevel, string> = {
  1: 'text-[42px] font-black leading-[1.04]',
  2: 'text-[34px] font-extrabold leading-[1.04]',
  3: 'text-[27px] font-black leading-[1.05]',
  4: 'text-[20px] font-bold leading-[1.1]',
  5: 'text-[17px] font-bold leading-[1.2]',
  6: 'text-[14px] font-bold leading-[1.2]',
}

interface HeadingProps {
  level?: HeadingLevel
  children: ReactNode
  className?: string
}

export const Heading = ({ level = 1, children, className }: HeadingProps) => {
  const Tag = TAGS[level]
  return <Tag className={cn(LEVEL_STYLES[level], 'text-snow', className)}>{children}</Tag>
}

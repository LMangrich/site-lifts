import { cn } from '../utils/cn'
import { Sym } from './Sym'

interface RadioOptionProps {
  selected: boolean
  onClick: () => void
  label: string
  icon?: string
}

export const RadioOption = ({ selected, onClick, label, icon }: RadioOptionProps) => {
  const compact = !icon
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center gap-[14px] border-2 border-[#2f5063] rounded-[13px] px-[18px] cursor-pointer',
        compact ? 'py-[14px]' : 'py-[15px]',
      )}
    >
      <span
        className={cn(
          'rounded-full border-2 border-lime flex items-center justify-center shrink-0',
          compact ? 'w-[20px] h-[20px]' : 'w-[22px] h-[22px]',
        )}
      >
        <span
          className={cn('rounded-full transition-colors', compact ? 'w-[10px] h-[10px]' : 'w-[11px] h-[11px]')}
          style={{ background: selected ? '#cbca3f' : 'transparent' }}
        />
      </span>
      <span
        className={cn(
          'flex-1 font-extrabold text-white',
          compact ? 'text-[14px] tracking-[.3px]' : 'text-[17px]',
        )}
      >
        {label}
      </span>
      {icon && <Sym name={icon} className="text-[24px] text-lime" />}
    </div>
  )
}

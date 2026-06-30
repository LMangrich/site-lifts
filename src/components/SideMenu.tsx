import { useEffect } from 'react'
import { Sym } from './Sym'
import { NAV_LINKS } from '../app/home/data/navLinks.data'

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="absolute top-0 right-0 h-full w-[78%] max-w-[300px] bg-tealDark flex flex-col px-[26px] py-[20px]">
        <button onClick={onClose} className="self-end text-lime mb-[26px]" aria-label="Fechar menu">
          <Sym name="close" className="text-[28px]" />
        </button>

        <nav className="flex flex-col gap-[22px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-[16px] font-bold tracking-[1.5px] uppercase text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

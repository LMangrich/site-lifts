import { useState } from 'react'
import { LiftsLogo } from './Icon'
import { Sym } from './Sym'
import { SideMenu } from './SideMenu'
import { NAV_LINKS } from './navLinks'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-teal w-full sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-3 flex flex-row justify-between items-center">
          <LiftsLogo className="mx-auto w-10 h-10 md:hidden" />
          {/* Desktop: left nav group */}
          <div className="hidden md:flex items-center gap-[16px] border border-lime px-2">
            {NAV_LINKS.slice(0, 3).map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-bold tracking-[1px] uppercase text-lime whitespace-nowrap ${
                  i < NAV_LINKS.slice(0, 3).length - 1 ? 'border-r border-lime pr-[16px]' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop: centered logo */}
          <LiftsLogo className="hidden md:block w-12 h-12" />

          {/* Mobile: hamburger button */}
          <button
            className="md:hidden text-lime leading-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Sym name="menu" className="text-[32px]" />
          </button>

          {/* Desktop: right nav group */}
          <div className="hidden md:flex items-center gap-[16px] border border-lime px-2">
            {NAV_LINKS.slice(3).map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-bold tracking-[1px] uppercase text-lime whitespace-nowrap ${
                  i < NAV_LINKS.slice(3).length - 1 ? 'border-r border-lime pr-[16px]' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

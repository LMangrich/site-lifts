import { useState } from 'react'
import { LiftsLogo } from './Icon'
// import { Sym } from './Sym'
import { SideMenu } from './SideMenu'
import { NAV_LINKS } from './navLinks'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className=" bg-teal w-full">
        <div className="max-w-5xl mx-auto px-10 pt-5 pb-1  sticky top-0 z-50 flex flex-row justify-between w-full items-center ">
          <div className="hidden md:flex items-center gap-[16px] border border-lime pl-2 pr-2">
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

            <LiftsLogo className="w-12 h-12 mb-1 -translate-x-8 mx-auto justify-self-center" />

            <div className="hidden md:flex items-center gap-[16px] border border-lime pl-2 pr-2">
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

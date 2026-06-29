import { Fragment } from 'react'

const NAV_LINKS = [
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-tealDark flex justify-center items-center gap-[14px] px-[14px] py-[11px]">
      {NAV_LINKS.map((link, i) => (
        <Fragment key={link.href}>
          {i > 0 && <span className="text-lime opacity-40">|</span>}
          <a
            href={link.href}
            className="text-[11px] font-bold tracking-[1.5px] uppercase text-lime"
          >
            {link.label}
          </a>
        </Fragment>
      ))}
    </nav>
  )
}

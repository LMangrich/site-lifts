import { Fragment } from 'react'

const NAV_LINKS = [
  { label: 'Planos', href: '#planos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
  { label: 'Resultados', href: '#resultados' },
]

export const Footer = () => {
  return (
    <footer className="bg-tealDark px-[26px] pt-[30px] pb-[34px] text-center">
      <img
        src="/assets/logo.png"
        alt="Clínica Lifts"
        className="w-[84px] h-auto mb-[14px] opacity-90 brightness-0 invert"
      />
      <nav className="flex flex-wrap justify-center gap-[8px_14px] text-[11px] font-bold tracking-[1.5px] uppercase mb-[18px]">
        {NAV_LINKS.map((link, i) => (
          <Fragment key={link.href}>
            <a href={link.href} className="text-lime">{link.label}</a>
            {i < NAV_LINKS.length - 1 && <span className="text-lime opacity-40">|</span>}
          </Fragment>
        ))}
      </nav>
      <p className="m-0 text-[11px] font-medium leading-[1.6] text-[#6f8593]">
        Clínica Lifts · Centro de elevação da saúde<br />
        © {new Date().getFullYear()} · Todos os direitos reservados
      </p>
    </footer>
  )
}

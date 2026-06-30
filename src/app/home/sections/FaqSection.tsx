import { useState } from 'react'
import { FAQS, CONTACT } from '../data/content'
import { Reveal } from '../../../components/Reveal'
import { Sym } from '../../../components/Sym'
import { Checker } from '../../../components/Checker'
import { Heading } from '../../../components/Heading'

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <>
      <section id="contato" className="bg-teal px-[24px] pt-[34px] pb-[10px]">
        <Reveal>
          <div className="inline-block bg-lime px-[14px] py-[7px] rounded-[7px] mb-[16px]">
            <span className="text-[12px] font-black tracking-[1.5px] text-teal">
              PERGUNTAS FREQUENTES
            </span>
          </div>
          <Heading level={2} className="mb-[22px]">
            <span className="block text-[30px] font-semibold text-lime">Tudo o que você</span>
            <span className="block text-[40px] font-black text-lime">precisa saber</span>
          </Heading>
        </Reveal>

        <div className="flex flex-col gap-[13px]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="border-2 border-lime rounded-[14px] overflow-hidden bg-tealFaq">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-[13px] px-[16px] py-[16px] bg-transparent border-none cursor-pointer text-left font-sans"
                  >
                    <Sym name={faq.icon} className="text-[24px] text-lime shrink-0" />
                    <span className="flex-1 text-[15px] font-extrabold text-lime leading-[1.2]">
                      {faq.q}
                    </span>
                    <Sym
                      name={isOpen ? 'remove' : 'add'}
                      className="text-[22px] text-lime shrink-0"
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="px-[16px] pb-[16px] pl-[53px]"
                      style={{ animation: 'faqIn .3s ease both' }}
                    >
                      {faq.listItems ? (
                        <ul className="m-0 p-0 list-none flex flex-col gap-[8px]">
                          {faq.listItems.map((item, j) => (
                            <li key={j} className="text-[14px] font-medium leading-[1.45] text-mist">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="m-0 text-[14px] font-medium leading-[1.55] text-mist">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <Checker as="section" className="pt-[30px] flex flex-col items-center overflow-hidden">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline bg-lime rounded-[13px] px-[26px] py-[17px] text-[17px] font-black tracking-[.5px] text-teal flex items-center gap-[10px] mb-[10px]"
        >
          <Sym name="bolt" className="text-[22px]" />
          QUERO COMEÇAR AGORA
        </a>
        <img
          src="/assets/faq-man.png"
          alt=""
          loading="lazy"
          className="w-full h-auto block mt-[8px]"
        />
      </Checker>
    </>
  )
}

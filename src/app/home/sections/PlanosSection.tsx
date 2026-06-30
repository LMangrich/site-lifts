import { useState } from 'react'
import { Sym } from '../../../components/Sym'
import { Checker } from '../../../components/Checker'
import { Heading } from '../../../components/Heading'
import { RadioOption } from '../../../components/RadioOption'
import { OBJETIVOS, ORCAMENTOS, PLANOS_FORM_FIELDS } from '../data/content'
import type { ObjetivoValue, OrcamentoValue } from '../data/types'

export const PlanosSection = () => {
  const [objetivo, setObjetivo] = useState<ObjetivoValue | null>(null)
  const [orcamento, setOrcamento] = useState<OrcamentoValue | null>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="planos" className="max-w-5xl mx-auto px-[26px] pt-[34px] pb-0">
      <p className="text-[25px] -rotate-[4deg] mb-10 font-extrabold tracking-[2px] text-lime">
        #FORMULÁRIO
      </p>

      <Heading level={2} className="mb-[14px] leading-[1.05]">
        <span className="block text-[30px] font-medium text-lime">Quero conhecer</span>
        <span className="block text-[30px] font-medium text-snow">
          meu <strong className="font-black text-lime">PLANO IDEAL!</strong>
        </span>
      </Heading>

      <p className="m-0 mb-[22px] text-[15px] font-medium leading-[1.5] text-mistLight">
        Preencha em menos de 20 segundos. Nossa equipe entra em contato e explica tudo como funciona.
      </p>

      {sent ? (
        <div
          className="flex flex-col items-center justify-center text-center py-[50px]"
          style={{ animation: 'faqIn .4s ease both' }}
        >
          <span className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-lime/15 text-lime text-[30px] mb-[22px]">
            ✓
          </span>
          <Heading level={3} color="white" className="text-[26px] font-bold mb-3">Recebemos seus dados!</Heading>
          <p className="text-[15px] leading-[1.7] text-mist max-w-[300px]">
            Nossa equipe entrará em contato pelo WhatsApp em breve.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[13px]">
          {PLANOS_FORM_FIELDS.map((field) => (
            <input
              key={field.name}
              name={field.name}
              required
              type={field.type}
              placeholder={field.placeholder}
              className="form-input"
            />
          ))}

          <div className="inline-block bg-lime px-[12px] pt-[2px] pb-0 mt-[18px]">
            <span className="text-[25px] font-black text-teal">OBJETIVO ATUAL</span>
          </div>

          {OBJETIVOS.map((option) => (
            <RadioOption
              key={option.value}
              selected={objetivo === option.value}
              onClick={() => setObjetivo(option.value)}
              icon={option.icon}
              label={option.label}
            />
          ))}

          {/* Valores section */}
          <div className="inline-block bg-lime px-[12px] pt-[2px] pb-0 mt-[20px]">
            <span className="text-[32px] font-black text-teal">VALORES</span>
          </div>
          <p className="m-0 mb-[6px] mt-[2px] text-[16px] font-bold leading-[1.45] text-snow">
            Os planos da Clínica Lifts se iniciam em R$ 199.
          </p>

          {ORCAMENTOS.map((option) => (
            <RadioOption
              key={option.value}
              selected={orcamento === option.value}
              onClick={() => setOrcamento(option.value)}
              label={option.label}
            />
          ))}

          <button
            type="submit"
            className="mt-[14px] bg-lime border-none rounded-[13px] px-[16px] py-[18px] font-sans text-[18px] font-black tracking-[.5px] text-teal cursor-pointer flex items-center justify-center gap-[10px]"
          >
            <Sym name="send" className="text-[22px]" />
            RECEBER CONTATO DA EQUIPE
          </button>
        </form>
      )}

      {/* Woman image with checker pattern */}
      <Checker className="relative mt-[26px] -mx-[26px] flex justify-center items-end overflow-hidden">
        <img
          src="/assets/mulher1.png"
          alt=""
          className="w-[90%] h-auto block"
        />
      </Checker>
    </section>
  )
}

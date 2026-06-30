import { useState } from 'react'
import mulher from '../../../../public/assets/mulher_rindo.webp'
import { Heading } from '../../../components/Heading'
import { RadioOption } from '../../../components/RadioOption'
import { FormInput } from '../../../components/FormInput'
import { OBJETIVOS, ORCAMENTOS, PLANOS_FORM_FIELDS } from '../data/content.data'
import type { ObjetivoValue, OrcamentoValue } from '../../../types/types'
import { GrafismoAzulEscuroIcon } from '../../../components/Icon'

export const PlanosSection = () => {
  const [objetivo, setObjetivo] = useState<ObjetivoValue | null>(null)
  const [orcamento, setOrcamento] = useState<OrcamentoValue | null>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="planos" className="relative isolate min-h-screen max-w-5xl mx-auto px-10 pb-0">
      <GrafismoAzulEscuroIcon className="absolute left-1/2 translate-y-8 -translate-x-1/2 w-screen h-[550px] -z-10 fill-[#3b5867]" />
      <p className="text-[25px] -rotate-[4deg] mt-10 md:mt-0 mb-10 font-extrabold tracking-[2px] text-lime">
        #FORMULÁRIO
      </p>

      <div className="bg-formCard/80 px-5 py-6 rounded-[10px]">
        <Heading level={2} className="mb-[14px] leading-[1.05]">
          <span className=" text-[30px] font-medium text-lime">
            Quero conhecer 
          </span>
          <span className=" text-[30px] font-medium text-lime">
            meu <strong className="font-black text-snow">PLANO IDEAL!</strong>
          </span>
        </Heading>

        <p className="m-0 mb-[22px] text-[15px] font-medium leading-[1.5] text-snow">
          <span className="text-lime font-bold">Preencha em menos de 20 segundos.</span> Nossa equipe entrará em contato e explicará tudo como funciona.
        </p>

        {sent ? (
          <div className="flex flex-col items-center justify-center text-center py-[50px]"
            style={{ animation: 'faqIn .4s ease both' }}>
            <span className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-lime/15 text-lime text-[30px] mb-[22px]">
              ✓
            </span>
            <Heading level={3} color="white" className="text-[26px] font-bold mb-3">Recebemos seus dados!</Heading>
            <p className="text-[15px] leading-[1.7] text-mist max-w-[300px]">
              Nossa equipe entrará em contato pelo WhatsApp em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-[13px]">

            {PLANOS_FORM_FIELDS.map((field) => (
              <FormInput key={field.name} name={field.name} type={field.type} placeholder={field.placeholder} />
            ))}


            <div className="bg-lime -rotate-[4deg] w-fit -translate-x-8 mb-4 mt-4">
              <span className="text-[25px] font-bold px-5 text-teal">
                OBJETIVO ATUAL
              </span>
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

            <div className="bg-lime -rotate-[4deg] w-fit -translate-x-8 mt-4">
              <span className="text-[32px] font-bold px-5 text-teal">
                VALORES
              </span>
            </div>
            <p className="m-0 mb-[6px] mt-[2px] text-[15px] font-bold leading-[1.45] text-snow">
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
          </form>
        )}

      </div>

      <button type="submit" className="mt-6 max-w-sm mx-auto bg-lime border-none rounded-[5px] p-2 text-[18px] font-bold tracking-[.5px] text-teal cursor-pointer flex items-center justify-center gap-[10px]">
        RECEBER CONTATO DA EQUIPE
      </button>

      <div className="relative flex justify-center mt-10 -mx-10">
        <GrafismoAzulEscuroIcon className="absolute left-1/2 -translate-y-11 -translate-x-1/2 w-screen h-[350px] -z-10 fill-[#3b5867]" />
        <img src={mulher} alt="Paciente Clínica Lifts" className="relative z-20 max-w-[200px] object-contain" />
      </div>
    </section>
  )
}

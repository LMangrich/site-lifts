import { useState } from 'react'
import { CHECKER } from '../../../utils/styles'
import { Sym } from '../../../components/Sym'

type Objetivo = 'emagrecimento' | 'massa' | 'duas' | null
type Orcamento = 1 | 2 | null

const RadioOption = ({
  selected,
  onClick,
  icon,
  label,
}: {
  selected: boolean
  onClick: () => void
  icon: string
  label: string
}) => (
  <div
    onClick={onClick}
    className="flex items-center gap-[14px] border-2 border-[#2f5063] rounded-[13px] px-[18px] py-[15px] cursor-pointer"
  >
    <span className="w-[22px] h-[22px] rounded-full border-2 border-lime flex items-center justify-center shrink-0">
      <span
        className="w-[11px] h-[11px] rounded-full transition-colors"
        style={{ background: selected ? '#cbca3f' : 'transparent' }}
      />
    </span>
    <span className="flex-1 text-[17px] font-extrabold text-white">{label}</span>
    <Sym name={icon} className="text-[24px] text-lime" />
  </div>
)

const BudgetOption = ({
  selected,
  onClick,
  label,
}: {
  selected: boolean
  onClick: () => void
  label: string
}) => (
  <div
    onClick={onClick}
    className="flex items-center gap-[14px] border-2 border-[#2f5063] rounded-[13px] px-[18px] py-[14px] cursor-pointer"
  >
    <span className="w-[20px] h-[20px] rounded-full border-2 border-lime flex items-center justify-center shrink-0">
      <span
        className="w-[10px] h-[10px] rounded-full transition-colors"
        style={{ background: selected ? '#cbca3f' : 'transparent' }}
      />
    </span>
    <span className="flex-1 text-[14px] font-extrabold tracking-[.3px] text-white">{label}</span>
  </div>
)

export const PlanosSection = () => {
  const [objetivo, setObjetivo] = useState<Objetivo>(null)
  const [orcamento, setOrcamento] = useState<Orcamento>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="planos" className="bg-teal px-[26px] pt-[34px] pb-0">
      {/* Section label */}
      <p className="m-0 mb-[10px] text-[13px] font-extrabold tracking-[2px] text-lime">#FORMULÁRIO</p>

      <h2 className="m-0 mb-[14px] leading-[1.05]">
        <span className="block text-[30px] font-medium text-lime">Quero conhecer</span>
        <span className="block text-[30px] font-medium text-snow">
          meu <strong className="font-black text-lime">PLANO IDEAL!</strong>
        </span>
      </h2>

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
          <h3 className="text-[26px] font-bold text-white mb-3">Recebemos seus dados!</h3>
          <p className="text-[15px] leading-[1.7] text-mist max-w-[300px]">
            Nossa equipe entrará em contato pelo WhatsApp em breve.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[13px]">
          <input
            required
            type="text"
            placeholder="Seu NOME COMPLETO"
            className="form-input"
          />
          <input
            required
            type="tel"
            placeholder="Whatsapp com DDD"
            className="form-input"
          />
          <input
            required
            type="email"
            placeholder="Seu e-mail"
            className="form-input"
          />

          {/* Objetivo section */}
          <div className="inline-block bg-lime px-[12px] pt-[2px] pb-0 mt-[18px]">
            <span className="text-[25px] font-black text-teal">OBJETIVO ATUAL</span>
          </div>

          <RadioOption
            selected={objetivo === 'emagrecimento'}
            onClick={() => setObjetivo('emagrecimento')}
            icon="directions_run"
            label="EMAGRECIMENTO"
          />
          <RadioOption
            selected={objetivo === 'massa'}
            onClick={() => setObjetivo('massa')}
            icon="exercise"
            label="MASSA MUSCULAR"
          />
          <RadioOption
            selected={objetivo === 'duas'}
            onClick={() => setObjetivo('duas')}
            icon="monitoring"
            label="AS DUAS OPÇÕES"
          />

          {/* Valores section */}
          <div className="inline-block bg-lime px-[12px] pt-[2px] pb-0 mt-[20px]">
            <span className="text-[32px] font-black text-teal">VALORES</span>
          </div>
          <p className="m-0 mb-[6px] mt-[2px] text-[16px] font-bold leading-[1.45] text-snow">
            Os planos da Clínica Lifts se iniciam em R$ 199.
          </p>

          <BudgetOption
            selected={orcamento === 1}
            onClick={() => setOrcamento(1)}
            label="ESTÁ DENTRO DO MEU ORÇAMENTO"
          />
          <BudgetOption
            selected={orcamento === 2}
            onClick={() => setOrcamento(2)}
            label="NÃO ESTÁ DENTRO DO MEU ORÇAMENTO"
          />

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
      <div
        className="relative mt-[26px] -mx-[26px] flex justify-center items-end overflow-hidden"
        style={CHECKER}
      >
        <img
          src="/assets/mulher1.png"
          alt=""
          className="w-[90%] h-auto block"
        />
      </div>
    </section>
  )
}

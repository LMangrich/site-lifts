import { CHECKER } from '../../../utils/styles'
import { Sym } from '../../../components/Sym'

const PROFESSIONS = [
  { icon: 'stethoscope', label: 'Médico' },
  { icon: 'fitness_center', label: 'Personal' },
  { icon: 'nutrition', label: 'Nutricionista' },
]

export const HeroSection = () => {
  return (
    <section id="topo" className="bg-teal pt-[26px] pb-0 overflow-hidden">
      {/* Logo */}
      <div className="flex justify-center mb-[14px] px-[26px]">
        <img
          src="/assets/emblema_azul_total_fundo_transparente.png"
          alt="Clínica Lifts"
          className="w-[104px] h-auto opacity-[0.92]"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div className="px-[26px]">
        {/* Pre-headline */}
        <p className="m-0 mb-1 text-[26px] font-semibold tracking-[4px] text-lime">EMAGREÇA</p>

        {/* Main headline block */}
        <div className="inline-block bg-lime px-[20px] pt-[6px] pb-[4px] mb-[22px]">
          <span className="text-[52px] font-black tracking-[1px] text-teal leading-none">DE VERDADE</span>
        </div>

        {/* Profession icons */}
        <div className="flex gap-[10px] mb-[26px]">
          {PROFESSIONS.map((p) => (
            <div key={p.icon} className="flex-1 flex flex-col items-center gap-[7px] text-lime">
              <Sym name={p.icon} className="text-[34px]" />
              <span className="text-[15px] font-bold">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Sub-headline */}
        <h1 className="text-[34px] font-extrabold leading-[1.04] text-white">
          Trabalhando<br />juntos pelo o
        </h1>
        <div className="inline-block bg-lime px-[12px] pt-[3px] pb-[1px] mt-[6px] mb-[18px]">
          <span className="text-[34px] font-black text-teal leading-none">SEU RESULTADO</span>
        </div>

        {/* Description */}
        <p className="m-0 mb-[26px] text-[16px] font-medium leading-[1.5] text-snow max-w-[330px]">
          Emagreça e ganhe massa muscular com segurança médica e mantenha o resultado com{' '}
          <span className="text-lime font-bold border-b-2 border-lime">acompanhamento diário</span>
          {' '}de médico, nutricionista e personal.
        </p>
      </div>

      {/* Hero portrait with checker pattern */}
      <div
        className="relative min-h-[260px] flex items-end justify-center overflow-hidden"
        style={CHECKER}
      >
        <img
          src="/assets/portrait-happy-smiley-man.png"
          alt="Paciente Clínica Lifts"
          className="w-[108%] max-w-none h-auto block"
          style={{ filter: 'drop-shadow(0 10px 24px rgba(0,0,0,.35))' }}
        />
      </div>
    </section>
  )
}

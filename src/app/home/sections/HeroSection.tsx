import { Sym } from '../../../components/Sym'
import homemRindo from '../../../../public/assets/portrait-happy-smiley-man.webp'
import { GrafismoAzulEscuroIcon } from '../../../components/Icon'
import { Heading } from '../../../components/Heading'

const PROFESSIONS = [
  { icon: 'stethoscope', label: 'Médico' },
  { icon: 'fitness_center', label: 'Personal' },
  { icon: 'nutrition', label: 'Nutricionista' },
]

export const HeroSection = () => {
  return (
    <section id="topo" className="bg-lime pt-6 md:pt-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-5 items-center -rotate-[2deg]">
            <Heading level={1} color="teal" className="text-[26px] flex flex-col items-center tracking-tighter">
              EMAGREÇA
              <br />
              <span className="bg-teal px-3 py-1 text-[52px] font-extrabold text-lime leading-none">
                DE VERDADE
              </span>
            </Heading>

            <div className="flex flex-row gap-6 mb-[26px]">
              {PROFESSIONS.map((p) => (
                <div key={p.icon} className="flex-1 flex flex-col items-center text-teal">
                  <Sym name={p.icon} className="text-[34px]" />
                  <span className="text-[16px] font-semibold">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Heading level={2} color="teal" className="w-full flex flex-col gap-1">
            <span className="inline-block max-w-xs">Trabalhando juntos pelo o</span>
            <span className="bg-teal px-3 py-1 text-[34px] font-extrabold text-lime leading-none w-fit -rotate-[1deg]">
              SEU RESULTADO
            </span>
          </Heading>

          <p className="pr-4 md:pr-20 mb-[26px] text-[18px] md:text-[20px] font-normal leading-[1.2] tracking-tighter text-teal">
            Emagreça e ganhe massa muscular com segurança médica e mantenha o resultado com{' '}
            <strong>acompanhamento diário de médico, nutricionista e personal.</strong>
          </p>
        </div>

        <div className="relative self-stretch overflow-hidden flex justify-center items-end min-h-[260px] md:min-h-0">
          <GrafismoAzulEscuroIcon className="absolute bottom-0 w-screen h-[360px] fill-[#002539]" />
          <img src={homemRindo} alt="Paciente Clínica Lifts" className="relative z-20 max-h-[400px] md:max-h-none object-contain" />
        </div>
      </div>
    </section>
  )
}

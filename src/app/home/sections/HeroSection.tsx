import { Sym } from '../../../components/Sym'
import homemRindo from '../../../../public/assets/portrait-happy-smiley-man.webp'
import { GrafismoAzulEscuroIcon } from '../../../components/Icon'

const PROFESSIONS = [
  { icon: 'stethoscope', label: 'Médico' },
  { icon: 'fitness_center', label: 'Personal' },
  { icon: 'nutrition', label: 'Nutricionista' },
]

export const HeroSection = () => {
  return (
    <section id="topo" className="bg-lime pt-5 md:pt-10  overflow-hidden">
      <div className='max-w-5xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 '>
        <div className="flex flex-col items-center gap-4">
          <div className='flex flex-col gap-5 items-center -rotate-[2deg]'>
            <h1 className="text-[26px] flex flex-col items-center text-teal tracking-tighter">
              EMAGREÇA
              <br />
              <span className="bg-teal px-3 py-1 text-[52px] font-extrabold text-lime leading-none">
                DE VERDADE
              </span>
            </h1>

            <div className="flex flex-row gap-6 mb-[26px]">
              {PROFESSIONS.map((p) => (
                <div key={p.icon} className="flex-1 flex flex-col items-center  text-teal">
                  <Sym name={p.icon} className="text-[34px]" />
                  <span className="text-[16px] font-semibold">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-[34px] w-full font-extrabold leading-[1.04] text-teal flex flex-col gap-1">
             <span className="inline-block max-w-xs">Trabalhando juntos pelo o</span>
             <br/>
            <span className="bg-teal px-3 py-1 text-[34px] font-extrabold text-lime leading-none w-fit -rotate-[1deg]">
              SEU RESULTADO
            </span>
          </h2>
        
          <p className="pr-20 mb-[26px] text-[20px] font-normal leading-[1.1] tracking-tighter text-teal">
            Emagreça e ganhe massa muscular com segurança médica e mantenha o resultado com 
            <strong> acompanhamento diário de médico, nutricionista e personal.</strong>
          </p>
        </div>
        
        <div className="relative self-stretch overflow-hidden flex justify-center items-end">
          <GrafismoAzulEscuroIcon className="absolute top-24 scale-x-[110%]" />
          <GrafismoAzulEscuroIcon className="absolute bottom-0 scale-x-[110%]" />
          <img src={homemRindo} alt="Paciente Clínica Lifts" className="relative z-20"/>
        </div>
      </div>
    </section>
  )
}

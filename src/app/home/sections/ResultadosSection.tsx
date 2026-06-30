import { RESULTS } from '../data/content.data'
import { Reveal } from '../../../components/Reveal'
import { Heading } from '../../../components/Heading'

const ResultBadge = ({ label }: { label: string }) => (
  <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-lime text-teal text-[11px] font-black tracking-[.3px] px-[8px] py-[4px] rounded-[5px] whitespace-nowrap">
    {label}
  </span>
)

const BeforePlaceholder = ({ label }: { label: string }) => (
  <div
    className="relative overflow-hidden border-r-2 border-teal"
    style={{ aspectRatio: '83/100', background: '#e7e7df' }}
  >
    <div className="absolute inset-0 flex items-end justify-center pb-[10px]">
      <div className="w-[42%] h-[78%] flex flex-col items-center justify-end opacity-55">
        <div className="w-[46px] h-[46px] rounded-full bg-[#b9b9ae] mb-[6px]" />
        <div className="w-full h-[60%] bg-[#b9b9ae] rounded-[42%_42%_18%_18%]" />
      </div>
    </div>
    <ResultBadge label={label} />
  </div>
)

const AfterImage = ({ src, label }: { src: string; label: string }) => (
  <div className="relative overflow-hidden" style={{ aspectRatio: '83/100' }}>
    <img src={src} alt="Depois" className="w-full h-full object-cover block" />
    <ResultBadge label={label} />
  </div>
)

export const ResultadosSection = () => {
  return (
    <section id="resultados" className="bg-lime px-[24px] pt-[34px] pb-[40px]">
      <Reveal>
        <p className="m-0 text-[21px] font-bold tracking-[1px] text-teal">CONHEÇA NOSSOS</p>
        <Heading level={2} color="teal" className="mb-[22px] text-[46px] font-black tracking-[.5px] leading-[.95]">
          RESULTADOS
        </Heading>
      </Reveal>

      <div className="flex flex-col gap-[20px]">
        {RESULTS.map((result, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="border-[3px] border-teal rounded-[16px] overflow-hidden bg-white">
              <div className="grid grid-cols-2">
                <div className="bg-teal text-lime text-center text-[15px] font-black tracking-[2px] py-[8px] border-r-2 border-lime">
                  ANTES
                </div>
                <div className="bg-teal text-lime text-center text-[15px] font-black tracking-[2px] py-[8px]">
                  DEPOIS
                </div>
                <BeforePlaceholder label={result.beforeLabel} />
                <AfterImage src={result.image} label={result.afterLabel} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

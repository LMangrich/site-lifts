import { RESULTS } from '../data/content.data'
import { Reveal } from '../../../components/Reveal'
import { Heading } from '../../../components/Heading'

const CornerBadge = ({ label, side }: { label: string; side: 'left' | 'right' }) => (
  <span className={`absolute top-[8px] ${side === 'left' ? 'left-[8px]' : 'right-[8px]'} bg-lime text-teal text-[11px] font-black tracking-[1px] px-[8px] py-[3px] rounded-[4px]`}>
    {label}
  </span>
)

const WeightBadge = ({ label }: { label: string }) => (
  <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-lime text-teal text-[11px] font-black tracking-[.3px] px-[8px] py-[4px] rounded-[5px] whitespace-nowrap">
    {label}
  </span>
)

const BeforePlaceholder = ({ label }: { label: string }) => (
  <div className="relative overflow-hidden border-r-2 border-teal" style={{ aspectRatio: '83/100', background: '#e7e7df' }}>
    <div className="absolute inset-0 flex items-end justify-center pb-[10px]">
      <div className="w-[42%] h-[78%] flex flex-col items-center justify-end opacity-55">
        <div className="w-[46px] h-[46px] rounded-full bg-[#b9b9ae] mb-[6px]" />
        <div className="w-full h-[60%] bg-[#b9b9ae] rounded-[42%_42%_18%_18%]" />
      </div>
    </div>
    <CornerBadge label="ANTES" side="left" />
    <WeightBadge label={label} />
  </div>
)

const AfterImage = ({ src, label }: { src: string; label: string }) => (
  <div className="relative overflow-hidden" style={{ aspectRatio: '83/100' }}>
    <img src={src} alt="Depois" className="w-full h-full object-cover block" />
    <CornerBadge label="DEPOIS" side="right" />
    <WeightBadge label={label} />
  </div>
)

export const ResultadosSection = () => {
  return (
    <section id="resultados" className="bg-lime px-[24px] pt-30 pb-[40px] ">
      <div className=" max-w-5xl mx-auto px-10 p-8">
      <Reveal>
        <Heading level={2} className="mb-[22px] leading-[.95] flex flex-col items-center gap-1 text-center rotate-[-2deg]">
          <span className="block text-[30px] font-normal tracking-[1px] text-teal">
            CONHEÇA NOSSOS
          </span>
          <span className="bg-teal px-3 py-1 text-[52px] font-extrabold text-lime leading-none inline-block w-fit">
            RESULTADOS
          </span>
        </Heading>
      </Reveal>

      <div className="max-w-2xl mx-auto flex flex-col gap-[20px]">
        {RESULTS.map((result, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="border-[3px] border-teal rounded-[16px] overflow-hidden bg-white">
              <div className="grid grid-cols-2">
                <BeforePlaceholder label={result.beforeLabel} />
                <AfterImage src={result.image} label={result.afterLabel} />
              </div>
            </div>
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  )
}

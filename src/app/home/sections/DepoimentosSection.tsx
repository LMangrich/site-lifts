import { Reveal } from '../../../components/Reveal'
import { Heading } from '../../../components/Heading'

const DEPO_IMAGES = [
  '/assets/depo2.png',
  '/assets/depo4.png',
  '/assets/depo3.png',
  '/assets/depo5.png',
  '/assets/depo1.png',
]

export const DepoimentosSection = () => {
  return (
    <>
      {/* Header — lime background */}
      <section className="bg-lime px-[26px] pt-[32px] pb-[14px]">
        <Reveal>
          <div className="inline-block bg-teal px-[14px] py-[7px] rounded-[7px] mb-[16px]">
            <span className="text-[12px] font-black tracking-[1.5px] text-lime">
              O QUE NOSSOS PACIENTES DIZEM
            </span>
          </div>
          <Heading level={2}>
            <span className="block text-[29px] font-semibold text-teal">Quem já começou,</span>
            <span className="block text-[36px] font-black italic text-teal">não para mais</span>
          </Heading>
        </Reveal>
      </section>

      {/* Testimonial images — dark background */}
      <section className="bg-teal px-[22px] pt-[26px] pb-[30px] flex flex-col gap-[18px]">
        {DEPO_IMAGES.map((src, i) => (
          <Reveal key={src} delay={i * 0.08}>
            <img
              src={src}
              alt="Depoimento"
              loading="lazy"
              className="w-full h-auto block drop-shadow-[0_6px_16px_rgba(0,0,0,.3)]"
            />
          </Reveal>
        ))}
      </section>
    </>
  )
}

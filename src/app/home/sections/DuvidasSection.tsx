import { Reveal } from '../../../components/Reveal'
import { DUVIDAS_STEPS } from '../data/content'
import { Heading } from '../../../components/Heading'

export const DuvidasSection = () => {
  return (
    <section id="duvidas" className="bg-teal px-[26px] pt-[40px] pb-[36px] text-center">
      <Reveal>
        <p className="m-0 text-[24px] font-bold tracking-[1px] text-lime">PARE DE TENTAR</p>
        <Heading level={2} color="lime" className="mb-[18px] text-[62px] font-black tracking-[1px] leading-[.9]">
          SOZINHO!
        </Heading>
        <p className="m-0 mb-[10px] text-[19px] font-extrabold text-lime">
          Chega de recomeçar do zero!
        </p>
        <p className="m-0 mx-auto mb-0 max-w-[340px] text-[15px] font-medium leading-[1.5] text-mist">
          Se você já tentou várias vezes e sempre volta pro mesmo lugar, o problema não é você.
          É a falta de um acompanhamento profissional integrado.
        </p>
      </Reveal>

      {/* App screenshot */}
      <img
        src="/assets/celular.png"
        alt="Aplicativo Clínica Lifts"
        className="w-[96%] h-auto block mx-auto my-[18px] mb-[30px]"
      />

      {/* Numbered steps */}
      <div className="flex flex-col gap-[24px] text-left">
        {DUVIDAS_STEPS.map((step) => (
          <Reveal key={step.n}>
            <div className="flex gap-[16px] items-start">
              <span className="shrink-0 w-[38px] h-[38px] rounded-full border-2 border-lime text-lime text-[20px] font-black flex items-center justify-center">
                {step.n}
              </span>
              <div>
                <p className="m-0 mb-[5px] text-[17px] font-extrabold text-lime">{step.title}</p>
                <p className="m-0 text-[14px] font-medium leading-[1.5] text-mist">{step.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

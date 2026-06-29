import { CHECKER } from '../../../utils/styles'
import { Sym } from '../../../components/Sym'

export const CtaSection = () => {
  return (
    <section className="bg-teal">
      {/* Lime banner */}
      <div className="bg-lime px-[22px] py-[16px] flex items-center justify-center gap-[12px]">
        <span className="text-[22px] font-black tracking-[.5px] text-teal text-center">
          VENHA PARA LIFTS VOCÊ TAMBÉM
        </span>
        <Sym name="arrow_outward" className="text-[30px] text-teal" />
      </div>

      {/* Woman image with checker pattern */}
      <div
        className="flex justify-center items-end overflow-hidden"
        style={CHECKER}
      >
        <img
          src="/assets/mulher2.png"
          alt=""
          loading="lazy"
          className="w-[86%] h-auto block"
        />
      </div>
    </section>
  )
}

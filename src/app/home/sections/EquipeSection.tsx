import { TEAM } from '../data/content.data'
import { Checker } from '../../../components/Checker'
import { cn } from '../../../utils/cn'
import { Heading } from '../../../components/Heading'

export const EquipeSection = () => {
  return (
    <>
      <section id="equipe" className="bg-lime pt-[32px] pb-[26px]">
        <div className="max-w-5xl mx-auto px-10">
          <Heading level={3} color="teal" italic className="mb-[12px] leading-[1.02]">
            Três profissionais.<br />Um objetivo.
          </Heading>
          <p className="m-0 mb-[30px] text-[15px] font-semibold leading-[1.5] text-[#1d3d2e]">
            Já é difícil achar um profissional que trabalhe com ciência. Imagina três, de áreas
            diferentes, completamente alinhados entre si.
          </p>
          <Heading level={2} className="leading-[1.02]">
            <span className="block text-[30px] font-semibold text-teal">Conheça a</span>
            <span className="block text-[42px] font-black italic text-teal">nossa equipe!</span>
          </Heading>
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col">
          {TEAM.map((member, i) => (
            <Checker
              key={member.name}
              className={cn('relative h-[420px] overflow-hidden', i > 0 && 'border-t-2 border-[#cbca3f]')}
            >
              <div className="absolute top-[20px] left-[24px] z-10">
                <p className="m-0 text-[20px] font-bold italic text-lime">{member.role}</p>
                <p className="m-0 -mt-1 text-[40px] font-black italic text-lime leading-none">
                  {member.name}
                </p>
                <p className="m-0 mt-[6px] text-[12px] font-bold tracking-[.5px] text-lime">
                  {member.registration}
                </p>
              </div>

              <img
                src={member.image}
                alt={member.alt}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto block"
                style={{ height: member.photoHeight }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 px-[18px] py-[13px] text-center"
                style={{ background: 'rgba(0,17,26,.86)' }}
              >
                <p className="m-0 text-[13px] font-semibold leading-[1.4] text-snow">{member.bio}</p>
              </div>
            </Checker>
          ))}
        </div>
      </section>
    </>
  )
}

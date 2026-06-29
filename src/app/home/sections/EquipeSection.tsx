import { TEAM } from '../data/content'
import { CHECKER } from '../../../utils/styles'

export const EquipeSection = () => {
  return (
    <>
      {/* Intro — lime background */}
      <section id="equipe" className="bg-lime px-[26px] pt-[32px] pb-[26px]">
        <h3 className="m-0 mb-[12px] text-[27px] font-black italic text-teal leading-[1.02]">
          Três profissionais.<br />Um objetivo.
        </h3>
        <p className="m-0 mb-[30px] text-[15px] font-semibold leading-[1.5] text-[#1d3d2e]">
          Já é difícil achar um profissional que trabalhe com ciência. Imagina três, de áreas
          diferentes, completamente alinhados entre si.
        </p>
        <h2 className="m-0 leading-[1.02]">
          <span className="block text-[30px] font-semibold text-teal">Conheça a</span>
          <span className="block text-[42px] font-black italic text-teal">nossa equipe!</span>
        </h2>
      </section>

      {/* Team cards — dark checker background */}
      <section className="bg-teal flex flex-col">
        {TEAM.map((member, i) => (
          <div
            key={member.name}
            className="relative h-[420px] overflow-hidden"
            style={{
              ...CHECKER,
              ...(i > 0 ? { borderTop: '2px solid #cbca3f' } : {}),
            }}
          >
            {/* Name overlay */}
            <div className="absolute top-[20px] left-[24px] z-10">
              <p className="m-0 text-[20px] font-bold italic text-lime">{member.role}</p>
              <p className="m-0 -mt-1 text-[40px] font-black italic text-lime leading-none">
                {member.name}
              </p>
              <p className="m-0 mt-[6px] text-[12px] font-bold tracking-[.5px] text-lime">
                {member.registration}
              </p>
            </div>

            {/* Team photo */}
            <img
              src={member.image}
              alt={member.alt}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto block"
              style={{ height: member.photoHeight }}
            />

            {/* Bio caption */}
            <div
              className="absolute bottom-0 left-0 right-0 px-[18px] py-[13px] text-center"
              style={{ background: 'rgba(0,17,26,.86)' }}
            >
              <p className="m-0 text-[13px] font-semibold leading-[1.4] text-snow">{member.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

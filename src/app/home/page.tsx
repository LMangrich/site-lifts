import { Header } from '../../components/Header'
// import { Footer } from '../../components/Footer'
import { HeroSection } from './sections/HeroSection'
// import { PlanosSection } from './sections/PlanosSection'
// import { ResultadosSection } from './sections/ResultadosSection'
// import { DuvidasSection } from './sections/DuvidasSection'
// import { EquipeSection } from './sections/EquipeSection'
// import { DepoimentosSection } from './sections/DepoimentosSection'
// import { CtaSection } from './sections/CtaSection'
// import { FaqSection } from './sections/FaqSection'

export const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <HeroSection />
          {/* <PlanosSection />
          <ResultadosSection />
          <DuvidasSection />
          <EquipeSection />
          <DepoimentosSection />
          <CtaSection />
          <FaqSection /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

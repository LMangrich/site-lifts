import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeroSection } from './sections/HeroSection'
import { PlanosSection } from './sections/PlanosSection'
import { ResultadosSection } from './sections/ResultadosSection'
import { DuvidasSection } from './sections/DuvidasSection'
import { EquipeSection } from './sections/EquipeSection'
import { DepoimentosSection } from './sections/DepoimentosSection'
import { CtaSection } from './sections/CtaSection'
import { FaqSection } from './sections/FaqSection'

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-outerBg">
      <div className="max-w-[520px] mx-auto bg-teal" style={{ position: 'relative' }}>
        <Header />
        <main>
          <HeroSection />
          <PlanosSection />
          <ResultadosSection />
          <DuvidasSection />
          <EquipeSection />
          <DepoimentosSection />
          <CtaSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

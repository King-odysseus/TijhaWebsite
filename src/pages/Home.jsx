import Hero from '../components/home/Hero'
import WhoWeAre from '../components/home/WhoWeAre'
import WhoWeAreSection from '../components/home/WhoWeAreSection'
import ClientMarquee from '../components/home/ClientMarquee'
import Processes from '../components/home/Processes'
import HeroBanner from '../components/home/HeroBanner'
import ServiceOverview from '../components/home/ServiceOverview'
import Stats from '../components/home/Stats'
import CTABanner from '../components/home/CTABanner'
import FAQ from '../components/home/FAQ'

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAreSection />
      <WhoWeAre />
      <ClientMarquee />
      <Processes />
      <HeroBanner />
      <ServiceOverview />
      <Stats />
      <CTABanner />
      <FAQ />
    </>
  )
}

export default Home

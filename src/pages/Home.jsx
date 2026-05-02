import Hero from '../components/home/Hero'
import Processes from '../components/home/Processes'
import WhoWeAre from '../components/home/WhoWeAre'
import HeroBanner from '../components/home/HeroBanner'
import ServiceOverview from '../components/home/ServiceOverview'
import Stats from '../components/home/Stats'
import CTABanner from '../components/home/CTABanner'
import FAQ from '../components/home/FAQ'

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
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

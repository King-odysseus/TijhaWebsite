import Hero from '../components/home/Hero'
import HeroBanner from '../components/home/HeroBanner'
import Processes from '../components/home/Processes'
import ServiceOverview from '../components/home/ServiceOverview'
import Stats from '../components/home/Stats'
import CTABanner from '../components/home/CTABanner'
import FAQ from '../components/home/FAQ'

function Home() {
  return (
    <>
      <Hero />
      <HeroBanner />
      <Processes />
      <ServiceOverview />
      <Stats />
      <CTABanner />
      <FAQ />
    </>
  )
}

export default Home

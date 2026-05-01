import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyValues from './components/CompanyValues'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

function App() {
  return (
    <div data-theme="tijha" className="min-h-screen bg-[#F5F5F7]">
      <Navbar />
      <Hero />
      <CompanyValues />
      <Features />
      <Portfolio />
      <Services />
      <Team />
      <Testimonials />
      <Pricing />
      <Blog />
      <Consultation />
      <Footer />
    </div>
  )
}

export default App

import Header from '../components/Header'
import Hero from '../components/Hero'
import BeforeAfter from '../components/BeforeAfter'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <BeforeAfter />
      <About />
      <Pricing />
      <Reviews />
      <Footer />
    </main>
  )
}

import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Carousel />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
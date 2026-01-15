import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Regístrate",
      subtitle: "Crea tu perfil en minutos",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center",
      description: "Completa tu información y verifica tu identidad de forma segura"
    },
    {
      id: 2,
      title: "Busca o Publica",
      subtitle: "Encuentra viajes o comparte el tuyo",
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1920&h=1080&fit=crop&crop=center",
      description: "Explora rutas disponibles o publica tu propio viaje al instante"
    },
    {
      id: 3,
      title: "Viaja",
      subtitle: "Conecta y disfruta el viaje",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center",
      description: "Coordina con tus compañeros y viaja de forma segura"
    },
    {
      id: 4,
      title: "Ahorra y Contribuye",
      subtitle: "Reduce costos y tu huella de carbono",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center",
      description: "Ayuda al planeta mientras ahorras dinero en cada viaje"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  }

  const textVariants = {
    enter: {
      opacity: 0,
      y: 50
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center px-6 max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentSlide}-content`}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                      {slides[currentSlide].subtitle}
                    </p>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                      {slides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm border border-neutral-700 rounded-full p-3 text-white hover:bg-black/50 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm border border-neutral-700 rounded-full p-3 text-white hover:bg-black/50 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      
    </section>
  )
}

export default Carousel
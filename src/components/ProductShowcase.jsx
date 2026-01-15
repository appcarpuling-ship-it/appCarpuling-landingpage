import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Monitor, Smartphone, Tablet } from 'lucide-react'

const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const products = [
    {
      id: 1,
      title: "Regístrate",
      subtitle: "Rápido y seguro",
      description: "Crea tu perfil en minutos. Verifica tu identidad y agrega tu información de pago de forma segura. Nuestro sistema de verificación asegura que todos sean usuarios confiables.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop&crop=center",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Registro Rápido", "Verificación de Identidad", "Información de Pago Segura", "Soporte Inmediato"],
      layout: "left"
    },
    {
      id: 2,
      title: "Busca o Publica",
      subtitle: "Encuentra tu ruta ideal",
      description: "Explora viajes disponibles que se ajusten a tu horario y ruta. O publica tu propio viaje y conecta con pasajeros. Filtra por preferencias y ten control total.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Búsqueda Avanzada", "Filtros Personalizados", "Publicar Viajes", "Notificaciones en Tiempo Real"],
      layout: "right"
    },
    {
      id: 3,
      title: "Viaja",
      subtitle: "Coordina y disfruta",
      description: "Comunícate con tus compañeros, coordina detalles y viaja con confianza. Sistema de valoraciones y reseñas para que todos sepan con quién viajan.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      icon: <Tablet className="w-8 h-8" />,
      features: ["Chat Integrado", "Sistema de Valoraciones", "Coordinación Fácil", "Historial de Viajes"],
      layout: "center"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="showcase" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm text-neutral-300 font-medium">
              Cómo Funciona
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tres pasos simples{' '}
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              para comenzar
            </span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Viaja de forma inteligente, segura y económica con nuestra plataforma diseñada para conectar pasajeros y conductores en Argentina.
          </p>
        </motion.div>

        {/* Product Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                product.layout === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${product.layout === 'right' ? 'lg:order-2' : ''}`}>
                <div className="space-y-6">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {product.title}
                    </h3>
                    <p className="text-xl text-neutral-300 mb-6">
                      {product.subtitle}
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                      {product.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-neutral-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="flex items-center gap-3 text-white hover:text-neutral-300 transition-colors duration-300 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-medium">Aprende Más</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${product.layout === 'right' ? 'lg:order-1' : ''}`}>
                <motion.div
                  variants={imageVariants}
                  className="relative overflow-hidden rounded-3xl bg-neutral-900"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                    />

                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute top-1/3 left-4 w-2 h-2 bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-32"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu viaje?
          </h3>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están viajando de forma inteligente, segura y económica.
          </p>
          <motion.a
            href="https://app-carpooling-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
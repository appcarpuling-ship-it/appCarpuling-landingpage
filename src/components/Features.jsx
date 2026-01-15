import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Shield,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Users,
  Clock,
  Award,
  Smartphone
} from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comunidad Confiable",
      description: "Verifica perfiles y reseñas de otros usuarios antes de viajar. Sistema de verificación completo para tu seguridad.",
      delay: 0
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rutas Flexibles",
      description: "Encuentra viajes que se ajusten a tu ruta y horario. Filtra por hora, paradas y preferencias personalizadas.",
      delay: 0.1
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Seguro y Protegido",
      description: "Sistema de verificación y soporte 24/7 disponible. Transacciones seguras y garantizadas.",
      delay: 0.2
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Ahorra Tiempo",
      description: "Reserva en segundos y coordina fácilmente. Interfaz intuitiva y rápida para todos.",
      delay: 0.3
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Reduce tu huella de carbono compartiendo el viaje. Contribuye a un planeta más sostenible.",
      delay: 0.4
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ahorra Dinero",
      description: "Divide los costos del viaje entre pasajeros. Viaja pagando menos cada día.",
      delay: 0.5
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Verificación Completa",
      description: "Todos los usuarios están verificados para tu tranquilidad. Licencia y datos confirmados.",
      delay: 0.6
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Comunidad Fuerte",
      description: "Miles de usuarios confían en nosotros. Únete a una red de viajeros responsables.",
      delay: 0.7
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Disponible en Apps",
      description: "Accede desde iOS y Android. Descarga la app y comienza a viajar al instante.",
      delay: 0.8
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30
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

  return (
    <section id="features" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-neutral-300 font-medium">
              ¿Por qué Carpuling?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            La forma más{' '}
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              inteligente de viajar
            </span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para viajar de forma inteligente, segura y económica con nuestra plataforma de confianza.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={feature.delay}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-neutral-600 group-hover:bg-neutral-900/70">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neutral-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white to-neutral-400 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            className="btn-primary text-lg px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Características
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
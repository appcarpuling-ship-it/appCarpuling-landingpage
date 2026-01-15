import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Leaf, Award } from 'lucide-react'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      number: '5K+',
      label: 'Usuarios Activos'
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: '15K+',
      label: 'Viajes Completados'
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      number: '50T+',
      label: 'CO2 Ahorrado'
    }
  ]

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Seguridad Primero",
      description: "Verificamos todos los perfiles para tu tranquilidad"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Compromiso Ambiental",
      description: "Reduciendo la huella de carbono juntos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad Fuerte",
      description: "Miles de usuarios confían en nosotros"
    }
  ]

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sobre{' '}
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Carpuling
            </span>
          </h2>

          <p className="text-xl text-neutral-400 leading-relaxed">
            En Carpuling, creemos que compartir viajes no solo reduce costos, sino que también construye comunidad y ayuda al planeta.
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 lg:p-12 mb-20"
        >
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            Fundada en 2024, nuestra misión es conectar a personas que comparten rutas similares, haciendo que el transporte sea más accesible, sostenible y social.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Con más de 5,000 usuarios activos, hemos facilitado miles de viajes, ahorrando toneladas de CO2 y creando conexiones significativas entre personas.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <div>
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Nuestros Valores
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 text-center hover:border-neutral-600 hover:bg-neutral-900/70 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

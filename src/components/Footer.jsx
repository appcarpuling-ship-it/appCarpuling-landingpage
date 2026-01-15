import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Producto',
      links: ['Características', 'Cómo Funciona', 'Comenzar']
    },
    {
      title: 'Compañía',
      links: ['Sobre Nosotros', 'Testimonios', 'Contacto']
    },
    {
      title: 'Legal',
      links: ['Privacidad', 'Términos', 'Soporte']
    }
  ]

  return (
    <footer id="contacto" className="bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">
              Carpuling
            </h2>
            <p className="text-neutral-400">
              Viaja juntos, ahorra más
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      {link}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} Carpuling. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
              Twitter
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
              Instagram
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

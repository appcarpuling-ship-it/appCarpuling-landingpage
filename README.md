# Premium Landing Page

Una landing page completamente responsiva construida con React y Tailwind CSS, diseñada con un estilo premium, minimalista y profesional inspirado en Apple.

## ✨ Características

- **Diseño Dark Mode**: Modo oscuro por defecto con colores elegantes
- **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Utilizando Framer Motion para transiciones fluidas
- **Rendimiento Optimizado**: Carga rápida y animaciones eficientes
- **Estilo Premium**: Diseño minimalista inspirado en Apple
- **Navegación Intuitiva**: Menú responsive con navegación suave

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Librería de animaciones
- **Vite** - Build tool y dev server
- **Lucide React** - Iconos modernos

## 📱 Secciones

1. **Hero Section** - Sección principal con call-to-action
2. **Carousel Full Width** - Carrusel de imágenes con transiciones suaves
3. **Features Grid** - Grid responsivo de características
4. **Product Showcase** - Showcases estilo Apple con layout elegante
5. **Navigation** - Navegación minimalista y responsive

## 🛠️ Instalación

### Prerequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio
```bash
git clone <tu-repositorio>
cd fran-pepa-landing
```

2. Instala las dependencias
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador en `http://localhost:3000`

## 🎨 Personalización

### Colores
Los colores están definidos en `src/index.css` y utilizan las clases de Tailwind:
- Fondo principal: `bg-black`
- Fondo secundario: `bg-neutral-900`, `bg-neutral-950`
- Texto: `text-white`, `text-neutral-300`, `text-neutral-400`

### Animaciones
Las animaciones están configuradas en `tailwind.config.js` y se pueden personalizar:
- Duraciones
- Delays
- Tipos de easing
- Keyframes personalizados

### Contenido
Edita el contenido en los archivos de componentes:
- `src/components/Hero.jsx` - Sección principal
- `src/components/Features.jsx` - Características
- `src/components/ProductShowcase.jsx` - Productos
- `src/components/Carousel.jsx` - Carrusel

## 📦 Build para Producción

```bash
npm run build
# o
yarn build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 🎯 Optimizaciones Incluidas

- **Lazy Loading** de imágenes
- **Animaciones optimizadas** para rendimiento
- **Responsive Design** para todos los dispositivos
- **Reducción de motion** para usuarios con preferencias de accesibilidad
- **Compresión de assets** automática

## 📱 Compatibilidad

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Dispositivos móviles iOS y Android

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🎨 Créditos

- Inspiración de diseño: Apple
- Imágenes: Unsplash
- Iconos: Lucide React
- Fuente: Inter

---

Desarrollado con ❤️ para crear experiencias web premium
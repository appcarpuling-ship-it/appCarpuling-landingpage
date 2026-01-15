import { useEffect, useState } from 'react'

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeout
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'

      if (direction !== scrollDirection && (currentScrollY - lastScrollY > 10 || currentScrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }

      setScrollY(currentScrollY)
      setIsScrolling(true)

      // Clear the timeout and set a new one
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
      clearTimeout(timeout)
    }
  }, [scrollDirection])

  return {
    scrollY,
    scrollDirection,
    isScrolling
  }
}

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

export default useScrollAnimation
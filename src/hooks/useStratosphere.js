import { useState, useEffect, useCallback } from 'react'

export default function useStratosphere() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPlanet, setCurrentPlanet] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  const showPlanetDetails = useCallback((planetName) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentPlanet(planetName)
    
    // Simulate the transition timing from original
    setTimeout(() => {
      setIsTransitioning(false)
    }, 700)
  }, [isTransitioning])

  const hidePlanetDetails = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentPlanet(null)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
    // Show welcome instructions after loading completes
    setTimeout(() => {
      setShowWelcome(true)
    }, 300)
  }, [])

  const hideWelcome = useCallback(() => {
    setShowWelcome(false)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key) {
        case 'Escape':
          e.preventDefault()
          if (showWelcome) {
            hideWelcome()
          } else if (currentPlanet) {
            hidePlanetDetails()
          }
          break
        case 'Enter':
        case ' ':
          if (currentPlanet) {
            hidePlanetDetails()
          }
          e.preventDefault()
          break
        // Number keys to select planets
        case '1': selectPlanet('mercury'); break
        case '2': selectPlanet('venus'); break
        case '3': selectPlanet('earth'); break
        case '4': selectPlanet('mars'); break
        case '5': selectPlanet('jupiter'); break
        case '6': selectPlanet('saturn'); break
        case '7': selectPlanet('uranus'); break
        case '8': selectPlanet('neptune'); break
      }
    }

    const selectPlanet = (planetName) => {
      if (!currentPlanet && !isTransitioning) {
        showPlanetDetails(planetName)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentPlanet, isTransitioning, showWelcome, showPlanetDetails, hidePlanetDetails, hideWelcome])

  // Performance optimization: pause animations when not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = !document.hidden
      const solarSystem = document.getElementById('solar-system')
      const planets = document.querySelectorAll('.planet')
      
      if (solarSystem) {
        solarSystem.style.animationPlayState = isVisible ? 'running' : 'paused'
      }
      
      planets.forEach(planet => {
        planet.style.animationPlayState = isVisible ? 'running' : 'paused'
      })
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return {
    isLoading,
    currentPlanet,
    isTransitioning,
    showWelcome,
    showPlanetDetails,
    hidePlanetDetails,
    handleLoadingComplete,
    hideWelcome
  }
}
import { useState, useEffect, useCallback } from 'react'

export default function AnimationControl() {
  const [animationsPaused, setAnimationsPaused] = useState(false)

  const toggleAnimations = useCallback(() => {
    const newPausedState = !animationsPaused
    setAnimationsPaused(newPausedState)
    
    // Get all orbits and planets
    const orbits = document.querySelectorAll('.orbit')
    const planets = document.querySelectorAll('.planet')
    const sun = document.querySelector('.sun-core')
    const sunGlow = document.querySelector('.sun-glow')
    const flames = document.querySelectorAll('.flame')
    
    const playState = newPausedState ? 'paused' : 'running'
    
    // Toggle orbit animations
    orbits.forEach(orbit => {
      orbit.style.animationPlayState = playState
    })
    
    // Toggle planet counter-rotation animations
    planets.forEach(planet => {
      planet.style.animationPlayState = playState
    })
    
    // Toggle sun animations
    if (sun) sun.style.animationPlayState = playState
    if (sunGlow) sunGlow.style.animationPlayState = playState
    
    // Toggle flame animations
    flames.forEach(flame => {
      flame.style.animationPlayState = playState
    })
  }, [animationsPaused])

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'p' || e.key === 'P') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        toggleAnimations()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [toggleAnimations])

  return (
    <div className="animation-control">
      <button 
        id="pause-play-btn" 
        className={`control-button ${animationsPaused ? 'paused' : ''}`}
        onClick={toggleAnimations}
        title={animationsPaused ? 'Resume Orbit' : 'Pause Orbit'}
        aria-label={animationsPaused ? 'Resume planet animations' : 'Pause planet animations'}
      >
        {animationsPaused ? (
          <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5,3 19,12 5,21"></polygon>
          </svg>
        ) : (
          <svg className="pause-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        )}
      </button>
    </div>
  )
}
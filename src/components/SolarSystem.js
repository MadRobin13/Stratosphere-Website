import { useEffect } from 'react'

const planets = [
  { name: 'mercury', orbit: 1 },
  { name: 'venus', orbit: 2 },
  { name: 'earth', orbit: 3 },
  { name: 'mars', orbit: 4 },
  { name: 'jupiter', orbit: 5 },
  { name: 'saturn', orbit: 6 },
  { name: 'uranus', orbit: 7 },
  { name: 'neptune', orbit: 8 }
]

export default function SolarSystem({ isZoomed, onPlanetClick }) {
  useEffect(() => {
    // Randomize planet starting positions
    const randomizePlanetPositions = () => {
      for (let i = 1; i <= 8; i++) {
        const orbit = document.querySelector(`.orbit-${i}`)
        if (orbit) {
          const animationDurations = [4.8, 12.3, 20, 37.6, 237.7, 589.8, 1681.1, 3296.4]
          const duration = animationDurations[i - 1]
          const randomDelay = -Math.random() * duration
          orbit.style.animationDelay = `${randomDelay}s`
        }
      }
    }

    const timer = setTimeout(() => {
      randomizePlanetPositions()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handlePlanetClick = (planetName) => {
    onPlanetClick(planetName)
  }

  return (
    <div 
      id="solar-system" 
      className={`solar-system w-screen h-screen absolute ${isZoomed ? 'zoomed' : ''}`}
    >
      <div className="sun">
        <div className="sun-core"></div>
        <div className="sun-glow"></div>
      </div>

      {planets.map(({ name, orbit }) => (
        <div key={name} className={`orbit orbit-${orbit}`}>
          <div 
            className={`planet ${name}`} 
            data-planet={name}
            onClick={() => handlePlanetClick(name)}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.3)'
              e.target.style.filter = 'brightness(1.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = ''
              e.target.style.filter = ''
            }}
          >
            <div className="planet-surface"></div>
            {name === 'earth' && <div className="planet-atmosphere"></div>}
            {name === 'jupiter' && <div className="planet-bands"></div>}
            {name === 'saturn' && <div className="saturn-rings"></div>}
          </div>
        </div>
      ))}
    </div>
  )
}
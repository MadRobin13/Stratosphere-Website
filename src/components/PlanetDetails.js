const planetData = {
  mercury: {
    title: 'Mercury',
    subtitle: 'Swift Messenger',
    description: 'Experience lightning-fast performance with Stratosphere\'s Mercury engine. Just like the closest planet to the sun, our platform delivers rapid responses and blazing-fast data processing.',
    features: [
      'Millisecond response times',
      'Real-time data synchronization',
      'Instant search capabilities'
    ]
  },
  venus: {
    title: 'Venus',
    subtitle: 'Beautiful Interface',
    description: 'Like Venus\'s stunning brilliance in the sky, Stratosphere offers an elegant and intuitive user interface that captivates and inspires productivity.',
    features: [
      'Stunning visual design',
      'Intuitive user experience',
      'Customizable themes'
    ]
  },
  earth: {
    title: 'Earth',
    subtitle: 'Home Base',
    description: 'Earth represents our foundation - reliable, stable, and life-supporting. Stratosphere provides the solid ground your projects need to thrive and grow.',
    features: [
      'Rock-solid reliability',
      'Comprehensive ecosystem',
      'Global accessibility'
    ]
  },
  mars: {
    title: 'Mars',
    subtitle: 'Innovation Frontier',
    description: 'Mars embodies exploration and innovation. With Stratosphere, push the boundaries of what\'s possible and venture into uncharted territories of creativity.',
    features: [
      'Cutting-edge technology',
      'Advanced analytics',
      'Future-ready architecture'
    ]
  },
  jupiter: {
    title: 'Jupiter',
    subtitle: 'Massive Scale',
    description: 'Like Jupiter\'s immense size and gravitational influence, Stratosphere handles enterprise-scale challenges with ease and maintains perfect order in complex systems.',
    features: [
      'Enterprise scalability',
      'Powerful processing',
      'System orchestration'
    ]
  },
  saturn: {
    title: 'Saturn',
    subtitle: 'Structured Excellence',
    description: 'Saturn\'s magnificent rings represent perfect organization and structure. Stratosphere brings order to chaos with its systematic approach to data management.',
    features: [
      'Structured data flows',
      'Organized workflows',
      'Systematic processes'
    ]
  },
  uranus: {
    title: 'Uranus',
    subtitle: 'Unique Perspective',
    description: 'Uranus rotates on its side, offering a unique perspective. Stratosphere provides fresh insights and innovative approaches to traditional challenges.',
    features: [
      'Innovative solutions',
      'Fresh perspectives',
      'Unique methodologies'
    ]
  },
  neptune: {
    title: 'Neptune',
    subtitle: 'Deep Discovery',
    description: 'Neptune, the distant explorer, represents deep insights and discovery. Stratosphere helps you uncover hidden patterns and profound understanding in your data.',
    features: [
      'Deep analytics',
      'Pattern recognition',
      'Insightful reporting'
    ]
  }
}

export default function PlanetDetails({ currentPlanet, isActive, onBack }) {
  if (!currentPlanet || !isActive) {
    return null
  }

  const planet = planetData[currentPlanet]

  return (
    <div className={`planet-details ${isActive ? 'active' : 'hidden'}`}>
      <button 
        className="back-button"
        onClick={onBack}
      >
        ← Back to Solar System
      </button>
      
      <div className={`planet-content ${currentPlanet}-content active`} data-planet={currentPlanet}>
        <h2>{planet.title}</h2>
        <div className="planet-hero">
          <div className={`planet-large ${currentPlanet}-large`}></div>
        </div>
        <div className="planet-info">
          <h3>{planet.subtitle}</h3>
          <p>{planet.description}</p>
          <ul className="features">
            {planet.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
const planetData = {
  mercury: {
    title: 'Mercury',
    subtitle: 'Swift Operation',
    description: 'Harness lightning-fast execution with the Mercury Engine — write, build, and deploy code at speeds that feel instantaneous.',
    features: [
      'Millisecond response times',
      'Real-time data synchronization',
      'Instant search capabilities'
    ]
  },
  venus: {
    title: 'Venus',
    subtitle: 'Beautiful Interface',
    description: 'Elevate productivity with an interface that doesn’t just work — it inspires. Venus delivers elegance, clarity, and a visual experience that feels effortless.',
    features: [
      'Stunning visual design',
      'Intuitive user experience',
      'Customizable themes'
    ]
  },
  earth: {
    title: 'Earth',
    subtitle: 'Humanity',
    description: 'Your AI coding companion that understands you. Earth enables fluid, natural conversations, turning human thought into precise, working code.',
    features: [
      'Rock-solid reliability',
      'Comprehensive ecosystem',
      'Global accessibility'
    ]
  },
  mars: {
    title: 'Mars',
    subtitle: 'Spontaneity',
    description: 'Move fast, experiment freely, and code without limits. Mars empowers you to iterate, test, and innovate from anywhere in the universe.',
    features: [
      'Cutting-edge technology',
      'Advanced analytics',
      'Future-ready architecture'
    ]
  },
  jupiter: {
    title: 'Jupiter',
    subtitle: 'Complexity',
    description: 'Conquer massive projects with ease. Jupiter brings the muscle to handle sprawling codebases, complex systems, and enterprise-grade performance demands.',
    features: [
      'Enterprise scalability',
      'Powerful processing',
      'System orchestration'
    ]
  },
  saturn: {
    title: 'Saturn',
    subtitle: 'Connected',
    description: 'Saturn is collaboration without friction — seamlessly integrated with GitHub, structured for teamwork, and built for collective success.',
    features: [
      'Structured data flows',
      'Organized workflows',
      'Systematic processes'
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
        ←
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
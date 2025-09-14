import Head from 'next/head'
import LoadingScreen from '../components/LoadingScreen'
import Navigation from '../components/Navigation'
import SolarSystem from '../components/SolarSystem'
import PlanetDetails from '../components/PlanetDetails'
import FloatingCTA from '../components/FloatingCTA'
import AnimationControl from '../components/AnimationControl'
import WelcomeOverlay from '../components/WelcomeOverlay'
import Info from '../components/Info'
import useStratosphere from '../hooks/useStratosphere'

export default function Home() {
  const {
    isLoading,
    currentPlanet,
    isTransitioning,
    showWelcome,
    showPlanetDetails,
    hidePlanetDetails,
    handleLoadingComplete,
    hideWelcome
  } = useStratosphere()

  return (
    <>
      <Head>
        <title>Stratosphere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <main className="main-content">
          <Navigation />
          
          <SolarSystem 
            isZoomed={!!currentPlanet}
            onPlanetClick={showPlanetDetails}
          />

          <PlanetDetails 
            currentPlanet={currentPlanet}
            isActive={!!currentPlanet}
            onBack={hidePlanetDetails}
          />

          <AnimationControl />
          
          <FloatingCTA />

          <WelcomeOverlay 
            isVisible={showWelcome}
            onClose={hideWelcome}
          />

          <Info />
        </main>
      )}
    </>
  )
}
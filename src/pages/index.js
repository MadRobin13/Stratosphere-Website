import Head from 'next/head'
import LoadingScreen from '../components/LoadingScreen'
import Navigation from '../components/Navigation'
import SolarSystem from '../components/SolarSystem'
import PlanetDetails from '../components/PlanetDetails'
import FloatingCTA from '../components/FloatingCTA'
import WelcomeOverlay from '../components/WelcomeOverlay'
import Info from '../components/Info' // <-- Add this import
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
        <meta name="description" content="A website for Stratosphere, our Hack the North 2025 Submission." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
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

          <FloatingCTA />

          <WelcomeOverlay 
            isVisible={showWelcome}
            onClose={hideWelcome}
          />

          <Info /> {/* <-- Add the Info component here */}
        </main>
      )}
    </>
  )
}
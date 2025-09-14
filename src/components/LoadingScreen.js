import { useEffect } from 'react'

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2400)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div id="loading-screen" className="loading-screen">
      <div className="rocket-container">
        <div className="rocket">
          <div className="rocket-body"></div>
          <div className="rocket-fin left"></div>
          <div className="rocket-fin right"></div>
          <div className="rocket-window"></div>
          <div className="exhaust">
            <div className="flame flame-1"></div>
            <div className="flame flame-2"></div>
            <div className="flame flame-3"></div>
          </div>
        </div>
      </div>
      <div className="loading-text">
        <h1>STRATOSPHERE</h1>
        <p>Launching into the cosmos...</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  )
}
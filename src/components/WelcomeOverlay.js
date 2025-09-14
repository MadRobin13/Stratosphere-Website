export default function WelcomeOverlay({ isVisible, onClose }) {
  if (!isVisible) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        transition: 'opacity 0.5s ease'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.9))',
        border: '2px solid var(--white)',
        borderRadius: '20px',
        padding: '4rem',
        maxWidth: '600px',
        margin: '2rem',
        textAlign: 'center',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
        animation: 'slideInUp 0.6s ease-out'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            width: '100px',
            height: '100px',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'logoSpin 20s linear infinite'
          }}>
            <img src="/favicon.svg" alt="Stratosphere Logo" style={{ width: '100px', height: '100px' }} />
          </div>
          <h1 style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '3rem',
            marginBottom: '1.5rem',
            color: 'var(--white)',
            letterSpacing: '0.1em'
          }}>
            Welcome to Stratosphere
          </h1>
          <p style={{
            color: 'var(--gray-300)',
            fontSize: '1.4rem',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Explore the universe of possibilities by clicking on each planet to discover what Stratosphere can do for you.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            <button 
              onClick={onClose}
              style={{
                background: 'var(--white)',
                color: 'var(--black)',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
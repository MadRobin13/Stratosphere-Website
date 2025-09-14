import { useState } from 'react'

export default function FloatingCTA() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleLaunchDemo = () => {
    alert('Demo launching soon! 🚀')
    closeModal()
  }

  return (
    <>
      <div className="floating-cta">
        <button className="cta-button" onClick={handleClick}>
          Launch Stratosphere
        </button>
      </div>

      {showModal && (
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div style={{
            background: 'var(--gray-900)',
            border: '2px solid var(--white)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '2rem'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1rem',
                border: '3px solid var(--white)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--white)',
                  borderRadius: '50%',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: 'var(--black)',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '15px',
                    right: '15px'
                  }}></div>
                </div>
              </div>
              <h2 style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>Ready to Launch?</h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'var(--gray-300)',
                marginBottom: '2rem'
              }}>
                Join thousands of users who have already launched their projects into the Stratosphere. 
                Experience the future of productivity and collaboration.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <button 
                  onClick={handleLaunchDemo}
                  style={{
                    background: 'var(--white)',
                    color: 'var(--black)',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Try Demo
                </button>
                <button 
                  onClick={closeModal}
                  style={{
                    background: 'transparent',
                    color: 'var(--white)',
                    border: '2px solid var(--white)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
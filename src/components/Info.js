import React from 'react';

const boxStyle = {
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.9))',
    color: 'var(--white)',
    border: '2px solid var(--white)',
    borderRadius: '20px',
    padding: '1.2rem 2rem',
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
    fontSize: '1.15rem',
    fontWeight: 600,
    fontFamily: "'Space Mono', monospace",
    letterSpacing: '0.03em',
    zIndex: 2500,
    transition: 'background 0.3s, border 0.3s',
    pointerEvents: 'none', // purely informational, not interactive
    userSelect: 'none',
    textAlign: 'center',
    maxWidth: '320px',
    lineHeight: 1.5
};

// Responsive tweak for mobile
const mobileStyle = {
    ...boxStyle,
    top: '1rem',
    right: '1rem',
    padding: '0.9rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '14px',
    maxWidth: '90vw'
};

const Info = () => {
    // Simple responsive check
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
    return (
        <div style={isMobile ? mobileStyle : boxStyle}>
            <span style={{ color: 'var(--gray-300)' }}>
                Click a planet to discover its secrets!
            </span>
        </div>
    );
};

export default Info;
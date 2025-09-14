import React from 'react';

// Use CSS variables for theme colors
const buttonStyle = {
    position: 'fixed',
    bottom: '2rem',
    left: '2rem',
    background: 'linear-gradient(90deg, var(--gray-900) 0%, var(--gray-700) 100%)',
    color: 'var(--white)',
    border: '2px solid var(--white)',
    borderRadius: '25px',
    padding: '0.75rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    cursor: 'pointer',
    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
    transition: 'background 0.3s, color 0.3s, transform 0.2s',
    zIndex: 1200,
};

const hoverStyle = {
    background: 'var(--white)',
    color: 'var(--black)',
    transform: 'scale(1.08)',
    border: '2px solid var(--white)',
};

const startStyle = {
    background: 'linear-gradient(90deg, var(--gray-700) 0%, var(--gray-900) 100%)',
    color: 'var(--white)',
    border: '2px solid var(--white)',
};

export default function StopButton() {
    const [hover, setHover] = React.useState(false);
    const [btnTxt, setBtnTxt] = React.useState('Stop');

    function stopPlanetAnimation() {
        const solarSystem = document.querySelectorAll('.orbit');
        solarSystem.forEach((planet) => {
            planet.classList.remove('spin')
        })
    }

    function resumePlanetAnimation() {
        const solarSystem = document.querySelectorAll('.orbit');
        solarSystem.forEach((planet) => {
            planet.classList.add('spin')
        })
    }

    return (
        <button
            style={{
                ...buttonStyle,
                ...(btnTxt === 'Start' ? startStyle : {}),
                ...(hover ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
                if (btnTxt === 'Stop') {
                    setBtnTxt('Start');
                    stopPlanetAnimation();
                } else {
                    setBtnTxt('Stop');
                    resumePlanetAnimation();
                }
            }}
        >
            {btnTxt}
        </button>
    );
}
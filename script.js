document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const solarSystem = document.getElementById('solar-system');
    const planetDetails = document.getElementById('planet-details');
    const backButton = document.getElementById('back-to-system');
    const resetViewButton = document.getElementById('reset-view');
    const ctaButton = document.querySelector('.cta-button');
    
    // Planet elements
    const planets = document.querySelectorAll('.planet');
    const planetContents = document.querySelectorAll('.planet-content');
    
    // State
    let currentPlanet = null;
    let isTransitioning = false;
    
    // IMMEDIATE ESCAPE KEY HANDLER - Add this first
    console.log('Setting up escape key handler');
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            console.log('Escape key detected! currentPlanet:', currentPlanet);
            e.preventDefault();
            e.stopPropagation();
            
            if (currentPlanet) {
                console.log('Hiding planet details for:', currentPlanet);
                hidePlanetDetails();
            } else {
                console.log('No currentPlanet set');
            }
        }
    }, true); // Use capture phase

    // Randomize planet starting positions
    function randomizePlanetPositions() {
        for (let i = 1; i <= 8; i++) {
            const orbit = document.querySelector(`.orbit-${i}`);
            if (orbit) {
                // Get the animation duration from computed style or use defaults
                const animationDurations = [10, 15, 20, 25, 35, 45, 55, 65]; // seconds
                const duration = animationDurations[i - 1];
                
                // Generate random starting position (as negative delay)
                const randomDelay = -Math.random() * duration;
                
                // Apply random animation delay to start at random position
                orbit.style.animationDelay = `${randomDelay}s`;
                
                console.log(`Orbit ${i}: delay = ${randomDelay.toFixed(2)}s`);
            }
        }
    }

    // Loading screen logic
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        
        // Randomize planet positions before showing
        randomizePlanetPositions();
        
        // Add entrance animation to solar system
        setTimeout(() => {
            solarSystem.style.opacity = '1';
            solarSystem.style.transform = 'translate(-50%, -50%) scale(1)';
            
            // Auto-show welcome instructions after everything loads
            setTimeout(() => {
                showWelcomeInstructions();
                infoVisible = true;
            }, 300);
        }, 100); // Reduced from 200ms
    }, 2400); // Reduced from 4800ms to 2400ms (50% faster)

    // Planet click handlers
    planets.forEach(planet => {
        planet.addEventListener('click', (e) => {
            console.log('Planet clicked:', planet.dataset.planet); // Debug log
            if (isTransitioning) return;
            
            e.stopPropagation();
            const planetName = planet.dataset.planet;
            console.log('Showing details for:', planetName); // Debug log
            showPlanetDetails(planetName);
        });

        // Add hover effects (handled by CSS now)
        planet.addEventListener('mouseenter', () => {
            if (!isTransitioning) {
                // Only scale transform, let CSS handle glow
                planet.style.transform = 'scale(1.3)';
                planet.style.filter = 'brightness(1.3)';
            }
        });

        planet.addEventListener('mouseleave', () => {
            if (!isTransitioning) {
                // Reset to default state
                planet.style.transform = '';
                planet.style.filter = '';
            }
        });
    });

    // Show planet details
    function showPlanetDetails(planetName) {
        if (isTransitioning) return;
        
        // Close info overlay if it's open
        const infoOverlay = document.getElementById('info-overlay');
        if (infoOverlay) {
            hideInfoOverlay();
        }
        
        isTransitioning = true;
        currentPlanet = planetName;
        
        // Hide solar system with zoom effect
        solarSystem.classList.add('zoomed');
        
        // Show planet details after zoom animation
        setTimeout(() => {
            planetDetails.classList.add('active');
            planetDetails.classList.remove('hidden');
            
            // Hide all planet content first
            planetContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show specific planet content
            const targetContent = document.querySelector(`.planet-content[data-planet="${planetName}"]`);
            if (targetContent) {
                setTimeout(() => {
                    targetContent.classList.add('active');
                    isTransitioning = false;
                }, 300);
            }
        }, 400);
    }

    // Hide planet details
    function hidePlanetDetails() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        
        // Hide planet details
        planetDetails.classList.remove('active');
        
        // Hide all planet content
        planetContents.forEach(content => {
            content.classList.remove('active');
        });
        
        setTimeout(() => {
            planetDetails.classList.add('hidden');
            
            // Show solar system
            solarSystem.classList.remove('zoomed');
            
            setTimeout(() => {
                currentPlanet = null;
                isTransitioning = false;
            }, 400);
        }, 300);
    }

    // Back button handler
    backButton.addEventListener('click', hidePlanetDetails);

    // Reset view button handler
    resetViewButton.addEventListener('click', () => {
        if (currentPlanet) {
            hidePlanetDetails();
        }
    });

    // CTA button handler
    ctaButton.addEventListener('click', () => {
        // Animate CTA button
        ctaButton.style.transform = 'scale(0.95)';
        ctaButton.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.5)';
        
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
            ctaButton.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)';
        }, 150);
        
        // You can add actual launch functionality here
        showLaunchModal();
    });

    // Launch modal (placeholder)
    function showLaunchModal() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        // Modal content
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: var(--gray-900);
            border: 2px solid var(--white);
            border-radius: 20px;
            padding: 3rem;
            text-align: center;
            max-width: 500px;
            margin: 2rem;
        `;

        modalContent.innerHTML = `
            <div style="margin-bottom: 2rem;">
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; border: 3px solid var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <div style="width: 50px; height: 50px; background: var(--white); border-radius: 50%; position: relative;">
                        <div style="width: 12px; height: 12px; background: var(--black); border-radius: 50%; position: absolute; top: 15px; right: 15px;"></div>
                    </div>
                </div>
                <h2 style="font-family: 'Space Mono', monospace; font-size: 2rem; margin-bottom: 1rem;">Ready to Launch?</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--gray-300); margin-bottom: 2rem;">
                    Join thousands of users who have already launched their projects into the Stratosphere. 
                    Experience the future of productivity and collaboration.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button id="launch-demo" style="background: var(--white); color: var(--black); border: none; padding: 0.75rem 1.5rem; border-radius: 25px; font-weight: 600; cursor: pointer;">
                        Try Demo
                    </button>
                    <button id="close-modal" style="background: transparent; color: var(--white); border: 2px solid var(--white); padding: 0.75rem 1.5rem; border-radius: 25px; font-weight: 500; cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Fade in modal
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);

        // Close modal handlers
        const closeModal = () => {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        };

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        modalContent.querySelector('#close-modal').addEventListener('click', closeModal);
        modalContent.querySelector('#launch-demo').addEventListener('click', () => {
            // Placeholder for demo launch
            alert('Demo launching soon! 🚀');
            closeModal();
        });
    }

    // Keyboard navigation - using keyup to avoid conflicts
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            console.log('=== ESCAPE KEY PRESSED ===');
            
            // Check current application state
            const infoOverlay = document.getElementById('info-overlay');
            const planetDetailsElement = document.getElementById('planet-details');
            const isInfoVisible = infoOverlay && infoOverlay.style.opacity !== '0' && infoOverlay.parentNode;
            const isPlanetViewActive = planetDetailsElement && planetDetailsElement.classList.contains('active');
            
            console.log('Current state:');
            console.log('- currentPlanet:', currentPlanet);
            console.log('- isTransitioning:', isTransitioning);
            console.log('- isPlanetViewActive:', isPlanetViewActive);
            console.log('- isInfoVisible:', isInfoVisible);
            
            // First priority: close info overlay if visible
            if (isInfoVisible) {
                console.log('ACTION: Closing info overlay');
                hideInfoOverlay();
                return;
            }
            
            // Second priority: close planet details if in planet view
            if (currentPlanet || isPlanetViewActive) {
                console.log('ACTION: Closing planet details');
                hidePlanetDetails();
                return;
            }
            
            console.log('No action taken - nothing to close');
        }
    });
    
    // Keep the original keydown for other keys  
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'Enter':
            case ' ':
                if (currentPlanet) {
                    // Space or Enter to go back to solar system
                    hidePlanetDetails();
                } else {
                    // Launch CTA
                    ctaButton.click();
                }
                e.preventDefault();
                break;
                
            // Number keys to select planets
            case '1': selectPlanet('mercury'); break;
            case '2': selectPlanet('venus'); break;
            case '3': selectPlanet('earth'); break;
            case '4': selectPlanet('mars'); break;
            case '5': selectPlanet('jupiter'); break;
            case '6': selectPlanet('saturn'); break;
            case '7': selectPlanet('uranus'); break;
            case '8': selectPlanet('neptune'); break;
        }
    });

    function selectPlanet(planetName) {
        if (!currentPlanet && !isTransitioning) {
            showPlanetDetails(planetName);
        }
    }


    // Info button functionality - enhanced
    const infoToggle = document.getElementById('info-toggle');
    
    if (infoToggle) {
        console.log('Info button found and adding click listener');
        infoToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Info button clicked - showing welcome to Stratosphere page');
            
            // Remove any existing overlay first
            const existingOverlay = document.getElementById('info-overlay');
            if (existingOverlay) {
                console.log('Removing existing overlay');
                existingOverlay.remove();
            }
            
            // Always show the welcome screen
            showWelcomeToStratosphere();
        });
    } else {
        console.error('Info button not found! Available elements:', document.querySelectorAll('button'));
    }

    function showWelcomeInstructions() {
        // Legacy function for backwards compatibility
        showWelcomeToStratosphere();
    }

    function showWelcomeToStratosphere() {
        // Check if overlay already exists and remove it
        const existingOverlay = document.getElementById('info-overlay');
        if (existingOverlay) {
            console.log('Removing existing overlay before creating new one');
            existingOverlay.remove();
        }
        
        console.log('Creating Welcome to Stratosphere overlay');
        
        // Create welcome overlay
        const infoOverlay = document.createElement('div');
        infoOverlay.id = 'info-overlay';
        infoOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.5s ease;
        `;

        const infoContent = document.createElement('div');
        infoContent.style.cssText = `
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.9));
            border: 2px solid var(--white);
            border-radius: 20px;
            padding: 4rem;
            max-width: 600px;
            margin: 2rem;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
            animation: slideInUp 0.6s ease-out;
        `;

        infoContent.innerHTML = `
            <div style="margin-bottom: 2rem;">
                <div class="welcome-logo-container" style="width: 100px; height: 100px; margin: 0 auto 2rem; display: flex; align-items: center; justify-content: center; animation: logoSpin 20s linear infinite;">
                    <img src="public/favicon.svg" alt="Stratosphere Logo" style="width: 100px; height: 100px;">
                </div>
                <h1 style="font-family: 'Space Mono', monospace; font-size: 3rem; margin-bottom: 1.5rem; color: var(--white); letter-spacing: 0.1em;">Welcome to Stratosphere</h1>
                <p style="color: var(--gray-300); font-size: 1.4rem; line-height: 1.6; margin-bottom: 2rem;">Explore the universe of possibilities by clicking on each planet to discover what Stratosphere can do for you.</p>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                    <button id="close-welcome" style="background: var(--white); color: var(--black); border: none; padding: 1rem 2rem; border-radius: 25px; font-family: 'Inter', sans-serif; font-weight: 600; cursor: pointer; font-size: 1.1rem;">
                        Start Exploring
                    </button>
                </div>
            </div>
        `;

        infoOverlay.appendChild(infoContent);
        document.body.appendChild(infoOverlay);
        
        console.log('Welcome overlay added to DOM');

        // Fade in overlay
        setTimeout(() => {
            infoOverlay.style.opacity = '1';
            console.log('Welcome overlay faded in');
        }, 10);

        // Button event handlers
        const closeButton = infoContent.querySelector('#close-welcome');
        
        closeButton.addEventListener('click', () => {
            console.log('Close button clicked');
            hideInfoOverlay();
        });

        // Close on click outside
        infoOverlay.addEventListener('click', (e) => {
            if (e.target === infoOverlay) {
                console.log('Overlay background clicked - closing');
                hideInfoOverlay();
            }
        });
    }
    
    // Keep the original function for backward compatibility
    function showInfoOverlay() {
        showWelcomeInstructions();
    }

    function hideInfoOverlay() {
        console.log('hideInfoOverlay called');
        const infoOverlay = document.getElementById('info-overlay');
        if (infoOverlay) {
            console.log('Found overlay, hiding it');
            infoOverlay.style.opacity = '0';
            setTimeout(() => {
                if (infoOverlay.parentNode) {
                    document.body.removeChild(infoOverlay);
                    console.log('Overlay removed from DOM');
                }
            }, 300);
        }
    }

    // Add smooth scrolling for planet content (if content is long)
    planetContents.forEach(content => {
        content.addEventListener('wheel', (e) => {
            e.stopPropagation();
        });
    });

    // Performance optimization: pause animations when not visible
    let isVisible = true;
    
    document.addEventListener('visibilitychange', () => {
        isVisible = !document.hidden;
        
        if (!isVisible) {
            // Pause animations
            solarSystem.style.animationPlayState = 'paused';
            planets.forEach(planet => {
                planet.style.animationPlayState = 'paused';
            });
        } else {
            // Resume animations
            solarSystem.style.animationPlayState = 'running';
            planets.forEach(planet => {
                planet.style.animationPlayState = 'running';
            });
        }
    });

    // Touch support for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe gestures
        if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
            if (currentPlanet && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
                // Swipe down to go back
                hidePlanetDetails();
            }
        }
    });

    // Preload images/animations for smooth experience
    const preloadTimer = setTimeout(() => {
        // Force a repaint to ensure all animations are ready
        document.body.offsetHeight;
        
        // Add loaded class for any additional styling
        document.body.classList.add('loaded');
    }, 100);

    // Global test function for debugging
    window.testEscape = function() {
        console.log('=== MANUAL ESCAPE TEST ===');
        const infoOverlay = document.getElementById('info-overlay');
        const planetDetailsElement = document.getElementById('planet-details');
        console.log('currentPlanet:', currentPlanet);
        console.log('isTransitioning:', isTransitioning);
        console.log('planetDetails active:', planetDetailsElement && planetDetailsElement.classList.contains('active'));
        console.log('infoOverlay exists:', !!infoOverlay);
        
        if (currentPlanet || (planetDetailsElement && planetDetailsElement.classList.contains('active'))) {
            console.log('Calling hidePlanetDetails()');
            hidePlanetDetails();
        } else {
            console.log('No planet to close');
        }
    };
    
    // Global access to key functions for debugging
    window.hidePlanetDetails = hidePlanetDetails;
    window.showPlanetDetails = showPlanetDetails;
    
    console.log('🚀 Stratosphere Solar System loaded successfully!');
    console.log('💫 Use number keys 1-8 to navigate planets, or click to explore!');
    console.log('ℹ️  Click the Info button anytime to see the welcome instructions again');
});


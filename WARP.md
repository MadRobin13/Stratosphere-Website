# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Stratosphere is an interactive web application showcasing a solar system interface where users can explore different "planets" representing product features. Built for Hack the North 2025, it's a pure frontend application with no build process or framework dependencies.

## Development Commands

### Local Development
```bash
# Serve the website locally using Python's built-in server
python3 -m http.server 8000
# Alternative: python -m SimpleHTTPServer 8000 (Python 2)

# Or using Node.js if available
npx serve .

# Or using PHP if available
php -S localhost:8000
```

### File Structure
- `index.html` - Main HTML file with complete application structure
- `styles.css` - All CSS styles, animations, and responsive design
- `script.js` - All JavaScript functionality and interactions
- `README.md` - Basic project description
- `.gitignore` - Standard gitignore (includes Node.js patterns despite no package.json)

## Architecture Overview

### Core Components

**Loading Screen (`loading-screen`)**
- Animated rocket launch sequence with flames and loading bar
- Auto-dismisses after 2.4 seconds to reveal main content
- CSS-driven animations with multiple keyframes

**Solar System Interface (`solar-system`)**
- Central sun with 8 orbiting planets (Mercury through Neptune)
- Each planet has unique styling, orbital speed, and hover effects
- CSS animations handle orbital mechanics with randomized starting positions
- Z-index layering: sun (1100) → orbits (1200) → planets (1300)

**Planet Detail Views (`planet-details`)**
- Modal overlay system for individual planet information
- Each planet has dedicated content showcasing different product features
- Smooth zoom transition between solar system and detail views

**Navigation System**
- Escape key handling for closing overlays and returning to solar system
- Number keys (1-8) for direct planet selection
- Click and touch interactions for mobile compatibility
- Welcome overlay with instructions

### Key JavaScript Architecture

**State Management**
- `currentPlanet` - tracks active planet detail view
- `isTransitioning` - prevents multiple simultaneous animations
- Global functions exposed for debugging (`window.testEscape`, etc.)

**Event Handling**
- Document-level keydown/keyup listeners for navigation
- Individual planet click handlers with event delegation
- Touch gesture support for mobile (swipe to go back)

**Animation Coordination**
- CSS transitions handle visual effects
- JavaScript manages timing and state changes
- Performance optimizations: paused animations when page not visible

### CSS Architecture

**Design System Variables**
- Complete grayscale color palette (`--black` to `--white`)
- Consistent gray scale steps for theming

**Animation Patterns**
- Orbital mechanics using CSS transforms and infinite animations
- Loading sequence with staggered fade-ins and progress bar
- Hover effects with scale transforms and glow effects
- Mobile-responsive touch targets (minimum 44px)

**Responsive Design**
- Mobile-first approach with desktop enhancements
- Reduced motion support for accessibility
- High contrast mode compatibility

## Development Guidelines

### Adding New Features

**New Planets/Sections**
1. Add orbital HTML structure in `index.html` following existing pattern
2. Create corresponding planet content section with `data-planet` attribute
3. Add CSS orbit animation with appropriate duration and size
4. Update JavaScript planet selection logic if needed

**Styling Modifications**
- Use existing CSS custom properties for consistency
- Follow established z-index hierarchy (sun < orbits < planets < overlays)
- Maintain mobile responsiveness and accessibility features

**JavaScript Enhancements**
- Respect existing state management patterns
- Use event delegation for new interactive elements
- Maintain keyboard navigation compatibility
- Add appropriate transition guards to prevent animation conflicts

### Performance Considerations
- No build process - all assets are served directly
- CSS animations are GPU-accelerated where possible
- JavaScript uses modern event handling without jQuery dependencies
- Images/assets should be optimized before adding to repository

### Browser Compatibility
- Uses modern JavaScript (ES6+) - ensure target browsers support features used
- CSS custom properties and modern animation features required
- Tested interaction patterns work on both desktop and mobile devices
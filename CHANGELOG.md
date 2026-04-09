# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **HeroGlobe Component**: New interactive 3D globe component using `react-globe.gl` library
  - Renders an interactive Earth globe with customizable textures
  - Located at `frontend/src/components/HeroGlobe.jsx`
  - Supports multiple texture layers (color map, bump map, specular map, clouds)
  - Performance optimized with lazy texture loading
  - Respects `prefers-reduced-motion` for accessibility

- **New Styling Structure**: Created `frontend/src/styles/` directory
  - `index.css`: Global styles for the application
  - `HeroGlobe.css`: Component-specific styles for the globe container

- **GitHub Prompts**: Added `.github/prompts/first_look.prompt.md` for AI assistant context

- **Dependencies**:
  - `react-globe.gl` (^2.37.1): Interactive 3D globe visualization
  - `three` (^0.183.2): 3D JavaScript library (required by react-globe.gl)

### Changed
- **App Component Migration**: Converted from `App.js` to `App.jsx` (React functional component)
  - Updated to use HeroGlobe component
  - Added hero section overlay with call-to-action button
  - Improved component structure

- **Updated Frontend README**: Added documentation for HeroGlobe setup and usage
  - Installation instructions for dependencies
  - Recommended texture asset URLs
  - Performance optimization notes
  - Accessibility considerations

- **Updated package.json**: Version bumped to 0.1.0 with new dependencies

### Removed
- `frontend/src/App.css`: Replaced with modular CSS in styles directory
- `frontend/src/App.js`: Migrated to JSX format as `App.jsx`
- `frontend/src/components/Home.js`: Functionality integrated into App component
- `frontend/src/components/Navbar.js`: Removed (to be redesigned)
- `frontend/src/components/Navbar.css`: Associated styles removed

### Technical Details
- React version: 18.2.0
- Maintained compatibility with existing Create-React-App scaffold
- All styling migrated to CSS modules pattern

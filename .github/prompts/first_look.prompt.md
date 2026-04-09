Act as a Senior Front-End Developer and produce a React implementation for a high-end travel website landing page that matches the following requirements. Use the `react-globe.gl` library for the interactive globe (install with `npm install react-globe.gl three`).

Visual style
- Minimalist, dark-themed aesthetic (deep black/charcoal background).
- Crisp white sans-serif typography (recommend Inter or Montserrat).
- Main heading uses `letter-spacing: 2px` and `text-transform: uppercase`.

Hero element (globe)
- Use `react-globe.gl` to render a realistic 3D Earth in the hero.
- Provide a bump/specular map and an optional cloud layer to create realistic shading and a subtle glow/halo.
- Globe should auto-rotate slowly; allow click-and-drag manual rotation.
- Add a slight atmospheric glow (can be a Three.js ShaderMaterial or CSS/overlay glow).

Content & layout
- Top navigation bar: Destinations, Itineraries, Journal, About Us (responsive).
- Bold main heading centered near the bottom of the hero: TRAVEL WITHOUT BOUNDARIES.
- Sub-headline below: Explore. Discover. Experience the world.
- CTA button at bottom: Start Your Journey — with a subtle hover effect.
- Use Flexbox or CSS Grid to center layout and make it responsive (mobile-first).

Interactivity & accessibility
- Globe: smooth auto-rotate, drag-to-rotate, accessible fallback (static hero image) for low-end devices.
- Ensure buttons and nav items are keyboard-focusable and have ARIA labels where applicable.
- Provide brief performance notes for lazy-loading textures and reducing initial bundle size.

Deliverables
- A small React component `HeroGlobe` using `react-globe.gl`.
- A simple page layout (Nav + Hero) and minimal CSS matching the dark premium style.
- `npm` install instructions: `npm install react-globe.gl three` (or `yarn add react-globe.gl three`).
- Paths/URLs or filenames for recommended textures (earth color map, bump map, specular map, clouds).
- A README section with run/build steps and optional progressive enhancement fallback.

Example usage notes (for developer):
- Keep `HeroGlobe` self-contained; accept props for `width`, `height`, `textureUrls`.
- Lazy-load large texture files using dynamic imports or by fetching them after initial paint.
- Provide a `prefers-reduced-motion` fallback to stop auto-rotation if requested.

Quick install command:
npm install react-globe.gl three

# TourMate Frontend (minimal)

Quick-start:

1. Open a terminal in `frontend/`.
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm start
```

App will be available at http://localhost:3000

Notes:
- This is a minimal Create-React-App-compatible scaffold. If you prefer, run `npx create-react-app .` instead of using this package.json.

HeroGlobe (interactive globe)

- Install textures and libs:

```bash
npm install react-globe.gl three
```

- Example texture URLs (recommended assets):
	- Earth color map: https://raw.githubusercontent.com/visgl/react-globe.gl/master/example/img/earth-blue-marble.jpg
	- Bump map: https://raw.githubusercontent.com/visgl/react-globe.gl/master/example/img/earth-topology.png
	- Specular map: https://raw.githubusercontent.com/visgl/react-globe.gl/master/example/img/earth-specular.jpg
	- Clouds: https://raw.githubusercontent.com/visgl/react-globe.gl/master/example/img/earth-clouds.png

- Usage (simple): import and render `HeroGlobe` from `src/components/HeroGlobe.js`.

- Performance notes:
	- Lazy-load large textures (component already defers texture fetching).
	- Honor `prefers-reduced-motion` to disable auto-rotation.
	- Provide a `fallback` image in `textureUrls` for low-end devices.


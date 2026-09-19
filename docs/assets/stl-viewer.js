const status = document.querySelector('#status');
const reset = document.querySelector('#reset');
const viewport = document.querySelector('#viewport');
const models = {
  halter: ['batterieUndBreadBoardHalter.stl', 'Batterie- und Breadboard-Halter'],
  abstandshalter: ['batterieUndBreadBoardHalterAbstandhalter.stl', 'Nucleo-64-Abstandshalter'],
  linienhalter: ['lineFinderHalter.stl', 'Line-Finder-Halter'],
};

async function init() {
  const key = new URLSearchParams(location.search).get('model');
  if (!Object.hasOwn(models, key)) throw new Error('Unbekanntes Modell');
  const [file, title] = models[key];
  document.title = `${title} – 3D-Ansicht`;
  const [THREE, { OrbitControls }, { STLLoader }] = await Promise.all([
    import('three'),
    import('three/addons/controls/OrbitControls.js'),
    import('three/addons/loaders/STLLoader.js'),
  ]);
  const geometry = await new STLLoader().loadAsync(new URL(`../bauteile/3dDruck/${file}`, import.meta.url).href);
  geometry.rotateX(-Math.PI / 2);
  geometry.center();
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  const radius = geometry.boundingSphere.radius;
  if (!Number.isFinite(radius) || radius <= 0) throw new Error('Leeres Modell');

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#f1f5f9');
  const camera = new THREE.PerspectiveCamera(40, 1, radius / 100, radius * 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.domElement.setAttribute('aria-label', title);
  viewport.append(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x697887, 2.5));
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 2, 3);
  scene.add(light);
  scene.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x2387b8, roughness: 0.65, metalness: 0.05 })));

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = radius * 1.15;
  controls.maxDistance = radius * 15;
  const render = () => renderer.render(scene, camera);
  function fit() {
    controls.target.set(0, 0, 0);
    const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
    const limitingFov = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
    const distance = radius / Math.sin(limitingFov) * 1.15;
    camera.position.set(1, 0.8, 1.2).normalize().multiplyScalar(distance);
    controls.update();
    render();
  }
  controls.addEventListener('change', render);
  new ResizeObserver(() => {
    const { width, height } = viewport.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    fit();
  }).observe(viewport);
  reset.addEventListener('click', fit);
  reset.disabled = false;
  status.textContent = 'Ziehen zum Drehen · Mausrad / zwei Finger zum Zoomen';
}

init().catch((error) => {
  viewport.replaceChildren();
  status.textContent = '3D-Ansicht nicht verfügbar. Bitte nutze den STL-Download auf der Dokumentationsseite.';
  console.error('STL-Vorschau:', error);
});

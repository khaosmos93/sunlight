import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("scene-container");
const bodies = window.sceneBodies ?? [];

const scene = new THREE.Scene();
scene.background = new THREE.Color("#05070d");

const camera = new THREE.PerspectiveCamera(
  60,
  container.clientWidth / container.clientHeight,
  0.1,
  100,
);
camera.position.set(0, 2.2, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);

scene.add(new THREE.AmbientLight("#404040", 0.3));

for (const body of bodies) {
  const geometry = new THREE.SphereGeometry(body.radius, 32, 24);

  if (body.name === "sun") {
    const material = new THREE.MeshBasicMaterial({ color: body.color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...body.position);
    scene.add(mesh);

    const sunLight = new THREE.PointLight("#ffd35f", 2.2, 40);
    sunLight.position.set(...body.position);
    scene.add(sunLight);
    continue;
  }

  if (body.name === "earth") {
    const material = new THREE.MeshBasicMaterial({
      color: body.color,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...body.position);
    scene.add(mesh);
  }
}

const grid = new THREE.GridHelper(24, 24, "#1e2538", "#111827");
grid.position.y = -2;
scene.add(grid);

const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

window.addEventListener("resize", () => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

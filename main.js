let scene, camera, renderer, torus;
const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight()

// document.querySelector('.gallery').scrollIntoView()

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel-olympics', {
    type    : 'loop',       // Enable continuous loop mode.
    perPage : 3,            // Number of slides per view; adjust as needed.
    gap     : '1rem',       // Gap between slides.
    focus   : 0,     // Center the active slide.
    rewind  : true,         // Rewind to the first slide when reaching the end.
    padding: '35px',
    breakpoints: {
      768: {                // When viewport is 768px or less
        perPage: 1,         // Show only one slide per view
        gap: '0.5rem'       // Optional: adjust gap if needed
      }
    }
  }).mount();

  new Splide( '#image-carousel-lab', {
    type    : 'loop',       // Enable continuous loop mode.
    perPage : 3,            // Number of slides per view; adjust as needed.
    gap     : '1rem',       // Gap between slides.
    focus   : 0,     // Center the active slide.
    rewind  : true,         // Rewind to the first slide when reaching the end.
    padding: '35px',
    breakpoints: {
      768: {                // When viewport is 768px or less
        perPage: 1,         // Show only one slide per view
        gap: '0.5rem'       // Optional: adjust gap if needed
      }
    }
  }).mount();

  new Splide( '#image-carousel-famous-persons', {
    type    : 'loop',       // Enable continuous loop mode.
    perPage : 3,            // Number of slides per view; adjust as needed.
    gap     : '1rem',       // Gap between slides.
    focus   : 0,     // Center the active slide.
    rewind  : true,         // Rewind to the first slide when reaching the end.
    padding: '35px',
    breakpoints: {
      768: {                // When viewport is 768px or less
        perPage: 1,         // Show only one slide per view
        gap: '0.5rem'       // Optional: adjust gap if needed
      }
    }
  }).mount();
} );

function initThree() {
  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1, 
    1000
  );
  camera.position.z = 4;

  // Create renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append renderer to the container
  const threeContainer = document.getElementById("three-container");
  threeContainer.appendChild(renderer.domElement);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xe7a1ce, 0.4);
  scene.add(ambientLight);

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xe7a1ce, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

//   const pointLight = new THREE.PointLight(0xC0C0C0, 1, 10); // 10 units radius
//     scene.add(pointLight);

  // Create the cut torus geometry
  // TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
  // Setting arc < 2*PI yields a partial (cut) torus
  const pivot = new THREE.Object3D();
    // For example, to shift the center of rotation to (1, 0, 0) relative to the scene:
    // pivot.position.set(1.75, 0, 0);
    scene.add(pivot);

  const geometry = new THREE.TorusGeometry(1, 0.4, 32, 64, Math.PI * 1);
  // geometry.translate(1.9, 0, 0);
  const material = new THREE.MeshPhongMaterial({
    color: 0xbcd6ec,         // Base pink color
    specular: 0xC0C0C0,      // Use a specular color similar to your ambient light (pink)
    shininess: 20,           // Adjust shininess to control highlight intensity
    wireframe: true          // Optional: keep or remove based on your style
  });

  torus = new THREE.Mesh(geometry, material);
//   torus.position.x += 3

  scene.add(torus);

  const geometry2 = new THREE.TorusGeometry(1, 0.4, 32, 64, Math.PI * 1);
  const material2 = new THREE.MeshPhongMaterial({
    color: 0xbcd6ec,
    wireframe: true
  });

  torus2 = new THREE.Mesh(geometry, material);
//   torus2.position.x += 3
  torus2.position.y = -0.5;
  torus2.rotation.x = 2/3 * Math.PI;
  scene.add(torus2);

  torusGroup = new THREE.Group();
  torusGroup.add(torus);
  torusGroup.add(torus2);
  if (innerHeight < innerWidth) {
    torusGroup.position.x = window.innerHeight * 0.003;
  } else {
    torusGroup.position.x = window.innerWidth * 0.0025;
  }
  scene.add(torusGroup);
  pivot.add(torusGroup);

  // Start the animation loop
  animate();
}

// Animate the torus
function animate() {
  requestAnimationFrame(animate);

  // Simple rotation
  torusGroup.rotation.x += 0.001;
//   torusGroup.rotation.y += 0.001;

  // Render the scene
  renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  let newTranslateX = window.innerWidth * 0.0025
  if (innerHeight < innerWidth - 200) {
    newTranslateX = window.innerHeight * 0.003;
  }

  // Update the mesh's position
  torusGroup.position.x = newTranslateX;
});

// Initialize Three.js
initThree();

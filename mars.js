import * as THREE from 'three';
// scene 
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
////

//sphere 
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial();
const mesh = new THREE.Mesh(geometry, material);
//////

scene.add(mesh);

const light = new THREE.DirectionalLight(0xcccccc, 1);
light.position.set(5, 3, 5);
scene.add(light);

//texture for planet
material.map =     new THREE.TextureLoader().load('textures/2k_neptune.jpg');
material.bumpMap = new THREE.TextureLoader().load('textures/bump2.jpg');     
material.bumpScale = 0.010;

//stars background

const starsGeometry = new THREE.SphereGeometry(4, 32, 32);
const starsMaterial = new THREE.MeshBasicMaterial();
const starsMesh     = new THREE.Mesh(starsGeometry, starsMaterial)

starsMaterial.map  = new THREE.TextureLoader().load('textures/stars.jpg');
starsMaterial.side = THREE.BackSide;

scene.add(starsMesh);

document.addEventListener('mousemove', (e) => {
    camera.position.x = (e.x - (window.innerWidth / 2)) * 0.005;
    camera.lookAt(scene.position);
});


const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  
    mesh.rotation.y -= 0.002;
  
  };
  
  camera.position.z = 4;
  
  animate();
import './style.css'

// import controls
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import ThreeJS and instantiate objects. 
import * as THREE from 'three';
import { Scene } from 'three';



// Scene Object
const scene1 = new THREE.Scene();



// Camera Object (FOV, Aspect Ratio, Far)
const camera1 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100 );



// Renderer Object
const render1 = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#background')
});

render1.setPixelRatio( window.devicePixelRatio );
render1.setSize( window.innerWidth, window.innerHeight );

camera1.position.setZ(30);



// Donut
const donut_skel = new THREE.TorusGeometry( 10, 4.5, 16, 100 );
const donut_skin = new THREE.MeshStandardMaterial( { color: 0xf1b166 } );
//const donut_skin = new THREE.MeshStandardMaterial( { color: 0xE75480 } );
const donut = new THREE.Mesh( donut_skel, donut_skin );

scene1.add( donut );



// Lights & Light-helpers
const flashlight = new THREE.PointLight(0xffffff);
flashlight.position.set(1, 1, 1);

const spotlight = new THREE.AmbientLight(0xffffff);

//const notInvis = new THREE.PointLightHelper(flashlight);

scene1.add( flashlight, spotlight );
//const controls = new OrbitControls(camera1, render1.domElement );
 




//  == Sprinkles ==

// Function to generate yellow sprinkles
function addYellow_Sprinkles() {
  const sprSkel = new THREE.SphereGeometry(0.25, 25, 25);
  const sprSkin = new THREE.MeshStandardMaterial( { color: 0XEFDD00 } );
  const sprinkles = new THREE.Mesh( sprSkel, sprSkin );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (100));
  sprinkles.position.set(x, y, z);
  scene1.add(sprinkles);
}

Array(100).fill().forEach(addYellow_Sprinkles);




// Function to generate Purple sprinkles
function addPurple_Sprinkles() {
  const sprSkel = new THREE.SphereGeometry(0.25, 25, 25);
  const sprSkin = new THREE.MeshStandardMaterial( { color: 0X9C2FBC } );
  const sprinkles = new THREE.Mesh( sprSkel, sprSkin );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (100));
  sprinkles.position.set(x, y, z);
  scene1.add(sprinkles);
}

Array(100).fill().forEach(addPurple_Sprinkles);




// Function to generate Red sprinkles
function addRed_Sprinkles() {
  const sprSkel = new THREE.SphereGeometry(0.25, 25, 25);
  const sprSkin = new THREE.MeshStandardMaterial( { color: 0XFF272A } );
  const sprinkles = new THREE.Mesh( sprSkel, sprSkin );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (100));
  sprinkles.position.set(x, y, z);
  scene1.add(sprinkles);
}

Array(100).fill().forEach(addRed_Sprinkles);



// Background 
scene1.background = new THREE.Color( 0xE75480 );

//const bgImage = new THREE.TextureLoader().load('');




// Function to continually render scenes. 
function animate() {

  requestAnimationFrame( animate );

  // Donut Animation
  donut.rotation.x += 0.01;
  donut.rotation.y += 0.005;
  donut.rotation.z += 0.01;

  //controls.update();

  render1.render( scene1, camera1 );

}

animate();
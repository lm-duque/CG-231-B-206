var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 5;
camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

const R = 1; // Radio de la esfera
var geometry = new THREE.SphereGeometry(R);
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Datos de Escalado, Rotación y Traslado
const Sx = 0.5; // Escalado en X
const Sy = 0.5; // Escalado en Y
const Sz = 3; // Escalado en Z
const Tz = Sz; // Traslado en Z
const Rx = 60 * Math.PI / 180; // Angulo en radianes a rotar eje x
const Ry = 30 * Math.PI / 180; // Angulo en radianes a rotar eje y
const Rz = 60 * Math.PI / 180; // Angulo en radianes a rotar eje z

// Escalado de la esfera
sphere.scale.set(Sx, Sy, Sz);
/*vt = (0, 0, Sz);
vs = (Sx, Sy, Sz);
EscaladoReal(sphere, vt, vs);*/

// Rotación de la esfera
sphere.rotation.set(-Rx, Ry, Rz);
/*RotacionReal(sphere, vt, 'X', -Rx);
RotacionReal(sphere, vt, 'Y', Ry);
RotacionReal(sphere, vt, 'Z', Rz);*/

// Traslación de la esfera
sphere.translateZ(Tz);

// ** Luz **
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

// ** Cuadrícula **
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();
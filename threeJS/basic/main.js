import * as THREE from 'three';

const canvas:HTMLElement = document.getElementById( elementId: 'canvas' );

// 1. Scene
const scene:Scene = new THREE.Scene();
scene.background = new THREE.Color(r: '#F0F0F0F0');

// 2. Camera
const camera:PerspectiveCamera = new THREE.PerspectiveCamera(fov:75, aspect: window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 5;

// 3. Object
const geometry:DodecahedronGeometry = new THREE.DodecahedronGeometry();
const material MeshBasicMaterial = new THREE.MeshBasicMaterial( parameters: {color: '#468235'})
const

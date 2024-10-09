import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module';
// 创建场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加 OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// 准备节点和边数据
const nodes = ['x_node', 'y_node', 'a_node', 'b_node'];
const edges = [[0, 1], [1, 2], [3, 1]];

const nodePositions = [];
nodes.forEach((_, index) => {
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const node = new THREE.Mesh(geometry, material);
    node.position.set(Math.random() * 5, Math.random() * 5, Math.random() * 5);
    nodePositions.push(node.position.clone());
    scene.add(node);
});

edges.forEach(edge => {
    const geometry = new THREE.BufferGeometry().setFromPoints([nodePositions[edge[0]], nodePositions[edge[1]]]);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
});

camera.position.z = 5;

// 渲染函数
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // 更新控制器
    renderer.render(scene, camera);
}
animate();
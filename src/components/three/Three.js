import React from 'react';
import { Canvas } from "@react-three/fiber";


// broken
/*
class Sphere extends Component {
    
    sceneLight = (scene) => {   
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(0, 10, 10);
        scene.add(light);
    }

    componentDidMount = () => {
        this.setState();
        const scene = new THREE.Scene();

        const geometry = new THREE.SphereGeometry(3, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: "#00ff83"
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        this.sceneLight(scene);

        const camera = new THREE.PerspectiveCamera(45, 800/600, 0.1);
        camera.position.z = 20;
        scene.add(camera);

        const canvas = new document.getElementById("sphere");
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(800, 600);
        renderer.render(scene, camera);
    };

    render () {
        return (
            <Canvas id="sphere">
                <Box></Box>
            </Canvas>
        );
    }
}
*/

 
export default function Sphere({ children }) {
    return(
        <div className="w-[100vw] h-[100vh]">
            <Canvas>
                <mesh>
                    <sphereGeometry args={[2, 32, 32]}/>
                    <meshStandardMaterial args={[{
                        color: "#50aa53"
                    }]}/>
                </mesh>
                <pointLight args={[0xffffff, 1, 100]} position={[0, 10, 10]} />
                <perspectiveCamera args={[45, 800/600, 0.1]} position={[0, 0, 10]}/>
            </Canvas>
        </div>
    )  
}
  
  

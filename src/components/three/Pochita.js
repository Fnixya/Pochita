import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import model from "../../dist/models/PochitaFinal.gltf";

export default function Pochita(props) {
  const { nodes, materials } = useGLTF(model);

  return (
    <div className="h-[100vh]">
        <Canvas 
            shadows
        >
            <Suspense>
                <group
                    position={[0 , -3.2, -.4]}
                    {...props}
                    scale={0.02}
                    dispose={null}
                >
                    <group
                        position={[0, 141.92, 2.31]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={3.33}
                    >
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003.geometry}
                        material={materials.Material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003_1.geometry}
                        material={materials["Material.001"]}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003_2.geometry}
                        material={materials["Material.003"]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube016.geometry}
                        material={materials["Material.001"]}
                        position={[1.67, 262.85, -23.26]}
                        rotation={[-2.09, 0, 0]}
                        scale={71.98}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube018.geometry}
                        material={materials["Material.002"]}
                        position={[0.67, 207.19, 55.27]}
                        rotation={[-2.09, 0, 0]}
                        scale={[42.09, 100, 100]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.NurbsPath004.geometry}
                        material={materials["Material.001"]}
                        position={[0.67, 77.16, -127.58]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[23.64, 100, 100]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017.geometry}
                        material={materials["Material.001"]}
                        position={[0.67, 100.14, -118.64]}
                        rotation={[-Math.PI / 4, 0, 0]}
                        scale={7.77}
                    />
                </group>

                <color attach="background" args={["#161c24"]} />

                <pointLight args={[0xffffff, 5, 20]} position={[0, 10, 10]} />
                <ambientLight args={[0x606060, 1, 0]} />
                
                <OrbitControls autoRotate autoRotateSpeed={[10]} keys={[{
                    LEFT: "ArrowLeft",
                    UP: "ArrowUp",
                    RIGHT: "ArrowRight",
                    BOTTOM: "ArrowDown"
                }]} />
            </Suspense>
        </Canvas>
    </div>
  );
}

useGLTF.preload(model);
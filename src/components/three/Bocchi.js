import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
    return (
        <div className="w-[100%] h-[100vh] p-2">
            <Scene>
                <Suspense fallback={null}>
                    <color attach="background" args={["#161c24"]} />
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial args={[{
                            color: "#FC47AD"
                        }]} />
                    </mesh>
                    <mesh position={[0, 0.15, 0.65]}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial args={[{
                            color: "#e5de00"
                        }]} />
                    </mesh>
                    <mesh position={[0, -0.15, 0.65]}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial args={[{
                            color: "#33c5ea"
                        }]} />
                    </mesh>
                    
                    
                    <pointLight args={[0xffffff, 3, 100]} position={[5, 10, 10]} /> 
                    <pointLight args={[0x808080, 3, 100]} position={[-5, -10, -10]} />
                    
                    <OrbitControls autoRotate/>
                </Suspense>
            </Scene>
        </div>
    )
}

function Scene({ children }) {
    return (
        <Canvas>
            { children }
        </Canvas>
    )
}

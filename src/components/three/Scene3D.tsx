import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Suspense } from 'react';
import ModelViewer from './ModelViewer';
import * as THREE from 'three';
import { useAppStore } from '../../store/appStore'; // 1. IMPORT STATE ZUSTAND

export default function Scene3D() {
  // 2. AMBIL STATUS MODE SAAT INI
  const { is3DMode } = useAppStore(); 

  return (
    <Canvas
      // 3. KUNCI OPTIMASI: Matikan render 3D saat masuk ke mode 2D (demand = standby)
      frameloop={is3DMode ? "always" : "demand"} 
      camera={{ fov: 45, position: [10, 5, 10] }} 
      className="w-full h-full outline-none"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} />
      <directionalLight position={[-10, 5, -10]} intensity={0.4} color="#B8CCE0" />
      <Environment preset="city" />

      <Suspense fallback={<Html center className="text-text font-bold w-max">Memuat 3D...</Html>}>
        <ModelViewer modelPath="/models/diorama.glb" />
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={20}
        minPolarAngle={Math.PI / 18} 
        maxPolarAngle={(Math.PI * 4) / 9}
        enableDamping={true}
        dampingFactor={0.05} 
        onChange={(e) => {
          if (e?.target) {
            const target = e.target.target;
            target.x = THREE.MathUtils.clamp(target.x, -3, 3);
            target.y = THREE.MathUtils.clamp(target.y, -1, 3.5);
            target.z = THREE.MathUtils.clamp(target.z, -3, 3);
          }
        }}
      />
    </Canvas>
  );
}
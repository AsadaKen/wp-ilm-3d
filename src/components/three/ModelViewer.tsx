import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export default function ModelViewer({ modelPath }: { modelPath: string }) {
  // 1. Ambil scene dan data animations bawaan model
  const { scene, animations } = useGLTF(modelPath);
  const { camera, controls } = useThree();
  const modelRef = useRef<THREE.Group>(null);
  
  // 2. Gunakan hook useAnimations untuk mengelola pemutaran
  const { actions, names } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      
      camera.position.set(-10.45, 5.92, 9.98);
      modelRef.current.position.x = -center.x;
      modelRef.current.position.y = -center.y;
      modelRef.current.position.z = -center.z;

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.needsUpdate = true;
        }
      });

      // 3. LOGIKA MEMUTAR ANIMASI
      if (names.length > 0) {
        names.forEach((name) => {
          const action = actions[name];
          if (action) {
            action.reset();
            // Atur agar animasi hanya berputar 1 kali (tidak looping)
            action.setLoop(THREE.LoopOnce, 1);
            // Kunci posisi model di frame terakhir saat animasi selesai
            action.clampWhenFinished = true;
            action.play();
          }
        });
      }
    }
  }, [scene, camera, controls, actions, names]);

  return <primitive object={scene} ref={modelRef} />;
}
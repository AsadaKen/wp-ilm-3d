import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// FITUR BARU: Menambahkan properti viewMode agar bisa dikendalikan dari luar
export default function ModelViewer({ 
  modelPath, 
  viewMode = 'default' 
}: { 
  modelPath: string, 
  viewMode?: 'default' | 'exploded' 
}) {
  const { scene, animations } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);
  const { actions, names } = useAnimations(animations, modelRef);

  // useEffect Pertama: Hanya untuk mengatur posisi model ke tengah saat pertama kali dimuat
  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      
      modelRef.current.position.x = -center.x;
      modelRef.current.position.y = -center.y;
      modelRef.current.position.z = -center.z;

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]); 

  // useEffect Kedua: Khusus untuk memutar/mereset animasi ketika viewMode berubah
  useEffect(() => {
    if (names.length > 0) {
      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          if (viewMode === 'exploded') {
            // Putar animasi satu kali dan berhenti di bingkai terakhir
            action.reset();
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            action.play();
          } else {
            // Reset ke bingkai pertama (kondisi awal) dan hentikan animasi
            action.reset();
            action.stop();
          }
        }
      });
    }
  }, [viewMode, actions, names]);

  return <primitive object={scene} ref={modelRef} />;
}
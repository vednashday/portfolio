import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function SpinningBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'royalblue'} />
    </mesh>
  );
}

export default function VinylVisualizer() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />

        <SpinningBox />
        
        <OrbitControls />
      </Canvas>
    </div>
  );
}
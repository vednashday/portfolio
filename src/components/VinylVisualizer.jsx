import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Vinyl } from '../../Vinyl';

export default function VinylVisualizer({ isPlaying, albumArtUrl }) {
  const texture = useTexture(albumArtUrl || '/fallback-art.png');

  const modelRef = useRef();

  useFrame(() => {
    if (isPlaying && modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <div style={{ height: '250px', width: '100%', marginBottom: '1rem' }}>
      <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        
        <Vinyl modelRef={modelRef} albumTexture={texture} />
        
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
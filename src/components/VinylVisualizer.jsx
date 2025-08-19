import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Vinyl } from '../Vinyl'; // Make sure this path is correct

function Scene({ isPlaying, albumArtUrl }) {
  const texture = useTexture(albumArtUrl || '/fallback-art.png');
  const modelRef = useRef();
  
  // --- NEW CODE FOR LOGGING ---
  const controlsRef = useRef();
  const { camera } = useThree(); // Get access to the R3F camera object

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    // This function will run every time the camera moves
    const logCameraPosition = () => {
      console.log(
        `Camera Position: x: ${camera.position.x.toFixed(2)}, y: ${camera.position.y.toFixed(2)}, z: ${camera.position.z.toFixed(2)}`
      );
    };

    controls.addEventListener('change', logCameraPosition);

    // Cleanup function to remove the event listener
    return () => {
      controls.removeEventListener('change', logCameraPosition);
    };
  }, [camera]);

  useFrame(() => {
    if (isPlaying && modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Vinyl modelRef={modelRef} albumTexture={texture} />
      
      <OrbitControls enableZoom={true} />
    </>
  );
}


export default function VinylVisualizer({ isPlaying, albumArtUrl }) {
  return (
    <div style={{ height: '250px', width: '100%', marginBottom: '1rem' }}>
      <Canvas camera={{ position: [0, 0, 3]}}>
        <Scene isPlaying={isPlaying} albumArtUrl={albumArtUrl} />
      </Canvas>
    </div>
  );
}
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Vinyl({ modelRef, albumTexture, ...props }) {
  const { nodes, materials } = useGLTF('/public/vinyl.glb')

  // 1. IMPORTANT: We clone the original material.
  // This lets us change the texture without breaking the original.
  const customMaterial = materials.REC0002_Textures.clone();
  
  // 2. Apply your album art texture to the cloned material's map.
  // The 'map' property is what holds the image texture.
  customMaterial.map = albumTexture;

  return (
    // 3. Apply the modelRef to this top-level group.
    // This allows the parent component to control its rotation.
    <group ref={modelRef} {...props} dispose={null}>
      <group rotation={[-0.824, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh 
            geometry={nodes['#REC0002_33_Highway_To_Hell_#REC0002_Textures_0'].geometry} 
            // 4. Use our new customMaterial instead of the original one.
            material={customMaterial} 
            rotation={[-Math.PI / 2, 0, 0]} 
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/vinyl.glb')
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bsphere(props) {
  const { nodes, materials } = useGLTF('/compressed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.PaletteMaterial001}
        position={[1.008, 0.954, -0.072]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.game.geometry}
        material={materials.game}
        position={[0.162, 1.011, -0.035]}
        scale={-0.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.instagram.geometry}
        material={materials.instagram}
        position={[0.277, 1.011, -0.035]}
        scale={-0.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.safari.geometry}
        material={materials.safari}
        position={[0.047, 1.009, -0.034]}
        scale={-0.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.weather.geometry}
        material={materials.weather}
        position={[-0.05, 1.005, -0.039]}
        rotation={[-Math.PI, 0.006, -Math.PI]}
        scale={0.063}
      />
    </group>
  )
}

useGLTF.preload('/compressed.glb')





import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';


export function BBSphere(props) {
  const { nodes, materials } = useGLTF('/sphere.glb')
    // Create refs for each mesh
    const MailRef = useRef();
    const InstaRef = useRef();
    const SafariRef = useRef();
    const PhotoRef = useRef();
  
    // Create state for each icon's clicked status
    const [mailClicked, setMailClicked] = useState(false);
    const [instaClicked, setInstaClicked] = useState(false);
    const [safariClicked, setSafariClicked] = useState(false);
    const [photoClicked, setPhotoClicked] = useState(false);
  
    // Use frame to animate scaling based on click
    useFrame(() => {
      const ls = 0.05
      if (MailRef.current) {
        const targetScale = mailClicked ? new THREE.Vector3(-0.076, -0.076, -0.076) : new THREE.Vector3(-0.056,-0.056,-0.056);
        MailRef.current.scale.lerp(targetScale, ls);
      }
      if (InstaRef.current) {
        const targetScale = instaClicked ? new THREE.Vector3(-0.076, -0.076, -0.076) : new THREE.Vector3(-0.056,-0.056,-0.056);
        InstaRef.current.scale.lerp(targetScale, ls);
      }
      if (SafariRef.current) {
        const targetScale = safariClicked ? new THREE.Vector3(-0.076, -0.076, -0.076) : new THREE.Vector3(-0.056,-0.056,-0.056);
        SafariRef.current.scale.lerp(targetScale,ls);
      }
      if (PhotoRef.current) {
        const targetScale = photoClicked ? new THREE.Vector3(-0.076, -0.076, -0.076) : new THREE.Vector3(-0.056,-0.056,-0.056);
        PhotoRef.current.scale.lerp(targetScale, ls);
      }
    });
  
  return (
    <group {...props} rotation={[1.5,Math.PI/1,0.1]} dispose={null}>
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
         ref={MailRef}

        castShadow
        receiveShadow
        geometry={nodes.game.geometry}
        material={materials.game}
        position={[0.162, 1.011, -0.035]}
        scale={-0.086}
        onClick={() => setMailClicked(!mailClicked)}

      />
      <mesh
      ref={InstaRef}
        castShadow
        receiveShadow
        geometry={nodes.instagram.geometry}
        material={materials.instagram}
        position={[0.277, 1.011, -0.035]}
        scale={-0.086}
        onClick={() => setInstaClicked(!instaClicked)}
      />
      <mesh
          ref={SafariRef}
        castShadow
        receiveShadow
        geometry={nodes.safari.geometry}
        material={materials.safari}
        position={[0.047, 1.009, -0.034]}
        scale={-0.074}
        onClick={() => setSafariClicked(!safariClicked)}

      />
      <mesh
        ref={PhotoRef}
        castShadow
        receiveShadow
        geometry={nodes.weather.geometry}
        material={materials.weather}
        position={[-0.05, 1.005, -0.039]}
        rotation={[0, 0.001, 0]}
        scale={0.063}
        onClick={() => setPhotoClicked(!photoClicked)}

      />
    </group>
  )
}

useGLTF.preload('/sphere.glb')
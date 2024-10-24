import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export function Sphere(props) {
  const { nodes, materials } = useGLTF('/untiss.glb');
  
  // Create refs for each mesh
  const MailRef = useRef();
  const InstaRef = useRef();
  const SafariRef = useRef();
  const PhotoRef = useRef();
  const Text001Ref = useRef(); 
  const Text002Ref = useRef(); 
  const Text003Ref = useRef(); 
  const Text004Ref = useRef(); 

  // Create state for each icon's clicked status
  const [mailClicked, setMailClicked] = useState(false);
  const [instaClicked, setInstaClicked] = useState(false);
  const [safariClicked, setSafariClicked] = useState(false);
  const [photoClicked, setPhotoClicked] = useState(false);

  // Use frame to animate scaling based on click
  useFrame(() => {
    const ls = 0.05; // Scale lerp speed

    // Mail icon scaling
    if (MailRef.current) {
      const targetScale = mailClicked ?  new THREE.Vector3(0.045, 0.045, 0.045) : new THREE.Vector3(0.033, 0.033, 0.033);
      MailRef.current.scale.lerp(targetScale, ls);
    }

    // Instagram icon scaling
    if (InstaRef.current) {
      const targetScale = instaClicked ?  new THREE.Vector3(0.042, 0.042, 0.042) : new THREE.Vector3(0.033, 0.033, 0.033);
      InstaRef.current.scale.lerp(targetScale, ls);
    }

    // Safari icon scaling
    if (SafariRef.current) {
      const targetScale = safariClicked ?  new THREE.Vector3(0.043, 0.043, 0.043) : new THREE.Vector3(0.033, 0.033, 0.033);
      SafariRef.current.scale.lerp(targetScale, ls);
    }

    // Photo icon scaling
    if (PhotoRef.current) {
      const targetScale = photoClicked ? new THREE.Vector3(0.045, 0.045, 0.045) : new THREE.Vector3(0.033, 0.033, 0.033);
      PhotoRef.current.scale.lerp(targetScale, ls);
    }

    if (Text001Ref.current) {
      const targetScale = instaClicked ? new THREE.Vector3(1.2, 1.2, 1.2) : new THREE.Vector3(0.8, 0.8, 0.8);
      Text001Ref.current.scale.lerp(targetScale, ls);
    }
    if (Text002Ref.current) {
      const targetScale = mailClicked ? new THREE.Vector3(1.1, 1.1, 1.1) : new THREE.Vector3(0.8, 0.8, 0.8);
      Text002Ref.current.scale.lerp(targetScale, ls);
    }
    if (Text003Ref.current) {
      const targetScale = photoClicked ? new THREE.Vector3(1.07, 1.07, 1.07) : new THREE.Vector3(0.8, 0.8, 0.8);
      Text003Ref.current.scale.lerp(targetScale, ls);
    }
    if (Text004Ref.current) {
      const targetScale = safariClicked ? new THREE.Vector3(1.08, 1.08, 1.08) : new THREE.Vector3(0.8, 0.8, 0.8);
      Text004Ref.current.scale.lerp(targetScale, ls);
    }
  });

  return (
    <group rotation={[0,-1.58,0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.003']}
      />
      <mesh
        ref={InstaRef}
        castShadow
        receiveShadow
        geometry={nodes.instagramw.geometry}
        material={materials.instagramw}
        position={[1.113, 0.062, 0.028]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setInstaClicked(!instaClicked)}
      />
      <mesh
        ref={MailRef}
        castShadow
        receiveShadow
        geometry={nodes.Mailw.geometry}
        material={materials.Mailw}
        position={[0.989, 0.055, -0.058]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setMailClicked(!mailClicked)}
      />
      <mesh
        ref={PhotoRef}
        castShadow
        receiveShadow
        geometry={nodes.Photow.geometry}
        material={materials.Photow}
        position={[0.997, 0.057, 0.103]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setPhotoClicked(!photoClicked)}
      />
      <mesh
        ref={SafariRef}
        castShadow
        receiveShadow
        geometry={nodes.weather.geometry}
        material={materials.weather}
        position={[0.988, 0.057, -0.126]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setSafariClicked(!safariClicked)}
      />
        {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[-1.116, 0.27, 0]}
        rotation={[Math.PI / 2, 0, 1.577]}
      /> */}
      <mesh
        ref={Text001Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.002']}
        position={[0.989, 0.024, 0.021]}
        rotation={[1.571, 0.02, -1.566]}
        scale={1}  // Default text scale
        onClick={() => setInstaClicked(!instaClicked)}
      />
      <mesh
              ref={Text002Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials['Material.002']}
        position={[0.995, 0.022, -0.058]}
        rotation={[1.571, 0.02, -1.566]}
        onClick={() => setMailClicked(!mailClicked)}
      />
      <mesh
              ref={Text003Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials['Material.002']}
        position={[0.995, 0.024, 0.103]}
        rotation={[1.571, 0.02, -1.566]}
        onClick={() => setPhotoClicked(!photoClicked)}
      />
      <mesh
              ref={Text004Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials['Material.002']}
        position={[0.99, 0.022, -0.126]}
        rotation={[1.571, 0.02, -1.566]}
        onClick={() => setSafariClicked(!safariClicked)}
      />
    </group>
  );
}

useGLTF.preload('/untiss.glb');

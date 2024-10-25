import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export function Sphere(props) {
  const { nodes, materials } = useGLTF('/untiss.glb');
  
  // Create refs for each mesh
  const MailRef = useRef();
  const InstaRef = useRef();
  const weatherRef = useRef();
  const PhotoRef = useRef();
  const Text001Ref = useRef(); 
  const Text002Ref = useRef(); 
  const Text003Ref = useRef(); 
  const Text004Ref = useRef(); 

  // Create state for each icon's clicked status
  const [mailClicked, setMailClicked] = useState(false);
  const [instaClicked, setInstaClicked] = useState(false);
  const [weatherClicked, setweatherClicked] = useState(false);
  const [photoClicked, setPhotoClicked] = useState(false);

  // Use effect to reset state after 2 minutes
  useEffect(() => {
    const timeoutDuration = 1 * 1000; // 2 minutes in milliseconds

    // Set timeout for mailClicked
    if (mailClicked) {
      const timer = setTimeout(() => {
        setMailClicked(false);
      }, timeoutDuration);
      return () => clearTimeout(timer); // Clear timeout if the component unmounts or state changes
    }
  }, [mailClicked]);

  useEffect(() => {
    const timeoutDuration = 1 * 1000; // 2 minutes in milliseconds

    // Set timeout for instaClicked
    if (instaClicked) {
      const timer = setTimeout(() => {
        setInstaClicked(false);
      }, timeoutDuration);
      return () => clearTimeout(timer);
    }
  }, [instaClicked]);

  useEffect(() => {
    const timeoutDuration = 1 * 1000; // 2 minutes in milliseconds

    // Set timeout for weatherClicked
    if (weatherClicked) {
      const timer = setTimeout(() => {
        setweatherClicked(false);
      }, timeoutDuration);
      return () => clearTimeout(timer);
    }
  }, [weatherClicked]);

  useEffect(() => {
    const timeoutDuration = 1 * 1000; // 2 minutes in milliseconds

    // Set timeout for photoClicked
    if (photoClicked) {
      const timer = setTimeout(() => {
        setPhotoClicked(false);
      }, timeoutDuration);
      return () => clearTimeout(timer);
    }
  }, [photoClicked]);

  // Use frame to animate scaling based on click
  useFrame(() => {
    const ls = 0.05; // Scale lerp speed

    // Mail icon scaling
    if (MailRef.current) {
      const targetScale = mailClicked ?  new THREE.Vector3(0.063, 0.063, 0.063) : new THREE.Vector3(0.043, 0.043, 0.043);
      MailRef.current.scale.lerp(targetScale, ls);
    }

    // Instagram icon scaling
    if (InstaRef.current) {
      const targetScale = instaClicked ?   new THREE.Vector3(0.063, 0.03, 0.063) : new THREE.Vector3(0.043, 0.043, 0.043);
      InstaRef.current.scale.lerp(targetScale, ls);
    }

    // weather icon scaling
    if (weatherRef.current) {
      const targetScale = weatherClicked ?  new THREE.Vector3(0.063, 0.063, 0.063) : new THREE.Vector3(0.043, 0.043, 0.043);
      weatherRef.current.scale.lerp(targetScale, ls);
    }

    // Photo icon scaling
    if (PhotoRef.current) {
      const targetScale = photoClicked ? new THREE.Vector3(0.063, 0.063, 0.063) : new THREE.Vector3(0.043, 0.043, 0.043);
      PhotoRef.current.scale.lerp(targetScale, ls);
    }

    if (Text001Ref.current) {
      const targetScale = instaClicked ? new THREE.Vector3(1.4, 1.4, 1.4) : new THREE.Vector3(1.1, 1.1, 1.1);
      Text001Ref.current.scale.lerp(targetScale, ls);
    }
    if (Text002Ref.current) {
      const targetScale = mailClicked ? new THREE.Vector3(1.4, 1.4, 1.4) : new THREE.Vector3(1.1, 1.1, 1.1);
      Text002Ref.current.scale.lerp(targetScale, ls);
    }
    if (Text003Ref.current) {
      const targetScale = photoClicked ? new THREE.Vector3(1.4, 1.4, 1.4) : new THREE.Vector3(1.1, 1.1, 1.1);
      Text003Ref.current.scale.lerp(targetScale, ls);
    }
    if (Text004Ref.current) {
      const targetScale = weatherClicked ? new THREE.Vector3(1.4, 1.4, 1.4) : new THREE.Vector3(1.1, 1.1, 1.1);
      Text004Ref.current.scale.lerp(targetScale, ls);
    }
  });

  return (
    <group rotation={[0,-1.39,0]} {...props} dispose={null}>
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
        position={[1.112, 0.062, 0.090]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setInstaClicked(true)}
      />
      <mesh
        ref={MailRef}
        castShadow
        receiveShadow
        geometry={nodes.Mailw.geometry}
        material={materials.Mailw}
        position={[0.989, 0.055, 0.150]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setMailClicked(true)}
      />
      <mesh
        ref={PhotoRef}
        castShadow
        receiveShadow
        geometry={nodes.Photow.geometry}
        material={materials.Photow}
        position={[0.997, 0.057, 0.210]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setPhotoClicked(true)}
      />
      <mesh
        ref={weatherRef}
        castShadow
        receiveShadow
        geometry={nodes.weather.geometry}
        material={materials.weather}
        position={[0.988, 0.057, 0.280]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.043}
        onClick={() => setweatherClicked(true)}
      />
      <mesh
        ref={Text001Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.002']}
        position={[0.989, 0.006, 0.084]}
        rotation={[1.571, 0.02, -1.566]}
        scale={1}  // Default text scale
        onClick={() => setInstaClicked(true)}
      />
      <mesh
        ref={Text002Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials['Material.002']}
        position={[0.995, 0.006, 0.150]}
        rotation={[1.571, 0.02, -1.566]}
        onClick={() => setMailClicked(true)}
      />
      <mesh
        ref={Text003Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials['Material.002']}
        position={[0.995, 0.006, 0.210]}
        rotation={[1.571, 0.02, -1.566]}
        onClick={() => setPhotoClicked(true)}
      />
      <mesh
        ref={Text004Ref}
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials['Material.002']}
        position={[0.988, 0.006, 0.280]}
        rotation={[1.571, 0.02, -1.566]}
        onClick={() => setweatherClicked(true)}
      />
    </group>
  );
}

useGLTF.preload('/untiss.glb');

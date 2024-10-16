import { Canvas } from "@react-three/fiber";
import React from "react";

import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Iphone } from "./Phone";

const PT = () => {
  return (
    <div className=" bg-blue-400">
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: 5,
        }}
        camera={{
          position: [0, 0, 6],
          fov: 1.8,
        }}
      >
        <color attach="background" args={["#42A5F5"]} />
        <OrbitControls enableRotate={false} enableZoom={false} />
        <ambientLight intensity={1.5} />

        <Iphone scale={1} metalness={1} position={[0.015, 0, 0]} roghness={0} />
      </Canvas>
    </div>
  );
};

export default PT;

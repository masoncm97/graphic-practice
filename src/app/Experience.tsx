"use client";
import { Canvas } from "@react-three/fiber";
import Flag from "./Flag";

export default function Experience() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Flag />
    </Canvas>
  );
}

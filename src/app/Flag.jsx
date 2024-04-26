import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Flag() {
  const cube = useRef();

  const loader = new THREE.TextureLoader();
  let texture;

  // load a resource
  loader.load("Coca-Cola_logo.jpeg", function (texture) {
    texture = texture;
  });

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <mesh ref={cube} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.DoubleSide}
        />
      </mesh> */}
      <mesh ref={cube} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial
          map={loader.load("Coca-Cola_logo.jpeg")}
          side={THREE.DoubleSide}
          transparent={true}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

function TShirtMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  // Create a simple t-shirt shape using extrude geometry
  const createTShirtShape = () => {
    const shape = new THREE.Shape();

    // Main body
    shape.moveTo(-1.5, -2);
    shape.lineTo(-1.5, 1);
    shape.lineTo(-2.2, 1);
    shape.lineTo(-2.2, 1.8); // Sleeve
    shape.lineTo(-1.8, 1.8);
    shape.lineTo(-1.8, 2.2);
    shape.lineTo(-0.8, 2.2); // Shoulder
    shape.lineTo(-0.5, 2.5); // Neck curve
    shape.lineTo(0.5, 2.5);
    shape.lineTo(0.8, 2.2);
    shape.lineTo(1.8, 2.2); // Other shoulder
    shape.lineTo(1.8, 1.8);
    shape.lineTo(2.2, 1.8); // Other sleeve
    shape.lineTo(2.2, 1);
    shape.lineTo(1.5, 1);
    shape.lineTo(1.5, -2); // Main body right
    shape.lineTo(-1.5, -2); // Close the shape

    return shape;
  };

  const tshirtShape = createTShirtShape();
  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <extrudeGeometry args={[tshirtShape, extrudeSettings]} />
        <meshStandardMaterial color="#10b981" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* ReWear logo on the t-shirt */}
      <Text
        position={[0, 0.2, 0.16]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        ReWear
      </Text>

      {/* Floating particles around the t-shirt */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </group>
  );
}

function FloatingParticle({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / 20) * Math.PI * 2;
  const radius = 3 + Math.random() * 2;

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * 0.5;
      meshRef.current.position.x = Math.cos(angle + time) * radius;
      meshRef.current.position.z = Math.sin(angle + time) * radius;
      meshRef.current.position.y = Math.sin(time * 2 + index) * 0.5;
      meshRef.current.rotation.x = time;
      meshRef.current.rotation.y = time * 0.5;
    }
  });

  const colors = ["#10b981", "#059669", "#047857", "#065f46"];
  const color = colors[index % colors.length];

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function TShirt3D({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-96 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        shadows
        className="bg-gradient-to-br from-emerald-50 to-sage-50 rounded-2xl"
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#10b981" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#059669" />

        <TShirtMesh />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

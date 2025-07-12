import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Palette,
  Settings,
  Play,
  Pause,
} from "lucide-react";

// T-shirt designs data
const tshirtDesigns = [
  {
    id: 1,
    name: "ReWear Classic",
    color: "#10b981",
    pattern: "solid",
    logo: "ReWear",
  },
  {
    id: 2,
    name: "Ocean Blue",
    color: "#3b82f6",
    pattern: "solid",
    logo: "🌊",
  },
  {
    id: 3,
    name: "Sunset Orange",
    color: "#f97316",
    pattern: "solid",
    logo: "🌅",
  },
  {
    id: 4,
    name: "Forest Green",
    color: "#059669",
    pattern: "solid",
    logo: "🌲",
  },
  {
    id: 5,
    name: "Purple Galaxy",
    color: "#8b5cf6",
    pattern: "solid",
    logo: "✨",
  },
  {
    id: 6,
    name: "Rose Pink",
    color: "#ec4899",
    pattern: "solid",
    logo: "🌸",
  },
];

interface AvatarMeshProps {
  currentDesign: (typeof tshirtDesigns)[0];
  autoRotate: boolean;
  rotationSpeed: number;
}

function AvatarMesh({
  currentDesign,
  autoRotate,
  rotationSpeed,
}: AvatarMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const tshirtRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += rotationSpeed;
    }

    // Add subtle breathing animation
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
  });

  // Create avatar body parts
  const createAvatarGeometry = () => {
    return (
      <group ref={groupRef} position={[0, -1, 0]}>
        {/* Head */}
        <mesh position={[0, 2.2, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color="#fdbcb4"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.15, 2.3, 0.4]} castShadow>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 2.3, 0.4]} castShadow>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Mouth */}
        <mesh position={[0, 2.1, 0.45]} castShadow>
          <sphereGeometry args={[0.08, 8, 8, 0, Math.PI]} />
          <meshStandardMaterial color="#ff6b6b" />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 2.6, 0]} castShadow receiveShadow>
          <sphereGeometry
            args={[0.55, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]}
          />
          <meshStandardMaterial
            color="#8b4513"
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>

        {/* Body */}
        <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.5, 1.2, 8]} />
          <meshStandardMaterial
            color="#fdbcb4"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* T-Shirt */}
        <mesh ref={tshirtRef} position={[0, 1.2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.42, 0.52, 1.25, 8]} />
          <meshStandardMaterial
            color={currentDesign.color}
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {/* T-Shirt Logo */}
        <Text
          position={[0, 1.4, 0.45]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          castShadow
        >
          {currentDesign.logo}
        </Text>

        {/* Arms */}
        <mesh
          position={[-0.7, 1.4, 0]}
          rotation={[0, 0, -0.3]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.15, 0.12, 0.8, 8]} />
          <meshStandardMaterial
            color="#fdbcb4"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        <mesh
          position={[0.7, 1.4, 0]}
          rotation={[0, 0, 0.3]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.15, 0.12, 0.8, 8]} />
          <meshStandardMaterial
            color="#fdbcb4"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.2, 0.2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.15, 0.12, 0.8, 8]} />
          <meshStandardMaterial
            color="#1e40af"
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[0.2, 0.2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.15, 0.12, 0.8, 8]} />
          <meshStandardMaterial
            color="#1e40af"
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>

        {/* Shoes */}
        <mesh position={[-0.2, -0.25, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[0.25, 0.15, 0.4]} />
          <meshStandardMaterial
            color="#000000"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
        <mesh position={[0.2, -0.25, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[0.25, 0.15, 0.4]} />
          <meshStandardMaterial
            color="#000000"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
      </group>
    );
  };

  return createAvatarGeometry();
}

interface Avatar3DProps {
  className?: string;
}

export default function Avatar3D({ className = "" }: Avatar3DProps) {
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);

  const currentDesign = tshirtDesigns[currentDesignIndex];

  const nextDesign = () => {
    setCurrentDesignIndex((prev) => (prev + 1) % tshirtDesigns.length);
  };

  const prevDesign = () => {
    setCurrentDesignIndex(
      (prev) => (prev - 1 + tshirtDesigns.length) % tshirtDesigns.length,
    );
  };

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* 3D Canvas */}
      <div className="h-96 mb-6 relative">
        <Canvas
          camera={{ position: [0, 1, 4], fov: 50 }}
          shadows
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
        >
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-5, 3, 5]} intensity={0.4} color="#fbbf24" />
          <pointLight position={[5, -3, -5]} intensity={0.3} color="#3b82f6" />

          <AvatarMesh
            currentDesign={currentDesign}
            autoRotate={autoRotate}
            rotationSpeed={rotationSpeed}
          />

          {/* Ground plane */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.5, 0]}
            receiveShadow
          >
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#f3f4f6" transparent opacity={0.8} />
          </mesh>

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            minDistance={3}
            maxDistance={8}
          />
        </Canvas>

        {/* Floating UI Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoRotate}
            className={`bg-white/90 backdrop-blur-sm shadow-lg ${
              autoRotate ? "bg-primary/10 border-primary" : ""
            }`}
          >
            {autoRotate ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Rotation Speed Control */}
        {autoRotate && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-3 min-w-48">
            <div className="flex items-center space-x-3">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Speed</span>
              <div className="flex-1">
                <Slider
                  value={[rotationSpeed * 1000]}
                  onValueChange={([value]) => setRotationSpeed(value / 1000)}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* T-Shirt Customization Carousel */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Customize T-Shirt
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={prevDesign}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextDesign}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Current Design Info */}
        <div className="flex items-center space-x-4 mb-6">
          <div
            className="w-12 h-12 rounded-lg shadow-md border-2 border-white"
            style={{ backgroundColor: currentDesign.color }}
          ></div>
          <div>
            <h4 className="font-semibold text-foreground">
              {currentDesign.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              Design {currentDesignIndex + 1} of {tshirtDesigns.length}
            </p>
          </div>
        </div>

        {/* Design Thumbnails */}
        <div className="grid grid-cols-6 gap-3">
          {tshirtDesigns.map((design, index) => (
            <button
              key={design.id}
              onClick={() => setCurrentDesignIndex(index)}
              className={`relative w-full aspect-square rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                index === currentDesignIndex
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: design.color }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                {design.logo}
              </div>
              {index === currentDesignIndex && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
              )}
            </button>
          ))}
        </div>

        {/* Control Instructions */}
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
          <h4 className="font-semibold text-sm text-foreground mb-2">
            🎮 Interactive Controls:
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div>
              <strong>Manual Control:</strong>
              <ul className="space-y-1 mt-1">
                <li>• Drag to rotate 360°</li>
                <li>• Scroll to zoom in/out</li>
              </ul>
            </div>
            <div>
              <strong>Customization:</strong>
              <ul className="space-y-1 mt-1">
                <li>• Click t-shirt thumbnails</li>
                <li>• Auto-rotate with speed control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

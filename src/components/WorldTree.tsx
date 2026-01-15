import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WorldTree = () => {
  const groupRef = useRef<THREE.Group>(null);
  const branchesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (branchesRef.current) {
      branchesRef.current.children.forEach((child, i) => {
        child.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.05;
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* Main trunk */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 6, 8]} />
        <meshStandardMaterial 
          color="#2a1810" 
          roughness={0.9}
          emissive="#1a0f08"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Branches */}
      <group ref={branchesRef}>
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const height = 3 + Math.random() * 2;
          return (
            <group key={i} rotation={[0, angle, 0]}>
              <mesh position={[0.8, height, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.05, 0.15, 2, 6]} />
                <meshStandardMaterial 
                  color="#3d2817"
                  roughness={0.8}
                  emissive="#1a0f08"
                  emissiveIntensity={0.1}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Glowing runes on trunk */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0.35, 1 + i * 0.8, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.02, 0.3, 0.1]} />
          <meshStandardMaterial 
            color="#c9a227"
            emissive="#c9a227"
            emissiveIntensity={1.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}

      {/* Root system */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh 
            key={i} 
            position={[Math.cos(angle) * 0.6, -0.5, Math.sin(angle) * 0.6]}
            rotation={[Math.PI / 4, angle, 0]}
          >
            <cylinderGeometry args={[0.08, 0.15, 1.5, 6]} />
            <meshStandardMaterial 
              color="#2a1810"
              roughness={0.9}
            />
          </mesh>
        );
      })}

      {/* Energy orbs around the tree */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2 + Math.random();
        const height = 2 + Math.random() * 3;
        return (
          <mesh 
            key={i}
            position={[Math.cos(angle) * radius, height, Math.sin(angle) * radius]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#4fa3e3" : "#c9a227"}
              emissive={i % 2 === 0 ? "#4fa3e3" : "#c9a227"}
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default WorldTree;

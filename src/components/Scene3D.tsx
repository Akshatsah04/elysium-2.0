import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import WorldTree from './WorldTree';
import ParticleField from './ParticleField';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#c9a227" />
          <pointLight position={[-10, 5, -10]} intensity={0.3} color="#4fa3e3" />
          <spotLight
            position={[0, 15, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#c9a227"
          />
          
          <WorldTree />
          <ParticleField count={300} color="#c9a227" />
          <ParticleField count={200} color="#4fa3e3" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          
          <fog attach="fog" args={['#0a0a0f', 8, 25]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

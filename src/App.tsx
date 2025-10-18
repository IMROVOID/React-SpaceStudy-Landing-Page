import { Canvas } from '@react-three/fiber'
import { Stage, Grid, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import Satellite from './components/Satellite.tsx'
import { Color } from 'three'
import { useState, useEffect } from 'react'

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Final camera adjustments for scale
    // Desktop camera is now at z=8 (bigger)
    // Mobile camera is now at z=18 (a little bigger)
    <Canvas flat shadows camera={{ position: isMobile ? [-15, 0, 18] : [-15, 0, 8], fov: 25 }}>
      <color attach="background" args={['#e0e0e0']} />
      <fog attach="fog" args={['#e0e0e0', 25, 45]} />
      <Stage intensity={1} environment="city" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
        <Satellite rotation={[0, Math.PI, 0]} />
      </Stage>
      <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={new Color(0.5, 0.5, 10)} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <EffectComposer>
        <Bloom luminanceThreshold={2} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
    </Canvas>
  )
}
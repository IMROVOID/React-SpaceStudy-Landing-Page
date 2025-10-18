import { Canvas } from '@react-three/fiber'
import { Stage, Grid, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import Satellite from './components/Satellite'

export default function App() {
  return (
    <Canvas flat shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
      <fog attach="fog" args={['black', 15, 22.5]} />
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
        <Satellite rotation={[0, Math.PI, 0]} />
      </Stage>
      <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={2} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.8} />
    </Canvas>
  )
}
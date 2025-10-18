import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { Group, MeshBasicMaterial, PointLight } from 'three'

export default function Satellite(props: any) {
  const head = useRef<Group>(null)
  const stripe = useRef<MeshBasicMaterial>(null)
  const light = useRef<PointLight>(null)
  // Corrected: Path is now relative to work on GitHub Pages
  const { nodes, materials } = useGLTF('satellite.glb')

  useFrame((state, delta) => {
    if (!stripe.current || !head.current || !light.current) return

    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2
    stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50)
    easing.dampE(head.current.rotation, [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0], 0.4, delta)
    light.current.intensity = 1 + t * 4
  })

  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={(nodes.body001 as any).geometry} material={materials.Body} />
      <group ref={head}>
        <mesh castShadow receiveShadow geometry={(nodes.head001 as any).geometry} material={materials.Head} />
        <mesh castShadow receiveShadow geometry={(nodes.stripe001 as any).geometry}>
          <meshBasicMaterial ref={stripe} toneMapped={false} />
          <pointLight ref={light} intensity={1} color={[10, 2, 5]} distance={2.5} />
        </mesh>
      </group>
    </group>
  )
}

// Corrected: Path is now relative here as well
useGLTF.preload('satellite.glb')
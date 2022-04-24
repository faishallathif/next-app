import { Suspense, useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const Door = () => {
  const gltf = useLoader(GLTFLoader, '/assets/door/scene.gltf')
  useEffect(() => {
    console.log(gltf)
  })
  const group = useRef()
  return (
    <Suspense fallback={null}>
      <group ref={group} rotation={[0, 90, 0]}>
        <primitive object={gltf.scene} />
      </group>
    </Suspense>
  )
}
export default Door

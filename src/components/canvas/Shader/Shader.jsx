import * as THREE from 'three'
import { useFrame, extend,Canvas,Extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
extend({ TextGeometry })

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
const Shader = (props) => {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  // useFrame((state, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
  //   }
  //   if (meshRef.current.material) {
  //     meshRef.current.material.uniforms.time.value +=
  //       Math.sin(delta / 2) * Math.cos(delta / 2)
  //   }
  // })
  const text = useState({
		font: 14,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	})
  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onClick={() => {
        router.push(`/box`)
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <textGeometry args={['test', { size:5, height: 1}]}/>
      <meshLambertMaterial attach='material' color={'gold'}/>
      {/* @ts-ignore */}
      {/* <colorShiftMaterial key={ColorShiftMaterial.key} time={3} /> */}
    </mesh>
  )
}

export default Shader

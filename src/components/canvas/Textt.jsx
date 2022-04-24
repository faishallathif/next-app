import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const Textt = ({ text, ...props }) => {
  return (
    <mesh>
      <Text
        {...props}
        letterSpacing={-0.05}
        fontSize={30}
        color='black'
        material-toneMapped={false}
        material-fog={false}
        anchorX='center'
        anchorY='middle'
      >
        {text}
      </Text>
      {/* <boxGeometry/> */}
    </mesh>
  )
}
export default Textt

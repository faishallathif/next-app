import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/Instructions'
// import Shader from '@/components/canvas/Shader/Shader'
import Text from '@/components/canvas/Textt'
import { useState } from 'react'
import Door from '@/components/canvas/Door'
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here

const Page = () => {
  const DOM = () => {
    return (
      <div>
        <div className='flex gap-5 mb-5 p-5 items-center'>
          <h3>Pilih No Kamar </h3>
          <button
            className='bg-green-500 font-bold px-4 py-3 text-white rounded-lg group'
            onPointerEnter={() => {
              setNoKamar('DLX-01')
            }}
            onClick={() => {
              tambahKamar('DLX-01')
            }}
          >
            <span className='transform transition duration-150 group-hover:translate-y-2  '>
              {' '}
              DLX-01
            </span>
          </button>
          <button
            className='bg-green-500 font-bold px-4 py-3 text-white rounded-lg group'
            onPointerEnter={() => {
              setNoKamar('DLX-02')
            }}
            onClick={() => {
              tambahKamar('DLX-02')
            }}
          >
            <span className='transform transition duration-150 group-hover:translate-y-2  '>
              {' '}
              DLX-02
            </span>
          </button>
          <button
            className='bg-green-500 font-bold px-4 py-3 text-white rounded-lg group'
            onPointerEnter={() => {
              setNoKamar('DLX-03')
            }}
            onClick={() => {
              tambahKamar('DLX-03')
            }}
          >
            <span className='transform transition duration-150 group-hover:translate-y-2  '>
              {' '}
              DLX-03
            </span>
          </button>
        </div>
        <div>No kamar yang dipilih : {kamarSelected}</div>
      </div>
    )
  }
  function tambahKamar(no) {
    let array = kamarSelected
    if (array.includes(no)) {
      array = array.filter((item) => item != no)
    } else {
      array.push(no)
    }
    setKamar(array)
    console.log(array)
  }
  // canvas components goes here
  const R3F = ({ text }) => {
    return (
      <>
        {/* <Shader /> */}
        <Door />
        <Text text={text} position={[0, 60, 7]} rotation={[0, 0.4, 0]} />
      </>
    )
  }
  const [noKamar, setNoKamar] = useState('DLX-01')
  const [kamarSelected, setKamar] = useState([])
  return (
    <>
      <DOM />
      <R3F text={noKamar} r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}

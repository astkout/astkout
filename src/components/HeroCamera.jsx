import { useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'
import { easing } from 'maath'

const HeroCamera = ({children, isMobile }) => {

    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
    
    
    // if(!isMobile) {
        easing.dampE(groupRef.current.rotation, [-state.pointer.y/3, -state.pointer.x /5, 0, 20], 0.25, delta)
    // }
})


  return (
    <group ref={groupRef} scale={isMobile ? 1.1 : 1.2}>{children}</group>
  )
}

export default HeroCamera
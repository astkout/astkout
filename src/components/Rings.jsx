/* eslint-disable */
import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import { useCallback, useRef } from 'react';
import gsap from 'gsap';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1.2,
          repeatDelay: 1,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 3}`,
            x: `-=${Math.PI * 3}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={0.45}>
        {Array.from({ length: 4.5 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
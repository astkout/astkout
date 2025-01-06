/* eslint-disable */

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text flex justify-center">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
          <Canvas>
      {/* Ambient Light */}
      <ambientLight intensity={2} />

      {/* Spot Light */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
        castShadow
      />

      {/* Directional Light */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={0.5}
        castShadow
      />

      {/* Orbit Controls */}
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

      {/* Suspense Wrapper */}
      <Suspense fallback={<CanvasLoader />}>
        <Developer position={[0, -3, 0]} scale={3} animationName={animationName} />
      </Suspense>
    </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-12 py- sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos}<span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
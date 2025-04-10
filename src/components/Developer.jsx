/* eslint-disable */

import React, { useEffect, useRef, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const ANIMATION_PATHS = {
  idle: '/models/animations/idle.fbx',
  salute: '/models/animations/salute.fbx',
  clapping: '/models/animations/clapping.fbx',
  victory: '/models/animations/victory.fbx',
};

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load and clone model
  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // Load all animations and memoize them
  const idle = useFBX(ANIMATION_PATHS.idle);
  const salute = useFBX(ANIMATION_PATHS.salute);
  const clapping = useFBX(ANIMATION_PATHS.clapping);
  const victory = useFBX(ANIMATION_PATHS.victory);

  const allAnimations = useMemo(() => {
    const animations = [idle, salute, clapping, victory];
    const names = Object.keys(ANIMATION_PATHS);
    return animations.map((anim, i) => {
      if (anim.animations[0]) anim.animations[0].name = names[i];
      return anim.animations[0];
    }).filter(Boolean); // Remove undefined
  }, [idle, salute, clapping, victory]);

  const { actions } = useAnimations(allAnimations, group);

  useEffect(() => {
    if (!actions || !actions[animationName]) return;

    const action = actions[animationName];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      {[
        ['EyeLeft', 'Wolf3D_Eye'],
        ['EyeRight', 'Wolf3D_Eye'],
        ['Wolf3D_Head', 'Wolf3D_Skin'],
        ['Wolf3D_Teeth', 'Wolf3D_Teeth'],
        ['Wolf3D_Hair', 'Wolf3D_Hair'],
        ['Wolf3D_Outfit_Top', 'Wolf3D_Outfit_Top'],
        ['Wolf3D_Outfit_Bottom', 'Wolf3D_Outfit_Bottom'],
        ['Wolf3D_Outfit_Footwear', 'Wolf3D_Outfit_Footwear'],
        ['Wolf3D_Body', 'Wolf3D_Body'],
      ].map(([name, materialKey]) => (
        <skinnedMesh
          key={name}
          name={name}
          geometry={nodes[name].geometry}
          material={materials[materialKey]}
          skeleton={nodes[name].skeleton}
          morphTargetDictionary={nodes[name].morphTargetDictionary}
          morphTargetInfluences={nodes[name].morphTargetInfluences}
        />
      ))}
    </group>
  );
};

// Preload everything
useGLTF.preload('/models/animations/developer.glb');
Object.values(ANIMATION_PATHS).forEach(path => useFBX.preload(path));

export default Developer;

// 

// import { useTexture, useGLTF } from "@react-three/drei";

// export function HackerRoom(props) {
//   const { nodes, materials } = useGLTF("/models/scene.gltf");

//   const monitorTexture = useTexture("textures/desk/monitor.png");
//   const screenTexture = useTexture("textures/desk/screen.png");

//   return (
//     <group {...props} dispose={null}>
//       {/* Computer */}
//       <mesh geometry={nodes.computer_computer_mat_0.geometry} material={materials.computer_mat}>
//         <meshStandardMaterial map={monitorTexture} />
//       </mesh>

//       {/* Server */}
//       <mesh geometry={nodes.server_server_mat_0.geometry} material={materials.server_mat} />

//       {/* VHS Player */}
//       <mesh geometry={nodes.vhs_vhsPlayer_mat_0.geometry} material={materials.vhsPlayer_mat} />

//       {/* Shelf */}
//       <mesh geometry={nodes.shelf_stand_mat_0.geometry} material={materials.stand_mat} />

//       {/* Keyboard */}
//       <mesh geometry={nodes.keyboard_mat_mat_mat_0.geometry} material={materials.mat_mat} />

//       {/* Arm */}
//       <mesh geometry={nodes.arm_arm_mat_0.geometry} material={materials.arm_mat} />

//       {/* TV */}
//       <mesh geometry={nodes.Tv_tv_mat_0.geometry} material={materials.tv_mat} />

//       {/* Table */}
//       <mesh geometry={nodes.table_table_mat_0.geometry} material={materials.table_mat} />

//       {/* Cables */}
//       <mesh geometry={nodes.Cables_cables_mat_0.geometry} material={materials.cables_mat} />

//       {/* Props */}
//       <mesh geometry={nodes.props_props_mat_0.geometry} material={materials.props_mat} />

//       {/* Screen */}
//       <mesh geometry={nodes.screen_screens_0.geometry}>
//         <meshStandardMaterial map={screenTexture} />
//       </mesh>

//       {/* Screen Glass */}
//       <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />

//       {/* Ground */}
//       <mesh geometry={nodes.Ground_ground_mat_0.geometry} material={materials.ground_mat} />

//       {/* Peripherals */}
//       <mesh geometry={nodes.peripherals_key_mat_0.geometry} material={materials.key_mat} />
//     </group>
//   );
// }

// // Preload the GLTF model to optimize loading
// useGLTF.preload("/models/scene.gltf");

/* eslint-disable */

import { useTexture, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import PropTypes from 'prop-types';
import * as THREE from 'three';

const TEXTURES = {
  monitor: "textures/desk/monitor.png",
  screen: "textures/desk/screen.png",
};

export function HackerRoom({ ...props }) {
  // Load GLTF with error handling
  const { nodes, materials } = useGLTF("/models/scene.gltf", true, (error) => {
    console.error('GLTF loading error:', error);
  });

  // Load textures with memoization
  const [monitorTexture, screenTexture] = useTexture(
    [TEXTURES.monitor, TEXTURES.screen],
    (textures) => {
      textures.forEach((texture) => {
        texture.flipY = false;
        texture.encoding = THREE.sRGBEncoding;
        texture.needsUpdate = true;
      });
    }
  );

  // Memoize materials to prevent re-creation during render
  const customMaterials = useMemo(() => ({
    monitor: new THREE.MeshStandardMaterial({
      map: monitorTexture,
      ...materials.computer_mat, // Preserve original material properties
    }),
    screen: new THREE.MeshStandardMaterial({
      map: screenTexture,
    }),
  }), [monitorTexture, screenTexture, materials.computer_mat]);

  return (
    <group {...props} dispose={null}>
      {/* Computer */}
      <mesh 
        geometry={nodes.computer_computer_mat_0?.geometry} 
        material={customMaterials.monitor}
      />

      {/* Server */}
      <mesh 
        geometry={nodes.server_server_mat_0?.geometry} 
        material={materials.server_mat}
      />

      {/* VHS Player */}
      <mesh 
        geometry={nodes.vhs_vhsPlayer_mat_0?.geometry} 
        material={materials.vhsPlayer_mat}
      />

      {/* Shelf */}
      <mesh 
        geometry={nodes.shelf_stand_mat_0?.geometry} 
        material={materials.stand_mat}
      />

      {/* Keyboard */}
      <mesh 
        geometry={nodes.keyboard_mat_mat_mat_0?.geometry} 
        material={materials.mat_mat}
      />

      {/* Arm */}
      <mesh 
        geometry={nodes.arm_arm_mat_0?.geometry} 
        material={materials.arm_mat}
      />

      {/* TV */}
      <mesh 
        geometry={nodes.Tv_tv_mat_0?.geometry} 
        material={materials.tv_mat}
      />

      {/* Table */}
      <mesh 
        geometry={nodes.table_table_mat_0?.geometry} 
        material={materials.table_mat}
      />

      {/* Cables */}
      <mesh 
        geometry={nodes.Cables_cables_mat_0?.geometry} 
        material={materials.cables_mat}
      />

      {/* Props */}
      <mesh 
        geometry={nodes.props_props_mat_0?.geometry} 
        material={materials.props_mat}
      />

      {/* Screen */}
      <mesh 
        geometry={nodes.screen_screens_0?.geometry}
        material={customMaterials.screen}
      />

      {/* Screen Glass */}
      <mesh 
        geometry={nodes.screen_glass_glass_0?.geometry} 
        material={materials.glass}
      />

      {/* Ground */}
      <mesh 
        geometry={nodes.Ground_ground_mat_0?.geometry} 
        material={materials.ground_mat}
      />

      {/* Peripherals */}
      <mesh 
        geometry={nodes.peripherals_key_mat_0?.geometry} 
        material={materials.key_mat}
      />
    </group>
  );
}

HackerRoom.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
};

// Preload assets
useGLTF.preload("/models/scene.gltf");
useTexture.preload(TEXTURES.monitor);
useTexture.preload(TEXTURES.screen);

export default HackerRoom;
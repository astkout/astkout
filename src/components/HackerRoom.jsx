/* eslint-disable */

import { useTexture, useGLTF } from "@react-three/drei";

export function HackerRoom(props) {
  // Load the GLTF model and extract nodes and materials
  const { nodes, materials } = useGLTF("/models/scene.gltf");

  // Load textures for the monitor and screen
  const monitorTexture = useTexture("textures/desk/monitor.png");
  const screenTexture = useTexture("textures/desk/screen.png");

  return (
    <group {...props} dispose={null}>
      {/* Computer */}
      <mesh geometry={nodes.computer_computer_mat_0.geometry} material={materials.computer_mat}>
        <meshStandardMaterial map={monitorTexture} />
      </mesh>

      {/* Server */}
      <mesh geometry={nodes.server_server_mat_0.geometry} material={materials.server_mat} />

      {/* VHS Player */}
      <mesh geometry={nodes.vhs_vhsPlayer_mat_0.geometry} material={materials.vhsPlayer_mat} />

      {/* Shelf */}
      <mesh geometry={nodes.shelf_stand_mat_0.geometry} material={materials.stand_mat} />

      {/* Keyboard */}
      <mesh geometry={nodes.keyboard_mat_mat_mat_0.geometry} material={materials.mat_mat} />

      {/* Arm */}
      <mesh geometry={nodes.arm_arm_mat_0.geometry} material={materials.arm_mat} />

      {/* TV */}
      <mesh geometry={nodes.Tv_tv_mat_0.geometry} material={materials.tv_mat} />

      {/* Table */}
      <mesh geometry={nodes.table_table_mat_0.geometry} material={materials.table_mat} />

      {/* Cables */}
      <mesh geometry={nodes.Cables_cables_mat_0.geometry} material={materials.cables_mat} />

      {/* Props */}
      <mesh geometry={nodes.props_props_mat_0.geometry} material={materials.props_mat} />

      {/* Screen */}
      <mesh geometry={nodes.screen_screens_0.geometry}>
        <meshStandardMaterial map={screenTexture} />
      </mesh>

      {/* Screen Glass */}
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />

      {/* Ground */}
      <mesh geometry={nodes.Ground_ground_mat_0.geometry} material={materials.ground_mat} />

      {/* Peripherals */}
      <mesh geometry={nodes.peripherals_key_mat_0.geometry} material={materials.key_mat} />
    </group>
  );
}

// Preload the GLTF model to optimize loading
useGLTF.preload("/models/scene.gltf");

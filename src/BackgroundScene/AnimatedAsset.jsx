import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import AnimatedLabel from './AnimatedLabel';

function AnimatedAsset(props) {
  const modelRef = useRef();
  const group = useRef();
  const { position, scale } = props;
  const gltf = useLoader(GLTFLoader, '/k5_nypdrobot.glb')

  // useEffect(() => {
  //   AnimationTimeline.to(
  //     group.current.rotation,
  //     {
  //       y: 3,
  //     },
  //     "button"
  //   );
  //   AnimationTimeline.to(
  //     group.current.rotation,
  //     {
  //       y: 9,
  //     },
  //     "torso"
  //   );
  //   AnimationTimeline.to(
  //     group.current.rotation,
  //     {
  //       y: 15,
  //     },
  //     "hand"
  //   );
  // }, [group]);

  return (
    <group ref={group} dispose={null}>
      <primitive
        ref={modelRef}
        position={position ? position : [0, -5, 0]}
        scale={scale ? scale : [3, 3, 3]}
        rotation={[0, 0, 0]}
        object={gltf.scene}
      >
      </primitive>

      <AnimatedLabel fadeInKey={"button1"} fadeOutKey={"button2"} position={[0.1, 2.5, 0]}>Button</AnimatedLabel>
      <AnimatedLabel fadeInKey={"camera1"} fadeOutKey={"fullshot"} position={[-0.8, 4.1, 0]}>Camera</AnimatedLabel>
      {/* <AnimatedLabel fadeInKey={"hand"} fadeOutKey={"fullshot"} position={[0.5, 0.5, 0]}>Hand</AnimatedLabel> */}
    </group>

  );
}

export default AnimatedAsset;







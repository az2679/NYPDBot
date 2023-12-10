import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import AnimatedLabel from './AnimatedLabel';
import { AnimationTimeline } from './AnimationTimeline';

function AnimatedAsset(props) {
  const modelRef = useRef();
  const group = useRef();
  const { position, scale } = props;
  const gltf = useLoader(GLTFLoader, '/k5_nypdrobot.glb')

  useEffect(() => {
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3,
      },
      "intro1"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 6,
      },
      "intro2"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 9,
      },
      "intro3"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 6,
      },
      "intro4"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3,
      },
      "intro5"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 0,
      },
      "intro6"
    );
  }, [group]);

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

      <AnimatedLabel fadeInKey={"button1"} fadeOutKey={"button3"} position={[0.1, 2.5, 0]}>Button</AnimatedLabel>
      <AnimatedLabel fadeInKey={"camera3"} fadeOutKey={"specs5"} position={[-0.8, 4.1, 0]}>Camera</AnimatedLabel>
      {/* <AnimatedLabel fadeInKey={"hand"} fadeOutKey={"fullshot"} position={[0.5, 0.5, 0]}>Hand</AnimatedLabel> */}
    </group>

  );
}

export default AnimatedAsset;







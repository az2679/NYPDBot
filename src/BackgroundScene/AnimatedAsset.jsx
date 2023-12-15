import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import AnimatedLabel from './AnimatedLabel';
import { AnimationTimeline } from './AnimationTimeline';

function AnimatedAsset(props) {
  const modelRef = useRef();
  const group = useRef();
  const { position, scale } = props;
  const gltf = useLoader(GLTFLoader, '/k5_nypdrobot.glb');

  useEffect(() => {
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 0.5,
      },
      'map1'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 1,
      },
      'map2'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 1.5,
      },
      'map3'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 2,
      },
      'map4'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 2.5,
      },
      'map5'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3,
      },
      'map6'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3.5,
      },
      'map7'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 4,
      },
      'map8'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 4.5,
      },
      'map9'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 5,
      },
      'img'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 5.5,
      },
      'img1'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 6,
      },
      'img2'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 6.5,
      },
      'img3'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 7,
      },
      'img4'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 7.5,
      },
      'img5'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 8,
      },
      'img6'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 8.5,
      },
      'img7'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 9,
      },
      'img8'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 10,
      },
      'img9'
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
      ></primitive>

      <AnimatedLabel fadeInKey={'button1'} fadeOutKey={'button3'} position={[0.1, 2.5, 0]}>
        Button
      </AnimatedLabel>
      <AnimatedLabel fadeInKey={'camera3'} fadeOutKey={'specs5'} position={[-0.8, 4.1, 0]}>
        Camera
      </AnimatedLabel>
    </group>
  );
}

export default AnimatedAsset;

import { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

import { AnimationTimeline } from "./AnimationTimeline";


function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 6,
      },
      "head"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "closeup1"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "closeup"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "torso"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "hand"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "fullshot"
    );

  }, [cameraRef]);



  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;

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
        y: 3,
        z: 10,
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
      "button"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "button1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "button2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "camera"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "camera1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "camera2"
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
    console.log(AnimationTimeline.labels)
  }, [cameraRef]);

  AnimationTimeline.labels.closeup = 0
  AnimationTimeline.labels.button = 0.5
  AnimationTimeline.labels.button1 = 1
  AnimationTimeline.labels.button2 = 1.5
  AnimationTimeline.labels.camera = 2
  AnimationTimeline.labels.camera1 = 2.5
  AnimationTimeline.labels.camera2 = 3
  AnimationTimeline.labels.fullshot = 3.5

  





  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;

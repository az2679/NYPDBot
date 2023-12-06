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
      "closeup"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 5,
      },
      "button"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 4,
      },
      "button1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 4,
      },
      "button2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 6,
      },
      "button3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 1,
        z: 13,
      },
      "fulltransition"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 10,
      },
      "fulltransition1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 8,
      },
      "camera"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 3,
      },
      "camera1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 3,
      },
      "camera2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 6,
      },
      "fullshot"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "fullshot1"
    );
    
    console.log(AnimationTimeline.labels)
  }, [cameraRef]);

  AnimationTimeline.labels.closeup = 0
  AnimationTimeline.labels.button = 0.5
  AnimationTimeline.labels.button1 = 1
  AnimationTimeline.labels.button2 = 1.5
  AnimationTimeline.labels.button3 = 2
  AnimationTimeline.labels.fulltransition = 2.5
  AnimationTimeline.labels.fulltransition1 = 3
  AnimationTimeline.labels.camera = 3.5
  AnimationTimeline.labels.camera1 = 4
  AnimationTimeline.labels.camera2 = 4.5
  AnimationTimeline.labels.fullshot = 5
  AnimationTimeline.labels.fullshot1 = 5.5

  





  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;

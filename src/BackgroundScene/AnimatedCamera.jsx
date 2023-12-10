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
      "land"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 6,
      },
      "land1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 6,
      },
      "land2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 6,
      },
      "land3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 6,
      },
      "land4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 13,
      },
      "intro"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro5"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro6"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro7"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro8"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "intro9"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "height"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      "height1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      "height2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      "height3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      "height4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      "height5"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 6,
      },
      "button"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 5,
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
        z: 4,
      },
      "button3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 6,
      },
      "button4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 6,
      },
      "camera"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 6,
      },
      "camera1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 3,
        z: 6,
      },
      "camera2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 3,
      },
      "camera3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 4,
        z: 3,
      },
      "camera4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs5"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs6"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs7"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "specs8"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map5"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map6"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map7"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map8"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "map9"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img2"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img3"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img5"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img6"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img7"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img8"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 13,
      },
      "img9"
    );
    
    
    console.log(AnimationTimeline.labels)
  }, [cameraRef]);


// console.log(AnimationTimeline.labels)

//LANDING
AnimationTimeline.labels.land = 0.5;
AnimationTimeline.labels.land1 = 1;
AnimationTimeline.labels.land2 = 1.5;
AnimationTimeline.labels.land3 = 2;
AnimationTimeline.labels.land4 = 2.5;
//INTRO
AnimationTimeline.labels.intro = 3;
AnimationTimeline.labels.intro1 = 3.5;
AnimationTimeline.labels.intro2 = 4;
AnimationTimeline.labels.intro3 = 4.5;
AnimationTimeline.labels.intro4 = 5;
AnimationTimeline.labels.intro5 = 5.5;
AnimationTimeline.labels.intro6 = 6;
AnimationTimeline.labels.intro7 = 6.5;
AnimationTimeline.labels.intro8 = 7;
AnimationTimeline.labels.intro9 = 7.5;
//HEIGHT
AnimationTimeline.labels.height = 8;
AnimationTimeline.labels.height1 = 8.5;
AnimationTimeline.labels.height2 = 9;
AnimationTimeline.labels.height3 = 9.5;
AnimationTimeline.labels.height4 = 10;
AnimationTimeline.labels.height5 = 10.5;
//SPECS
AnimationTimeline.labels.specs = 11;
AnimationTimeline.labels.specs1 = 11.5;
AnimationTimeline.labels.specs2 = 12;
AnimationTimeline.labels.specs3 = 12.5;
AnimationTimeline.labels.specs4 = 13;
//SPECS: BUTTON
AnimationTimeline.labels.button = 13.5;
AnimationTimeline.labels.button1 = 14;
AnimationTimeline.labels.button2 = 14.5;
AnimationTimeline.labels.button3 = 15;
AnimationTimeline.labels.button4 = 15.5;
//SPECS: CAMERA
AnimationTimeline.labels.camera = 16;
AnimationTimeline.labels.camera1 = 16.5;
AnimationTimeline.labels.camera2 = 17;
AnimationTimeline.labels.camera3 = 17.5;
AnimationTimeline.labels.camera4 = 18;
//SPECS CONT'D
AnimationTimeline.labels.spec5 = 18.5;
AnimationTimeline.labels.spec6 = 19;
AnimationTimeline.labels.spec7 = 19.5;
AnimationTimeline.labels.spec8 = 20;
//MAP
AnimationTimeline.labels.map = 20.5;
AnimationTimeline.labels.map1 = 21;
AnimationTimeline.labels.map2 = 21.5;
AnimationTimeline.labels.map3 = 22;
AnimationTimeline.labels.map4 = 22.5;
AnimationTimeline.labels.map5 = 23;
AnimationTimeline.labels.map6 = 23.5;
AnimationTimeline.labels.map7 = 24;
AnimationTimeline.labels.map8 = 24.5;
AnimationTimeline.labels.map9 = 25;
//IMAGES
AnimationTimeline.labels.img = 25.5;
AnimationTimeline.labels.img1 = 26;
AnimationTimeline.labels.img3 = 26.5;
AnimationTimeline.labels.img4 = 27;
AnimationTimeline.labels.img5 = 27.5;
AnimationTimeline.labels.img6 = 28;
AnimationTimeline.labels.img7 = 28.5;
AnimationTimeline.labels.img8 = 29;
AnimationTimeline.labels.img9 = 29.5;


  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;

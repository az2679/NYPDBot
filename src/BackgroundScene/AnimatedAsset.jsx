import { useRef, useEffect } from 'react';
import { AnimationTimeline } from "./AnimationTimeline";
import { Html } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import styles from '../ProjectCard/ProjectCard.module.css';


function AnimatedLabel(props) {
  const { fadeInKey, fadeOutKey, position, children } = props;
  const labelRef = useRef();

 
  useEffect(() => {
 if(labelRef.current.style){
    AnimationTimeline.to(
      labelRef.current.style,
      {
        opacity:1
      },
      fadeInKey
    );

    AnimationTimeline.to(
      labelRef.current.style,
      {
        opacity: 0
      },
      fadeOutKey
    );
  }
  }, [labelRef, fadeOutKey, fadeInKey]);


  return(
    <Html ref={labelRef} position={position}>
      <div className={styles.annotation}>{children}</div>
    </Html>
  );
}

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
      "head"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 9,
      },
      "torso"
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 15,
      },
      "hand"
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

      <AnimatedLabel fadeInKey={"head"} fadeOutKey={"torso"} position={[1.5, 2.5, 0]}>Head</AnimatedLabel>
      <AnimatedLabel fadeInKey={"torso"} fadeOutKey={"hand"} position={[2, 1.2, 0]}>Torso</AnimatedLabel>
      <AnimatedLabel fadeInKey={"hand"} fadeOutKey={"fullshot"} position={[0.5, 0.5, 0]}>Hand</AnimatedLabel>
      
      {/* <Html ref={labelRef}  position={[1.5, 2.5, 0]} opacity={0}>
        <div className={styles.annotation}>Head</div>
      </Html>
      <Html  position={[2, 1.2, 0]} opacity={0}>
        <div className={styles.annotation}>Torso</div>
      </Html>
      <Html  position={[0.5, 0.5, 0]} opacity={0}>
        <div className={styles.annotation}>Hand</div>
      </Html> */}

    </group>

  );
}

export default AnimatedAsset;







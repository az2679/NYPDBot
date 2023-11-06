import { useRef, useEffect } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { AnimationTimeline } from "./AnimationTimeline";

import styles from '../ProjectCard/ProjectCard.module.css';



function AnimatedAsset(props) {
  const modelRef = useRef();
  const group = useRef();
  const { position, scale, modelUrl } = props;
  const gltf = useGLTF(modelUrl);

  const headRef = useRef();
  const torsoRef = useRef();
  const handRef = useRef();

  useEffect(() => {
    
    AnimationTimeline.to(
      modelRef.current.rotation,
      {
        y: 3,
      },
      "closeup"
    );

    AnimationTimeline.to(
      modelRef.current.rotation,
      {
        y: 9,
      },
      "hand"
    );
  }, [group]);


  useEffect(() => {

    AnimationTimeline.to(
      headRef.current.style,
      {
        opacity:1
      },
      "head"
    );
    AnimationTimeline.to(
      headRef.current.style,
      {
        opacity: 0
      },
      "torso"
    );

    AnimationTimeline.to(
      torsoRef.current.style,
      {
        opacity:1
      },
      "torso"
    );
    AnimationTimeline.to(
      torsoRef.current.style,
      {
        opacity: 0
      },
      "hand"
    );

    AnimationTimeline.to(
      handRef.current.style,
      {
        opacity:1
      },
      "hand"
    );
    AnimationTimeline.to(
      handRef.current.style,
      {
        opacity: 0
      },
      "fullshot"
    );
  }, []);




  return (
    <group ref={group} dispose={null}>
      <primitive
        ref={modelRef}
        position={position ? position : [0, -5, 0]}
        scale={scale ? scale : [3, 3, 3]}
        rotation={[0, 0, 0]}
        object={gltf.scene}
      >

        <Html  position={[1.5, 2.5, 0]}>
          <div className={styles.annotation} >Head</div>
        </Html>
        <Html position={[2, 1.2, 0]}>
          <div className={styles.annotation} >Torso</div>
        </Html>

        <Html position={[0.5, 0.5, 0]}>
          <div className={styles.annotationline}>Hand</div>
        </Html>

      </primitive>

      {/* <Html ref={labelRef} fadeInKey={"torso"} fadeOutKey={"hand"}  position={[1, 2.5, 0]} >please work</Html> */}
      <Html ref={headRef}   position={[1, 2.5, 0]} >please work1</Html>
      <Html ref={torsoRef}  position={[2, 1.2, 0]} >please work2</Html>
      <Html ref={handRef}  position={[0.5, 0.5, 0]} >please work3</Html>
      

    </group>

  );
}

export default AnimatedAsset;







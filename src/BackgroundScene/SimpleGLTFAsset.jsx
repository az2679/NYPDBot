import { useRef, useEffect } from 'react';
import { useGLTF, Html } from '@react-three/drei';

// import { useRef, useState, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';

import styles from '../ProjectCard/ProjectCard.module.css';

import { AnimationTimeline } from "./AnimationTimeline";

function SimpleGLTFAsset(props) {
  const modelRef = useRef();
  const group = useRef();
  const { position, scale, modelUrl } = props;
  const gltf = useGLTF(modelUrl);
  // const [rotationSpeed, setRotationSpeed] = useState(0.001);


  // useFrame(() => {
  //   modelRef.current.rotation.y += rotationSpeed;
  // });


  useEffect(() => {
    AnimationTimeline.to(
      modelRef.current.rotation,
      {
        y: 0,
      },
      "fullshot"
    );
    AnimationTimeline.to(
      modelRef.current.rotation,
      {
        y: 0,
      },
      "torso"
    );
  }, [modelRef]);




  return (
    <group ref={group} dispose={null}>
      <primitive
        ref={modelRef}
        position={position ? position : [0, -5, 0]}
        scale={scale ? scale : [3, 3, 3]}
        rotation={[0, 0, 0]}
        object={gltf.scene}
      >
        <Html position={[1.5, 2.5, 0]}>
          <div className={styles.annotation}>Head</div>
        </Html>
        <Html position={[2, 1.2, 0]}>
          <div className={styles.annotation}>Torso</div>
        </Html>

        <Html position={[0.5, 0.5, 0]}>
          <div className={styles.annotationline}>Hand</div>
        </Html>
      </primitive>
    </group>
  );
}

export default SimpleGLTFAsset;

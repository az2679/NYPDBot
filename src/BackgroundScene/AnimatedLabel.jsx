import styles from '../ProjectCard/ProjectCard.module.css';
import { useRef, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { AnimationTimeline } from "./AnimationTimeline";


export default function AnimatedLabel(props) {
  const { fadeInKey, fadeOutKey, position, children } = props;
  const labelRef = useRef();

 
  useEffect(() => {
    if (labelRef.current && labelRef.current.style) {
      console.log(labelRef.current.style)
      AnimationTimeline.to(
        labelRef.current.style,
        {
          opacity: 1,
        },
        fadeInKey
      );
      AnimationTimeline.to(
        labelRef.current.style,
        {
          opacity: 0,
        },
        fadeOutKey
      );
    }
  }, [labelRef, fadeOutKey, fadeInKey]);


  return(
    <Html ref={labelRef} position={position} style={{ opacity: '0' }}>
      <div className={styles.annotation}>{children}</div>
    </Html>
  );
}

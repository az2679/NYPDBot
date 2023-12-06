import styles from './ProjectCard/ProjectCard.module.css';
import { useRef, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { AnimationTimeline } from "./AnimationTimeline";


export default function AnimatedLabel(props) {
  const { fadeInKey, fadeOutKey, position, children } = props;
  const labelRef = useRef(null);

  // console.log(labelRef)

  // useEffect(() => {
  //   console.log('Component mounted');
  //   return () => console.log('Component will unmount');
  // }, []);
  
  // useEffect(() => {
  //   console.log('labelRef changed:', labelRef.current);
  //   // Rest of the effect logic
  // }, [labelRef, fadeOutKey, fadeInKey]);
  
  
  useEffect(() => {
    console.log('labelRef changed:', labelRef.current);
    if (labelRef.current && labelRef.current.style) {
      console.log('Animating:', labelRef.current.style);
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
  
    // Cleanup function
    return () => {
      console.log('Component will unmount');
    };
  }, [labelRef, fadeOutKey, fadeInKey]);
  
  

  return(
    <Html ref={labelRef} position={position} style={{ opacity: '0' }} >
      <div className={styles.annotation}>{children}</div>
    </Html>
  );
}

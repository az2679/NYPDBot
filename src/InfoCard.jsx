import styles from './LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './AnimationTimeline';
import { Html } from '@react-three/drei';


export default function InfoCard(props) {
  const { fadeInKey, fadeOutKey, left, width, top, header, paragraph } = props;
  const cardRef = useRef();

  useEffect(() => {
    console.log('InfoCard component rendered');
    // ... rest of the logic
  }, [cardRef, fadeOutKey, fadeInKey]);


  useEffect(() => {
    console.log('InfoCard useEffect fired');
    if (cardRef.current && cardRef.current.style) {
      console.log('Animating opacity to 1');
      AnimationTimeline.to(
        cardRef.current.style,
        {
          opacity: 1,
        },
        fadeInKey
      );
  
      AnimationTimeline.to(
        cardRef.current.style,
        {
          opacity: 0,
        },
        fadeOutKey
      );
    }
  }, [cardRef, fadeOutKey, fadeInKey]);

  console.log('InfoCard rendering');

  return (
    <Html ref={cardRef} style={{ opacity: '0' }}>
      <div
        className={styles.info_wrapper}
        style={{ left: `${left}vw`, width: `${width}vw`, top: `${top}vh` }}
      >
        <div className={styles.info_header}>{header}</div>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    </Html>
  );
}


import styles from './LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';
import { Html } from '@react-three/drei';

export default function InfoCard(props) {
  const { startKey, fadeInKey, fadeOutKey, endKey, left, width, top, height, align, color, header, paragraph } = props;
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current && cardRef.current.style) {
      // console.log(cardRef.current.style);
      AnimationTimeline.to(
        cardRef.current.style,
        {
          opacity: 0,
        },
        startKey
      );
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
          opacity: 1,
        },
        fadeOutKey
      );
      AnimationTimeline.to(
        cardRef.current.style,
        {
          opacity: 0,
        },
        endKey
      );
    }
  }, [cardRef, startKey, fadeInKey, fadeOutKey, endKey]);

  return (
    // <Html ref={cardRef} style={{ opacity: '0' }}>
    <div>
      <div
        ref={cardRef}
        className={styles.info_wrapper}
        style={{
          left: `${left}vw`,
          width: `${width}vw`,
          top: `${top}vh`,
          height: `${height}vh`,
          opacity: '0',
          justifyContent: `${align}`,
          backgroundColor: `${color}`,
        }}
      >
        <div className={styles.info_header}>{header}</div>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    </div>
    // </Html>
  );
}

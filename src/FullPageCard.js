import styles from './LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';

export default function HeightChart(props) {
  const { paragraph, startKey, fadeInKey, fadeOutKey, endKey } = props;
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      console.log(imgRef.current.style);
      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 0,
        },
        startKey
      );

      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 1,
        },
        fadeInKey
      );
      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 1,
        },
        fadeOutKey
      );

      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 0,
        },
        endKey
      );
    }
  }, [imgRef]);

  return (
    <div ref={imgRef} className={styles.full_card_wrapper} style={{ left: '0', top: '0', opacity: '0' }}>
      <div className={styles.full_card}>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    </div>
  );
}

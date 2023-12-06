import styles from './LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';

export default function InfoCard(props) {
  const { fadeInKey, fadeOutKey, left, width, top, header, paragraph } = props;
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current.style) {
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

  console.log(cardRef)


  return (
    // <div ref={cardRef} style={{ opacity: '0' }}>
      <div
        ref={cardRef} 
        className={styles.info_wrapper}
        style={{ left: `${left}vw`, width: `${width}vw`, top: `${top}vh`, opacity: '0' }}
      >
        <div className={styles.info_header}>{header}</div>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    // </div>
  );
}

import styles from './LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';
import { Html } from '@react-three/drei';

export default function InfoCard(props) {
  const { fadeInKey, fadeOutKey, left, width, top, header, paragraph } = props;
  // const cardRef = useRef();

  // useEffect(() => {
  //   if (cardRef.current && cardRef.current.style) {
  //     console.log(cardRef.current.style);
  //     AnimationTimeline.to(
  //       cardRef.current.style,
  //       {
  //         opacity: 1,
  //       },
  //       fadeInKey
  //     );
  //     AnimationTimeline.to(
  //       cardRef.current.style,
  //       {
  //         opacity: 0,
  //       },
  //       fadeOutKey
  //     );
  //   }
  // }, [cardRef, fadeOutKey, fadeInKey]);

  return (
    // <div ref={cardRef} style={{ opacity: '0' }}>
    <div>
      <div
        // ref={cardRef}
        className={styles.info_wrapper}
        style={{ left: `${left}vw`, width: `${width}vw`, top: `${top}vh` }}
      >
        <div className={styles.info_header}>{header}</div>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    </div>
  );
}

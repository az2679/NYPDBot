// import styles from './LandingPage.module.css';

// export default function InfoCard(props) {
//   const { left, width, top, header, paragraph } = props;

//   return (
//     <div>
//       <div className={styles.info_wrapper} style={{ left: `${left}vw`, width: `${width}vw`, top: `${top}vh` }}>
//         <div className={styles.info_header}>{header}</div>
//         <div className={styles.info_paragraph}>{paragraph}</div>
//       </div>
//     </div>
//   );
// }

import styles from './LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';

export default function InfoCard(props) {
  // const { left, width, top, header, paragraph } = props;
  const { left, width, top, header, paragraph, startKey, fadeInKey, fadeOutKey } = props;
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current.style) {
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
          opacity: 0,
        },
        fadeOutKey
      );
    }
  }, [cardRef, startKey, fadeOutKey, fadeInKey]);

  return (
    <div>
      <div
        ref={cardRef}
        className={styles.info_wrapper}
        style={{ left: `${left}vw`, width: `${width}vw`, top: `${top}vh` }}
      >
        <div className={styles.info_header}>{header}</div>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    </div>
  );
}

import styles from '../LandingPage.module.css';
import { useRef, useEffect } from 'react';
import { AnimationTimeline } from './AnimationTimeline';

export default function HeightChart(props) {
  const { imgSrc, startKey, fadeInKey, fadeOutKey, endKey } = props;
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      console.log(imgRef.current.style);
      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 0,
        },
        'height1'
      );

      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 1,
        },
        'height2'
      );
      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 1,
        },
        'height4'
      );

      AnimationTimeline.to(
        imgRef.current.style,
        {
          opacity: 0,
        },
        'height5'
      );
    }
  }, [imgRef]);

  return (
    <div ref={imgRef} className={styles.full_image} style={{ left: '0', top: '0', opacity: '0' }}>
      <img src={imgSrc} alt={'image'}></img>
    </div>
  );
}

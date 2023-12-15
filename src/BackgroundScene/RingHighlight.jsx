import { useEffect, useRef } from 'react';
import { DoubleSide } from 'three';
import { AnimationTimeline } from './AnimationTimeline';

function RingHighlight(props) {
  const { fadeInKey, fadeOutKey, position, scale } = props;
  const ringRef = useRef();

  useEffect(() => {
    AnimationTimeline.to(
      ringRef.current.material,
      {
        opacity: 1,
      },
      fadeInKey
    );
    AnimationTimeline.to(
      ringRef.current.material,
      {
        opacity: 0,
      },
      fadeOutKey
    );
  }, [ringRef]);

  return (
    <mesh ref={ringRef} position={position} scale={scale}>
      <ringGeometry args={[0.04, 0.06, 32]} />
      <meshBasicMaterial transparent={true} opacity={0} color="#edac00" side={DoubleSide} />
    </mesh>
  );
}

export default RingHighlight;

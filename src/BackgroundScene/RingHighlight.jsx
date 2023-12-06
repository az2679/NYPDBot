import { useEffect, useRef } from "react";
import { DoubleSide } from "three";
import { AnimationTimeline } from "./AnimationTimeline";

function RingHighlight(props) {
  const { fadeInKey, fadeOutKey, position } = props;
  const ringRef = useRef();

  useEffect(() => {
    AnimationTimeline.to(
      ringRef.current.material,
      {
        opacity: 0.25,
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
    <mesh
      ref={ringRef}
      // rotation={[-Math.PI / 2, 0, Math.PI / 4]}
      position={position}
      scale={[0.01, 0.01, 0.01]}
    >
      <ringGeometry args={[10, 8, 32]} />
      <meshBasicMaterial transparent={true} opacity={0} color="blue" side={DoubleSide} />
    </mesh>
  );
}

export default RingHighlight;

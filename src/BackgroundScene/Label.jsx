import { useEffect, useRef } from "react";
import { AnimationTimeline } from "./AnimationTimeline";

function Label() {
  const objectRef = useRef();

  useEffect(() => {
    AnimationTimeline.to(
      objectRef.current.material,
      {
        opacity: 0.5,
      },
      "head"
    );
    AnimationTimeline.to(
      objectRef.current.material,
      {
        opacity: 0,
      },
      "torso"
    );
  }, [objectRef]);

  return (
    <mesh
      ref={objectRef}
      rotation={[0, 0, 0]}
      position={[5, 3, 0.5]}
      scale={[3, 1, 1]}
    >
      <planeGeometry />
      <meshBasicMaterial transparent={true} opacity={1} color="blue" />
    </mesh>
  );
}

export default Label;


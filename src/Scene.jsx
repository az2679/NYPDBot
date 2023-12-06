import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import styles from './ProjectCard/ProjectCard.module.css';
import AnimatedCamera from './AnimatedCamera';
import AnimatedAsset from './AnimatedAsset';
import InfoCardsLayout from './InfoCardsLayout';

function Scene() {
  return (
    <>


      {/* <Canvas> */}
        {/* Camera 🎥 */}
        <AnimatedCamera />

        <Suspense fallback={null}>
          {/* <InfoCardsLayout /> */}
          <AnimatedAsset />
        </Suspense>

        {/* Lights 💡 */}
        <ambientLight intensity={1} />
        {/* <pointLight position={[4, 4, 2]} intensity={4} /> */}
        <directionalLight color="white" position={[0, 0, 5]} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={['white']} attach="background" />

        {/* Objects 📦 */}
        {/* <meshStandardMaterial roughness={0.3} metalness={0.6} /> */}         

      {/* </Canvas> */}
  
    </>
  );
}


export default Scene;

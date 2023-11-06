// import { useRef, useEffect } from 'react';
import React from 'react';
// import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';
// import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';

export default function InfoCardsLayout(props) {
  // const cardRef = useRef();

  // const { fadeInKey, fadeOutKey } = props;

  // useEffect(() => {
  //   AnimationTimeline.to(
  //     cardRef.current.style,
  //     {
  //       opacity: 1,
  //     },
  //     fadeInKey
  //   );
  //   AnimationTimeline.to(
  //     cardRef.current.style,
  //     {
  //       opacity: 0,
  //     },
  //     fadeOutKey
  //   );
  // }, [cardRef]);

  //<Label fadeInKey={"fullshot"} fadeOutKey={"torso"} >

  return (
    <>
      <InfoCard
        // ref={cardRef}
        left={10}
        width={20}
        top={100}
        header={'K-5'}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        fadeInKey={'head'}
        fadeOutKey={'torso'}
      />

      <InfoCard
        // ref={cardRef}
        left={10}
        width={20}
        top={200}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        fadeInKey={'torso'}
        fadeOutKey={'hand'}
      />

      <InfoCard
        // ref={cardRef}
        left={70}
        width={20}
        top={250}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        fadeInKey={'hand'}
        fadeOutKey={'fullshot'}
      />
    </>
  );
}

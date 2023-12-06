import React from 'react';
// import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';

export default function InfoCardsLayout() {
  return (
    <>
      <InfoCard
        fadeInKey={'closeup'}
        fadeOutKey={'fullshot'}
        left={1}
        width={2}
        top={0.5}
        header={''}
        paragraph={`When the button is pressed, the robot will connect you to a live agent who is available 24/7 for questions, concerns, or incident reports.`}
      />

      <InfoCard
        left={7}
        width={2}
        top={1}
        header={''}
        paragraph={`“This call may be recorded for your safety.”`}
        fadeInKey={'button'}
        fadeOutKey={'button2'}
      />

      <InfoCard
        left={10}
        width={20}
        top={150}
        header={''}
        paragraph={`Video will be recorded, which can be viewed in case of emergencies or crimes. However, neither audio recording nor facial recognition are implemented.`}
        fadeInKey={'camera'}
        fadeOutKey={'camera2'}
      />

      <InfoCard
        left={70}
        width={20}
        top={200}
        header={''}
        paragraph={`Police will then run images from the video recording through its facial recognition unit to identify potential crime suspects.`}
        fadeInKey={'camera2'}
        fadeOutKey={'fullshot'}
      />

    </>
  );
}

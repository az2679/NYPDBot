import React from 'react';
import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';

export default function InfoCardsLayout() {
  return (
    <>
      <InfoCard
        startKey={'button'}
        fadeInKey={'button1'}
        fadeOutKey={'button3'}
        left={10}
        width={20}
        top={100}
        header={''}
        paragraph={`When the button is pressed, the robot will connect you to a live agent who is available 24/7 for questions, concerns, or incident reports.`}
      />
      <InfoCard
        left={70}
        width={20}
        top={105}
        header={''}
        paragraph={`“This call may be recorded for your safety.”`}
        startKey={'button'}
        fadeInKey={'button1'}
        fadeOutKey={'button3'}
      />

      <InfoCard
        left={10}
        width={20}
        top={150}
        header={''}
        paragraph={`Video will be recorded, which can be viewed in case of emergencies or crimes. However, neither audio recording nor facial recognition are implemented.`}
        startKey={'button3'}
        fadeInKey={'fulltransition'}
        fadeOutKey={'camera1'}
      />

      <InfoCard
        left={70}
        width={20}
        top={200}
        header={''}
        paragraph={`Police will then run images from the video recording through its facial recognition unit to identify potential crime suspects.`}
        startKey={'camera'}
        fadeInKey={'camera1'}
        fadeOutKey={'fullshot'}
      />
    </>
  );
}

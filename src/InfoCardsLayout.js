import React from 'react';
// import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';

export default function InfoCardsLayout() {
  return (
    // <>
    //   <InfoCard
    //     left={10}
    //     width={20}
    //     top={100}
    //     header={'K-5'}
    //     paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
    //       law-enforcement technology, which has raised concerns among privacy advocates.`}
    //     fadeInKey={'head'}
    //     fadeOutKey={'torso'}
    //   />

    //   <InfoCard
    //     left={10}
    //     width={20}
    //     top={200}
    //     header={''}
    //     paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
    //       law-enforcement technology, which has raised concerns among privacy advocates.`}
    //     fadeInKey={'torso'}
    //     fadeOutKey={'hand'}
    //   />

    //   <InfoCard
    //     left={70}
    //     width={20}
    //     top={250}
    //     header={''}
    //     paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
    //       law-enforcement technology, which has raised concerns among privacy advocates.`}
    //     fadeInKey={'hand'}
    //     fadeOutKey={'fullshot'}
    //   />
    // </>

    <>
      <InfoCard
        left={10}
        width={20}
        top={100}
        header={'K-5'}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        startKey={'closeup'}
        fadeInKey={'head'}
        fadeOutKey={'torso'}
      />

      <InfoCard
        left={10}
        width={20}
        top={150}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        startKey={'head'}
        fadeInKey={'torso'}
        fadeOutKey={'hand'}
      />

      <InfoCard
        left={70}
        width={20}
        top={200}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        startKey={'torso'}
        fadeInKey={'hand'}
        fadeOutKey={'fullshot'}
      />
    </>
  );
}

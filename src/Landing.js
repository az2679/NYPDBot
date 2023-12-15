import { useEffect } from 'react';
import styles from './LandingPage.module.css';
import baffle from 'baffle';

export default function Landing(props) {
  useEffect(() => {
    // const target = baffle(`${styles.intro_header}`);
    const target = baffle('#title');
    target.set({
      characters: '10-K1-05K',
      speed: 120,
    });
    target.start();
    target.reveal(1000, 2000);
  });
  return (
    <div className={styles.intro_wrapper}>
      <div id="title" className={styles.intro_header}>
        K-5
      </div>
      <div className={styles.intro_paragraph}>
        The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
        law-enforcement technology, which has raised concerns among privacy advocates.
      </div>
    </div>
  );
}

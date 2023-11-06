import styles from './LandingPage.module.css';

export default function Landing(props) {
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.intro_header}>K-5</div>
      <div className={styles.intro_paragraph}>
        The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
        law-enforcement technology, which has raised concerns among privacy advocates.
      </div>
    </div>
  );
}

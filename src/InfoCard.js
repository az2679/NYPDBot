import styles from './LandingPage.module.css';

export default function InfoCard(props) {
  const { left, width, top, header, paragraph } = props;

  return (
    <div>
      <div className={styles.info_wrapper} style={{ left: `${left}vw`, width: `${width}vw`, top: `${top}vh` }}>
        <div className={styles.info_header}>{header}</div>
        <div className={styles.info_paragraph}>{paragraph}</div>
      </div>
    </div>
  );
}

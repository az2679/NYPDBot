import { useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
import Landing from './Landing';
import InfoCardsLayout from './InfoCardsLayout';
import styles from './ProjectCard/ProjectCard.module.css';
import './styles/global.css';
import Scene from './Scene';
import { AnimationTimeline } from './AnimationTimeline';

/*
 * This function will calculate how much the user has scrolled (0-1)
 * @returns {number} The percentage of how much the user has scrolled (0-1)
 */

function getScrollProgress() {
  // This will calculate how many pixels the page is vertically
  const winScroll = window.document.documentElement.scrollTop;
  // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
  return winScroll / height;
}

function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();

      // console.log(`Scroll progress: ${scrolled}`);

      AnimationTimeline.progress(scrolled);
      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;
      };

    };
  }, []);

  return (
    <div className={styles.article_wrapper}>
      <Landing />
      {/* <InfoCardsLayout /> */}

    <Scene />


      {/* <Scene>
      <InfoCardsLayout />
      </Scene> */}
      {/* <ContactInfo /> */}
    </div>
  );
}

export default App;

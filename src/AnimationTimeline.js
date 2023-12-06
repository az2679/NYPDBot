import { gsap } from 'gsap';

export const AnimationTimeline = gsap.timeline({
  paused: true, // We set this here so we can adjust progress tied to scroll
  progress: 0,
});

// AnimationTimeline.labels.closeup = 0;
// AnimationTimeline.labels.button = 0.5;
// AnimationTimeline.labels.button1 = 1;
// AnimationTimeline.labels.button2 = 1.5;
// AnimationTimeline.labels.camera = 2;
// AnimationTimeline.labels.camera1 = 2.5;
// AnimationTimeline.labels.camera2 = 3;
// AnimationTimeline.labels.fullshot = 3.5;

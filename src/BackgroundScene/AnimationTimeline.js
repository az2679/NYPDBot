import { gsap } from 'gsap';

export const AnimationTimeline = gsap.timeline({
  paused: true, // We set this here so we can adjust progress tied to scroll
});

AnimationTimeline.labels.closeup = 0;
AnimationTimeline.labels.button = 0.5;
AnimationTimeline.labels.button1 = 1;
AnimationTimeline.labels.button2 = 1.5;
AnimationTimeline.labels.button3 = 2;
AnimationTimeline.labels.fulltransition = 2.5;
AnimationTimeline.labels.fulltransition1 = 3;
AnimationTimeline.labels.camera = 3.5;
AnimationTimeline.labels.camera1 = 4;
AnimationTimeline.labels.camera2 = 4.5;
AnimationTimeline.labels.fullshot = 5;
AnimationTimeline.labels.fullshot1 = 5.5;

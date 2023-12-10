import { gsap } from 'gsap';

export const AnimationTimeline = gsap.timeline({
  paused: true, // We set this here so we can adjust progress tied to scroll
});

//LANDING
AnimationTimeline.labels.land = 0.5;
AnimationTimeline.labels.land1 = 1;
AnimationTimeline.labels.land2 = 1.5;
AnimationTimeline.labels.land3 = 2;
AnimationTimeline.labels.land4 = 2.5;
//INTRO
AnimationTimeline.labels.intro = 3;
AnimationTimeline.labels.intro1 = 3.5;
AnimationTimeline.labels.intro2 = 4;
AnimationTimeline.labels.intro3 = 4.5;
AnimationTimeline.labels.intro4 = 5;
AnimationTimeline.labels.intro5 = 5.5;
AnimationTimeline.labels.intro6 = 6;
AnimationTimeline.labels.intro7 = 6.5;
AnimationTimeline.labels.intro8 = 7;
AnimationTimeline.labels.intro9 = 7.5;
//HEIGHT
AnimationTimeline.labels.height = 8;
AnimationTimeline.labels.height1 = 8.5;
AnimationTimeline.labels.height2 = 9;
AnimationTimeline.labels.height3 = 9.5;
AnimationTimeline.labels.height4 = 10;
AnimationTimeline.labels.height5 = 10.5;
//SPECS
AnimationTimeline.labels.specs = 11;
AnimationTimeline.labels.specs1 = 11.5;
AnimationTimeline.labels.specs2 = 12;
AnimationTimeline.labels.specs3 = 12.5;
AnimationTimeline.labels.specs4 = 13;
//SPECS: BUTTON
AnimationTimeline.labels.button = 13.5;
AnimationTimeline.labels.button1 = 14;
AnimationTimeline.labels.button2 = 14.5;
AnimationTimeline.labels.button3 = 15;
AnimationTimeline.labels.button4 = 15.5;
//SPECS: CAMERA
AnimationTimeline.labels.camera = 16;
AnimationTimeline.labels.camera1 = 16.5;
AnimationTimeline.labels.camera2 = 17;
AnimationTimeline.labels.camera3 = 17.5;
AnimationTimeline.labels.camera4 = 18;
//SPECS CONT'D
AnimationTimeline.labels.spec5 = 18.5;
AnimationTimeline.labels.spec6 = 19;
AnimationTimeline.labels.spec7 = 19.5;
AnimationTimeline.labels.spec8 = 20;
//MAP
AnimationTimeline.labels.map = 20.5;
AnimationTimeline.labels.map1 = 21;
AnimationTimeline.labels.map2 = 21.5;
AnimationTimeline.labels.map3 = 22;
AnimationTimeline.labels.map4 = 22.5;
AnimationTimeline.labels.map5 = 23;
AnimationTimeline.labels.map6 = 23.5;
AnimationTimeline.labels.map7 = 24;
AnimationTimeline.labels.map8 = 24.5;
AnimationTimeline.labels.map9 = 25;
//IMAGES
AnimationTimeline.labels.img = 25.5;
AnimationTimeline.labels.img1 = 26;
AnimationTimeline.labels.img3 = 26.5;
AnimationTimeline.labels.img4 = 27;
AnimationTimeline.labels.img5 = 27.5;
AnimationTimeline.labels.img6 = 28;
AnimationTimeline.labels.img7 = 28.5;
AnimationTimeline.labels.img8 = 29;
AnimationTimeline.labels.img9 = 29.5;

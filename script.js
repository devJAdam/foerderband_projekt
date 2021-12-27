const intro = document.querySelector(".intro");
const video = document.querySelector("video");

// video.defaultPlaybackRate(0.5);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
  reverse: true,
});
scene.addIndicators();
scene.setPin(intro);
scene.addTo(controller);

let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  video.currentTime = scrollPos;
}, [30.3]);

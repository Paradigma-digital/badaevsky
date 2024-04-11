export const lineAnim = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".line-text[data-direction='top']", {
    bottom: 150,
    scrollTrigger: {
      trigger: ".epoch-lines",
      start: "center bottom",
      scrub: true,
    },
  });
  gsap.to(".line-text[data-direction='bottom']", {
    top: 150,
    scrollTrigger: {
      trigger: ".epoch-lines",
      start: "center bottom",
      scrub: true,
    },
  });
  gsap.to(".line-text[data-direction='top']", {
    bottom: 150,
    scrollTrigger: {
      trigger: ".life-lines",
      start: "center bottom",
      scrub: true,
    },
  });
  gsap.to(".line-text[data-direction='bottom']", {
    top: 150,
    scrollTrigger: {
      trigger: ".life-lines",
      start: "center bottom",
      scrub: true,
    },
  });
};

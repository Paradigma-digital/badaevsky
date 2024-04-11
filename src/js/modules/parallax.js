import simpleParallax from "simple-parallax-js";

export const parallax = () => {
  const rightImages = document.querySelectorAll("img[data-parallax='right']");
  const leftImages = document.querySelectorAll("img[data-parallax='left']");
  rightImages.forEach((img) => {
    new simpleParallax(img, {
      orientation: "right",
      //   scale: 2.1,
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });
  });
  leftImages.forEach((img) => {
    new simpleParallax(img, {
      orientation: "left",
      //   scale: 2.1,
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });
  });
};

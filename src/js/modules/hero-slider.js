export const heroSlider = () => {
  const slider = document.querySelector(".hero-slider");
  const before = document.querySelector(".before");
  const beforeImage = before.querySelector("img");
  const change = document.querySelector(".change");
  const changeSlide = document.querySelector(".change-slide");
  const body = document.body;

  let isActive = false;

  document.addEventListener("DOMContentLoaded", () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
  });

  slider.addEventListener("mouseenter", () => {
    isActive = true;
  });

  slider.addEventListener("mouseleave", () => {
    isActive = false;
  });

  const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  body.addEventListener("mousemove", (e) => {
    if (!isActive) {
      return;
    }

    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  });

  changeSlide.addEventListener("touchstart", () => {
    isActive = true;
  });

  body.addEventListener("touchend", () => {
    isActive = false;
  });

  body.addEventListener("touchcancel", () => {
    isActive = false;
  });

  body.addEventListener("touchmove", (e) => {
    if (!isActive) {
      return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
  });
};

import Swiper from "swiper";
import { Navigation, EffectCards } from "swiper/modules";
import { findDifferentElements, cardSwiperStyle } from "./utils.js";

export const swiper = () => {
  const architectureSwiper = new Swiper(".architecture-swiper", {
    effect: "cards",
    grabCursor: false,
    modules: [EffectCards, Navigation],
    init: false,
    allowTouchMove: false,

    cardsEffect: {
      perSlideOffset: 7.5,
      perSlideRotate: 0,
      rotate: false,
      slideShadows: true,
    },
    navigation: {
      prevEl: ".architecture-prev",
      nextEl: ".architecture-next",
    },
  });
  const lifeSwiper = new Swiper(".life-swiper", {
    effect: "cards",
    grabCursor: false,
    modules: [EffectCards, Navigation],
    init: false,
    allowTouchMove: false,

    cardsEffect: {
      perSlideOffset: 7.5,
      perSlideRotate: 0,
      rotate: false,
      slideShadows: true,
    },
    navigation: {
      prevEl: ".life-prev",
      nextEl: ".life-next",
    },
  });
  const swiper3 = new Swiper(".architecture-swiper-tab", {
    slidesPerView: 1.02,
    spaceBetween: 10,
  });
  const swiper4 = new Swiper(".life-swiper-tab", {
    slidesPerView: 1.02,
    spaceBetween: 10,
  });

  architectureSwiper.on("init", function () {
    cardSwiperStyle(architectureSwiper);
  });
  architectureSwiper.init();

  architectureSwiper.on("slideChange", function () {
    cardSwiperStyle(architectureSwiper);
  });

  lifeSwiper.on("init", function () {
    cardSwiperStyle(lifeSwiper);
  });
  lifeSwiper.init();

  lifeSwiper.on("slideChange", function () {
    cardSwiperStyle(lifeSwiper);
  });
};

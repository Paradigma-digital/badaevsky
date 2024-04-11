import LazyLoad from "vanilla-lazyload";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

import { validInputs } from "./modules/valid-inputs.js";
import { formHandle } from "./modules/form-handle.js";
import { validateForm } from "./modules/validate.js";
import { letterAnim } from "./modules/letter-anim.js";
import { swiper } from "./modules/swiper.js";
import { tooltip } from "./modules/tooltip.js";
import { parallax } from "./modules/parallax.js";
import { counter } from "./modules/counter.js";
import { imageAnim } from "./modules/image-anim.js";
import { lineAnim } from "./modules/line-anim.js";
import { heroSlider } from "./modules/hero-slider.js";

isBrowserSupportWebp();
letterAnim();
swiper();
tooltip();
parallax();
counter();
validInputs();
imageAnim();
lineAnim();
heroSlider();
//handleAttachFiles();
// validInputs();
// formHandle();
// validateForm();

let myLazyLoad = new LazyLoad();
myLazyLoad.update();

import { CountUp } from "countup.js";

export const counter = () => {
  const numbers = document.querySelectorAll(".number");
  const options = {
    duration: 3,
  };
  numbers.forEach((number) => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetNumber = number.getAttribute("data-number");
            let demo = new CountUp(number, targetNumber, options);
            if (!demo.error) {
              demo.start();
            } else {
              console.error(demo.error);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(number);
  });
};

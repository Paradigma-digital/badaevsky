import { createObservableVariable } from "./utils.js";

const titleAnim = () => {
  const titleText = document.querySelectorAll(".title-text");

  titleText.forEach((title) => {
    const wordWrapper = title.querySelectorAll(".word-wrapper");
    let currentId = 0;

    const onVariableChange = (newValue) => {
      if (wordWrapper && wordWrapper[newValue]) {
        wordWrapper[newValue].classList.add("start-anim");
        const letters = wordWrapper[newValue].querySelectorAll(".word-letter");
        if (wordWrapper[newValue].className.includes("start-anim")) {
          letters.forEach((letter, index) => {
            setTimeout(() => {
              letter.classList.add("active");
            }, 100 * index);
          });
        }
      }
    };

    let obsVar = createObservableVariable(currentId, onVariableChange);

    wordWrapper.forEach((wrapper) => {
      const word = wrapper.dataset.word?.split("");
      word.forEach((item) => {
        wrapper.insertAdjacentHTML(
          "beforeend",
          `<div class="word-letter">${item}</div>`
        );
      });

      if (wordWrapper[obsVar.value]) {
        let observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (wordWrapper[obsVar.value]) {
                  const letters =
                    wordWrapper[obsVar.value].querySelectorAll(".word-letter");

                  wordWrapper[obsVar.value].classList.add("start-anim");
                  if (
                    wordWrapper[obsVar.value].className.includes("start-anim")
                  ) {
                    letters.forEach((letter, index) => {
                      setTimeout(() => {
                        letter.classList.add("active");
                      }, 100 * index);
                    });
                  }
                }
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(title);

        let observerMutation = new MutationObserver((mutationRecords) => {
          if (wordWrapper && wordWrapper[obsVar.value]) {
            const letters =
              wordWrapper[obsVar.value].querySelectorAll(".word-letter");
            const filter = Array.from(letters).filter((item) => {
              return item.className.includes("active");
            });

            if (
              filter.length === wordWrapper[obsVar.value]?.childNodes.length
            ) {
              obsVar.value += 1;

              if (wordWrapper[obsVar.value]) {
                wordWrapper[obsVar.value].classList.add("start-anim");
              }
            }
          }
        });
        observerMutation.observe(wrapper, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["class"],
        });
      }
    });
  });
};

const textAnim = () => {
  const defaultText = document.querySelectorAll(".default-text");
  defaultText.forEach((title) => {
    const wordWrapper = title.querySelectorAll(".word-wrapper");

    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wordWrapper.forEach((wrapper, index) => {
              setTimeout(() => {
                wrapper.classList.add("start-anim");
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(title);
  });
};

export const letterAnim = () => {
  titleAnim();
  textAnim();
};

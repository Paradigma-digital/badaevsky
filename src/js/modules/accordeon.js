export const accordeonFunc = () => {
  let itemsTop = document.querySelectorAll(".faq__item-top");

  const handleAccordeon = (elem) => {
    let accordeon = elem.closest(".faq__item");
    let btn = accordeon.querySelector(".faq__btn");
    let bottom = accordeon.querySelector(".faq__item-bottom");
    btn.classList.contains("active")
      ? closeAccordeon(btn, accordeon, bottom)
      : openAccordeon(btn, accordeon, bottom);
  };

  const closeAccordeon = (btn, accordeon, bottom) => {
    btn.classList.remove("active");
    accordeon.classList.remove("active");
    bottom.classList.remove("active");
  };

  const openAccordeon = (btn, accordeon, bottom) => {
    btn.classList.add("active");
    accordeon.classList.add("active");
    bottom.classList.add("active");
  };

  if (itemsTop) {
    itemsTop.forEach((elem) =>
      elem.addEventListener("click", () => handleAccordeon(elem))
    );
  }
};

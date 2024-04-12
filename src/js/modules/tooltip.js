export const tooltip = () => {
  const infoTooltip = document.querySelector(".info-tooltip");
  const infoBtn = document.querySelector(".info-btn");
  const info = document.querySelector(".info");

  if (infoTooltip) {
    document.addEventListener("touchmove", () => {
      setTimeout(() => {
        infoTooltip.classList.remove("active");
      }, 300);
    });
    infoBtn.addEventListener("click", () => {
      infoTooltip.classList.add("active");
    });

    // info.addEventListener("mouseleave", () => {
    //   infoTooltip.classList.remove("active");
    // });
    infoTooltip.addEventListener("mouseleave", () => {
      infoTooltip.classList.remove("active");
    });
  }
};

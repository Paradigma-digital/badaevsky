export const tooltip = () => {
  const infoTooltip = document.querySelector(".info-tooltip");
  const infoBtn = document.querySelector(".info-btn");

  if (infoTooltip) {
    infoBtn.addEventListener("mouseenter", () => {
      infoTooltip.classList.add("active");
    });
    infoBtn.addEventListener("mouseleave", () => {
      infoTooltip.classList.remove("active");
    });
  }
};

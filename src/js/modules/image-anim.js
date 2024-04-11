export const imageAnim = () => {
  const images = document.querySelectorAll(".image-wrapper");
  images.forEach((img) => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(img);
  });
};

export const findDifferentElements = (array1, array2) => {
  // Фильтруем первый массив, оставляя только те элементы, которых нет во втором массиве
  let differentElements = array1.filter((element) => !array2.includes(element));

  // Фильтруем второй массив, оставляя только те элементы, которых нет в первом массиве
  let differentElements2 = array2.filter(
    (element) => !array1.includes(element)
  );

  // Объединяем результаты в один массив и возвращаем его
  return [...differentElements, ...differentElements2];
};

export const cardSwiperStyle = (swiper) => {
  const prevSides = swiper.slides.slice(0, swiper.activeIndex);
  const nextSides = swiper.slides.slice(
    swiper.activeIndex + 3,
    swiper.slides.length
  );
  prevSides.forEach((el) => {
    el.style.opacity = "0";
    el.classList.remove("mt60");
    el.classList.remove("mt90");
  });
  nextSides.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.scale = 1;
    el.style.marginTop = `${30 * index}px`;
  });
  let combinedArray = [...nextSides, ...prevSides];
  let differentElements = findDifferentElements(combinedArray, swiper.slides);
  if (differentElements[0]) {
    differentElements[0].classList.remove("mt60");
    differentElements[0].classList.remove("mt90");
    differentElements[0].style.opacity = "1";
  }
  if (differentElements[1]) {
    differentElements[1].classList.remove("mt90");
    differentElements[1].classList.add("mt60");
    differentElements[1].style.opacity = ".5";
  }
  if (differentElements[2]) {
    differentElements[2].classList.remove("mt60");
    differentElements[2].classList.add("mt90");
    differentElements[2].style.opacity = ".5";
  }
};

export const createObservableVariable = (initialValue, onChange) => {
  let value = initialValue;
  return {
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
      onChange(newValue);
    },
  };
};

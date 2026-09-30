import { useEffect, useState } from "react";

function getItemsPerSlide() {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(max-width: 640px)").matches) return 1;
  if (window.matchMedia("(max-width: 900px)").matches) return 2;
  return 3;
}

export function useBearCarousel(itemCount: number) {
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const slideCount = Math.max(1, Math.ceil(itemCount / itemsPerSlide));

  useEffect(() => {
    function updateItemsPerSlide() {
      const nextItemsPerSlide = getItemsPerSlide();
      setItemsPerSlide((current) =>
        current === nextItemsPerSlide ? current : nextItemsPerSlide,
      );
    }

    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  function moveToSlide(nextSlide: number) {
    if (nextSlide < 0 || nextSlide >= slideCount) return;
    setDirection(nextSlide > currentSlide ? 1 : -1);
    setCurrentSlide(nextSlide);
  }

  function handleSwipe(offset: number) {
    if (offset < -55) moveToSlide(currentSlide + 1);
    if (offset > 55) moveToSlide(currentSlide - 1);
  }

  return {
    currentSlide,
    direction,
    itemsPerSlide,
    slideCount,
    visibleStart: currentSlide * itemsPerSlide,
    visibleEnd: (currentSlide + 1) * itemsPerSlide,
    moveToSlide,
    handleSwipe,
  };
}
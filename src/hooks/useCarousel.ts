import { useState } from "react";

export const useCarousel = (initialIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  return { currentIndex, setCurrentIndex };
};
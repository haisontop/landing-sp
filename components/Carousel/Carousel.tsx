import { EmblaOptionsType } from "embla-carousel-react";
// import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";
import React, { useCallback, useEffect, useState } from "react";

interface propsType {
  slides: number[];
  options?: EmblaOptionsType;
}

export const Carousel = (props : propsType) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
//   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   const scrollPrev = useCallback(
//     () => emblaApi && emblaApi.scrollPrev(),
//     [emblaApi]
//   );
//   const scrollNext = useCallback(
//     () => emblaApi && emblaApi.scrollNext(),
//     [emblaApi]
//   );
//   const scrollTo = useCallback(
//     (index: number) => emblaApi && emblaApi.scrollTo(index),
//     [emblaApi]
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//     setPrevBtnEnabled(emblaApi.canScrollPrev());
//     setNextBtnEnabled(emblaApi.canScrollNext());
//   }, [emblaApi, setSelectedIndex]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, setScrollSnaps, onSelect]);
  return (
    <div>

    </div>
  );
};

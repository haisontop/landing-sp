// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { useCallback } from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./Dots";
import { Nextbutton, Prevbutton } from "./NexPrevButton";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

export const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // need to selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  return (
    <>
      <div className="overflow-hidden relative rounded-3xl" ref={emblaRef}>
        <div className="flex">{children}</div>
        <Nextbutton onclick={scrollNext} />
        <Prevbutton onclick={scrollPrev} />
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </>
  );
};

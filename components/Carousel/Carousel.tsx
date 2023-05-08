// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback, useRef } from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./Dots";
import { Nextbutton, Prevbutton } from "./NextPrevButton";

// Define the props
interface CarouselControlProps {
  showControls?: boolean;
}

type Props = PropsWithChildren & EmblaOptionsType & CarouselControlProps;

export const Carousel = ({ children, showControls, ...options }: Props) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

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
    <div className="h-full relative">
      <div className="overflow-hidden relative h-full" ref={emblaRef}>
        <div className="flex h-full">{children}</div>
        {showControls && (
          <>
            <Nextbutton onclick={scrollNext} />
            <Prevbutton onclick={scrollPrev} />
          </>
        )}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
      </div>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  containerClass: string;
};
const Animated = ({ title, containerClass }: Props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAmiantion = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAmiantion.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power1.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={` mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] animated-title ${containerClass}`}
      ref={containerRef}
    >
      {title.split("<br /.").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
              key={i}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Animated;

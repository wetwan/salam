import { useRef } from "react";
import Animated from "./Animated";
import gsap from "gsap";
import RounedCorners from "./RounedCorners";
import Button from "./Button";

const Store = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerpective: 500,
      ease: "power1.inOut ",
    });
  };

  const handleMouseleave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut ",
    });
  };

  return (
    <section id="store" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the worlds of meats
        </p>
        <div className="relative size-full">
          <Animated
            title="The My<b>st</b>ery of <br/> <b>a</b> Con<b>cea</b>led St<b>o</b>re"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            id="store"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="img/store-1.jpg"
                  alt="store"
                  className="object-contain"
                  onMouseLeave={handleMouseleave}
                  onMouseUp={handleMouseleave}
                  onMouseEnter={handleMouseleave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>
            <RounedCorners />
          </div>
        </div>
        <div className="-mt-[200px] max-sm:px-5 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start ">
            <p className="  mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Uncovering Sxylam's frozen treasures: A concealed world of icy
              delights, culinary secrets, and surprising flavors, waitin to be
              discovered in this frozen food haven.
            </p>
            <Button
              id="contact"
              title="discover store"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;

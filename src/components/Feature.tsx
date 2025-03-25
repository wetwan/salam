/* eslint-disable @typescript-eslint/no-unused-vars */
import { TiLocationArrow } from "react-icons/ti";
import FeatureCard from "./FeatureCard";

import { ReactNode, useRef, useState } from "react";

const FeatureTilt = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [transFormStyle, SetTransFormStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  interface BoundingClientRect {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  const hanldeMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height }: BoundingClientRect =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98) `;

    SetTransFormStyle(newTransform);
  };

  const hanldeMouseleave = () => {
    SetTransFormStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseLeave={hanldeMouseleave}
      onMouseMove={hanldeMouseMove}
      style={{ transform: transFormStyle }}
    >
      {children}
    </div>
  );
};

const Feature = () => {
 
  return (
    <section id="feature" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10 \">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50 capitalize">
            into the freezing world
          </p>
          <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Sophisticated store boasts sleek design, modern amenities, and
            premium products, offering an unparalleled shopping experience.
          </p>
        </div>{" "}
        <FeatureTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <FeatureCard
            src="videos/feature-1.mp4"
            title={
              <>
                {" "}
                Off<b>er</b>ings
              </>
            }
            description="Elevate your shopping experience with premium frozen foods, guaranteed freshness, and exclusive store-brand products."
          />
        </FeatureTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7  ">
          <FeatureTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <FeatureCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Han<b>nd</b>ling
                </>
              }
              description="Optimal storage solutions converge with precision refrigeration and savvy inventory management, yielding unparalleled quality and safety standards."
            />
          </FeatureTilt>
          <FeatureTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <FeatureCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Am<b>en</b>ities
                </>
              }
              description="Exceptional service, expert staff, and seamless convenience converge in a pristine environment, redefining the shopping experience."
            />
          </FeatureTilt>
          <FeatureTilt className="bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0">
            <FeatureCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Tec<b>hn</b>ology
                </>
              }
            />
          </FeatureTilt>
          <FeatureTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font  max-w-64 text-black">
                m<b>o</b>re co<b>m</b>ing s<b>oo</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </FeatureTilt>
          <FeatureTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </FeatureTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;

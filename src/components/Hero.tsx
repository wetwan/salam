import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, SetCurrentIndex] = useState<number>(1);
  const [hasClicked, SetHasClicked] = useState<boolean>(false);
  const [isLoading, SetIsLoading] = useState<boolean>(true);
  const [loadedVideo, SetloadedVideo] = useState<number>(0);

  const totalvid = 4;
  const nextVidRef = useRef<HTMLVideoElement>(null);

  const upcomingVideosIndex = (currentIndex % totalvid) + 1;
  const hnadleMinVdClick = () => {
    SetHasClicked(true);
    SetCurrentIndex(upcomingVideosIndex);
  };
  const handleVidLoad = () => {
    SetloadedVideo((prev) => prev + 1);
  };
  interface VideoProps {
    index: number;
  }

  const getVideos = (index: VideoProps["index"]): string =>
    `videos/hero-${index}.mp4`;
  useEffect(() => {
    if (loadedVideo === totalvid - 1) {
      SetIsLoading(false);
    }
  }, [loadedVideo]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVidRef.current?.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex, hasClicked], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0 ",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <section id="home" className=" relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className=" flex-center absolute z-[100] h-dvh w-screen overflow-hidden">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="z-10 relative h-dvh overflow-hidden rounded-lg bg-blue-75 "
      >
        <div className="mask-clip-path absolute-center absolute  z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            onClick={hnadleMinVdClick}
          >
            {" "}
            <video
              src={getVideos(upcomingVideosIndex)}
              ref={nextVidRef}
              loop
              muted
              id="current-video"
              className="size-64 object-center object-cover origin-center scale-150"
              onLoadedData={handleVidLoad}
            />
          </div>
        </div>
        <video
          src={getVideos(currentIndex)}
          ref={nextVidRef}
          loop
          muted
          id="next-video"
          onLoadedData={handleVidLoad}
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />
        <video
          onLoadedData={handleVidLoad}
          src={getVideos(currentIndex === totalvid - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className=" absolute top-0 left-0 size-full object-cover object-center"
        />
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40">
          fr<b>oz</b>en f<b>oo</b>d
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              {" "}
              sx<b>y</b>l<b>am</b>
            </h1>
            <p className="mb-5 max-w-80 font-robert-regular">
              Enetr the Frozen Food World
            </p>
            <Button
              id="contact"
              title="Enter Shop"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black ">
        fr<b>oz</b>en f<b>oo</b>d
      </h1>
    </section>
  );
};

export default Hero;

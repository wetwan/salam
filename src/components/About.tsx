import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Animated from "./Animated";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      height: "100vh",
      width: "100vw",
      borderRadius: "0",
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          welcome to sxylam
        </h2>
        <Animated
          title="Dis<b>co</b>ver the w<b>or</b>ld's <br/> lea<b>di</b>ng fr<b>oz</b>en food st<b>o</b>re"
          containerClass=" mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p className="">
            The Game of Food begins in our store... NOW! Get ready for an epic
            battle!
          </p>
          <p className="">Sxylam the one stop for all frzoen food</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="back"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;

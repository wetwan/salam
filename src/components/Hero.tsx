const Hero = () => {
  return (
    <div className=" relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="z-10 relative h-dvh overflow-hidden rounded-lg bg-blue-75 "
      >
        <div className="mask-clip-path absolute-center absolute  z-50 size-64 cursor-pointer overflow-hidden rounded-lg"></div>
      </div>
    </div>
  );
};

export default Hero;

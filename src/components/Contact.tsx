import Button from "./Button";

const Contact = () => {
  type Props = {
    src: string;
    clipClass: string;
  };
  const ImageClip = ({ src, clipClass }: Props) => (
    <div className={clipClass}>
      <img src={src} alt="contact image" />
    </div>
  );

  return (
    <section id="contact" className="my-20 max-sm:mt-48 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden ">
        <div className="absolute -left-20 hidden top-0 h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
          <ImageClip clipClass="contact-clip-path-1" src="img/contact-2.jpg" />
          <ImageClip
            clipClass="contact-clip-path-2 lg:-translate-y-28 "
            src="img/contact-3.jpg"
          />
        </div>

        <div className="absolute left-20  -top-40  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClip
            clipClass="sword-man-clip-path absolute md:scale-125"
            src="img/contact-1.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase "> shop sxylam</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[5rem]">
            let buil<b>d</b> a <br /> c<b>om</b>munity of <br /> fr<b>o</b>ozen
            food to<b>ge</b>ether
          </p>
          <Button
            phone="+234 916 532 3116"
            title="contact us"
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

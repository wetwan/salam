import { FaInstagram, FaPhone, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const links = [
  { href: "", icon: <FaWhatsapp /> },
  { href: "", icon: <FaInstagram /> },
  { href: "", icon: <FaXTwitter /> },
  { href: "", icon: <FaPhone /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center  justify-between gap-4 px-4 md:flex-row">
        <p className="capitalize text-center text-sm  md:text-left">
          &copy; skylam {new Date().getFullYear()} all rights Reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start ">
          {links.map((link, i) => (
            <a
              href={link.href}
              key={i}
              target="_blank"
              rel="nooperner noreffer"
              className="text-black transition-all duration-500 ease-in-out hover:text-white"
            >
              {" "}
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

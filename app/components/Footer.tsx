import { Logo } from "@/public/Logo";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black/90 text-white ">
      <div className="mx-4 md:mx-12 py-8 xl:mx-auto xl:max-w-6xl">
        <div className="flex justify-between md:items-center flex-col md:flex-row gap-6 md:gap-0">
          <Logo />
          <div className="flex gap-4">
            <FaLinkedinIn className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaXTwitter className="w-6 h-6" />
          </div>
        </div>
        <div className="mt-16 text-white/50 flex justify-between md:items-center flex-col md:flex-row">
          <p>© CirriNote 2025</p>
          <p>Crafted with passion by CreoWis</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

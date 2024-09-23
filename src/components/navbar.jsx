import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="mb-10 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center mx-4">
        <BiLogoMediumOld className="text-5xl" />
      </div>
      <div className="m-6 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/mayank-mawari-j22">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mayank7776">
          <FaGithub />
        </a>
        <a href="">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/_mnkrjp_/">
          <FaInstagram />
        </a>
      </div>
    </motion.nav>
  );
}

import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Bio() {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible"  className="pb-10 justify-center text-6xl tracking-tight lg:mt-10 lg:pl-36 lg:text-5xl">
              Mayank Mawari
            </motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r justify-center from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:pl-36 md:pl-48">
              Full Stack developer
            </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className="justify-center pt-8 pb-5 text-xl lg:pl-36">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center pt-8">
            <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} className="rounded-xl h-72 lg:h-96" src={profilePic} alt="Mayank" />
          </div>
        </div>
      </div>
    </div>
  );
}

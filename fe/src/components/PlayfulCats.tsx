import { motion, useReducedMotion } from "framer-motion";

export function PlayfulCats() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <div className="page-cat-motion" aria-hidden="true">
      <motion.img
        className="playful-cat playful-cat-runner"
        src="/cat/IMG_3090.JPG"
        alt=""
        style={{ top: "18%" }}
        initial={{ x: "-16vw", opacity: 0 }}
        animate={{
          x: "110vw",
          y: [0, -16, 22, -8, 0],
          rotate: [-8, 1, 7, -3, 0],
          opacity: [0, 0.9, 0.85, 0.9, 0],
        }}
        transition={{
          duration: 27,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        className="playful-cat playful-cat-drifter"
        src="/cat/IMG_3091.JPG"
        alt=""
        style={{ top: "-64px", right: "12%" }}
        initial={{ y: "-12vh", opacity: 0 }}
        animate={{
          y: "108vh",
          x: [0, -24, 16, 0],
          rotate: [8, 2, -7, 4],
          opacity: [0, 0.85, 0.85, 0],
        }}
        transition={{
          duration: 24,
          delay: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        className="playful-cat playful-cat-pop"
        src="/cat/IMG_3095.JPG"
        alt=""
        style={{ left: "13%", bottom: "13%" }}
        initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
        animate={{
          opacity: [0, 0.9, 0.9, 0],
          scale: [0.5, 1, 1.05, 0.6],
          rotate: [-12, 5, -3, 10],
          y: [6, -6, 0],
        }}
        transition={{
          duration: 8,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

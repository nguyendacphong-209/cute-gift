import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { Cat } from "../types";

export function CatCard({ cat }: { cat: Cat }) {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCatClick = () => {
    // 1. Mở / đóng message + heart
    setOpen((value) => !value);

    // 2. Bật animation wiggle
    setIsPlaying(true);

    // 3. Phát sound
    const audio = new Audio(cat.sound);
    audio.volume = 0.6;

    audio.onended = () => {
      setIsPlaying(false);
    };

    audio.play().catch((error) => {
      console.warn("Cannot play cat sound:", error);
      setIsPlaying(false);
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleCatClick}
      whileHover={{
        y: -5,
        rotate: 0.6,
      }}
      whileTap={{
        scale: 0.97,
      }}
      animate={
        isPlaying
          ? {
              rotate: [0, -2, 2, -2, 2, 0],
            }
          : {
              rotate: 0,
            }
      }
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
      className="group relative w-full overflow-hidden rounded-[25px] border border-white/80 bg-white p-3 text-left shadow-card transition-shadow hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink/40"
      aria-expanded={open}
      aria-label={`${cat.name}: ${open ? "ẩn" : "xem"} lời nhắn`}
    >
      {/* IMAGE */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[19px] ${cat.background}`}
      >
        <img
          src={cat.image}
          alt={`Ảnh ${cat.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* HEART */}
        <motion.span
          animate={
            open
              ? {
                  scale: [1, 1.25, 1],
                }
              : {
                  scale: 1,
                }
          }
          transition={{
            duration: 0.3,
          }}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-deep-pink shadow-card"
        >
          <Heart
            size={18}
            fill={open ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </motion.span>

        {/* MESSAGE */}
        {open && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.86,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 text-sm font-bold text-ink shadow-soft"
          >
            <MessageCircle
              size={16}
              className="shrink-0 text-deep-pink"
              aria-hidden="true"
            />

            {cat.message}
          </motion.span>
        )}
      </div>

      {/* NAME */}
      <span className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
        <span className="font-heading text-xl font-bold text-ink">
          {cat.name}
        </span>

        <span className="text-xs font-bold text-muted">
          {isPlaying ? "Meoooow! ♡" : "Chạm để nghe meo"}
        </span>
      </span>
    </motion.button>
  );
}

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

export interface CatCardData {
  image: string;
  name: string;
  message: string;
  background: string;
}

export function CatCard({ cat }: { cat: CatCardData }) {
  const isOpen = false;
  return <CatCardButton cat={cat} initiallyOpen={isOpen} />;
}

function CatCardButton({
  cat,
  initiallyOpen,
}: {
  cat: CatCardData;
  initiallyOpen: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <motion.button
      type="button"
      onClick={() => setOpen((value) => !value)}
      whileHover={{ y: -5, rotate: 0.6 }}
      whileTap={{ scale: 0.97 }}
      className="group relative w-full overflow-hidden rounded-[25px] border border-white/80 bg-white p-3 text-left shadow-card transition-shadow hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink/40"
      aria-expanded={open}
      aria-label={`${cat.name}: ${open ? "ẩn" : "xem"} lời nhắn`}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[19px] ${cat.background}`}
      >
        <img
          src={cat.image}
          alt={`Ảnh ${cat.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-deep-pink shadow-card">
          <Heart
            size={18}
            fill={open ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </span>
        {open && (
          <motion.span
            initial={{ opacity: 0, scale: 0.86, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
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
      <span className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
        <span className="font-heading text-xl font-bold text-ink">
          {cat.name}
        </span>
        <span className="text-xs font-bold text-muted">Chạm để nghe meo</span>
      </span>
    </motion.button>
  );
}

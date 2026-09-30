import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { CuteButton } from "../components/CuteButton";
import { PlayfulCats } from "../components/PlayfulCats";

export function Welcome() {
  return (
    <section className="welcome-page page-wrap">
      <PlayfulCats />
      <div className="welcome-copy">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="eyebrow-dot" /> LỜI NHẮN TỪ HỘI MÊU
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          Hé lôooo,
          <br />
          <span>đàn em</span>
          <br />
          đáng yêu! <span className="title-cat">✳</span>
        </motion.h1>
        <motion.p
          className="welcome-description"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Đại ka có một món quà nhỏ dành cho cưng. Mấy bé mèo đang nóng lòng
          muốn kể lắm!
        </motion.p>
        <motion.div
          className="welcome-action"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68 }}
        >
          <Link to="/cats">
            <CuteButton icon={<ArrowRight size={17} aria-hidden="true" />}>
              Mở món quà nhé
            </CuteButton>
          </Link>
          <span className="tiny-note">
            <Heart size={14} fill="currentColor" aria-hidden="true" /> chỉ mất
            một phút thôi
          </span>
        </motion.div>
        <motion.div
          className="little-stamp"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Sparkles size={17} aria-hidden="true" />
          <span>
            gửi riêng
            <br />
            cho đàn em daika thoai
          </span>
        </motion.div>
      </div>
      <motion.div
        className="welcome-visual"
        initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="photo-frame">
          <img
            src="/cat/IMG_3450.jpg"
            alt="Một bé mèo đang nhìn thật dịu dàng"
            fetchPriority="high"
          />
          <span className="photo-caption">một chiếc meo gửi em</span>
        </div>
        <motion.span
          className="float-heart"
          animate={{ y: [0, -8, 0], rotate: [-8, 5, -8] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <Heart fill="currentColor" />
        </motion.span>
        <motion.span
          className="float-sparkle"
          animate={{ y: [0, 7, 0], rotate: [0, 18, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <Sparkles />
        </motion.span>
        <span className="visual-label">
          món quà bé xinh <span>✳</span>
        </span>
      </motion.div>
    </section>
  );
}

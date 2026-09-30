import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { CuteButton } from "../components/CuteButton";

export function Success() {
  return (
    <section className="success-page page-wrap">
      <motion.div
        className="success-art"
        initial={{ scale: 0.88, opacity: 0, rotate: -3 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 170, damping: 18 }}
      >
        <img
          className="success-photo success-cat"
          src="/cat/IMG_3090.JPG"
          alt="Bé mèo gửi lời chúc mừng"
        />
        <span className="success-plus" aria-hidden="true">
          +
        </span>
        <img
          className="success-photo success-gift"
          src="/gift/IMG_4053.jpg"
          alt="Món quà nhỏ đang trên đường đến"
        />
        <motion.span
          className="success-heart"
          animate={{ y: [0, -8, 0], rotate: [0, 9, 0] }}
          transition={{ duration: 2.8, repeat: 3 }}
          aria-hidden="true"
        >
          <Heart fill="currentColor" />
        </motion.span>
        <span className="success-sparkle" aria-hidden="true">
          <Sparkles />
        </span>
      </motion.div>
      <motion.span
        className="eyebrow success-eyebrow"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
      >
        MỘT CÁI ÔM ĐANG TRÊN ĐƯỜNG
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32 }}
      >
        Yayyyy! <span>Quà đã lên đường.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44 }}
      >
        Tớ đã nhận được lựa chọn của bạn rồi.
        <br />
        Mấy bé mèo gửi bạn thật nhiều yêu thương nhé!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/">
          <CuteButton
            variant="secondary"
            icon={<ArrowUpRight size={16} aria-hidden="true" />}
          >
            Về đầu trang
          </CuteButton>
        </Link>
      </motion.div>
      <div className="success-confetti" aria-hidden="true">
        <span>✳</span>
        <span>♡</span>
        <span>✦</span>
        <span>♡</span>
        <span>✳</span>
      </div>
    </section>
  );
}

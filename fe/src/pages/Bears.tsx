import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { BearCard } from "../components/BearCard";
import { CuteButton } from "../components/CuteButton";
import { useGift } from "../context/GiftContext";
import { bears } from "../data/bears";
import { useBearCarousel } from "../hooks/useBearCarousel";

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction * 38,
    filter: "blur(3px)",
  }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -38,
    filter: "blur(3px)",
  }),
};

export function Bears() {
  const { selectedBear, setSelectedBear } = useGift();
  const {
    currentSlide,
    direction,
    itemsPerSlide,
    slideCount,
    visibleStart,
    visibleEnd,
    moveToSlide,
    handleSwipe,
  } = useBearCarousel(bears.length);
  const visibleBears = bears.slice(visibleStart, visibleEnd);

  return (
    <section className="page-wrap inner-page bear-page">
      <div className="page-heading">
        <span className="eyebrow">
          <Sparkles size={15} aria-hidden="true" /> MỘT NGƯỜI BẠN MỚI
        </span>
        <h1>
          Chọn một bé <span>ở bên em</span>
        </h1>
        <p>Bé nào cũng đang mong được gặp em lắm.</p>
      </div>
      <div className="bear-carousel" aria-roledescription="carousel">
        <div className="bear-slider-window">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={`${itemsPerSlide}-${currentSlide}`}
              className="bear-grid"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              drag={itemsPerSlide === 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              dragMomentum={false}
              onDragEnd={(_, info) => handleSwipe(info.offset.x)}
            >
              {visibleBears.map((bear, index) => (
                <BearCard
                  key={bear.id}
                  bear={bear}
                  isSelected={selectedBear?.id === bear.id}
                  animationDelay={index * 90}
                  onSelect={setSelectedBear}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bear-slider-controls">
          <button
            className="slider-arrow"
            type="button"
            aria-label="Xem các bé gấu trước"
            onClick={() => moveToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <div className="slider-progress" aria-live="polite">
            <span className="slider-count">
              {String(currentSlide + 1).padStart(2, "0")}
              <span> / {String(slideCount).padStart(2, "0")}</span>
            </span>
            <div
              className="slider-progress-track"
              role="progressbar"
              aria-label="Tiến trình xem các bé gấu"
              aria-valuemin={1}
              aria-valuemax={slideCount}
              aria-valuenow={currentSlide + 1}
            >
              <span
                style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }}
              />
            </div>
          </div>
          <button
            className="slider-arrow"
            type="button"
            aria-label="Xem các bé gấu tiếp theo"
            onClick={() => moveToSlide(currentSlide + 1)}
            disabled={currentSlide === slideCount - 1}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="page-cta bear-cta">
        <span aria-live="polite">
          {selectedBear ? (
            <>
              Bạn và <strong>{selectedBear.name}</strong> sắp thành đôi rồi!
            </>
          ) : (
            "Chọn một bé bạn thích để tiếp tục nhé"
          )}
        </span>
        {selectedBear ? (
          <Link to="/address">
            <CuteButton icon={<ArrowRight size={16} aria-hidden="true" />}>
              Gửi bé đến với tớ
            </CuteButton>
          </Link>
        ) : (
          <CuteButton
            disabled
            icon={<ArrowRight size={16} aria-hidden="true" />}
          >
            Chọn một bé trước nhé
          </CuteButton>
        )}
      </div>
    </section>
  );
}

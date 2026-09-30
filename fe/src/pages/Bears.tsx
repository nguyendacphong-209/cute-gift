import { ArrowRight, Check, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { CuteButton } from "../components/CuteButton";
import { useGift } from "../context/GiftContext";
import { bears } from "../data/bears";

export function Bears() {
  const { selectedBear, setSelectedBear } = useGift();
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
      <div className="bear-grid">
        {bears.map((bear, index) => {
          const isSelected = selectedBear?.id === bear.id;
          return (
            <article
              className={`bear-card bear-${bear.color} ${isSelected ? "is-selected" : ""}`}
              key={bear.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="bear-select-area"
                type="button"
                onClick={() => setSelectedBear(bear)}
                aria-pressed={isSelected}
              >
                <span className="bear-image-wrap">
                  <img
                    src={bear.image}
                    alt={`${bear.name}, món quà bạn có thể chọn`}
                    loading="lazy"
                  />
                  <span
                    className={`selection-mark ${isSelected ? "checked" : ""}`}
                    aria-hidden="true"
                  >
                    {isSelected ? <Check size={17} /> : <Heart size={17} />}
                  </span>
                  {isSelected && (
                    <span className="selected-ribbon">bé em chọn</span>
                  )}
                </span>
                <span className="bear-card-copy">
                  <span className="bear-card-name">
                    {bear.name}
                    <span aria-hidden="true">✳</span>
                  </span>
                  <span className="bear-card-description">
                    {bear.description}
                  </span>
                </span>
              </button>
              <button
                className={`select-button ${isSelected ? "selected" : ""}`}
                type="button"
                onClick={() => setSelectedBear(bear)}
                aria-pressed={isSelected}
              >
                {isSelected ? (
                  <>
                    <Check size={15} aria-hidden="true" /> Bé này nhé!
                  </>
                ) : (
                  "Chọn bé này"
                )}
              </button>
            </article>
          );
        })}
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

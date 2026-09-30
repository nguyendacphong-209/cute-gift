import { Check, Heart } from "lucide-react";
import type { Bear } from "../types";

interface BearCardProps {
  bear: Bear;
  isSelected: boolean;
  animationDelay: number;
  onSelect: (bear: Bear) => void;
}

export function BearCard({
  bear,
  isSelected,
  animationDelay,
  onSelect,
}: BearCardProps) {
  return (
    <article
      className={`bear-card bear-${bear.color} ${isSelected ? "is-selected" : ""}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <button
        className="bear-select-area"
        type="button"
        onClick={() => onSelect(bear)}
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
          {isSelected && <span className="selected-ribbon">bé em chọn</span>}
        </span>
        <span className="bear-card-copy">
          <span className="bear-card-name">
            {bear.name}
            <span aria-hidden="true">✳</span>
          </span>
          <span className="bear-card-description">{bear.description}</span>
        </span>
      </button>
      <button
        className={`select-button ${isSelected ? "selected" : ""}`}
        type="button"
        onClick={() => onSelect(bear)}
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
}

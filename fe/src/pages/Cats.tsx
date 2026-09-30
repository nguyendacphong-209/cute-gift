import { ArrowRight, Cat as CatIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { CatCard } from "../components/CatCard";
import { CuteButton } from "../components/CuteButton";
import { PlayfulCats } from "../components/PlayfulCats";
import { cats } from "../data/cats";

export function Cats() {
  return (
    <section className="page-wrap inner-page">
      <PlayfulCats />
      <div className="page-heading">
        <span className="eyebrow">
          <CatIcon size={15} aria-hidden="true" /> NHỮNG NGƯỜI BẠN MÈO NHỎ
        </span>
        <h1>
          Mấy bé muốn <span>nói điều này</span>
        </h1>
        <p>Chạm vào từng bé xem có lời nhắn nào gửi cho em nhé.</p>
      </div>
      <div className="cat-grid">
        {cats.map((cat, index) => (
          <div
            className="stagger-item"
            style={{ animationDelay: `${index * 85}ms` }}
            key={cat.name}
          >
            <CatCard cat={cat} />
          </div>
        ))}
      </div>
      <div className="page-cta">
        <span>
          <span className="cta-heart">♥</span> Mấy bé còn giấu một món quà nữa
          đó...
        </span>
        <Link to="/bears">
          <CuteButton icon={<ArrowRight size={16} aria-hidden="true" />}>
            Đi xem quà nào
          </CuteButton>
        </Link>
      </div>
    </section>
  );
}

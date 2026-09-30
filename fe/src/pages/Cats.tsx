import { ArrowRight, Cat as CatIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { CatCard, type CatCardData } from "../components/CatCard";
import { CuteButton } from "../components/CuteButton";
import { PlayfulCats } from "../components/PlayfulCats";

const cats: CatCardData[] = [
  {
    image: "/cat/4DAB72D4-4C90-4BE2-8EB7-723510201AD9.JPG",
    name: "Miu Miu",
    message: "Meow! Bạn đáng yêu ghê á!",
    background: "bg-[#f8e8d9]",
  },
  {
    image: "/cat/1568CD08-6B32-4E82-92DC-39CC62E11AB2.JPG",
    name: "Bánh Bao",
    message: "Tớ gửi bạn một cái dụi đầu nè.",
    background: "bg-[#ece5f7]",
  },
  {
    image: "/cat/D6E3BA1A-616C-43B5-AE46-49C76CF5FA80.JPG",
    name: "Tiểu Thư",
    message: "Phía trước có một món quà đó!",
    background: "bg-[#f7ebd4]",
  },
  {
    image: "/cat/4CAB44E8-8345-46F1-B32A-BCA7E7F52CFF.JPG",
    name: "Bé Xíu",
    message: "Chúc hôm nay của bạn thật vui nha.",
    background: "bg-[#e7eee6]",
  },
];

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

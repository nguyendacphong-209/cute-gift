import { ArrowLeft, Gift, Heart, Sparkles } from "lucide-react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { PageTransition } from "./components/PageTransition";
import { useGift } from "./context/GiftContext";
import { Address } from "./pages/Address";
import { Bears } from "./pages/Bears";
import { Cats } from "./pages/Cats";
import { Success } from "./pages/Success";
import { Welcome } from "./pages/Welcome";

const steps = ["/", "/cats", "/bears", "/address"];

function GiftLayout() {
  const location = useLocation();
  const { selectedBear, submissionComplete } = useGift();
  const currentStep = steps.indexOf(location.pathname);
  const isSuccess = location.pathname === "/success";

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Về trang đầu">
          <span className="brand-icon">
            <Gift size={19} aria-hidden="true" />
          </span>
          <span>
            một món quà nhỏ<span className="brand-period">.</span>
          </span>
        </Link>
        {!isSuccess && (
          <div
            className="journey"
            aria-label={`Bước ${currentStep + 1} trên 4`}
          >
            <div className="journey-label">
              <span>HÀNH TRÌNH NHO NHỎ</span>
              <span>0{currentStep + 1} / 04</span>
            </div>
            <div className="journey-track">
              <span
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
        <div className="header-note">
          <Heart size={14} fill="currentColor" aria-hidden="true" />
          <span>làm bằng yêu thương</span>
        </div>
      </header>

      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Welcome />
            </PageTransition>
          }
        />
        <Route
          path="/cats"
          element={
            <PageTransition>
              <Cats />
            </PageTransition>
          }
        />
        <Route
          path="/bears"
          element={
            <PageTransition>
              <Bears />
            </PageTransition>
          }
        />
        <Route
          path="/address"
          element={
            selectedBear ? (
              <PageTransition>
                <Address />
              </PageTransition>
            ) : (
              <Navigate to="/bears" replace />
            )
          }
        />
        <Route
          path="/success"
          element={
            submissionComplete ? (
              <PageTransition>
                <Success />
              </PageTransition>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isSuccess && currentStep > 0 && (
        <footer className="site-footer">
          <Link to={steps[currentStep - 1]} className="back-link">
            <ArrowLeft size={15} aria-hidden="true" /> Quay lại
          </Link>
          <span>
            {selectedBear
              ? `Bạn nhỏ đang đợi: ${selectedBear.name}`
              : "Mỗi bước là một chút yêu thương"}
          </span>
          {currentStep < 3 ? (
            <span className="footer-whisper">
              cứ thong thả nhé <Sparkles size={14} aria-hidden="true" />
            </span>
          ) : (
            <span className="footer-whisper">
              thông tin của bạn được giữ riêng tư
            </span>
          )}
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return <GiftLayout />;
}

import { useState, type FormEvent } from "react";
import { ArrowRight, LockKeyhole, Mail, MapPin, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CuteButton } from "../components/CuteButton";
import { FormField } from "../components/FormField";
import { useGift } from "../context/GiftContext";
import { submitGiftForm } from "../lib/formspree";

interface FormErrors {
  name?: string;
  address?: string;
}

export function Address() {
  const navigate = useNavigate();
  const { selectedBear, markSubmissionComplete } = useGift();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  if (!selectedBear) return null;
  const chosenBear = selectedBear;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = "Bạn chưa cho tớ biết tên nè 🥺";
    if (!address.trim()) nextErrors.address = "Cho tớ xin địa chỉ nhé 🧸";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      await submitGiftForm({
        name: name.trim(),
        bear: chosenBear.name,
        address: address.trim(),
        message: message.trim(),
      });
      markSubmissionComplete();
      navigate("/success");
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="page-wrap inner-page address-page">
      <div className="page-heading address-heading">
        <span className="eyebrow">
          <Mail size={15} aria-hidden="true" /> CHẶNG CUỐI CÙNG
        </span>
        <h1>
          Bé sẽ được gửi <span>đến đâu nhỉ?</span>
        </h1>
        <p>Cho tớ biết một chút thông tin để món quà tìm được bạn nhé.</p>
      </div>
      <div className="address-layout">
        <aside className="chosen-bear-panel">
          <span className="panel-kicker">BÉ BẠN ĐÃ CHỌN</span>
          <div className="chosen-bear-image">
            <img src={selectedBear.image} alt={selectedBear.name} />
          </div>
          <span className="chosen-bear-name">
            {selectedBear.name} <span aria-hidden="true">♥</span>
          </span>
          <span className="chosen-bear-note">sắp được gặp bạn rồi đó!</span>
          <div className="panel-doodle" aria-hidden="true">
            ♡　✳　♡
          </div>
        </aside>
        <form className="gift-form" onSubmit={handleSubmit} noValidate>
          <FormField id="name" label="Tên của bạn" error={errors.name}>
            <span className="input-wrap">
              <UserRound size={17} aria-hidden="true" />
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Ví dụ: An dễ thương"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setErrors((current) => ({ ...current, name: undefined }));
                }}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </span>
          </FormField>
          <FormField
            id="address"
            label="Địa chỉ nhận quà"
            error={errors.address}
          >
            <span className="input-wrap textarea-wrap">
              <MapPin size={17} aria-hidden="true" />
              <textarea
                id="address"
                name="address"
                autoComplete="street-address"
                placeholder="Số nhà, đường, phường/xã, quận/huyện..."
                rows={3}
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                  setErrors((current) => ({ ...current, address: undefined }));
                }}
                aria-invalid={Boolean(errors.address)}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
            </span>
          </FormField>
          <FormField id="message" label="Lời nhắn nhỏ">
            <span className="input-wrap textarea-wrap">
              <Mail size={17} aria-hidden="true" />
              <textarea
                id="message"
                name="message"
                placeholder="Một điều bạn muốn nhắn gửi... (không bắt buộc)"
                rows={2}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </span>
          </FormField>
          {submitError && (
            <div className="submit-error" role="alert">
              <strong>🥺 Oops!</strong>
              <span>Có chút trục trặc khi gửi món quà. Bạn thử lại nhé.</span>
              <span className="error-hint">
                Thông tin của bạn vẫn còn ở đây.
              </span>
            </div>
          )}
          <CuteButton
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            icon={<ArrowRight size={17} aria-hidden="true" />}
          >
            {isSubmitting
              ? "Đang gửi món quà... 🐱"
              : submitError
                ? "Thử gửi lại nhé"
                : "Gửi món quà đi"}
          </CuteButton>
          <p className="privacy-note">
            <LockKeyhole size={13} aria-hidden="true" /> Thông tin của bạn chỉ
            được dùng để gửi món quà.
          </p>
        </form>
      </div>
    </section>
  );
}

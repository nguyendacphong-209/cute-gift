import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useGift } from "../context/GiftContext";
import { submitGiftForm } from "../lib/formspree";

export interface GiftFormValues {
  name: string;
  address: string;
  message: string;
}

interface GiftFormErrors {
  name?: string;
  address?: string;
  bear?: string;
}

const initialValues: GiftFormValues = {
  name: "",
  address: "",
  message: "",
};

export function useGiftForm() {
  const navigate = useNavigate();
  const { selectedBear, markSubmissionComplete } = useGift();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<GiftFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function updateField(field: keyof GiftFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (field !== "message") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: GiftFormErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = "Bạn chưa cho tớ biết tên nè 🥺";
    }
    if (!values.address.trim()) {
      nextErrors.address = "Cho tớ xin địa chỉ nhé 🧸";
    }
    if (!selectedBear) {
      nextErrors.bear = "Bạn chọn một bé gấu trước nhé!";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !selectedBear) return;

    setIsSubmitting(true);
    setSubmitError(false);
    try {
      await submitGiftForm({
        name: values.name.trim(),
        bear: selectedBear.name,
        address: values.address.trim(),
        message: values.message.trim(),
      });
      markSubmissionComplete();
      navigate("/success");
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    selectedBear,
    values,
    errors,
    isSubmitting,
    submitError,
    updateField,
    handleSubmit,
  };
}
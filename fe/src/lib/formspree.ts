import type { GiftSubmission } from "../types";

export async function submitGiftForm(data: GiftSubmission): Promise<void> {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  if (!endpoint) {
    throw new Error("Formspree chưa được cấu hình.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Formspree submission failed.");
  }
}

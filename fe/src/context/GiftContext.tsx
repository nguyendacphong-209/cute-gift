import { createContext, useContext, useState, type ReactNode } from "react";
import { bears } from "../data/bears";
import type { Bear } from "../types";

interface GiftContextValue {
  selectedBear: Bear | null;
  setSelectedBear: (bear: Bear) => void;
  submissionComplete: boolean;
  markSubmissionComplete: () => void;
}

const GiftContext = createContext<GiftContextValue | null>(null);

function getSavedBear(): Bear | null {
  try {
    const savedId = sessionStorage.getItem("cute-gift-selected-bear");
    return bears.find((bear) => bear.id === savedId) ?? null;
  } catch {
    return null;
  }
}

function getSubmissionState(): boolean {
  try {
    return sessionStorage.getItem("cute-gift-submitted") === "yes";
  } catch {
    return false;
  }
}

export function GiftProvider({ children }: { children: ReactNode }) {
  const [selectedBear, setSelectedBearState] = useState<Bear | null>(
    getSavedBear,
  );
  const [submissionComplete, setSubmissionComplete] =
    useState(getSubmissionState);

  function setSelectedBear(bear: Bear) {
    setSelectedBearState(bear);
    try {
      sessionStorage.setItem("cute-gift-selected-bear", bear.id);
    } catch {
      // The in-memory selection still works when storage is unavailable.
    }
  }

  function markSubmissionComplete() {
    setSubmissionComplete(true);
    try {
      sessionStorage.setItem("cute-gift-submitted", "yes");
    } catch {
      // The current navigation still works when storage is unavailable.
    }
  }

  return (
    <GiftContext.Provider
      value={{
        selectedBear,
        setSelectedBear,
        submissionComplete,
        markSubmissionComplete,
      }}
    >
      {children}
    </GiftContext.Provider>
  );
}

export function useGift() {
  const context = useContext(GiftContext);
  if (!context) throw new Error("useGift must be used inside GiftProvider");
  return context;
}

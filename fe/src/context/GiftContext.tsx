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
const selectedBearKey = "cute-gift-selected-bear";
const submissionKey = "cute-gift-submitted";

function readSessionValue(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSessionValue(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // The in-memory state remains usable when storage is unavailable.
  }
}

function getSavedBear(): Bear | null {
  const savedId = readSessionValue(selectedBearKey);
  return bears.find((bear) => bear.id === savedId) ?? null;
}

function getSubmissionState(): boolean {
  return readSessionValue(submissionKey) === "yes";
}

export function GiftProvider({ children }: { children: ReactNode }) {
  const [selectedBear, setSelectedBearState] = useState<Bear | null>(
    getSavedBear,
  );
  const [submissionComplete, setSubmissionComplete] =
    useState(getSubmissionState);

  function setSelectedBear(bear: Bear) {
    setSelectedBearState(bear);
    writeSessionValue(selectedBearKey, bear.id);
  }

  function markSubmissionComplete() {
    setSubmissionComplete(true);
    writeSessionValue(submissionKey, "yes");
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

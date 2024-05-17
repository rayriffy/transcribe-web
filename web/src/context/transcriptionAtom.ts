import { atom } from "nanostores";
import { useStore } from "@nanostores/react";

import { TranscriptionResponse } from "../types.ts";

export const transcriptionAtom = atom<TranscriptionResponse | null>(null);
export const useTranscriptionAtom = () => useStore(transcriptionAtom);

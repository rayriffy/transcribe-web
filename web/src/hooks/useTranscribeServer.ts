import { useEffect } from "react";
import { transcribeServer } from "../externals/transcribeServer.ts";
import {
  transcriptionAtom,
  useTranscriptionAtom,
} from "../context/transcriptionAtom.ts";
import { TranscriptionResponse } from "../types.ts";

const pollRate = 2 * 100;

export const useTranscribeServer = () => {
  const transcription = useTranscriptionAtom();

  const serverHandler = async (response: Response) => {
    if (!response.ok) return;
    try {
      const d = (await response.json()) as TranscriptionResponse;

      transcriptionAtom.set(d);

      if (d.resultTh?.isFinal === true || d.result?.isFinal === true) {
        // console.log("resetActiveBlock");
        await transcribeServer.reset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const poll = async () => {
    try {
      // console.log("poll");
      const atomValue = transcriptionAtom.get();
      const repsonse = await transcribeServer.poll(atomValue?.time ?? "");
      await serverHandler(repsonse);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(poll, pollRate);
    }
  };

  useEffect(() => {
    // console.log("transcribe");
    transcribeServer
      .transcribe()
      .then((r) => serverHandler(r))
      .finally(() => setTimeout(poll, pollRate));
  }, []);

  return transcription;
};

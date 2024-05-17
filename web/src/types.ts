export interface TranscriptionResult {
  segments: [
    textStartIndex: number,
    textLength: number,
    confidence: number,
    timeStartSeconds: number,
    durationSeconds: number,
  ][];
  isFinal: boolean;
  text: string;
}

export interface TranscriptionResponse {
  result?: TranscriptionResult;
  resultTh?: TranscriptionResult;
  time: string;
}

export interface Block {
  th: string;
  en: string;
}

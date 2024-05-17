/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRANSCRIBE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { useTranscribeServer } from "./hooks/useTranscribeServer.ts";
import { useTranscribe } from './hooks/useTranscribe.ts'
import { ActiveBlock } from './components/activeBlock.tsx'

export const App = () => {

  useTranscribeServer()
  useTranscribe();

  return (
    <main className={"p-4 overflow-hidden h-[100dvh] relative w-full"}>
      <ActiveBlock />
    </main>
  );
};

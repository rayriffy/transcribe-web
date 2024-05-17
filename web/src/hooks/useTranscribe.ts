import { useLanguageAtom } from '../context/languageAtom.ts'
import { useEffect } from 'react'
import { activeBlockAtom } from '../context/activeBlockAtom.ts'
import { transcriptionAtom } from '../context/transcriptionAtom.ts'

export const useTranscribe = () => {
  const language = useLanguageAtom()

  useEffect(() => {
    const interval = setInterval(() => {
      const rawTranscription = transcriptionAtom.get()
      const targetTranscribedLanguage = language === 'en' ?
        rawTranscription?.result?.text : rawTranscription?.resultTh?.text

      activeBlockAtom.setKey(language, targetTranscribedLanguage ?? '')
      activeBlockAtom.setKey('at', new Date())
    }, 400)

    return () => clearInterval(interval)
  }, [language]);
}

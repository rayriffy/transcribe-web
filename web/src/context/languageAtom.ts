import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'

export const languageAtom = atom<'en' | 'th'>('th')
export const useLanguageAtom = () => useStore(languageAtom)

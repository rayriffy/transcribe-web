import { useEffect } from 'react'
import { backend } from '../externals/backend.ts'
import {
  translateActiveBlockAtom,
  useTranslateActiveBlockAtom,
} from '../context/translateActiveBlockAtom.ts'

export const useTranslate = (input: string, language: 'en' | 'th') => {
  const { active, value } = useTranslateActiveBlockAtom()

  useEffect(() => {
    console.log('[useTranslate]: start')
    translateActiveBlockAtom.setKey('active', true)

    if (input === '') {
      translateActiveBlockAtom.setKey('value', '')
      translateActiveBlockAtom.setKey('active', false)

      console.log('[useTranslate]: stop')
      return
    }

    backend.translate.get({
      $query: {
        text: input,
        to: language,
      },
    }).then(({ data, error }) => {
      if (!error && data !== null)
        translateActiveBlockAtom.setKey('value', data.text)
    }).finally(() => {
      console.log('[useTranslate]: stop')
      translateActiveBlockAtom.setKey('active', false)
    })
  }, [input, language]);

  return {
    active,
    value,
  }
}

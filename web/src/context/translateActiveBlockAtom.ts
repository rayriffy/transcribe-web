import { map } from 'nanostores'
import { useStore } from '@nanostores/react'

interface Value {
  active: boolean
  value: string
}

export const translateActiveBlockAtom = map<Value>({
  active: false,
  value: '',
})

export const useTranslateActiveBlockAtom = () => useStore(translateActiveBlockAtom)

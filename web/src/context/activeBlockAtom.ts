import { map } from 'nanostores'
import { TranscribedBlock } from '../@types/TranscribedBlock.ts'
import { useStore } from '@nanostores/react'

export const activeBlockAtom = map<TranscribedBlock>({
  th: '',
  en: '',
  stable: false,
  at: new Date()
})

export const useActiveBlockAtom = () => useStore(activeBlockAtom)

import {
  activeBlockAtom,
  useActiveBlockAtom,
} from '../context/activeBlockAtom.ts'
import { useLanguageAtom } from '../context/languageAtom.ts'
import { useEffect, useState } from 'react'
import { useTranslate } from '../hooks/useActiveBlockTranslate.ts'
import { clsx } from 'clsx'

export const ActiveBlock = () => {
  const activeBlock = useActiveBlockAtom()
  const language = useLanguageAtom()

  const [c, setC] = useState<string>('')
  const { active, value } = useTranslate(c, language === 'en' ? 'th' : 'en')

  useEffect(() => {
    const interval = setInterval(() => {
      const val = activeBlockAtom.get()
      setC(language === 'th' ? val.th : val.en)
    }, 2000)

    const val = activeBlockAtom.get()
    setC(language === 'th' ? val.th : val.en)

    return () => clearInterval(interval)
  }, [language])

  return (
    <div className="grid grid-cols-2 gap-4 leading-relaxed absolute bottom-8">
      <p className={clsx("tracking-wider", active && language !== 'th' ? 'text-gray-700' : undefined)}>{language === 'th' ? activeBlock.th : value}</p>
      <p className={language !== 'th' ? 'text-gray-700' : undefined}>{language === 'en' ? activeBlock.en : value}</p>
    </div>
  )
}

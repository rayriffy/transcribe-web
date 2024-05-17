export interface TranscribedBlock {
  th: string
  en: string
  stable: boolean // true means no longer to call translation again
  at: Date
}

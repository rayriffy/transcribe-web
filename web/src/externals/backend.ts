import { edenTreaty } from '@elysiajs/eden'
import type { App } from '@transcriber/api/src'

export const backend = edenTreaty<App>('http://localhost:3000')

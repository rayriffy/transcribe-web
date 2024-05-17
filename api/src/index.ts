import { Elysia, t } from "elysia";
import { translate } from 'google-translate-api-x';

export const app = new Elysia()
  .get("/translate", async ({ query }) => {
    try {
      const { text } = await translate(query.text, {
        to: query.to,
        forceBatch: true
      });

      return {
        text
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  }, {
    query: t.Object({
      text: t.String(),
      to: t.Union([
        t.Literal('en'),
        t.Literal('th'),
      ]),
    })
  })

export type App = typeof app

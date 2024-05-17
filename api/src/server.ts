import { app } from './index'
import { cors } from '@elysiajs/cors'

const server = app
  .use(cors())
  .listen(3000, () => {
    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
  });

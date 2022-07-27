import * as trpc from '@trpc/server';
import { z } from 'zod';
import axios from 'axios';

export const appRouter = trpc
  .router()
  .query('getFavCatFact', {
    async resolve() {
      const catFact = await axios.get('https://meowfacts.herokuapp.com/');
      // console.log(catFact.data.data);
      return {
        catFact: catFact.data.data,
      };
    },
  })
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

import { type z } from 'zod';

import { type serverEnvSchema } from '../config/validated-server-env.mjs';

type ValidatedProcessEnv = z.infer<typeof serverEnvSchema>;

declare global {
  declare namespace NodeJS {
     
    export interface ProcessEnv extends ValidatedProcessEnv {}
  }
}

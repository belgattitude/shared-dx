// @ts-check

import pc from 'picocolors';
import { z } from 'zod';

/**
 * All that is used on the server side / from nextjs config (NEXT_PUBLIC as well)
 */
export const serverEnvSchema = z.object({});

export const getValidatedServerEnv = () => {
  const parsedEnv = serverEnvSchema.safeParse(process.env);
  if (!parsedEnv.success) {
    if (process) {
      console.error(
        pc.red('error'.padEnd(6)).concat('- Invalid server env(s):'),
        Object.keys(parsedEnv.error.flatten().fieldErrors).join(',')
      );
      console.error(JSON.stringify(parsedEnv.error.format(), null, 2));
      process.exit(1);
    } else {
      throw new Error(
        `Invalid server env(s): ${JSON.stringify(
          parsedEnv.error.format(),
          null,
          2
        )}}`
      );
    }
  }
  return parsedEnv.data;
};

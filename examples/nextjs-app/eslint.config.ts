import { bases } from '@belgattitude/eslint-config-bases';
import { defineConfig } from 'eslint/config';

const config = defineConfig([
    {
        ignores: [
            // ...filePatterns.globalIgnore,
            'package.json',
            '*.lock',
            'tsconfig.json',
            '.next/**',
            'next-env.d.ts',
            'tsconfig.*.json'
        ],
    },
    ...bases.typescript,
    ...bases.simpleImportSort,
    ...bases.importX,
    ...bases.sonar,
    ...bases.regexp,
    ...bases.vitest,
    ...bases.react,
    ...bases.reactQuery,
    ...bases.reactTestingLibrary,
    ...bases.storybook,
]);

export default config;

import {baseImportXConfig} from './bases/import-x.mjs'
import { baseOxfmtConfig } from './bases/oxfmt.mjs';
import { baseReactConfig } from './bases/react.mjs';
import { baseReactQueryConfig } from './bases/react-query.mjs';
import { baseReactTestingLibraryConfig } from './bases/react-testing-library.mjs';
import { baseRegExpConfig } from './bases/regexp.mjs';
import { baseSimpleImportSortConfig } from './bases/simple-import-sort.mjs';
import { baseSonarConfig } from './bases/sonar.mjs';
import { baseStorybookConfig } from './bases/storybook.mjs';
import { baseTypescriptConfig } from './bases/typescript.mjs';
import { baseUnicornConfig } from './bases/unicorn.mjs';
import { baseVitestConfig } from './bases/vitest.mjs';

export const bases = {
  typescript: baseTypescriptConfig,
  reactTestingLibrary: baseReactTestingLibraryConfig,
  vitest: baseVitestConfig,
  importX: baseImportXConfig,
  react: baseReactConfig,
  reactQuery: baseReactQueryConfig,
  sonar: baseSonarConfig,
  storybook: baseStorybookConfig,
  regexp: baseRegExpConfig,
  simpleImportSort: baseSimpleImportSortConfig,
  oxfmt: baseOxfmtConfig,
  unicorn: baseUnicornConfig
};

export const allBases = [
  ...baseTypescriptConfig,
  ...baseReactTestingLibraryConfig,
  ...baseVitestConfig,
  ...baseImportXConfig,
  ...baseReactConfig,
  ...baseReactQueryConfig,
  ...baseSonarConfig,
  ...baseStorybookConfig,
  ...baseRegExpConfig,
  ...baseSimpleImportSortConfig,
  // ...baseOxfmtConfig,
  ...baseUnicornConfig
];
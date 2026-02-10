// @ts-check
import {
    getPrettierConfig,
} from "./src/helpers/index.mjs";

/**
 * @type {import('prettier').Config}
 */
const prettierConfig = {
    ...getPrettierConfig(),
    overrides: [
        // whatever you need
    ],
};

export default prettierConfig;

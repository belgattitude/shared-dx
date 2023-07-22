import '../src/styles/globals.css';

import type { Preview } from '@storybook/react';
import { FontLoaderInter } from "../src/components/fonts/FontInter";
import type { FC, PropsWithChildren } from "react";

const CssVariableFonts: FC<PropsWithChildren> = ({children}) => (
    <FontLoaderInter>{children}</FontLoaderInter>
)

const preview: Preview = {
    decorators: [
        (Story) => (
            <CssVariableFonts>
                <Story/>
            </CssVariableFonts>
        ),
    ],
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    }
};

export default preview;

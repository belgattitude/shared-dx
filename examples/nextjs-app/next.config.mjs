// @ts-check

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import nextMdx from '@next/mdx';
import { createSecureHeaders } from 'next-secure-headers';

import { getValidatedServerEnv } from './src/config/validated-server-env.mjs';

const _serverEnv = getValidatedServerEnv();

const _workspaceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..'
);

const withMDX = nextMdx({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';
const enableCSP = true;

const trueEnv = ['true', '1', 'yes'];
const NEXTJS_IGNORE_TYPECHECK = trueEnv.includes(
  process.env?.NEXTJS_IGNORE_TYPECHECK ?? 'false'
);
const NEXTJS_PROD_SOURCE_MAPS = trueEnv.includes(
  process.env?.NEXTJS_PROD_SOURCE_MAPS ?? 'true'
);

// @link https://github.com/jagaapple/next-secure-headers
const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives: enableCSP
      ? {
          defaultSrc: "'self'",
          // 'unsafe-inline' for emotion... possible to add a hash too
          styleSrc: ["'self'", "'unsafe-inline'"],
          // 'unsafe-inline' for react-markdown
          scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
          scriptSrcElem: [
            "'self'",
            "'unsafe-eval'",
            "'unsafe-inline'",
            'blob:', // for threejs to work
          ],
          frameSrc: ["'self'"],
          connectSrc: ["'self'"],
          imgSrc: ["'self'", 'https:', 'http:', 'data:'],
          mediaSrc: ["'self'", 'https:', 'http:'],
          workerSrc: ['blob:'],
        }
      : {},
  },
  ...(enableCSP
    ? {
        forceHTTPSRedirect: [
          true,
          { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
        ],
      }
    : {}),
  referrerPolicy: 'same-origin',
});

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  httpAgentOptions: {
    keepAlive: true,
  },

  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        // All page routes, not the api ones
        source: '/:path((?!api).*)*',
        headers: [
          ...secureHeaders,
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
        ],
      },
    ];
  },

  // output: 'standalone',

  experimental: {
    mdxRs: true,
    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    esmExternals: true,
  },

  typescript: {
    ignoreBuildErrors: NEXTJS_IGNORE_TYPECHECK,
  },
  productionBrowserSourceMaps: NEXTJS_PROD_SOURCE_MAPS,
  compiler: {
    ...(process.env.NODE_ENV === 'production'
      ? {
          removeConsole: {
            exclude: ['error', 'warning'],
          },
          reactRemoveProperties: {
            properties: ['^data-testid$'],
          },
        }
      : {}),
  },
};

const withPlugins = () => {
  /**
   * @type {Array<(config: import('next').NextConfig) => import('next').NextConfig>}
   */
  const plugins = [
    ...(process.env.ANALYZE === 'true'
      ? [
          withBundleAnalyzer({
            enabled: true,
          }),
        ]
      : []),
    withMDX,
  ];
  // eslint-disable-next-line unicorn/no-array-reduce
  return plugins.reduce((acc, next) => next(acc), nextConfig);
};

export default withPlugins;

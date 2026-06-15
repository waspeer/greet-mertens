// @ts-check
import { configs, prefixFiles } from '@waspeer/config/eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  configs.base,
  prefixFiles(configs.react, 'sanity'),
  [{ ignores: ['**/.netlify', '**/.sanity', '**/.astro', '**/dist'] }],
].flat();

export default config;

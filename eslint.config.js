// @ts-check
import { configs, prefixFiles } from '@waspeer/config/eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  configs.base,
  prefixFiles(configs.react, 'sanity'),
  [{ ignores: ['**/.astro', '**/.claude', '**/.netlify', '**/.sanity', '**/dist'] }],
].flat();

export default config;

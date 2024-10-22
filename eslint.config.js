// @ts-check
import { configs, prefixFiles } from '@waspeer/config/eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  configs.base,
  prefixFiles(configs.react, 'sanity'),
  [{ ignores: ['**/.netlify', '**/.sanity', '**/dist'] }],
].flat();

export default config;

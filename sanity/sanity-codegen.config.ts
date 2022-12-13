import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './src/schemas/schema.ts',
  outputPath: '../astro/src/lib/sanity.gen.ts',
};

export default config;

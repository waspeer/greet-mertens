interface ImportMetaEnv {
  MODE: "test" | "development" | "production";
  SNOWPACK_PUBLIC_SANITY_PROJECT: string;
  SNOWPACK_PUBLIC_SANITY_DATASET: string;
  SNOWPACK_PUBLIC_SANITY_TOKEN: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

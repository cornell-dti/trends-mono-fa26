/// <reference types="vite/client" />

interface importMetaEnv {
  readonly VITE_SUPER_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

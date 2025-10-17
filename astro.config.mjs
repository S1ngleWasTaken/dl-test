// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      OAUTH_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
    },
  },

  integrations: [react()],

  adapter: node({
    mode: 'standalone'
  })
});
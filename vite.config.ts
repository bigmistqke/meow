import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import solid from 'vite-plugin-solid'
import tsconfig from 'vite-tsconfig-paths'

export default defineConfig({
  base: './',
  plugins: [solid(), mkcert(), tsconfig()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})

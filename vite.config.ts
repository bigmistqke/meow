import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: './',
  plugins: [solid(), mkcert()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['index.html', 'blog/index.html', 'blog/faking-art.html', 'blog/pec-synth.html'],
    },
  },
})

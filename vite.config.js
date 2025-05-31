import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const GITHUB_REPO_NAME = 'tailwindcss';
export default defineConfig({
  base: `/${GITHUB_REPO_NAME}/`,
  plugins: [react(),tailwindcss(),],
  build: {
    outDir: 'dist',
  },
})

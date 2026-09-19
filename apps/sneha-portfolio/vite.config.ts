import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Base is `/portfolios/` for project Pages at snasa045.github.io/portfolios/.
// When you move to a custom domain or username.github.io repo, change to '/'.
export default defineConfig({
  base: '/portfolios/',
  plugins: [react()],
})

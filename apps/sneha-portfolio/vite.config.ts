import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Base is `/portfolios/sneha/` for project Pages at snasa045.github.io/portfolios/sneha/.
// When you move to a custom domain or username.github.io repo, change to '/'
// (or '/sneha/' if serving both portfolios from one site).
export default defineConfig({
  base: '/portfolios/sneha/',
  plugins: [react()],
})

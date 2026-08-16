import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Login-Page/', // Add this line
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/5COSC026C.1-CW2/' : '/',
  plugins: [react()],
  json: {
    stringify: false,
  },
})

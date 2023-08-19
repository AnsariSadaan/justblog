import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
  
// })

export default defineConfig({
  // ... other config properties
  server: {
    proxy: {
      '/server': 'http://localhost:3000'
    }
  },
  plugins: [react()],
});
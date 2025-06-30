import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/call-details": {            
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    }
  }
})

//  we are going to proxy any request from this url to now go to this target, which is where our backend api is running

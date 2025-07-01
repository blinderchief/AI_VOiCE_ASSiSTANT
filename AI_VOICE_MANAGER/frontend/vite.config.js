import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/call-details":{
        "target": "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    } // we now proxy any request from this url(/call-details) to now go to the target where our backend api is running 
  }
})

// to avoid cross origin resource sharing error we have to set up proxy
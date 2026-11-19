import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {execSync} from 'node:child_process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:  {
    __LAST_COMMIT_DATE__:  JSON.stringify(
      execSync('git log -1  --format=%cs').toString().trim()
    )
  },
  base: '/'
})

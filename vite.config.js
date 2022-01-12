import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$assets: path.resolve('./src/assets')
				}
			},
  plugins: [svelte()]
})

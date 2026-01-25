import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import {resolve} from 'node:path'

export default defineConfig({
    plugins: [
        tailwindcss(),
        devtoolsJson(),
    ],
    build: {
        rollupOptions: {
            input: {
                // Define an entry point for the main index.html
                main: resolve(__dirname, 'index.html'),
                // Define an entry point for the nested index.html
                nested: resolve(__dirname, 'cover/index.html'),
            },
        },
    },
})

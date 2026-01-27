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
                main: resolve(__dirname, 'index.html'),
                cover: resolve(__dirname, 'cover/index.html'),
                // "cover-wip": resolve(__dirname, 'wip/cover.html'),
                wip: resolve(__dirname, 'wip/index.html'),
            },
        },
    },
})

const { resolve, join } = require('path')
const { defineConfig } = require('vite');

module.exports = defineConfig({
    root: join(__dirname, './src'),
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.html')
            }
        }
    },
    plugins: []
})
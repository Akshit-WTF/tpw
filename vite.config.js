const { resolve, join } = require('path')
const { defineConfig } = require('vite');

module.exports = defineConfig({
    root: join(__dirname, './src'),
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.html'),
                about: resolve(__dirname, './src/about.html'),
                domain_info: resolve(__dirname, './src/domain-info.html'),
                docs: resolve(__dirname, './src/docs/index.html'),
                whois: resolve(__dirname, './src/whois.html'),
                adc: resolve(__dirname, './src/adc_report.html'),
                supporters: resolve(__dirname, './src/supporters.html'),
                "404": resolve(__dirname, './src/404.html'),
            }
        }
    },
    plugins: []
})
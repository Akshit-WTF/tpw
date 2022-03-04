module.exports = {
    content: ["./src/*.*", "./src/**/*.*", "./partials/*.*"],
    theme: {
        extend: {},
    },
    plugins: [require('tailwindcss'),
        require('autoprefixer'),
        require('tailwindcss-animatecss'),
        require('@tailwindcss/forms')],
    variants: {

    }
}

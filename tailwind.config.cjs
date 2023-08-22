const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.astro',
        './src/**/*.{astro,js,jsx,ts,tsx,vue}',
        'node_modules/preline/dist/*.js',
    ],
    theme: {},
    plugins: [require('preline/plugin')],
}

const defaultTheme = require('tailwindcss/defaultTheme')
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.astro',
        './src/**/*.{astro,js,jsx,ts,tsx,vue}',
        'node_modules/preline/dist/*.js',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      },

    plugins: [nextui({
      themes: {
        light: {
          colors: {
            background: "#EDF2FF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#e60d54",
            },
            // ... rest of the colors
          },
        }
      },
    }), require("daisyui")],
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#e60d54",
            "base-100": "#EDF2FF",
          },
        },
      ],
    },
}

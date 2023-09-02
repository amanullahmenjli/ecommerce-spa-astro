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
      themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: false, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
}

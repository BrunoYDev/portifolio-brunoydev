import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#623CEA",
          500: "#311E75"
        },
        secondary: {
          900: "#50CF9A",
          500: "#E5F8F0",
        },
        tertiary: {
          900: "#FF577F",
          500: "#311E75"
        },
        quartiary: {
          900: "#506CCF",
          500: "#E5E9F8"
        },
        social_media: {
          facebook: "#506CCF",
          instagram: "#CF50AC",
          linkedin: "#0E76A8"
        },
        grey: {
          500: "#0A0A0B",
          400: "#212529",
          300: "#868E96",
          200: "#E9ECEF",
          100: "#F8F9FA"
        }
      }
    },
  },
  plugins: [],
}
export default config

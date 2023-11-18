import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        line: 'rgba(159, 166, 173, 0.16)',
        tsecondary: 'rgb(185,185,185)',
        backgroundHoverLink: 'rgb(201 201 201 / .06)',
        backgroundCurrentLink: 'rgb(221 221 221 / .1)',
        backgroundCurrentLinkHover: 'rgb(221 221 221 / .15)'
      }
    }
  },
  plugins: []
}
export default config

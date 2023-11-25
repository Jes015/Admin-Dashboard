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
      colors: {
        primaryBackground: '#1a191b',
        line: 'rgba(159, 166, 173, 0.16)',
        tprimary: 'rgb(238, 238, 240)',
        tsecondary: 'rgb(185,185,185)',
        icon: 'rgb(145,145,145)',
        backgroundHover: 'rgb(201 201 201 / .06)',
        backgroundCurrent: 'rgb(221 221 221 / .1)',
        backgroundCurrentHover: 'rgb(221 221 221 / .15)',
        link: '#b1a9ff'
      }
    }
  },
  plugins: []
}
export default config

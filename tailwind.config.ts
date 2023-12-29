import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      'fira':"fira code",
     },
     colors:{
      primary:"#E5E9F0",
      code: "#607B96",
      blue: "#4D5BCE",
      bgprimary:"#011627",
      border:"#1E2D3D",
      main:"#1E2D3D",       
     }
   
    },
  },
  plugins: [],
}
export default config

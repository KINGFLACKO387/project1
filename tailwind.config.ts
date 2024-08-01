import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      'desktop-image' : "url(/bg-sidebar-desktop.svg)",
      'mobile-image' : "url(/bg-sidebar-mobile.svg)",
        
  },

  backgroundColor : {
      'Marine-blue' : 'hsl(213, 96%, 18%)',
      'Purplish-blue' : 'hsl(243, 100%, 62%)',
      'Pastel-blue' : 'hsl(228, 100%, 84%)',
      'Light-blue' : 'hsl(206, 94%, 87%)',
      'Strawberry-red': 'hsl(354, 84%, 57%)',
      'cool-gray' : 'hsl(231, 11%, 63%)',
      'Light-gray': 'hsl(229, 24%, 87%)',
      'Magnolia': 'hsl(217, 100%, 97%)',
      'Alabaster':'hsl(231, 100%, 99%)',
      'White': 'hsl(0, 0%, 100%)',
  },

  colors : {
      'cool-gray' : 'hsl(231, 11%, 63%)',
      'Marine-blue' : 'hsl(213, 96%, 18%)',
      'Strawberry-red': 'hsl(354, 84%, 57%)',
      'Light-gray': 'hsl(229, 24%, 87%)',
       'Purplish-blue' : 'hsl(243, 100%, 62%)',
       'Pastel-blue' : 'hsl(228, 100%, 84%)',
       'Magnolia': 'hsl(217, 100%, 97%)',
       'Alabaster':'hsl(231, 100%, 99%)',
  },
      
  fontFamily : {
     'Ubuntu': ['Ubuntu', 'sans-serif'],
  },
  
  inset : {
  '10p': '10%',
  '15p': '15%',
  '20p': '20%',
  '30p': '30%',
  '40p': '-40%',
  '50p': '50%',
  '55p': '-55%',
  '60p': '-60%',
  '70p': '-70%',
  '80p': '-80%',
  '90p': '90%',
  },
  height : {
 '90p' : '90%', 
  },
  width : {
'90p': '90%',
'110p': '110%',
  }
    },
  },
  plugins: [],
};
export default config;

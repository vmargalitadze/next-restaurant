

import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
center:true,
padding:'15px'
	},
	screens:{
		sm:'640px',
		md:'768px',
		lg:'960px',
		xl:'1200px'
	},
  	extend: {
		fontFamily:{
			lora:['var(--font-lora)', 'sans-serif'],
			poppins:['var(--font-poppins)', 'sans-serif'],
		},
		backgroundImage: {
			hero: 'url(/hero/7.jpg)  ',
			
			reservation: 'url(/reservation/bg.png)  ',
			footer: 'url(/footer/bg.png)  ',
		},
  		colors: {
			body: "#e5e5e5"   ,
			white:'#fff',
			green:{DEFAULT:'#539592', hover: '#40807d' } ,
			black:{DEFAULT:'#273029', heavy: '#1b211c' } ,
			grey:'#888888',
			orange:{DEFAULT:'#f2994a', hover: '#da863c' } ,
			outline: '#f1f1f1',
			pink:'#ffa5a5',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
		
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
			boxShadow: { primary:'40px 4px 40px 0px rgba(68, 68, 68, 0.25)' },
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
		
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

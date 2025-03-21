
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Outfit', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1E3A8A', // Deep blue
					foreground: '#F8FAFC', // Soft white
					accent: '#06B6D4', // Cyan
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#06B6D4', // Cyan
					foreground: '#F8FAFC', // Soft white
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.9)' },
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
				'gradient-y': {
					'0%, 100%': {
						'background-position': '50% 0%',
					},
					'50%': {
						'background-position': '50% 100%',
					},
				},
				'border-flow': {
					'0%, 100%': {
						'border-color': 'rgba(6, 182, 212, 0.7)',
					},
					'50%': {
						'border-color': 'rgba(30, 58, 138, 0.7)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'floating': 'floating 3s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'gradient-x': 'gradient-x 10s ease infinite',
				'gradient-y': 'gradient-y 10s ease infinite',
				'border-flow': 'border-flow 4s ease infinite',
			},
			backgroundImage: {
				'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTAiIHZpZXdCb3g9IjAgMCAxNDQwIDc5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLTI5OC43IDQ0Mi4xQy0yOTguNyA0NDIuMSAtMjk4LjcgNDQyLjEgLTI5OC43IDQ0Mi4xQy0yOTguNyA0NDIuMSAtMTcxLjMgNDE0LjYgLTg4LjMgNDk3LjZDLTUuMyA1ODAuNiAyMy45IDc0Mi41IDIzLjkgNzQyLjVDMjMuOSA3NDIuNSAxODguOSA4NTkuMiAzMjcuNCA4MTEuMkM0NjUuOSA3NjMuMiA0NjkuMyA2MjQuNyA1NDkuOCA1NDQuMkM2MzAuMyA0NjMuNyA3NjUuOCA0NjMuNCA5MDEuMyA0NDAuMkMxMDM2LjggNDE3IDExMDggMjc1LjEgMTIyNi4yIDI0MC45QzEzNDQuNCAyMDYuNyAxNDQwIDE1MC4yIDE1NzAgMTUwLjJDMTcwMCAxNTAuMiAxODE5LjUgMzA2LjYgMTk0OS40IDI0MC45QzIwNzkuMyAxNzUuMiAyMDc5LjMgMTA1LjIgMjE5NyAxMDUuMkMyMzE0LjcgMTA1LjIgMjg2NS45IDk2MS40IDMyNzEuMiA0NDIuMUMzNjc2LjQgLTc3LjIgMzEzOC44IC0xNTkgMjg2NS45IC0yNDYuNkMyNTkzIC0zMzQuMyAyMTk0LjcgLTMzNC4zIDIwMTguMiAtMzM0LjNDMTg0MS43IC0zMzQuMyAxODQxLjcgLTE1OSAxNjQxLjQgLTE1OUMxNDQxLjEgLTE1OSAxNDQxLjEgLTI0Ni42IDEyNjMuMiAtMjQ2LjZDMTA4NS4zIC0yNDYuNiAxMDY2LjggLTIxMS4xIDkwMS4zIC0xNTlDNzM1LjggLTEwNi45IDcwNS41IC05My4yIDU0OS44IC05My4yQzM5NC4xIC05My4yIDM2MS40IC0xNTkgMTk1LjkgLTE1OUMzMC4zIC0xNTkgMTEzLjMgLTQyLjEgLTcuOSA3OC41Qy0xMjkuMiAxOTkuMSAtMjk4LjcgMzE4LjQgLTI5OC43IDQ0Mi4xWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjE0ODYuMiIgeTE9Ijc4MC45NDMiIHgyPSIxNDg2LjIiIHkyPSItMzM0LjI3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwNkI2RDQiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFFM0E4QSIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

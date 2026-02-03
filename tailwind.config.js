/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0090D4', // The sidebar blue
                    light: '#E6F4FB',
                    dark: '#0072A8',
                },
                secondary: {
                    DEFAULT: '#F5F5F5', // Background gray
                    dark: '#E5E5E5',
                },
                accent: {
                    orange: '#FF8A00', // Priority badge
                    green: '#4CAF50', // Success/Open status
                    red: '#F44336', // Error/Close status
                },
                text: {
                    DEFAULT: '#333333',
                    muted: '#666666',
                    light: '#999999',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 2px 8px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}

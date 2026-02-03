/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                display: ["Cinzel", "serif"],
                body: ["Inter", "sans-serif"],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
                // Mythological Colors
                obsidian: {
                    DEFAULT: "hsl(var(--obsidian))",
                    light: "hsl(var(--obsidian-light))",
                },
                gold: {
                    DEFAULT: "hsl(var(--gold))",
                    light: "hsl(var(--gold-light))",
                    dark: "hsl(var(--gold-dark))",
                },
                norse: {
                    DEFAULT: "hsl(var(--norse-blue))",
                    glow: "hsl(var(--norse-blue-glow))",
                },
                greek: {
                    DEFAULT: "hsl(var(--greek-ember))",
                    glow: "hsl(var(--greek-ember-glow))",
                },
                divine: "hsl(var(--divine-white))",
                mist: "hsl(var(--mist))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(40px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "glow-pulse": {
                    "0%, 100%": { boxShadow: "0 0 20px hsl(43 74% 49% / 0.3)" },
                    "50%": { boxShadow: "0 0 40px hsl(43 74% 49% / 0.6)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "rotate-slow": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                "particle-rise": {
                    "0%": { opacity: "0", transform: "translateY(100px) scale(0)" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0", transform: "translateY(-100px) scale(1)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.8s ease-out forwards",
                "fade-in-up": "fade-in-up 1s ease-out forwards",
                "scale-in": "scale-in 0.5s ease-out forwards",
                "glow-pulse": "glow-pulse 3s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "rotate-slow": "rotate-slow 30s linear infinite",
                "particle-rise": "particle-rise 4s ease-out infinite",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-divine": "linear-gradient(180deg, hsl(43 74% 49% / 0.1), transparent)",
                "gradient-realm": "linear-gradient(180deg, hsl(240 10% 4%), hsl(240 10% 8%), hsl(240 10% 4%))",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

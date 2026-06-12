/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core brand tokens (committed — see DESIGN.md)
        ink: '#0E0E10', // primary dark background
        charcoal: '#1C1C1F', // secondary dark surface / cards on dark
        warm: '#F5F4F0', // off-white content background
        asphalt: '#E85D2D', // orange accent — CTAs, dividers, key figures (sparingly)
        aggregate: '#8A8780', // muted gray — labels, borders, secondary text on dark
        certgreen: '#2E7D5B', // certification / compliance badges only

        // Derived helpers
        'asphalt-deep': '#C8431A', // darker orange for hover/active fills
        'ink-line': 'rgba(255, 255, 255, 0.10)', // hairline borders on dark surfaces
        'warm-line': '#E2E0DA', // hairline borders on warm surfaces
        'warm-ink': '#26262A', // body text on warm (kept ≥4.5:1, unlike aggregate)
        'warm-mute': '#5C594F', // secondary text on warm that still passes AA
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display steps (clamp max ≤ ~5.5rem per design rules)
        'display-xl': ['clamp(2.75rem, 6vw + 1rem, 5.25rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw + 0.5rem, 2.75rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '68ch',
        content: '1200px',
      },
      letterSpacing: {
        chip: '0.14em',
        label: '0.18em',
      },
      zIndex: {
        base: '0',
        raised: '10',
        sticky: '100',
        header: '200',
        backdrop: '300',
        modal: '400',
        toast: '500',
      },
      transitionTimingFunction: {
        // Single site-wide ease-out curve (quint-ish)
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        lift: '0 18px 40px -24px rgba(14, 14, 16, 0.55)',
        'lift-warm': '0 24px 50px -28px rgba(14, 14, 16, 0.22)',
      },
      backgroundImage: {
        // Directional hero gradient: darkest at bottom-left (where text sits), photo visible top-right
        'hero-veil':
          'linear-gradient(105deg, rgba(14,14,16,0.94) 0%, rgba(14,14,16,0.82) 32%, rgba(14,14,16,0.45) 64%, rgba(14,14,16,0.20) 100%)',
        'hero-veil-b':
          'linear-gradient(to top, rgba(14,14,16,0.96) 0%, rgba(14,14,16,0.55) 38%, rgba(14,14,16,0.18) 70%, rgba(14,14,16,0.30) 100%)',
      },
    },
  },
  plugins: [],
}

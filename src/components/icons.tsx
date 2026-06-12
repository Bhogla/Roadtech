import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
})

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

export const WhatsApp = (p: IconProps) => (
  <svg {...base({ strokeWidth: 0, fill: 'currentColor', ...p })}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.23 8.23 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.24-8.23 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
)

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

export const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Plus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Factory = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M4 21V10l5 3V10l5 3V8l5 3v10" />
    <path d="M8 21v-4M13 21v-4M18 21v-4" />
  </svg>
)

export const Flask = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 3h6M10 3v6.5L5.2 17a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3" />
    <path d="M7.5 14h9" />
  </svg>
)

export const Cpu = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    <rect x="10" y="10" width="4" height="4" />
  </svg>
)

export const Road = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 21 8 3M18 21 16 3M12 5v2M12 11v2M12 17v2" />
  </svg>
)

export const Plane = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 14.5 14 13l-2 8-2-1 1-6-5 1-1.5 1.5L3 16l3-3-3-1 1.5-1L9 11l3-6 2 1-1 5 6.5-1.5L21 12Z" />
  </svg>
)

export const Flag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 22V4M5 4h11l-1.5 3L16 10H5" />
  </svg>
)

export const Layers = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 16.5 12 21l9-4.5" />
  </svg>
)

export const Beaker = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h12M8 3v7l-3.5 7A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.8-3L16 10V3" />
    <circle cx="11" cy="15" r="0.6" fill="currentColor" />
    <circle cx="14" cy="17" r="0.6" fill="currentColor" />
  </svg>
)

export const Handshake = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m11 17 2 2 4-4M3 11l4-4 5 4 3-2 6 5-3 3-4-3" />
    <path d="m3 11 3 3" />
  </svg>
)

export const Recycle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 19H5a2 2 0 0 1-1.7-3l2-3.3M12 4l1.8 3M17 8l2.7 4.6A2 2 0 0 1 18 16h-3" />
    <path d="m9 19 2.5 2L9 23v-4ZM7 7l-2.5.5L4 4l3 3ZM18 13l1 2.4 1.5-2L18 13Z" fill="currentColor" stroke="none" />
  </svg>
)

export const ShieldCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Users = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-4-5.6" />
  </svg>
)

export const Ear = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9a6 6 0 0 1 12 0c0 4-3 4-4 6.5-.6 1.5-1.6 2.5-3 2.5a3 3 0 0 1-3-3" />
    <path d="M9 9a3 3 0 0 1 5 2" />
  </svg>
)

export const Image = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="1.5" />
    <circle cx="8.5" cy="9.5" r="1.5" />
    <path d="m4 17 5-5 4 4 3-2 4 3" />
  </svg>
)

export const Facebook = (p: IconProps) => (
  <svg {...base({ strokeWidth: 0, fill: 'currentColor', ...p })}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
)

export const LinkedIn = (p: IconProps) => (
  <svg {...base({ strokeWidth: 0, fill: 'currentColor', ...p })}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

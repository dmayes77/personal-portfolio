const paths = {
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 4-3 16" />
    </>
  ),
  calendar: (
    <>
      <path d="M7 3v4M17 3v4M4 9h16" />
      <rect x="4" y="5" width="16" height="15" rx="2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  team: (
    <>
      <circle cx="8" cy="9" r="2.5" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
      <path d="M11.5 19a4.5 4.5 0 0 1 9 0" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c3 1 6 4 6 10-3.5 1-7 .25-9.75-2.5S6.75 5.5 8 2c6 0 6 2 6 2Z" />
      <path d="M9 13 4 18" />
      <path d="M10.5 8.5h.01" />
      <path d="M6 14c-1.5.5-3 2-4 4 2-.75 3.5-1.5 4-3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.25-4-2-6-2 M15 21v-3.5a3 3 0 0 0-.85-2.1c2.85-.3 5.85-1.4 5.85-6.4A5 5 0 0 0 18.5 5.6 4.65 4.65 0 0 0 18.4 2S17.2 1.7 15 3.2a13 13 0 0 0-6 0C6.8 1.7 5.6 2 5.6 2A4.65 4.65 0 0 0 5.5 5.6 5 5 0 0 0 4 9c0 5 3 6.1 5.85 6.4A3 3 0 0 0 9 17.5V21" />
  ),
  linkedin: (
    <>
      <path d="M7 9v8" />
      <path d="M7 6.25h.01" />
      <path d="M11 17V9" />
      <path d="M11 12.5a3 3 0 0 1 6 0V17" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
};

export default function Icon({ name, className }) {
  const path = paths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {path}
    </svg>
  );
}

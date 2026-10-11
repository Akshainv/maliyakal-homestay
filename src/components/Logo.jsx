export default function Logo({ light = false, size = 44, showWord = true }) {
  const ink = light ? '#F7F5EF' : '#234B38'
  const mark = light ? '#F7F5EF' : '#234B38'
  const glyph = light ? '#173729' : '#F7F5EF'
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`} style={{ color: ink }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill={mark} />
        <g stroke={glyph} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 28 24 16l13 12" />
          <path d="M15 28v8h18v-8" />
          <path d="M21 36v-6h6v6" />
        </g>
        <path d="M24 16c0-6 6-8 10-7-1 4-5 7-10 7Z" fill="#B79A62" />
      </svg>
      {showWord && (
        <span className="logo__word">
          <span className="logo__name">Maliyakal</span>
          <span className="logo__sub">Homestay</span>
        </span>
      )}
    </span>
  )
}

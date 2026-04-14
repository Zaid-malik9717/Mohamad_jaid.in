import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mohamad Jaid — AI/ML Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #020008 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-2px', display: 'flex' }}>
          Mohamad Jaid
        </div>
        <div style={{ fontSize: 32, color: '#a78bfa', marginTop: 16, display: 'flex' }}>
          AI / ML Engineer & Developer
        </div>
        <div style={{ fontSize: 20, color: '#6b7280', marginTop: 24, display: 'flex' }}>
          mohamadjaid.in
        </div>
      </div>
    ),
    { ...size }
  )
}

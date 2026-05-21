import { useState, useEffect } from 'react'


// ─── Load & sort pixel animation frames ──────────────────────────────────────
// Sequence: -6, -5, -4, -3, -2, -1, 0, 1, 2 … 15
const rawPixelFrames = import.meta.glob('../assets/thinking/*.png', { eager: true })
const pixelFrames = Object.entries(rawPixelFrames)
  .map(([path, mod]) => {
    const match = path.match(/=(-?\d+)\.png$/)
    return { num: parseInt(match[1], 10), src: mod.default }
  })
  .sort((a, b) => a.num - b.num)
  .map(f => f.src)


export default function ChatPage() {
  const [pixelIdx, setPixelIdx] = useState(0)

  // Pixel animation — ~80 ms per frame
  useEffect(() => {
    const id = setInterval(() => {
      setPixelIdx(i => (i + 1) % pixelFrames.length)
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col h-full bg-background">

      {/* ── Chat header — pixel anim flanked by stats ─────────────────────── */}
      <div
        className="shrink-0 flex items-center justify-center gap-3 px-5 border-b"
        style={{ height: 44, borderColor: '#262626' }}
      >
        <span className="text-xs" style={{ color: '#A3A3A3' }}>1 000 t/s ⚡</span>

        {/* Pixel animation — natural size, centered */}
        <img
          src={pixelFrames[pixelIdx]}
          alt=""
          style={{ display: 'block', flexShrink: 0 }}
          draggable={false}
        />

        <span className="text-xs" style={{ color: '#A3A3A3' }}>↑ 20% faster</span>
      </div>

      {/* ── Messages ──────────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-2xl flex flex-col gap-6">

          {/* User message bubble */}
          <div className="flex justify-end">
            <div
              className="text-sm text-foreground px-4 py-3 rounded-2xl rounded-br-sm max-w-sm"
              style={{ background: '#262626' }}
            >
              Come up with a strong password that will protect my data
            </div>
          </div>

          <span style={{
            fontSize: 13,
            fontWeight: 500,
            background: 'linear-gradient(90deg, #A3A3A3 0%, #A3A3A3 45%, #fff 50%, #A3A3A3 55%, #A3A3A3 100%)',
            backgroundSize: '400% 100%',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shine 2.5s linear infinite',
          }}>
            Thinking...
          </span>

        </div>
      </div>

      {/* ── Input bar ─────────────────────────────────────────────────────── */}
      <div className="shrink-0 px-4 pb-5">
        <div className="max-w-2xl mx-auto">
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl border"
            style={{ background: '#1A1A1F', borderColor: '#262626' }}
          >
            <input
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: '#A3A3A3' }}
              placeholder="Message FAR…"
              disabled
            />
            <button
              disabled
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#262626' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11V3M3 7l4-4 4 4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

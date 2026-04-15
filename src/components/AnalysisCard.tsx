import { useRef, useEffect } from 'react'

interface AnalysisCardProps {
  id: string
  title: string
  icon: string
  preview: string[]
  details: string[]
  videoSrc: string
  isExpanded: boolean
  onExpand: () => void
  onClose: () => void
}

export default function AnalysisCard({
  id,
  title,
  icon,
  preview,
  details,
  videoSrc,
  isExpanded,
  onExpand,
  onClose
}: AnalysisCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isExpanded && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked, user can still play manually
      })
    } else if (!isExpanded && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isExpanded])

  return (
    <div
      className={`relative h-full transition-all duration-300 ease-out ${
        isExpanded ? 'col-span-3 md:col-span-3' : 'col-span-1'
      }`}
    >
      <div
        className={`rounded-3xl border border-primary/10 bg-white overflow-hidden shadow-lg transition-all duration-300 ease-out h-full ${
          isExpanded
            ? 'scale-100 opacity-100'
            : 'hover:border-primary/20 hover:shadow-xl cursor-pointer'
        }`}
        onClick={!isExpanded ? onExpand : undefined}
      >
        {/* Preview State */}
        {!isExpanded && (
          <div className="p-8 h-full flex flex-col justify-between animate-in fade-in duration-300">
            <div>
              <div className="w-12 h-12 bg-primary/[0.03] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-6">{title}</h3>
              <ul className="space-y-3">
                {preview.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-on-surface-variant/80 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group">
              En savoir plus
              <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform text-lg">
                arrow_forward
              </span>
            </button>
          </div>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <div className="p-10 h-full flex flex-col animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/[0.03] rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary/10 rounded-xl transition-colors group"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
                  close
                </span>
              </button>
            </div>

            {/* Video and Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
              {/* Video Section */}
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-950 aspect-video">
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    controls
                    className="w-full h-full object-cover"
                    playsInline
                  />
                </div>
              </div>

              {/* Details Section */}
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  {details.map((detail, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-primary/[0.02] border border-primary/5">
                      <span className="material-symbols-outlined text-primary flex-shrink-0 text-xl">
                        check_circle
                      </span>
                      <p className="text-sm leading-relaxed text-on-surface-variant/85 font-medium">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import { useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 1800)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <section className="rounded-[32px] border border-white/10 bg-card/90 p-12 text-center shadow-glow backdrop-blur-xl">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/5 text-4xl text-white/80 shadow-inner shadow-[#6F5CFF]/20">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/15 border-t-[#6F5CFF]" />
        </div>
        <h2 className="text-3xl font-semibold text-white">Analyse en cours</h2>
        <p className="text-sm leading-7 text-white/70">
          NOOD analyse votre voix, langage corporel et structure de contenu.
          Cela prend seulement quelques secondes.
        </p>
      </div>
    </section>
  )
}

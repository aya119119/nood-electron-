interface ResultsScreenProps {
  onRestart: () => void
}

const insights = [
  {
    title: 'Voice',
    score: '88%',
    highlight: 'Ton clair, bonne modulation.',
    tip: 'Varie davantage l’intonation et prends des pauses pour accentuer les messages clés.'
  },
  {
    title: 'Body Language',
    score: '82%',
    highlight: 'Bonne posture et gestes ciblés.',
    tip: 'Ouvre un peu plus tes épaules et ajuste l’axe du regard vers la caméra.'
  },
  {
    title: 'Language & Content',
    score: '79%',
    highlight: 'Dynamique narrative intéressante.',
    tip: 'Raccourcis certaines phrases et clarifie le message principal pour gagner en impact.'
  }
]

export default function ResultsScreen({ onRestart }: ResultsScreenProps) {
  return (
    <section className="space-y-8 rounded-[32px] border border-white/10 bg-card/90 p-10 shadow-glow backdrop-blur-xl sm:p-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-white/40">Résultat</p>
          <h2 className="mt-4 text-5xl font-semibold text-white">Score de confiance</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            NOOD a analysé plusieurs dimensions et vous propose un diagnostic clair avec des actions prioritaires.
          </p>
          <div className="mt-8 rounded-[28px] bg-[#0F0866]/15 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">Performance globale</p>
            <p className="mt-3 text-6xl font-bold text-white">85%</p>
            <p className="mt-3 text-sm text-white/60">Satisfaction client sur le message, l’émotion et le rythme.</p>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0F0866]/10 p-8 text-white">
          <p className="text-sm uppercase tracking-[0.32em] text-white/60">Aperçu rapide</p>
          <p className="mt-3 text-lg font-semibold">Continuez à vous améliorer avec ces recommandations.</p>
          <button
            onClick={onRestart}
            className="mt-6 w-full rounded-3xl bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
          >
            Nouvelle analyse
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">{item.title}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.score}</p>
              </div>
              <div className="rounded-3xl bg-[#0F0866]/20 px-4 py-2 text-sm text-[#D8D3FF]">
                {item.highlight}
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/65">{item.tip}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

interface HomeScreenProps {
  onStart: () => void
}

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <section className="rounded-[32px] border border-white/10 bg-card/90 p-10 shadow-glow backdrop-blur-xl sm:p-12">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex rounded-full bg-[#0F0866]/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#c5c3ff] shadow-sm shadow-[#0F0866]/10">
          Parlons en public avec assurance
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Entraînez votre présence, votre voix et votre impact avec l'IA.
        </h1>
        <p className="max-w-2xl text-lg text-white/70">
          NOOD analyse vos vidéos, compare votre langage corporel et votre discours, puis vous donne des conseils clairs et actionnables.
        </p>
        <div className="flex flex-wrap gap-4 pt-3">
          <button
            onClick={onStart}
            className="rounded-3xl bg-nood px-7 py-4 text-base font-semibold text-white shadow-lg shadow-nood/30 transition hover:-translate-y-0.5 hover:bg-[#1a1090]"
          >
            Enregistrer une vidéo
          </button>
          <button className="rounded-3xl border border-white/10 bg-white/5 px-7 py-4 text-base text-white/80 transition hover:border-white/20 hover:text-white">
            Voir les modèles
          </button>
        </div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {[
          { label: 'Voice', value: 'Clarté', detail: 'Analyse automatique de l’intonation et du rythme.' },
          { label: 'Corps', value: 'Présence', detail: 'Évalue vos gestes, posture et énergie.' }
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{item.label}</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{item.value}</h2>
            <p className="mt-3 text-sm text-white/60">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

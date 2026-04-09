interface RecordScreenProps {
  onAnalyze: () => void
  onBack: () => void
}

export default function RecordScreen({ onAnalyze, onBack }: RecordScreenProps) {
  return (
    <section className="space-y-8 rounded-[32px] border border-white/10 bg-card/90 p-10 shadow-glow backdrop-blur-xl sm:p-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Enregistrer ou importer</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Préparez votre session de pratique.</h2>
          <p className="mt-3 text-sm text-white/65">
            Téléversez une vidéo ou lancez un enregistrement pour que NOOD analyse votre performance.
          </p>
        </div>
        <button
          onClick={onBack}
          className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:border-white/20 hover:text-white"
        >
          Retour
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-3xl border border-white/10 bg-[#0f0866]/10 p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-[#a7a2ff] shadow-inner shadow-[#0f0866]/20">
            <span className="text-4xl">⇪</span>
          </div>
          <p className="mt-6 text-lg font-semibold text-white">Déposer une vidéo</p>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Importez un fichier MP4 ou lancez l’enregistrement directement depuis l’app.
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-nood px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-nood/25 transition hover:bg-[#180f8b]">
            Importer un fichier
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="rounded-3xl bg-[#0F0866]/15 p-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0F0866] to-[#6F5CFF] text-4xl text-white shadow-lg shadow-[#0F0866]/30">
              🎤
            </div>
            <p className="mt-6 text-xl font-semibold text-white">Enregistrer une prise</p>
            <p className="mt-3 text-sm text-white/60">
              Cliquez pour démarrer un enregistrement rapide et obtenir un rapport complet.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-bg-main p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">Durée estimée</p>
              <p className="mt-2 text-2xl font-semibold text-white">2 min</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 text-white/75">
              <p className="text-sm font-semibold text-white">Conseil rapide</p>
              <p className="mt-2 text-sm text-white/60">
                Concentrez-vous sur la posture, puis parlez lentement et naturellement.
              </p>
            </div>
          </div>
          <button
            onClick={onAnalyze}
            className="mt-8 w-full rounded-3xl bg-nood px-6 py-4 text-base font-semibold text-white shadow-lg shadow-nood/30 transition hover:bg-[#1d13a1]"
          >
            Analyser ma vidéo
          </button>
        </div>
      </div>
    </section>
  )
}

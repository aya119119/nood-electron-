import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'

interface OnboardingPageProps {
  onBack?: () => void
}

export default function OnboardingPage({ onBack }: OnboardingPageProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    onBack?.()
    navigate('/')
  }
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <Header type="onboarding" />

      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 py-12 relative overflow-hidden">
        {/* Background Aura Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-12 text-center">
          <span className="font-[800] text-[#0F0866]">Par quoi </span>
          <span className="font-[500] italic text-[#5852B0]/80">commençons-nous ?</span>
        </h1>

        {/* Onboarding Canvas (Aura Card) */}
        <div className="aura-card w-full max-w-6xl rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(15,8,102,0.08)] flex flex-col md:flex-row min-h-[560px] bg-white">
          {/* Left Side: Video Upload Area */}
          <div className="flex-1 p-10 md:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-surface-container">
            <div className="w-full h-full border-2 border-dashed border-outline-variant/40 rounded-[2rem] bg-surface-container-low/30 flex flex-col items-center justify-center text-center p-8 transition-all hover:bg-surface-container-low/60 group cursor-pointer">
              <div className="w-20 h-20 bg-primary-container/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container text-5xl">cloud_upload</span>
              </div>
              <p className="text-on-surface-variant font-medium text-xl mb-8 max-w-xs leading-relaxed">
                Glissez votre enregistrement ici ou cliquez pour parcourir
              </p>
              <button className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-container/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined">video_library</span>
                Sélectionner un fichier
              </button>
              <p className="mt-6 text-xs text-outline font-medium uppercase tracking-widest">MP4, MOV, WEBM (Max 500MB)</p>
            </div>
          </div>

          {/* Right Side: Assistant IA Section */}
          <div className="flex-1 p-10 md:p-12 flex flex-col justify-between bg-surface-container-lowest/50">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-secondary-container/20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    auto_awesome
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-primary tracking-tight">Assistant IA</h2>
              </div>
              <p className="text-sm font-semibold text-outline mb-4 uppercase tracking-wider">Suggestions</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <button className="bg-surface-container-low text-on-surface-variant hover:bg-secondary-fixed text-sm py-3 px-6 rounded-full transition-all text-left font-medium max-w-full">
                  Ceci est mon PFE, évaluez ma présentation
                </button>
                <button className="bg-surface-container-low text-on-surface-variant hover:bg-secondary-fixed text-sm py-3 px-6 rounded-full transition-all text-left font-medium max-w-full">
                  Ceci est un pitch de 2 minutes pour un hackathon
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-container/20 to-primary-container/20 rounded-[1.5rem] blur opacity-30 group-focus-within:opacity-100 transition duration-1000"></div>
              <div className="relative bg-surface-container-low rounded-[1.5rem] p-2 flex flex-col">
                <textarea 
                  className="bg-transparent border-none focus:ring-0 w-full p-4 text-on-surface placeholder:text-outline text-lg min-h-[120px] resize-none"
                  placeholder="Décrivez votre projet ou collez votre script..."
                />
                <div className="flex justify-end p-2">
                  <button className="w-12 h-12 bg-primary-container text-white rounded-xl flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      send
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle instructional footer */}
        <div className="mt-12 text-outline text-sm font-medium flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">lock</span>
            Vos données sont chiffrées
          </div>
          <div className="w-1.5 h-1.5 bg-surface-container-highest rounded-full"></div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">bolt</span>
            Traitement en temps réel
          </div>
        </div>
      </main>
    </div>
  )
}

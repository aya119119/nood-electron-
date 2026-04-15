import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'

export default function LandingScreen() {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState('platform')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'platform', offset: 0 },
        { id: 'services-section', offset: 400 },
        { id: 'pricing-section', offset: 2600 },
        { id: 'footer-section', offset: Infinity }
      ]

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLinkClass = (linkId: string) => {
    const isActive = activeLink === linkId
    const baseClass = "relative transition-colors duration-300 cursor-pointer text-sm font-semibold tracking-tight"
    const activeClass = isActive 
      ? "text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
      : "text-on-surface-variant/70 hover:text-primary"
    return `${baseClass} ${activeClass}`
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setActiveLink('services-section')
    const servicesSection = document.getElementById('services-section')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setActiveLink('pricing-section')
    const pricingSection = document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setActiveLink('footer-section')
    const footerSection = document.getElementById('footer-section')
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setActiveLink('platform')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateToOnboarding = () => {
    navigate('/onboarding')
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header type="main" activeLink={activeLink} onLinkChange={setActiveLink} />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 md:px-16 overflow-hidden hero-gradient">
        <div className="w-full text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 mb-10 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 font-label">Nouveau: Analyse IA en direct</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-primary letter-tight leading-[1] mb-8 mx-auto text-balance">
            Transformez votre communication en <span className="text-secondary/80 italic font-medium">performance réelle</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant/80 mx-auto mb-12 leading-relaxed font-medium max-w-4xl">
            Le coach IA qui affine votre prise de parole et forge votre leadership au sein de l'écosystème technique.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button onClick={handleNavigateToOnboarding} className="bg-primary text-white px-10 py-4.5 rounded-full font-bold text-base cta-shadow hover:bg-primary/95 transition-all group flex items-center h-[58px] cursor-pointer">
              Essayer gratuitement
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="bg-transparent border border-outline-variant text-primary px-10 py-4.5 rounded-full font-bold text-base hover:bg-primary/5 transition-all h-[58px]">
              Voir la démo
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/[0.02] blur-[140px] rounded-full -z-10"></div>
      </header>

      {/* How It Works */}
      <section id="services-section" className="py-32 px-6 md:px-16 bg-surface">
        <div className="w-full">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-primary letter-tight">Un parcours vers l'excellence</h2>
            <div className="w-12 h-[3px] bg-secondary/30 rounded-full mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: 'videocam', number: '1', title: 'Enregistrez votre vidéo', desc: 'Filmez-vous directement ou importez votre fichier pour une analyse instantanée.' },
              { icon: 'psychology', number: '2', title: 'L\'IA analyse vos signaux', desc: 'Notre moteur propriétaire décrypte votre voix, votre corps et votre structure.' },
              { icon: 'insights', number: '3', title: 'Recevez vos conseils', desc: 'Un rapport haute fidélité avec des recommandations exploitables immédiatement.' }
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/[0.03] border border-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/[0.06] transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">{step.number}. {step.title}</h3>
                <p className="text-on-surface-variant/70 leading-relaxed text-base max-w-[300px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-32 px-6 md:px-16 bg-[#fcfdff]">
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(15,8,102,0.08)] overflow-hidden border border-primary/5">
            <div className="px-6 py-4 border-b border-primary/5 flex items-center justify-between bg-primary/[0.01]">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20"></div>
              </div>
              <div className="text-[10px] font-bold text-on-surface-variant/50 font-label uppercase tracking-widest">ANALYTICS_DASHBOARD_V1</div>
              <div className="w-8"></div>
            </div>
            <div className="grid md:grid-cols-12 gap-0">
              {/* Video Area */}
              <div className="md:col-span-7 bg-slate-950 aspect-video md:aspect-auto flex items-center justify-center relative group overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" alt="professional woman presenting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWTjiyTpVGVPoPuzgYupfLq1BV4nu0KKaNeKSKX8BsWPRQ4Ke93wwueIq5ZUj1r-o0gh4xChuVVt0PNK3RQddUtgIQ32niffRP3339UzNliXZe1fqyyM0DDMUNrUmbaS13CWaBe20G8tLPOQNGriIbTiSuy2uxtlm4_rGD6_fd283hDxDOEXWjzzourKXr2Ug5KMSuVvafui9UH4yBkStDbozGs3iS1MRMbH1v0sPlZ5Ix1SY7RUptrdL8Oo3fDg7Sk3DMCGlxksw"/>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                  <span className="mt-4 text-white font-medium text-[11px] tracking-widest uppercase bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/5">Session de Pitch #04</span>
                </div>
              </div>
              {/* Dashboard UI */}
              <div className="md:col-span-5 p-10 flex flex-col bg-white">
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[11px] font-bold text-on-surface-variant/60 font-label uppercase tracking-widest">Global Performance</span>
                    <span className="text-4xl font-extrabold text-primary letter-tight">72<span className="text-lg text-primary/30 font-medium">/100</span></span>
                  </div>
                  <div className="w-full h-1.5 bg-primary/5 rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-primary/[0.02] border border-primary/5">
                    <div className="flex items-center mb-2">
                      <span className="material-symbols-outlined text-primary mr-2 text-lg">verified</span>
                      <span className="font-bold text-sm text-primary">Solide performance</span>
                    </div>
                    <p className="text-[13px] text-on-surface-variant/80 leading-relaxed">Votre contact visuel est excellent, ce qui renforce votre autorité naturelle sur le sujet.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-red-50/50 border border-red-100/50">
                    <div className="flex items-center mb-2">
                      <span className="material-symbols-outlined text-red-500 mr-2 text-lg">warning</span>
                      <span className="font-bold text-sm text-red-900/80">Ajustement recommandé</span>
                    </div>
                    <p className="text-[13px] text-red-900/60 leading-relaxed">Débit légèrement rapide (165 mpm) — ralentir pour souligner vos idées clés.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-primary/5 px-4 py-4 rounded-xl text-center">
                      <span className="block text-[9px] font-bold text-on-surface-variant/50 font-label uppercase tracking-[0.1em] mb-1">Vocabulaire</span>
                      <span className="text-sm font-bold text-primary">Précis</span>
                    </div>
                    <div className="border border-primary/5 px-4 py-4 rounded-xl text-center">
                      <span className="block text-[9px] font-bold text-on-surface-variant/50 font-label uppercase tracking-[0.1em] mb-1">Fillers</span>
                      <span className="text-sm font-bold text-primary">Minimes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 md:px-16">
        <div className="w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary letter-tight">Analyse Multidimensionnelle</h2>
            <p className="text-on-surface-variant/70 mt-4 font-medium">Nous décomposons chaque nuance de votre intervention.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'mic_none', title: 'Voice Analysis', items: ['Débit et rythme', 'Mots parasites (fillers)', 'Stress vocal', 'Tonalité persuasive'] },
              { icon: 'accessibility_new', title: 'Body Language', items: ['Posture et équilibre', 'Gestuelle illustrative', 'Contact visuel', 'Occupation de l\'espace'] },
              { icon: 'auto_stories', title: 'Content Feedback', items: ['Structure narrative', 'Clarté du vocabulaire', 'Impact des transitions', 'Force de l\'introduction'] }
            ].map((feature) => (
              <div key={feature.title} className="minimal-card p-10 rounded-3xl bg-white">
                <div className="w-12 h-12 bg-primary/[0.03] rounded-xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">{feature.title}</h3>
                <ul className="space-y-4 text-on-surface-variant/80 text-sm font-medium">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary/30 mr-3"></span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-32 px-6 md:px-16 bg-primary/[0.01]">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-primary letter-tight">Investissez dans votre avenir</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Free */}
            <div className="p-12 rounded-3xl bg-white border border-primary/5 flex flex-col hover:border-primary/10 transition-colors">
              <div className="mb-10">
                <h3 className="text-lg font-bold text-primary/50 mb-2 uppercase tracking-widest text-sm">Découverte</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-primary">Gratuit</span>
                </div>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                <li className="flex items-center text-on-surface-variant/80 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary/40 mr-4 text-xl">check_circle</span>3 analyses par mois
                </li>
                <li className="flex items-center text-on-surface-variant/80 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary/40 mr-4 text-xl">check_circle</span>Rapport de base (Vocal)
                </li>
                <li className="flex items-center text-on-surface-variant/40 text-sm font-medium">
                  <span className="material-symbols-outlined mr-4 text-xl">lock_open</span>Analyse corporelle
                </li>
              </ul>
              <button className="w-full py-4 rounded-full font-bold text-primary bg-primary/[0.03] hover:bg-primary/[0.06] transition-all text-sm">Commencer</button>
            </div>
            {/* Premium */}
            <div className="p-12 rounded-3xl bg-primary text-white relative overflow-hidden flex flex-col shadow-[0_40px_80px_-20px_rgba(15,8,102,0.2)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mr-20 -mt-20"></div>
              <div className="mb-10 relative z-10">
                <div className="inline-block bg-white/10 px-3 py-1 rounded-full mb-6 border border-white/10">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/90">Plus populaire</span>
                </div>
                <h3 className="text-lg font-bold text-white/60 mb-2 uppercase tracking-widest text-sm">Premium Pro</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">29 MAD</span>
                  <span className="ml-2 text-white/50 text-sm font-medium">/ mois</span>
                </div>
              </div>
              <ul className="space-y-5 mb-12 flex-grow relative z-10">
                <li className="flex items-center text-sm font-medium">
                  <span className="material-symbols-outlined text-white/60 mr-4 text-xl">verified</span>Analyses illimitées
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="material-symbols-outlined text-white/60 mr-4 text-xl">verified</span>IA complète (Voix + Corps + Contenu)
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="material-symbols-outlined text-white/60 mr-4 text-xl">verified</span>Suivi de progression historique
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="material-symbols-outlined text-white/60 mr-4 text-xl">verified</span>Coaching personnalisé par IA
                </li>
              </ul>
              <button className="w-full py-4 rounded-full font-bold text-primary bg-white hover:bg-slate-100 transition-all text-sm relative z-10">Devenir Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-section" className="w-full pt-32 pb-16 bg-white border-t border-primary/5">
        <div className="w-full px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24">
            <div className="mb-12 md:mb-0">
              <div className="text-xl font-extrabold text-primary mb-6 tracking-tighter">
                <img alt="NOOD Logo" className="h-24 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujDt0VE2Prcwxwc8n2VlWvfgwW6VxQT-LFpUU2g5wiuztlS6wYKruC9f6CYlJJrcWZ2-JHJ7_Ea0Xl5JjBOb0knmTgvd2HUP2TkryMMArp-UAiOZAPr9fAl0NhKQE0ltHafZ7u2uhIZRJQYZQOm3hEQE44d_rDyZ7orYgU7_ACkIYcHn9ehywW0Dxew1z5U_IEZhTW2fPjq9-NJVeDBSE6bZMQco1VWueyyCJGTIp9Eg_cauHJxTTioU_HEmDW9e2r2U4IXVorl"/>
              </div>
              <p className="text-on-surface-variant/60 text-[13px] leading-relaxed max-w-xs font-medium">
                La première plateforme d'IA dédiée à l'excellence oratoire pour les futurs ingénieurs et leaders.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
              <div className="flex flex-col space-y-4">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Legal</span>
                <a className="text-on-surface-variant/60 hover:text-primary transition-colors text-[13px] font-medium" href="#">Privacy Policy</a>
                <a className="text-on-surface-variant/60 hover:text-primary transition-colors text-[13px] font-medium" href="#">Terms of Service</a>
              </div>
              <div className="flex flex-col space-y-4">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Compagnie</span>
                <a className="text-on-surface-variant/60 hover:text-primary transition-colors text-[13px] font-medium" href="#">Contact</a>
                <a className="text-on-surface-variant/60 hover:text-primary transition-colors text-[13px] font-medium" href="#">Pricing</a>
              </div>
              <div className="flex flex-col space-y-4">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Social</span>
                <a className="text-on-surface-variant/60 hover:text-primary transition-colors text-[13px] font-medium" href="#">Twitter</a>
                <a className="text-on-surface-variant/60 hover:text-primary transition-colors text-[13px] font-medium" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center text-on-surface-variant/40 text-[12px] font-medium">
            <p>© 2024 NOOD. Precision in Public Speaking.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Casablanca, MA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

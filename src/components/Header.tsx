import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface HeaderProps {
  type: 'main' | 'onboarding'
  activeLink?: string
  onLinkChange?: (linkId: string) => void
}

export default function Header({ type, activeLink = 'platform', onLinkChange }: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleScrollToSection = (sectionId: string, linkId: string) => {
    onLinkChange?.(linkId)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLogoClick = () => {
    if (type === 'onboarding') {
      // Navigate back to home from onboarding page
      navigate('/')
    } else {
      // Scroll to top on main page
      window.scrollTo({ top: 0, behavior: 'smooth' })
      onLinkChange?.('platform')
    }
  }

  const getLinkClass = (linkId: string) => {
    const isActive = activeLink === linkId
    const baseClass = "relative transition-colors duration-300 cursor-pointer text-sm font-semibold tracking-tight"
    const activeClass = isActive 
      ? "text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
      : "text-on-surface-variant/70 hover:text-primary"
    return `${baseClass} ${activeClass}`
  }

  if (type === 'onboarding') {
    return (
      <header className="bg-white/70 backdrop-blur-lg font-['Plus_Jakarta_Sans'] antialiased sticky top-0 z-50 bg-surface-container-low shadow-[0_40px_60px_-15px_rgba(25,28,32,0.05)]">
        <div className="flex justify-between items-center w-full px-8 md:px-16 py-3">
          <button 
            onClick={handleLogoClick}
            className="text-2xl font-extrabold tracking-tighter text-[#0F0866] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              alt="NOOD Logo" 
              className="w-auto object-contain h-24" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujDt0VE2Prcwxwc8n2VlWvfgwW6VxQT-LFpUU2g5wiuztlS6wYKruC9f6CYlJJrcWZ2-JHJ7_Ea0Xl5JjBOb0knmTgvd2HUP2TkryMMArp-UAiOZAPr9fAl0NhKQE0ltHafZ7u2uhIZRJQYZQOm3hEQE44d_rDyZ7orYgU7_ACkIYcHn9ehywW0Dxew1z5U_IEZhTW2fPjq9-NJVeDBSE6bZMQco1VWueyyCJGTIp9Eg_cauHJxTTioU_HEmDW9e2r2U4IXVorl"
            />
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-[#0F0866] font-semibold flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" href="#">
              <span className="material-symbols-outlined">upload</span>
            </a>
            <a className="hover:bg-slate-100/50 transition-colors p-2 rounded-xl flex items-center gap-2 text-[#0F0866] cursor-pointer" href="#">
              <span className="material-symbols-outlined">bookmark</span>
            </a>
            <a className="hover:bg-slate-100/50 transition-colors p-2 rounded-xl flex items-center gap-2 text-[#0F0866] cursor-pointer" href="#">
              <span className="material-symbols-outlined">history</span>
            </a>
            <a className="hover:bg-slate-100/50 transition-colors p-2 rounded-xl flex items-center gap-2 text-[#0F0866] cursor-pointer" href="#">
              <span className="material-symbols-outlined">edit</span>
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full border border-[#0F0866] text-[#0F0866] font-semibold text-sm hover:bg-[#0F0866]/5 transition-colors">
              Se connecter
            </button>
            <button className="px-6 py-2.5 rounded-full bg-[#0F0866] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
              Inscription gratuite
            </button>
          </div>
        </div>
      </header>
    )
  }

  // Main Header
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center w-full px-8 md:px-16 h-20">
        <button 
          onClick={handleLogoClick} 
          className="text-xl font-extrabold tracking-tighter text-primary hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img alt="NOOD Logo" className="h-24 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujDt0VE2Prcwxwc8n2VlWvfgwW6VxQT-LFpUU2g5wiuztlS6wYKruC9f6CYlJJrcWZ2-JHJ7_Ea0Xl5JjBOb0knmTgvd2HUP2TkryMMArp-UAiOZAPr9fAl0NhKQE0ltHafZ7u2uhIZRJQYZQOm3hEQE44d_rDyZ7orYgU7_ACkIYcHn9ehywW0Dxew1z5U_IEZhTW2fPjq9-NJVeDBSE6bZMQco1VWueyyCJGTIp9Eg_cauHJxTTioU_HEmDW9e2r2U4IXVorl"/>
        </button>
        <div className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => handleLogoClick()}
            className={getLinkClass('platform')}
          >
            Platform
          </button>
          <button 
            onClick={() => handleScrollToSection('services-section', 'services-section')}
            className={getLinkClass('services-section')}
          >
            Services
          </button>
          <button 
            onClick={() => handleScrollToSection('pricing-section', 'pricing-section')}
            className={getLinkClass('pricing-section')}
          >
            Pricing
          </button>
          <button 
            onClick={() => handleScrollToSection('footer-section', 'footer-section')}
            className={getLinkClass('footer-section')}
          >
            About
          </button>
        </div>
        <button className="bg-primary text-white px-7 py-2.5 rounded-full font-bold text-sm hover:scale-[0.98] transition-all duration-300 cta-shadow">Get Started</button>
      </div>
    </nav>
  )
}

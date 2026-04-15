import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LandingScreen from '@/screens/LandingScreen'
import OnboardingPage from '@/screens/OnboardingPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </Router>
  )
}

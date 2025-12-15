import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Partner } from '../lib/database.types'

import Hero from '../components/Hero'
import BeforeAfter from '../components/BeforeAfter'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

// Custom header with offset for referral banner
function ReferralHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-16 md:top-11 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-warm-900/95 backdrop-blur-lg shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Guest Ready Cleaning"
              className={`w-auto drop-shadow-lg transition-all duration-300 ${
                isScrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
              }`}
            />
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Pricing', 'About', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Contact' ? '#quote' : `#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="sms:7789970335?body=Hi!%20I%27d%20like%20to%20book%20a%20cleaning%20this%20week."
            className={`hidden md:block px-6 py-3 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl ${
              isScrolled
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-teal-500/25 hover:shadow-2xl'
                : 'bg-white text-warm-900 hover:bg-teal-100'
            }`}
          >
            Book This Week
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-warm-900/95 backdrop-blur-lg">
          {['Services', 'Pricing', 'About', 'Reviews', 'Contact'].map((item) => (
            <a
              key={item}
              href={item === 'Contact' ? '#quote' : `#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="sms:7789970335?body=Hi!%20I%27d%20like%20to%20book%20a%20cleaning%20this%20week."
            className="mt-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full text-center"
          >
            Book This Week
          </a>
        </nav>
      </div>

      {/* Bottom border when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
    </header>
  )
}

export default function ReferralPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [partner, setPartner] = useState<Partner | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPartner() {
      if (!slug) {
        navigate('/')
        return
      }

      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('slug', slug.toLowerCase())
        .single()

      if (error || !data) {
        navigate('/')
        return
      }

      setPartner(data)
      setLoading(false)

      // Log referral click
      await supabase.from('referrals').insert({
        partner_id: data.id,
        status: 'clicked'
      })
    }

    fetchPartner()
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!partner) return null

  return (
    <main>
      {/* Referral Banner - Fixed at very top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          <span className="font-bold">{partner.name} sent you!</span>
          <span className="mx-2">🎉</span>
          <span className="text-teal-100">Priority booking + free laundry load (towels/linen)</span>
        </p>
      </div>

      {/* Header with offset */}
      <ReferralHeader />

      <Hero />
      <BeforeAfter />
      <About />
      <Pricing />
      <Reviews />
      <Footer />
    </main>
  )
}

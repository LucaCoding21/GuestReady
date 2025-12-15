import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Partner } from '../lib/database.types'

import BeforeAfter from '../components/BeforeAfter'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

// Custom Hero with extra padding for referral banner + header
function ReferralHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-warm-900">
      {/* FULL BLEED HERO IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/hero-kitchen.jpg"
          srcSet="/hero-kitchen-mobile.jpg 1200w, /hero-kitchen.jpg 2000w"
          sizes="100vw"
          alt="Immaculately clean modern kitchen"
          fetchPriority="high"
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
        {/* Sophisticated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-transparent to-warm-900/20" />
      </div>

      {/* MAIN CONTENT - Extra top padding for banner (48px) + header */}
      <div className="relative z-10 pt-36 sm:pt-32 lg:pt-36 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">

            {/* Location Tag */}
            <div className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                Same Week Availability in Greater Vancouver
              </span>
            </div>

            {/* THE HEADLINE */}
            <h1 className={`mt-5 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                Your Home,
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mt-2">
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-300">
                    Guest Ready
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 rounded-full opacity-80" />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className={`mt-5 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0 transition-all duration-700 delay-[900ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We focus on what guests actually notice: kitchens, bathrooms, floors, entryways.
              Professional, background checked cleaners with same week availability.
            </p>

            {/* CTA Buttons */}
            <div className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6 transition-all duration-700 delay-[1100ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Book This Week - Always SMS */}
              <a
                href="sms:7789970335?body=Hi!%20I%27d%20like%20to%20book%20a%20cleaning%20this%20week."
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 sm:px-8 py-3.5 sm:py-4 bg-teal-500 text-white font-bold text-base sm:text-lg rounded-full transition-all hover:scale-105 hover:bg-teal-600 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]"
              >
                <span>Book This Week</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Phone button with caption */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                <a
                  href="tel:7789970335"
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-teal-500/50 text-white font-semibold text-base sm:text-lg rounded-full hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (778) 997 0335
                </a>
                <p className="mt-1.5 text-xs text-white/50">Replies in under 15 min</p>
              </div>
            </div>

            {/* Trust Row */}
            <div className={`mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 transition-all duration-700 delay-[1300ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Google Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">5.0</span>
                <span className="text-white/50 text-xs sm:text-sm">on Google</span>
              </div>

              <div className="w-px h-5 sm:h-6 bg-white/20" />

              <span className="text-white/70 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Background checked
              </span>

              <div className="w-px h-5 sm:h-6 bg-white/20 hidden sm:block" />

              <span className="text-white/70 text-xs sm:text-sm hidden sm:flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fully insured
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className={`hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 delay-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-warm-600">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-warm-300 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-warm-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

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
      className={`fixed top-12 sm:top-10 md:top-9 left-0 right-0 z-40 transition-all duration-300 ${
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 px-4 text-center safe-area-top">
        <p className="text-xs sm:text-sm md:text-base font-medium leading-tight">
          <span className="font-bold">{partner.name} sent you!</span>
          <span className="mx-1.5 sm:mx-2">🎉</span>
          <span className="text-teal-100">Priority booking + free laundry load (towels/linen)</span>
        </p>
      </div>

      {/* Header with offset */}
      <ReferralHeader />

      <ReferralHero />
      <BeforeAfter />
      <About />
      <Pricing />
      <Reviews />
      <Footer />
    </main>
  )
}

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            href="sms:7789970335"
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
            href="sms:7789970335"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full text-center"
          >
            Book This Week
          </a>
        </nav>
      </div>

      {/* Subtle bottom border when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
    </header>
  );
};

export default Header;

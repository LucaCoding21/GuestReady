import { useState } from 'react';

const serviceOptions = [
  'Guest-Ready Clean',
  'Deep Cleaning',
  'Move In/Out Cleaning',
  'Recurring Service',
  'Not Sure Yet',
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.gtag?.('event', 'form_submit', { form_name: 'quote_request', location: 'footer' });
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const footerLinks = {
    services: [
      { label: 'Guest-Ready Clean', href: '#services' },
      { label: 'Deep Cleaning', href: '#services' },
      { label: 'Move In/Out', href: '#services' },
      { label: 'Recurring Service', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Service Areas', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    support: [
      { label: 'Get a Quote', href: 'sms:7789970335?body=Hi!%20I%27d%20like%20to%20get%20a%20quote.' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: 'sms:7789970335?body=Hi!%20I%20have%20a%20question.' },
      { label: 'Cancellation Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-warm-900 text-white">
      {/* Quote Form Section */}
      <div id="quote" className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Request a Quote</h3>
            <p className="mt-2 text-warm-400">Prefer email? Fill out the form and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-warm-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-warm-500 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="Jane Smith"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-warm-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-warm-500 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="(604) 555-1234"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-warm-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-warm-500 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-warm-300 mb-2">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                >
                  <option value="" className="bg-warm-900">Select service...</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} className="bg-warm-900">{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-warm-300 mb-2">
                Tell Us About Your Space (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-warm-500 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Number of bedrooms/bathrooms, any specific needs..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all hover:shadow-lg"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Guest Ready Cleaning" className="h-16 w-auto" />
            <p className="mt-4 text-warm-300 leading-relaxed max-w-sm">
              Same-week cleaning when everyone else is booked. Background-checked cleaners, guest-ready guaranteed.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="tel:7789970335" className="flex items-center gap-3 text-warm-300 hover:text-teal-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (778) 997-0335
              </a>
              <a href="mailto:hello@guestreadycleaning.ca" className="flex items-center gap-3 text-warm-300 hover:text-teal-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@guestreadycleaning.ca
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://share.google/mR69ktPP1FQlostE7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors"
                aria-label="Google Business"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-warm-400 hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-warm-400 hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => link.href.startsWith('sms:') && window.gtag?.('event', 'contact_click', { method: 'sms', location: 'footer_support', label: link.label })}
                    className="text-warm-400 hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="font-semibold text-white mb-4">Service Areas</h4>
          <div className="flex flex-wrap gap-3">
            {[
              'South Surrey',
              'White Rock',
              'Crescent Beach',
              'Morgan Creek',
              'Grandview Heights',
              'Sunnyside',
              'Ocean Park',
              'Semiahmoo',
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 rounded-full bg-white/5 text-warm-300 text-sm border border-white/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-400 text-sm">
              &copy; {currentYear} Guest Ready Cleaning. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-warm-400 hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-400 hover:text-teal-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useRef, useState } from 'react';

const serviceOptions = [
  'Guest-Ready Clean',
  'Deep Cleaning',
  'Move In/Out Cleaning',
  'Recurring Service',
  'Not Sure Yet',
];

const frequencyOptions = [
  'This Week',
  'Next Week',
  'Within 2 Weeks',
  'Flexible',
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    frequency: '',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="quote" ref={sectionRef} className="relative py-24 lg:py-32 bg-warm-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-teal-300 text-sm font-semibold">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Same-Week Availability
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Get Your Home{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-400">
                Guest-Ready
              </span>
            </h2>

            <p className="mt-6 text-lg text-warm-300 leading-relaxed">
              We reply within 10 minutes during business hours. Background-checked cleaners,
              guest-ready guaranteed—or we come back free.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <a
                href="tel:7789970335"
                className="flex items-center gap-4 text-white hover:text-teal-300 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">(778) 997-0335</div>
                  <div className="text-sm text-warm-400">Text for fastest response</div>
                </div>
              </a>

              <a
                href="mailto:hello@guestreadycleaning.ca"
                className="flex items-center gap-4 text-white hover:text-teal-300 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">hello@guestreadycleaning.ca</div>
                  <div className="text-sm text-warm-400">We reply within 24 hours</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">South Surrey & White Rock</div>
                  <div className="text-sm text-warm-400">Serving the Semiahmoo Peninsula</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-300 text-sm">All cleaners background-checked & insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-300 text-sm">Guest-ready guaranteed or we come back free</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-300 text-sm">Same-week availability when others are booked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-warm-900">Check Availability</h3>
              <p className="mt-2 text-warm-500">Tell us when you need us—we'll confirm within 10 minutes.</p>

              <div className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-warm-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                      placeholder="(604) 555-1234"
                    />
                  </div>
                </div>

                {/* Service & Frequency */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-warm-700 mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">Select service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="frequency" className="block text-sm font-medium text-warm-700 mb-2">
                      When Do You Need Us?
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">Select frequency...</option>
                      {frequencyOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-2">
                    Tell Us About Your Space
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Number of bedrooms/bathrooms, any specific needs or areas of focus..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Check Availability
                </button>

                <p className="text-center text-sm text-warm-500">
                  We reply within 10 minutes. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

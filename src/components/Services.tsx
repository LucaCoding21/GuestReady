import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Guest-Ready Clean',
    description: 'What guests actually notice: kitchens, bathrooms, floors, entryways. Perfect for hosting visitors or a quick refresh before company arrives.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ['Kitchen deep clean', 'Bathroom sanitization', 'Floor mopping & vacuuming', 'Entryway & living areas'],
  },
  {
    title: 'Deep Cleaning',
    description: 'Top-to-bottom intensive clean when you need everything spotless. Ideal for seasonal refreshes or before big events.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ['Inside appliances & cabinets', 'Baseboards & light fixtures', 'Window sills & blinds', 'Behind & under furniture'],
  },
  {
    title: 'Move In/Out',
    description: 'Stress-free transitions with a spotless handoff. Get your full deposit back or welcome new tenants with confidence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    features: ['Full property deep clean', 'Appliance interior cleaning', 'Cabinet & closet wipe-down', 'Wall spot cleaning'],
  },
  {
    title: 'Recurring Service',
    description: 'Weekly, bi-weekly, or monthly visits so you never have to think about cleaning again. Consistent team, consistent results.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: ['Same trusted cleaners', 'Flexible scheduling', 'Priority booking', 'Customized to your home'],
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            Same-Week Availability
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-warm-900 leading-tight">
            We Focus on What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
              Guests Notice
            </span>
          </h2>
          <p className="mt-4 text-lg text-warm-600 leading-relaxed">
            Professional, background-checked cleaners who know exactly where to focus.
            Guest-ready guaranteed—or we come back free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-warm-200/50 hover:border-teal-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold text-warm-900 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-warm-600 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-warm-700 text-sm">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-warm-600 mb-6">Need it done this week? We've got you covered.</p>
          <a
            href="#quote"
            className="inline-flex items-center gap-3 px-8 py-4 bg-warm-900 text-white font-bold rounded-full hover:bg-warm-800 transition-all hover:scale-105 shadow-lg"
          >
            Check Availability
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

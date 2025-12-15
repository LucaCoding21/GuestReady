import { useEffect, useRef, useState } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Trust Block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Employee Photo - THE TRUST ANCHOR */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Main image with professional framing */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-warm-100">
                <img
                  src="/44320180066 (1).png"
                  alt="Professional Guest Ready cleaner in uniform"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Trust Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-warm-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-warm-900">Background Checked</div>
                    <div className="text-xs text-warm-500">& Fully Insured</div>
                  </div>
                </div>
              </div>

              {/* Availability Badge - Top Right */}
              <div className="absolute -top-4 -right-4 bg-teal-600 text-white rounded-xl shadow-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold">Spots Available This Week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Trust Message */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            {/* Hook - Address the real problem */}
            <h2 className="text-3xl lg:text-4xl font-bold text-warm-900 leading-tight">
              Everyone Else Is Booked.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 mt-1">
                We're Not.
              </span>
            </h2>

            <p className="mt-5 text-lg text-warm-600 leading-relaxed">
              We know you've called around. Most services are slammed right now. That's exactly why we exist—to help when you actually need it, not three weeks from now.
            </p>

            {/* The 3 Deal Breakers - Visual hierarchy */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'Background-Checked Cleaners',
                  desc: 'Every cleaner verified. Your home, your peace of mind.',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'Fully Insured',
                  desc: 'Complete liability coverage. Zero risk to you.',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'Same-Week Availability',
                  desc: 'Book today, we clean this week. Guaranteed.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-warm-900">{item.title}</h3>
                    <p className="text-warm-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Guarantee - Risk Reversal */}
            <div className={`mt-8 p-5 bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-xl border border-teal-200 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-warm-900 text-lg">Guest-Ready Guarantee</h3>
                  <p className="text-warm-700 text-sm mt-1">
                    Not happy? We come back and fix it—free. No questions, no hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar - Quick hits */}
        <div className={`mt-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-warm-900 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
              {[
                { value: '5.0', label: 'Google Rating', icon: '★' },
                { value: '100%', label: 'Background-Checked', icon: '✓' },
                { value: '48hr', label: 'Avg. Booking', icon: '⚡' },
                { value: '0', label: 'Risk To You', icon: '🛡' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-warm-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

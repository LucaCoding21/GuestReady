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

              {/* Availability Badge - Top Left */}
              <div className="absolute -top-4 -left-4 bg-teal-600 text-white rounded-xl shadow-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold">Available Spots This Week</span>
                </div>
              </div>

              {/* Trust Badge - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-warm-100">
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
              We know you've called around. Most services are slammed right now. That's exactly why we exist to help when you actually need it, not three weeks from now.
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

            {/* CTA Button */}
            <div className={`mt-8 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="sms:7789970335"
                className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-bold text-lg rounded-full transition-all hover:scale-105 hover:bg-teal-600 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]"
              >
                Reserve Your Spot This Week
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

import { useEffect, useRef, useState } from 'react';

const packages = [
  {
    name: 'Instant Cleaning Express',
    price: 249,
    size: 'Up to 2 bed / 1 bath',
    description: 'Quick refresh before guests arrive',
    features: [
      'All rooms cleaned, dusted & tidied',
      'Kitchen cleaned (surfaces, sink, dishes, stovetop)',
      'Bathroom fully cleaned & sanitized',
      'All floors vacuumed & mopped',
      'High touch surfaces wiped',
    ],
    popular: false,
  },
  {
    name: 'Holiday Deep Clean',
    price: 379,
    size: 'Up to 3 bed / 2 bath',
    description: 'Full home detail for hosting',
    features: [
      'Includes Instant Cleaning Express',
      'Inside microwave, stovetop detailed',
      'Baseboards & light fixtures',
      'Detailed bedroom cleaning',
    ],
    popular: true,
  },
  {
    name: 'Premium Host Package',
    price: 499,
    size: 'Up to 4 bed / 3 bath',
    description: '+$50 for bedsheets and laundry',
    features: [
      'Includes Deep Clean Service',
      'Fridge & oven detail',
      'Interior windows',
      'Cabinet fronts, curtains & walls',
    ],
    popular: false,
  },
];

const Pricing = () => {
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
    <section id="pricing" ref={sectionRef} className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-warm-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-warm-600">
            No hidden fees. No surprises. Only clean homes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl transition-all duration-500 ${
                pkg.popular
                  ? 'ring-2 ring-teal-500 shadow-xl scale-[1.02]'
                  : 'border border-warm-200 shadow-sm hover:shadow-lg'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-teal-600 text-white text-sm font-bold rounded-full shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Package Name & Size */}
                <div>
                  <h3 className="text-xl font-bold text-warm-900">{pkg.name}</h3>
                  <p className="text-sm text-warm-500 mt-1">{pkg.size}</p>
                </div>

                {/* Price */}
                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-warm-900">${pkg.price}</span>
                  </div>
                  <p className={`text-sm mt-1 ${pkg.description.includes('+$') ? 'text-green-600 font-medium' : 'text-warm-500'}`}>{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.includes('Includes') ? (
                        <svg className="w-5 h-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 flex-shrink-0 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.includes('Includes') ? 'text-green-600 font-medium' : 'text-warm-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`mt-8 block w-full py-3.5 text-center font-bold rounded-xl transition-all ${
                    pkg.popular
                      ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-500/25'
                      : 'bg-warm-100 text-warm-900 hover:bg-warm-200'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Larger Home CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-warm-600">
            Larger home?{' '}
            <a href="sms:7789970335" className="text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-2">
              Text us for a quick quote
            </a>
          </p>
        </div>

        {/* Trust Reinforcement */}
        <div className={`mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm text-warm-500 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Guest-Ready Guarantee
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Background-Checked
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Fully Insured
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Same-Week Booking
          </span>
        </div>

      </div>
    </section>
  );
};

export default Pricing;

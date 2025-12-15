import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'South Surrey',
    rating: 5,
    text: "Called on Monday, they came Wednesday. My in-laws were arriving Friday and I was panicking. The kitchen and bathrooms looked amazing—exactly what guests notice first. Huge relief.",
    service: 'Instant Cleaning Express',
    avatar: 'SM',
  },
  {
    name: 'Michael & Lisa T.',
    location: 'White Rock',
    rating: 5,
    text: "We used their move-out service and got our full deposit back! The property manager was amazed at how clean everything was. Highly recommend for anyone moving.",
    service: 'Instant Cleaning Express',
    avatar: 'MT',
  },
  {
    name: 'Jennifer K.',
    location: 'Morgan Creek',
    rating: 5,
    text: "Everyone else was booked. Guest Ready had availability the same week. The cleaners were professional, background-checked, and my home was spotless when they left.",
    service: 'Deep Clean',
    avatar: 'JK',
  },
  {
    name: 'David R.',
    location: 'Crescent Beach',
    rating: 5,
    text: "Hosting a dinner party and needed a quick clean. They focused on exactly what mattered—entryway, living room, kitchen, guest bathroom. Guests kept complimenting how nice everything looked.",
    service: 'Instant Cleaning Express',
    avatar: 'DR',
  },
  {
    name: 'Amanda L.',
    location: 'Grandview Heights',
    rating: 5,
    text: "After having my second baby, booking their deep clean was the best decision. They cleaned areas I forgot existed! Now I'm a regular client and couldn't be happier.",
    service: 'Deep Clean',
    avatar: 'AL',
  },
  {
    name: 'Robert & Chen W.',
    location: 'South Surrey',
    rating: 5,
    text: "The guarantee gave us confidence to try them. They delivered exactly what they promised—our home was completely guest-ready. Now we use them before every family visit.",
    service: 'Recurring Service',
    avatar: 'RW',
  },
];

const Reviews = () => {
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
    <section id="reviews" ref={sectionRef} className="relative pt-10 lg:pt-12 pb-24 lg:pb-32 bg-gradient-to-b from-warm-50 to-teal-50/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-900 leading-tight">
            Happy Customers,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
              Happy Home
            </span>
          </h2>
          <p className="mt-4 text-lg text-warm-600 leading-relaxed">
            Got a messy home? We can clean it on the same week. Here's what our clients have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-warm-100 hover:border-teal-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-warm-700 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-warm-900">{review.name}</div>
                    <div className="text-sm text-warm-500">{review.location}</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-medium">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://share.google/mR69ktPP1FQlostE7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-warm-600 font-semibold hover:text-teal-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read All Reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

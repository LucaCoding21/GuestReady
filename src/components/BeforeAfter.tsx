import { useEffect, useRef, useState } from 'react';

const transformations = [
  {
    id: 1,
    image: '/bfar7.webp',
    label: 'Fridge',
  },
  {
    id: 2,
    image: '/bfar5.webp',
    label: 'Kitchen',
  },
  {
    id: 3,
    image: '/bfar6.webp',
    label: 'Counters',
  },
  {
    id: 4,
    image: '/beforeafter4.webp',
    label: 'Upholstery',
  },
  {
    id: 5,
    image: '/bfar8.webp',
    label: 'Living Room',
  },
  {
    id: 6,
    image: '/beforeafter1.webp',
    label: 'Sofa',
  },
];

const BeforeAfter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ image: string; label: string } | null>(null);
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
    <section ref={sectionRef} className="relative py-16 lg:py-20 bg-warm-900 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-900 via-warm-800/50 to-warm-900" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            See the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-400">
              Difference
            </span>
          </h2>
          <p className="mt-3 text-warm-300 max-w-xl mx-auto">
            Real results from real Vancouver homes. No filters, no tricks.
          </p>
        </div>

        {/* Before/After Grid - Horizontal scroll on mobile, 3x2 grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className={`group relative flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-auto snap-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div
                className="relative rounded-2xl overflow-hidden bg-warm-800 shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage({ image: item.image, label: item.label })}
              >
                <img
                  src={item.image}
                  alt={`Before and after ${item.label} cleaning`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Before/After Labels */}
                <div className="absolute bottom-0 inset-x-0 flex">
                  <div className="flex-1 bg-gradient-to-t from-black/80 to-transparent py-4 px-4">
                    <span className="inline-flex items-center gap-2 text-white text-sm font-bold">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                      BEFORE
                    </span>
                  </div>
                  <div className="flex-1 bg-gradient-to-t from-black/80 to-transparent py-4 px-4 text-right">
                    <span className="inline-flex items-center gap-2 text-white text-sm font-bold">
                      AFTER
                      <span className="w-2 h-2 bg-teal-400 rounded-full" />
                    </span>
                  </div>
                </div>

                {/* Arrow indicator in middle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-warm-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="mt-4 text-center">
                <span className="text-warm-300 text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-warm-400 mb-4">Your home could be next</p>
          <a
            href="sms:7789970335?body=Hi!%20I%27d%20like%20to%20book%20a%20cleaning%20this%20week."
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 transition-all hover:scale-105 shadow-lg shadow-teal-500/25"
          >
            Book Your Clean
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={`Before and after ${selectedImage.label} cleaning`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />

            {/* Label */}
            <p className="text-center text-white/80 mt-4 text-lg font-medium">
              {selectedImage.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeforeAfter;

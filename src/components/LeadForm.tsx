import { useState } from 'react';

type ServiceType = 'express' | 'deep' | 'move' | 'recurring' | null;
type TimeFrame = 'asap' | 'this-week' | 'flexible' | null;

interface FormData {
  service: ServiceType;
  bedrooms: number | null;
  bathrooms: number | null;
  timeframe: TimeFrame;
  name: string;
  phone: string;
  email: string;
}

// SVG Icons for services
const ServiceIcons = {
  express: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  deep: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  move: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  recurring: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

const services = [
  { id: 'express' as const, name: 'Guest-Ready Express', desc: 'Quick refresh' },
  { id: 'deep' as const, name: 'Deep Clean', desc: 'Full home detail' },
  { id: 'move' as const, name: 'Move In/Out', desc: 'Stress-free transition' },
  { id: 'recurring' as const, name: 'Recurring', desc: 'Weekly or bi-weekly' },
];

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    service: null,
    bedrooms: null,
    bathrooms: null,
    timeframe: null,
    name: '',
    phone: '',
    email: '',
  });

  const totalSteps = 5;

  const handleServiceSelect = (service: ServiceType) => {
    setFormData({ ...formData, service });
    setHasStarted(true);
    setTimeout(() => setStep(2), 200);
  };

  const handleBedroomSelect = (beds: number) => {
    setFormData({ ...formData, bedrooms: beds });
    setTimeout(() => setStep(3), 200);
  };

  const handleBathroomSelect = (baths: number) => {
    setFormData({ ...formData, bathrooms: baths });
    setTimeout(() => setStep(4), 200);
  };

  const handleTimeframeSelect = (timeframe: TimeFrame) => {
    setFormData({ ...formData, timeframe });
    setTimeout(() => setStep(5), 200);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const canSubmit = formData.name.trim() !== '' && formData.phone.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">You're All Set!</h3>
          <p className="text-gray-600 mb-6">
            We'll get back to you within 15 minutes with your personalized quote.
          </p>
          <div className="bg-teal-50 rounded-xl p-4 text-left">
            <p className="text-sm text-teal-800 font-medium mb-2">What happens next:</p>
            <ul className="text-sm text-teal-700 space-y-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                We'll review your request
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Send you a custom quote
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Confirm your preferred date
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold text-gray-900">Get Your Free Quote</h3>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              Free quote
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">
              60 seconds
            </span>
          </div>
        </div>

        {/* Progress Bar - Only show after first selection */}
        {hasStarted && (
          <div className="mt-3 animate-fade-in">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-teal-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Step {step} of {totalSteps}</p>
          </div>
        )}
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6">

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="animate-fade-in">
            <p className="text-gray-700 font-medium mb-4">What type of cleaning do you need?</p>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:border-teal-400 hover:bg-teal-50 group ${
                    formData.service === service.id
                      ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className={`mb-2 transition-colors ${
                    formData.service === service.id ? 'text-teal-600' : 'text-gray-400 group-hover:text-teal-500'
                  }`}>
                    {ServiceIcons[service.id]}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm block">{service.name}</span>
                  <span className="text-xs text-gray-500">{service.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Bedrooms */}
        {step === 2 && (
          <div className="animate-fade-in">
            <p className="text-gray-700 font-medium mb-2">How many bedrooms?</p>
            <p className="text-gray-500 text-sm mb-4">Select the number of bedrooms in your home</p>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleBedroomSelect(num)}
                  className={`py-4 rounded-xl border-2 font-semibold text-lg transition-all hover:border-teal-400 hover:bg-teal-50 ${
                    formData.bedrooms === num
                      ? 'border-teal-500 bg-teal-50 text-teal-700'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  {num}{num === 5 ? '+' : ''}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleBack}
              className="w-full mt-6 py-3 rounded-xl font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
            >
              Back
            </button>
          </div>
        )}

        {/* Step 3: Bathrooms */}
        {step === 3 && (
          <div className="animate-fade-in">
            <p className="text-gray-700 font-medium mb-2">How many bathrooms?</p>
            <p className="text-gray-500 text-sm mb-4">Include full and half bathrooms</p>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleBathroomSelect(num)}
                  className={`py-4 rounded-xl border-2 font-semibold text-lg transition-all hover:border-teal-400 hover:bg-teal-50 ${
                    formData.bathrooms === num
                      ? 'border-teal-500 bg-teal-50 text-teal-700'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  {num}{num === 4 ? '+' : ''}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleBack}
              className="w-full mt-6 py-3 rounded-xl font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
            >
              Back
            </button>
          </div>
        )}

        {/* Step 4: Timeframe */}
        {step === 4 && (
          <div className="animate-fade-in">
            <p className="text-gray-700 font-medium mb-2">When do you need it?</p>
            <p className="text-gray-500 text-sm mb-4">We offer same-week availability</p>
            <div className="space-y-3">
              {[
                { id: 'asap' as const, label: 'As soon as possible', desc: 'Within 1-2 days' },
                { id: 'this-week' as const, label: 'This week', desc: 'Within the next 7 days' },
                { id: 'flexible' as const, label: 'I\'m flexible', desc: 'Anytime works for me' },
              ].map((time) => (
                <button
                  key={time.id}
                  type="button"
                  onClick={() => handleTimeframeSelect(time.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:border-teal-400 hover:bg-teal-50 ${
                    formData.timeframe === time.id
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200'
                  }`}
                >
                  <span className={`font-semibold block ${
                    formData.timeframe === time.id ? 'text-teal-700' : 'text-gray-900'
                  }`}>{time.label}</span>
                  <span className="text-sm text-gray-500">{time.desc}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleBack}
              className="w-full mt-6 py-3 rounded-xl font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
            >
              Back
            </button>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {step === 5 && (
          <div className="animate-fade-in">
            <p className="text-gray-700 font-medium mb-2">Almost done!</p>
            <p className="text-gray-500 text-sm mb-4">How can we reach you?</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-1.5 block">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1.5 block">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(778) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1.5 block">Email (optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-3.5 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className={`flex-[2] py-3.5 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  canSubmit
                    ? 'bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-200'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Get My Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No spam
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Reply in 15 min
                </span>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LeadForm;

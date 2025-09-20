'use client';

import { useEffect, useState } from 'react';

export default function Landing() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(0);

  // Language translations
  const languages = [
    {
      code: 'en',
      name: 'English',
      buttonText: 'Take the Survey'
    },
    {
      code: 'es',
      name: 'Español',
      buttonText: 'Tomar la Encuesta'
    },
    {
      code: 'fr',
      name: 'Français',
      buttonText: 'Répondre au Sondage'
    },
    {
      code: 'de',
      name: 'Deutsch',
      buttonText: 'Umfrage Teilnehmen'
    },
    {
      code: 'pt',
      name: 'Português',
      buttonText: 'Fazer a Pesquisa'
    },
    {
      code: 'zh',
      name: '中文',
      buttonText: '参加调查'
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Auto-cycle through languages every 3 seconds
  useEffect(() => {
    if (!prefersReducedMotion) {
      const interval = setInterval(() => {
        setCurrentLanguage((prev) => (prev + 1) % languages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [prefersReducedMotion, languages.length]);

  const organizations = [
    'HUD', 'Habitat for Humanity', 'Local Housing Authority', 
    'Texas State Affordable Housing', 'Section 8', 'Homelessness Prevention',
    'City of Houston Housing', 'USDA Rural Dev', 'VA Housing', 'Nonprofit Grants'
  ];

  // Duplicate for seamless loop
  const tickerItems = [...organizations, ...organizations];

  const cloudData = [
    { top: '10%', left: '15%', width: 'w-20', height: 'h-10', opacity: 'opacity-20' },
    { top: '8%', right: '20%', width: 'w-24', height: 'h-12', opacity: 'opacity-15' },
    { top: '18%', left: '5%', width: 'w-16', height: 'h-8', opacity: 'opacity-25' },
    { top: '25%', right: '10%', width: 'w-28', height: 'h-14', opacity: 'opacity-18' },
    { top: '15%', left: '60%', width: 'w-18', height: 'h-9', opacity: 'opacity-22' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes cloud-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .ticker-animate {
          animation: ticker-scroll 60s linear infinite;
        }
        
        .ticker-animate:hover {
          animation-play-state: paused;
        }
        
        .cloud-float {
          animation: cloud-float 20s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .ticker-animate,
          .cloud-float {
            animation: none;
          }
        }
      `}</style>

      <div className="relative h-screen min-h-screen overflow-hidden">
        {/* Sky Gradient Background */}
        <div 
          className="absolute inset-0 bg-white"
        />
        
        {/* Subtle Professional Clouds */}
        <div className="absolute inset-0 pointer-events-none">
          {cloudData.map((cloud, index) => (
            <div
              key={index}
              className={`absolute bg-white/20 rounded-full blur-sm ${cloud.width} ${cloud.height} ${cloud.opacity} ${!prefersReducedMotion ? 'cloud-float' : ''}`}
              style={{
                top: cloud.top,
                left: cloud.left,
                right: cloud.right,
                animationDelay: `${index * 4}s`
              }}
            />
          ))}
        </div>

        {/* Large Rounded Rectangle Cloud for Pictures */}
        <div className="absolute right-8 sm:right-12 md:right-16 lg:right-20 top-[5%] bottom-[30%] w-64 sm:w-80 md:w-96 lg:w-[28rem] z-10">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 400 600" 
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Large Rounded Rectangle Cloud Shape */}
            <rect 
              x="20" 
              y="20" 
              width="360" 
              height="560" 
              rx="80" 
              ry="80" 
              fill="white" 
              opacity="0.85"
              filter="blur(2px)"
            />
            {/* Inner content area for pictures */}
            <rect 
              x="40" 
              y="40" 
              width="320" 
              height="520" 
              rx="60" 
              ry="60" 
              fill="white" 
              opacity="0.9"
            />
          </svg>
          
          {/* Picture Display Area */}
          <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
            {/* Layered Pictures Container */}
            <div className="w-full h-full relative">
              {/* Background Picture */}
              <div className="absolute inset-0">
                <img 
                  src="/housing-image.jpg" 
                  alt="Housing assistance program" 
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder for background image */}
                <div className="w-full h-full bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-500 text-sm">Add your image to<br />/public/housing-image.jpg</p>
                  </div>
                </div>
              </div>

              {/* Second Picture - Completely Separate to the Left */}
              <div className="absolute top-4 -left-80 w-4/5 h-4/5 z-10">
                <img 
                  src="/housing-image-2.jpg" 
                  alt="Housing assistance success story" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                  onError={(e) => {
                    // Fallback to placeholder if second image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder for foreground image */}
                <div className="w-full h-full bg-gray-300 rounded-2xl shadow-2xl border-4 border-white flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 text-xs">Add second image to<br />/public/housing-image-2.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 h-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
          {/* Top Left - Logo and Headline with Cloud */}
          <div className="absolute top-6 sm:top-8 md:top-10 -left-32 sm:-left-24 md:-left-16">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-wide">
                AHA
              </h2>
            </div>
            
            {/* Main Headline with Cloud Background */}
            <div className="relative">
              {/* Cloud Shape Behind Text */}
              <svg 
                className="absolute -top-12 -left-16 w-[150%] h-[200%] z-0" 
                viewBox="0 0 1200 400" 
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path 
                  d="M50,200 C50,150 80,120 120,120 C150,100 180,100 220,120 C270,120 300,140 300,180 C350,180 380,200 380,240 C380,280 350,300 300,300 L120,300 C80,300 50,280 50,240 C50,220 50,210 50,200 Z
                     M400,180 C400,160 420,140 450,140 C470,130 490,130 510,140 C540,140 560,160 560,180 C590,180 610,200 610,230 C610,260 590,280 560,280 L450,280 C420,280 400,260 400,230 C400,210 400,195 400,180 Z
                     M200,100 C200,80 220,60 250,60 C270,50 290,50 310,60 C340,60 360,80 360,100 C390,100 410,120 410,150 C410,180 390,200 360,200 L250,200 C220,200 200,180 200,150 C200,130 200,115 200,100 Z" 
                  fill="white" 
                  opacity="0.6"
                  filter="blur(3px)"
                />
              </svg>
              
              {/* Main Headline */}
              <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl">
                Opening the door to housing
              </h1>
            </div>
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-48 sm:bottom-52 md:bottom-56 lg:bottom-60 -left-32 sm:-left-24 md:-left-16 max-w-prose">
            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              We empower individuals to combat the housing inaffordability crisis worldwide.
            </p>
            
            {/* Primary CTA Button with Language Switching */}
            <button
              className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 min-w-[200px] justify-center"
              aria-label={`Take the survey - Currently showing in ${languages[currentLanguage].name}`}
              onClick={() => setCurrentLanguage((prev) => (prev + 1) % languages.length)}
            >
              <span className="transition-opacity duration-300">
                {languages[currentLanguage].buttonText}
              </span>
              <div className="ml-2 flex items-center">
                <span className="text-xs opacity-70">
                  {languages[currentLanguage].code.toUpperCase()}
                </span>
                <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
            </button>
            
            {/* Language Indicator */}
            <div className="mt-2 flex items-center text-xs text-gray-500">
              <span>Available in {languages.length} languages</span>
              <div className="ml-2 flex space-x-1">
                {languages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      index === currentLanguage ? 'bg-gray-700' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Organization Ticker - Bottom of Page */}
        <div 
          className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 w-full overflow-hidden z-20"
          role="region"
          aria-live="off"
        >
          <div 
            className={`flex whitespace-nowrap ${!prefersReducedMotion ? 'ticker-animate' : ''}`}
            tabIndex={-1}
          >
            {tickerItems.map((org, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-3 sm:mx-4 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 border border-blue-700 rounded-full text-base sm:text-lg md:text-xl text-white font-semibold shadow-lg"
                aria-hidden="true"
              >
                {org}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

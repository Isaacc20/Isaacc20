import { useState, useEffect } from "react";

// Import local logo assets
import previewLogo from "../../../assets/logos/preview.png";
import cohutLogo from "../../../assets/logos/cohut.png";
import agricmeLogo from "../../../assets/logos/agricme.png";
import afrixaLogo from "../../../assets/logos/afrixa.png";
import tiktyLogo from "../../../assets/logos/tikty.png";

const Showcase = () => {
  const industries = [
    "SaaS",
    "Research & Innovation",
    "HR Tech",
    "Gaming",
    "Agriculture",
    "Faith Tech",
    "Education",
    "Community Platforms",
    "E-commerce"
  ];

  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndustry((prev) => (prev + 1) % industries.length);
        setFade(true);
      }, 300); // duration of fade-out before text swap
    }, 2800);
    return () => clearInterval(interval);
  }, [industries.length]);

  const companies = [
    { name: "Gamr", logo: null, color: "text-violet-500", type: "gaming" },
    { name: "Preview", logo: previewLogo, color: null, type: "image" },
    { name: "Cohut", logo: cohutLogo, color: null, type: "image" },
    { name: "Resonans", logo: null, color: "text-cyan-500", type: "wave" },
    { name: "AgricMe", logo: agricmeLogo, color: null, type: "image" },
    { name: "ActsSocial", logo: null, color: "text-rose-500", type: "heart" },
    { name: "Stellar Eminence", logo: null, color: "text-amber-500", type: "star" },
    { name: "Afrixa", logo: afrixaLogo, color: null, type: "image" },
    { name: "Tikty", logo: tiktyLogo, color: null, type: "image" },
  ];

  return (
    <section className="relative py-20 bg-light-bg dark:bg-dark-bg border-t border-slate-200 dark:border-slate-800/60 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Rotating Industry Display */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">
            Industries & Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            Actively building solutions for
          </h2>
          
          {/* Active Industry Rotator */}
          <div className="mt-4 h-16 flex items-center">
            <span className={`inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 transition-all duration-300 transform ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {industries[currentIndustry]}
            </span>
          </div>
          
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md">
            Providing technical strategy, systems architecture, and product development to propel high-growth ventures.
          </p>
        </div>

        {/* Right Column: Logo Marquee */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
          
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-450 dark:text-slate-500 lg:text-right px-2">
            Trusted by ventures worldwide
          </span>

          {/* Double Infinite Marquee */}
          <div className="overflow-hidden w-full flex flex-col gap-4 py-2">
            
            {/* Row 1: Forward Marquee */}
            <div className="flex w-full overflow-hidden">
              <div className="animate-marquee flex gap-4 pr-4">
                {companies.concat(companies).map((company, idx) => (
                  <div 
                    key={`forward-${company.name}-${idx}`}
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md backdrop-blur-sm min-w-[170px] justify-center hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    {company.type === "image" && company.logo ? (
                      <img className="h-6 object-contain filter dark:brightness-100 dark:contrast-100 brightness-90 contrast-125" src={company.logo} alt={company.name} />
                    ) : (
                      <div className="flex items-center gap-2">
                        {company.type === "gaming" && (
                          <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5-1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                          </svg>
                        )}
                        {company.type === "wave" && (
                          <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 8v8M22 11v2M7 6v12M2 10v4" />
                          </svg>
                        )}
                        {company.type === "heart" && (
                          <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        )}
                        {company.type === "star" && (
                          <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        )}
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">{company.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Reverse Marquee */}
            <div className="flex w-full overflow-hidden">
              <div className="animate-marquee-reverse flex gap-4 pr-4">
                {companies.concat(companies).reverse().map((company, idx) => (
                  <div 
                    key={`reverse-${company.name}-${idx}`}
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md backdrop-blur-sm min-w-[170px] justify-center hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    {company.type === "image" && company.logo ? (
                      <img className="h-6 object-contain filter dark:brightness-100 dark:contrast-100 brightness-90 contrast-125" src={company.logo} alt={company.name} />
                    ) : (
                      <div className="flex items-center gap-2">
                        {company.type === "gaming" && (
                          <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5-1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                          </svg>
                        )}
                        {company.type === "wave" && (
                          <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 8v8M22 11v2M7 6v12M2 10v4" />
                          </svg>
                        )}
                        {company.type === "heart" && (
                          <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        )}
                        {company.type === "star" && (
                          <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        )}
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">{company.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;

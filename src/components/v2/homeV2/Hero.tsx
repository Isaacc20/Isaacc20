import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMail, FiSun, FiMoon } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import elixirCover from "../../../assets/images/elixir cover.png";

const Hero = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const presets = [
    { id: 1, style: { top: "2rem", right: "2rem" } },
    { id: 2, style: { bottom: "2rem", right: "2rem" } },
    { id: 3, style: { bottom: "2rem", left: "2rem" } },
    { id: 4, style: { top: "2rem", left: "2rem" } },
    { id: 5, style: { top: "50%", right: "1.5rem", transform: "translateY(-50%)" } },
    { id: 6, style: { top: "50%", left: "1.5rem", transform: "translateY(-50%)" } }
  ];

  const [currentPreset, setCurrentPreset] = useState(0);

  useEffect(() => {
    // Select a random initial preset on mount
    const randomIdx = Math.floor(Math.random() * presets.length);
    setCurrentPreset(randomIdx);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    setCurrentPreset((prevIdx) => {
      let nextIdx;
      do {
        nextIdx = Math.floor(Math.random() * presets.length);
      } while (nextIdx === prevIdx);
      return nextIdx;
    });
  };

  return (

    <>
      <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text overflow-hidden flex items-center py-20 lg:py-0 transition-colors duration-200">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

        {/* Ambient Glow Orbs */}
        <div className="bg-indigo-400/10 dark:bg-indigo-500/10 w-[500px] h-[500px] rounded-full blur-[120px] absolute -top-40 -left-40 pointer-events-none" />
        <div className="bg-purple-400/10 dark:bg-purple-500/10 w-[400px] h-[400px] rounded-full blur-[100px] absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="bg-cyan-400/10 dark:bg-cyan-500/10 w-[600px] h-[600px] rounded-full blur-[130px] absolute -bottom-60 -right-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 mb-8 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for select contracts & freelance roles
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[72px] xl:text-[80px] font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.05]">
                Websites That <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">Convert.</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[72px] xl:text-[80px] font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.05]">
                Products That <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Scale.</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[72px] xl:text-[80px] font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.05]">
                Impact That <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Lasts.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl font-light leading-relaxed">
              Bridging the gap between high-level engineering and business growth. I build technical foundations for ventures that aim for the moon.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="mailto:isaacoluwadarasimi002@gmail.com"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/10 dark:shadow-indigo-500/20 hover:shadow-indigo-500/25 dark:hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Let's Build Together
                <FiMail className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <Link 
                to="https://linkedin.com/in/isaacoyedele"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              >
                Connect on LinkedIn
                <FaArrowRight className="text-sm text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900/60 grid grid-cols-3 gap-6 max-w-lg w-full">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">5+</span>
                <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">20+</span>
                <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">Projects Built</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">100%</span>
                <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">Client Happy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Mockup Cards */}
          <div className="lg:col-span-4 relative h-[520px] w-full hidden lg:block">
            
            {/* Card 1: Websites That Convert */}
            <div className="absolute top-[5%] left-[2%] w-[330px] rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl p-3 z-30 animate-float-slow hover:z-50 hover:scale-[1.04] hover:rotate-0 transition-all duration-300 group/card">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80 mb-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">isaac.dev/saas-dashboard</span>
                <div className="w-4 h-4" />
              </div>
              <div className="relative overflow-hidden rounded-lg w-full h-[180px] bg-slate-950">
                <img 
                  className="w-full h-full object-cover opacity-85 group-hover/card:opacity-100 transition-opacity" 
                  src={elixirCover} 
                  alt="Dashboard Preview" 
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-amber-500/95 text-[9px] font-bold text-slate-950 uppercase tracking-wider">
                  01 / Convert
                </div>
              </div>
            </div>

            {/* Card 2: Products That Scale */}
            <div className="absolute top-[20%] left-[48%] w-[250px] rounded-[2.2rem] bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl p-3.5 z-20 animate-float-medium hover:z-50 hover:scale-[1.04] hover:rotate-0 transition-all duration-300 group/card">
              <div className="flex justify-between items-center px-4 pt-1 pb-3">
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 font-mono">9:41</span>
                <div className="w-14 h-4 rounded-full bg-slate-950 border border-slate-800/60 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                </div>
                <span className="text-[8px] text-slate-500 dark:text-slate-400 font-semibold font-mono">5G</span>
              </div>
              <div className="relative overflow-hidden rounded-[1.6rem] w-full h-[260px] bg-slate-950">
                <img 
                  className="w-full h-full object-cover opacity-85 group-hover/card:opacity-100 transition-opacity" 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
                  alt="Mobile App UI" 
                />
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-cyan-400/95 text-[9px] font-bold text-slate-950 uppercase tracking-wider">
                  02 / Scale
                </div>
              </div>
            </div>

            {/* Card 3: Impact That Lasts */}
            <div className="absolute top-[52%] left-[10%] w-[320px] rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl p-3 z-10 animate-float-fast hover:z-50 hover:scale-[1.04] hover:rotate-0 transition-all duration-300 group/card">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80 mb-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">server.logger.ts</span>
                <div className="w-4 h-4" />
              </div>
              <div className="relative overflow-hidden rounded-lg w-full h-[130px] bg-slate-950 p-3.5 flex flex-col justify-between font-mono text-[10px] text-emerald-400">
                <div className="space-y-1">
                  <p><span className="text-purple-400">const</span> api = <span className="text-cyan-400">new</span> <span className="text-amber-300">Server</span>();</p>
                  <p>api.<span className="text-cyan-400">listen</span>(&#123; port: <span className="text-orange-400">8080</span>, latency: <span className="text-orange-400">"14ms"</span> &#125;);</p>
                  <p className="text-slate-500">// Uptime: 99.99% (Active)</p>
                </div>
                <div className="flex justify-between items-center border-t border-slate-800/80 dark:border-slate-800 pt-2 mt-2">
                  <span className="text-[9px] font-bold bg-emerald-400/95 text-slate-950 px-1.5 py-0.5 rounded uppercase tracking-wider">03 / Lasts</span>
                  <span className="text-slate-400 text-[9px]">Latency: 14ms</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Floating Theme Toggle Switch */}
        <button
          onClick={toggleTheme}
          style={presets[currentPreset]?.style || {}}
          className="fixed z-50 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/85 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 hover:rotate-12 transition-all duration-500 group"
          title="Click me to toggle theme & relocate!"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <FiSun className="w-5 h-5 text-amber-500 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
          ) : (
            <FiMoon className="w-5 h-5 text-indigo-600" />
          )}
        </button>
      </div>
    </>
  );
};

export default Hero;
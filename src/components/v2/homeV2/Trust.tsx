import { FiLayout, FiCpu, FiTarget } from "react-icons/fi";
import dpPhoto from "../../../assets/images/dp.jpeg";
import brownGeekPhoto from "../../../assets/images/browngeek.jpg";
import { Link } from "react-router-dom";

const Trust = () => {
  return (
    <section className="relative py-24 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text overflow-hidden transition-colors duration-200 border-t border-slate-200 dark:border-slate-800/60">

      {/* Background ambient light */}
      <div className="bg-indigo-400/5 dark:bg-indigo-500/5 w-[500px] h-[500px] rounded-full blur-[120px] absolute top-10 right-0 pointer-events-none" />
      <div className="bg-cyan-400/5 dark:bg-cyan-500/5 w-[400px] h-[400px] rounded-full blur-[100px] absolute bottom-10 left-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 mb-3 block">
            Core Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Built For Teams That Want{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
        </div>

        {/* Central Focus Block — text + portrait photo */}
        <div className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl backdrop-blur-md mb-16 max-w-5xl mx-auto relative group">
          {/* Gradient top accent bar */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 opacity-80 group-hover:opacity-100 transition-opacity" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Text content */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-5">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                Whether you're launching an MVP, modernizing an existing platform, or creating a new digital experience, the goal is the same:
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                Deliver something people{" "}
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                  actually use.
                </span>
              </h3>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                I combine product thinking, engineering expertise, and business strategy to help organizations move from concept to execution faster.
              </p>
              <Link to={'https://docs.google.com/document/d/1xKZVOFOMSfCT8XZE9Y3uHp7pZLFboAxKrhqC04krhjA/edit?tab=t.q0jqw4ro4f4l#heading=h.x8fm1uorkbaw'} className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-sm shadow-sm">
                VIEW CV
              </Link>
            </div>

            {/* Portrait photo */}
            <div className="lg:col-span-5 relative overflow-hidden min-h-[300px] lg:min-h-0">
              <img
                src={brownGeekPhoto}
                alt="Isaac — Full-stack product engineer"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Gradient overlay blending into card bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 dark:from-slate-900/60 to-transparent lg:bg-gradient-to-l" />
              {/* Caption badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-sm shadow-sm">
                Isaac · Full-Stack Engineer
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          {/* Card 1: Product Thinking */}
          <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-md hover:border-cyan-500/50 dark:hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <FiLayout className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Product Thinking</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Designing intuitive user flows, scoping lean feature sets, and aligning the technical MVP roadmap directly with validated user feedback.
            </p>
          </div>

          {/* Card 2: Engineering Expertise */}
          <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-md hover:border-indigo-500/50 dark:hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <FiCpu className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Engineering Expertise</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Building robust, secure, and clean TypeScript systems. Structuring maintainable codebases designed to scale seamlessly under heavy workloads.
            </p>
          </div>

          {/* Card 3: Business Strategy */}
          <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-md hover:border-violet-500/50 dark:hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform">
              <FiTarget className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Business Strategy</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Optimizing user conversion rates, analyzing funnel drops, and engineering product loops to drive organic customer growth and activation.
            </p>
          </div>

        </div>

        {/* Personal credibility strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
          <img
            src={dpPhoto}
            alt="Isaac headshot"
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-indigo-500/30"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Isaac Oluwadarasimi Oyedele</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Product Engineer · Technical Strategist · Founder Advisor
            </p>
          </div>
          <div className="sm:ml-auto text-center sm:text-right">
            <p className="text-xs text-slate-400 dark:text-slate-500 italic max-w-xs">
              "The best technical decisions are made when engineering and strategy work as one."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;

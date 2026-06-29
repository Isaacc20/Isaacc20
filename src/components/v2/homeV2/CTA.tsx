import { FiMail, FiCalendar } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative py-32 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text overflow-hidden transition-colors duration-200 border-t border-slate-200 dark:border-slate-800/60">

      {/* Rich layered background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-indigo-500/10 dark:bg-indigo-500/8 w-[700px] h-[700px] rounded-full blur-[160px] absolute -top-40 -left-40" />
        <div className="bg-cyan-500/10 dark:bg-cyan-500/8 w-[600px] h-[600px] rounded-full blur-[140px] absolute -bottom-40 -right-40" />
        <div className="bg-violet-500/8 dark:bg-violet-500/6 w-[500px] h-[500px] rounded-full blur-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">

        {/* Eyebrow label */}
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-6">
          Let's Work Together
        </span>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.08] mb-8">
          Ready To Build{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Something Valuable?
            </span>
            {/* Underline decoration */}
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-40" />
          </span>
        </h2>

        {/* Body copy */}
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto mb-12">
          Whether you need a website that converts, a product that scales, or a technical partner who understands both business and engineering, let's talk.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Primary */}
          <a
            href="mailto:isaacoluwadarasimi002@gmail.com?subject=Project%20Estimate%20Request"
            id="cta-estimate"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-base shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto"
          >
            {/* Subtle shimmer overlay */}
            <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <FiMail className="w-5 h-5 flex-shrink-0" />
            Get a Project Estimate
          </a>

          {/* Secondary */}
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-schedule"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm dark:shadow-md w-full sm:w-auto"
          >
            <FiCalendar className="w-5 h-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
            Schedule a Call
          </a>
        </div>

        {/* Supporting availability text */}
        <p className="text-sm text-slate-400 dark:text-slate-500 font-light">
          Available for project-based engagements, full-time roles, and long-term partnerships.
        </p>

      </div>
    </section>
  );
};

export default CTA;

import { FiZap, FiUsers, FiTrello, FiBookOpen, FiFeather, FiStar, FiShoppingBag } from "react-icons/fi";

import elixirCover from "../../../assets/images/elixir cover.png";

type Result = {
  icon: React.ReactNode;
  accentFrom: string;
  accentTo: string;
  accentBg: string;
  accentBgDark: string;
  accentText: string;
  accentTextDark: string;
  name: string;
  tagline: string;
  description: string;
  delivered: string[];
  industries: string[];
  screenshot: string;
  screenshotAlt: string;
};

const results: Result[] = [
  {
    icon: <FiZap className="w-5 h-5" />,
    accentFrom: "from-violet-500",
    accentTo: "to-purple-600",
    accentBg: "bg-violet-50",
    accentBgDark: "dark:bg-violet-950/40",
    accentText: "text-violet-600",
    accentTextDark: "dark:text-violet-400",
    name: "Gamr",
    tagline: "Tournament infrastructure for gaming communities",
    description:
      "Built and maintained frontend experiences for tournament management products, helping organizers run competitions efficiently and at scale.",
    delivered: [
      "Responsive tournament management workflows",
      "Improved user experience across web products",
      "Scalable frontend architecture",
    ],
    industries: ["Gaming", "Community Platforms"],
    screenshot: elixirCover,
    screenshotAlt: "Gamr tournament platform",
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    accentFrom: "from-cyan-500",
    accentTo: "to-indigo-500",
    accentBg: "bg-cyan-50",
    accentBgDark: "dark:bg-cyan-950/40",
    accentText: "text-cyan-600",
    accentTextDark: "dark:text-cyan-400",
    name: "Preview",
    tagline: "AI-powered hiring platform for sales recruiters",
    description:
      "Led frontend development for a platform helping recruiters identify and evaluate top sales talent faster.",
    delivered: [
      "End-to-end frontend architecture",
      "Modern recruiter experience",
      "Faster hiring workflows",
    ],
    industries: ["HR Tech", "AI"],
    screenshot: elixirCover,
    screenshotAlt: "Preview AI recruitment platform",
  },
  {
    icon: <FiTrello className="w-5 h-5" />,
    accentFrom: "from-indigo-500",
    accentTo: "to-violet-500",
    accentBg: "bg-indigo-50",
    accentBgDark: "dark:bg-indigo-950/40",
    accentText: "text-indigo-600",
    accentTextDark: "dark:text-indigo-400",
    name: "Cohut",
    tagline: "Cohort management platform",
    description:
      "Led development from concept to MVP launch for a platform helping organizations manage cohort-based programs.",
    delivered: [
      "MVP architecture and launch",
      "Program management workflows",
      "Scalable user experience",
    ],
    industries: ["Education", "Community"],
    screenshot: elixirCover,
    screenshotAlt: "Cohut cohort management platform",
  },
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    accentBg: "bg-emerald-50",
    accentBgDark: "dark:bg-emerald-950/40",
    accentText: "text-emerald-600",
    accentTextDark: "dark:text-emerald-400",
    name: "Resonans",
    tagline: "Research-to-impact platform",
    description:
      "Founded and built a platform helping researchers transform academic work into practical solutions, technologies, and ventures.",
    delivered: [
      "Platform strategy",
      "Product development",
      "Expert engagement ecosystem",
      "MVP launch",
    ],
    industries: ["Research", "Innovation"],
    screenshot: elixirCover,
    screenshotAlt: "Resonans research innovation platform",
  },
  {
    icon: <FiFeather className="w-5 h-5" />,
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    accentBg: "bg-amber-50",
    accentBgDark: "dark:bg-amber-950/40",
    accentText: "text-amber-600",
    accentTextDark: "dark:text-amber-400",
    name: "AgricMe",
    tagline: "Agricultural opportunity platform",
    description:
      "Co-founded a platform connecting farmers to resources, opportunities, and support systems.",
    delivered: [
      "Product architecture",
      "Platform development",
      "User-focused workflows",
    ],
    industries: ["Agriculture", "Impact"],
    screenshot: elixirCover,
    screenshotAlt: "AgricMe agricultural platform",
  },
  {
    icon: <FiStar className="w-5 h-5" />,
    accentFrom: "from-rose-500",
    accentTo: "to-pink-500",
    accentBg: "bg-rose-50",
    accentBgDark: "dark:bg-rose-950/40",
    accentText: "text-rose-600",
    accentTextDark: "dark:text-rose-400",
    name: "Heroes",
    tagline: "Interactive educational gaming experience",
    description:
      "Led a team of engineers to build a gamified learning platform featuring dynamic drag-and-drop interactions.",
    delivered: [
      "Team leadership",
      "Interactive game mechanics",
      "Frontend architecture",
    ],
    industries: ["Gaming", "Education"],
    screenshot: elixirCover,
    screenshotAlt: "Heroes gamified learning platform",
  },
  {
    icon: <FiShoppingBag className="w-5 h-5" />,
    accentFrom: "from-slate-600",
    accentTo: "to-slate-800",
    accentBg: "bg-slate-100",
    accentBgDark: "dark:bg-slate-800/60",
    accentText: "text-slate-700",
    accentTextDark: "dark:text-slate-300",
    name: "Elixir",
    tagline: "Full-stack e-commerce platform",
    description:
      "Designed and developed a complete e-commerce experience from the ground up, including payments and backend infrastructure.",
    delivered: [
      "Full-stack development",
      "Payment integration",
      "Database architecture",
    ],
    industries: ["E-commerce"],
    screenshot: elixirCover,
    screenshotAlt: "Elixir e-commerce platform",
  },
];

const Results = () => {
  return (
    <section className="relative py-24 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text overflow-hidden transition-colors duration-200 border-t border-slate-200 dark:border-slate-800/60">
      {/* Ambient glows */}
      <div className="bg-cyan-400/5 dark:bg-cyan-500/5 w-[500px] h-[500px] rounded-full blur-[130px] absolute top-0 left-0 pointer-events-none" />
      <div className="bg-violet-400/5 dark:bg-violet-500/5 w-[500px] h-[500px] rounded-full blur-[130px] absolute bottom-0 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 mb-3 block">
              Recent Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Products Built.{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Results Delivered.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              A collection of platforms, products, and experiences designed to solve real problems, create growth, and deliver measurable impact.
            </p>
          </div>
        </div>

        {/* Cards grid — 3 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.name}
              className="group relative bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-md hover:shadow-xl dark:hover:shadow-slate-900/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Hover top accent bar */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${result.accentFrom} ${result.accentTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />

              {/* Browser-framed screenshot */}
              <div className="relative flex-shrink-0 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-200 dark:bg-slate-900 border-b border-slate-300/60 dark:border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-2 flex-1 h-4 rounded-sm bg-slate-300 dark:bg-slate-800 font-mono text-[9px] text-slate-500 dark:text-slate-500 flex items-center px-2 overflow-hidden truncate">
                    {result.name.toLowerCase()}.isaac.dev
                  </div>
                </div>
                {/* Screenshot image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={result.screenshot}
                    alt={result.screenshotAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1 gap-4">

                {/* Name + icon */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${result.accentBg} ${result.accentBgDark} flex items-center justify-center ${result.accentText} ${result.accentTextDark} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {result.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 leading-none">
                      {result.name}
                    </h3>
                    <p className={`text-[11px] font-semibold mt-0.5 ${result.accentText} ${result.accentTextDark}`}>
                      {result.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {result.description}
                </p>

                {/* Delivered */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Delivered
                  </p>
                  <ul className="space-y-1.5">
                    {result.delivered.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${result.accentFrom} ${result.accentTo} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                  {result.industries.map((ind) => (
                    <span
                      key={ind}
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${result.accentBg} ${result.accentBgDark} ${result.accentText} ${result.accentTextDark}`}
                    >
                      {ind}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Results;

import { useState } from "react";
import { FiCode, FiGlobe, FiCompass, FiBookOpen, FiDollarSign, FiChevronDown, FiArrowRight } from "react-icons/fi";

type Service = {
  id: string;
  icon: React.ReactNode;
  accentFrom: string;
  accentTo: string;
  accentBg: string;
  accentBgDark: string;
  accentText: string;
  accentTextDark: string;
  accentBorder: string;
  accentBorderDark: string;
  label: string;
  headline: string;
  tagline: string;
  description: string;
  servicesTitle: string;
  services: string[];
  outcomesTitle: string;
  outcomes: string[];
};

const services: Service[] = [
  {
    id: "product-engineering",
    icon: <FiCode className="w-6 h-6" />,
    accentFrom: "from-cyan-500",
    accentTo: "to-indigo-500",
    accentBg: "bg-cyan-50",
    accentBgDark: "dark:bg-cyan-950/40",
    accentText: "text-cyan-600",
    accentTextDark: "dark:text-cyan-400",
    accentBorder: "hover:border-cyan-500/40",
    accentBorderDark: "dark:hover:border-cyan-500/30",
    label: "Product Engineering",
    headline: "From idea to launch-ready product.",
    tagline: "Build Faster",
    description:
      "I build modern web applications, SaaS platforms, and digital experiences designed for performance, growth, and long-term maintainability. The goal isn't simply to ship software. It's to create products people love using and businesses can confidently scale.",
    servicesTitle: "Services",
    services: [
      "SaaS Platforms",
      "Startup MVPs",
      "Custom Web Applications",
      "Business Websites",
      "Customer Portals",
      "Internal Business Tools",
      "E-commerce Platforms",
      "Dashboard & Analytics Systems",
      "API Integrations",
      "Platform Modernization",
    ],
    outcomesTitle: "Ideal For",
    outcomes: [
      "Startups building their first product",
      "Businesses modernizing legacy platforms",
      "Nonprofits & research organizations",
      "Founders ready to execute on their vision",
    ],
  },
  {
    id: "conversion-websites",
    icon: <FiGlobe className="w-6 h-6" />,
    accentFrom: "from-indigo-500",
    accentTo: "to-violet-500",
    accentBg: "bg-indigo-50",
    accentBgDark: "dark:bg-indigo-950/40",
    accentText: "text-indigo-600",
    accentTextDark: "dark:text-indigo-400",
    accentBorder: "hover:border-indigo-500/40",
    accentBorderDark: "dark:hover:border-indigo-500/30",
    label: "Conversion-Focused Websites",
    headline: "Turn attention into action.",
    tagline: "Convert More",
    description:
      "Your website should do more than look good. It should generate leads, drive sales, attract opportunities, and communicate value clearly. I create websites that combine strong storytelling, thoughtful user experience, and modern engineering to help visitors become customers, users, donors, or partners.",
    servicesTitle: "Services",
    services: [
      "Business Websites",
      "Marketing Websites",
      "Landing Pages",
      "Founder & Executive Brands",
      "Nonprofit Websites",
      "Campaign Websites",
      "Conversion Optimization",
      "Website Performance Improvements",
    ],
    outcomesTitle: "Outcomes",
    outcomes: [
      "Higher conversion rates",
      "Improved user engagement",
      "Stronger brand positioning",
      "Better customer acquisition",
    ],
  },
  {
    id: "product-strategy",
    icon: <FiCompass className="w-6 h-6" />,
    accentFrom: "from-violet-500",
    accentTo: "to-purple-500",
    accentBg: "bg-violet-50",
    accentBgDark: "dark:bg-violet-950/40",
    accentText: "text-violet-600",
    accentTextDark: "dark:text-violet-400",
    accentBorder: "hover:border-violet-500/40",
    accentBorderDark: "dark:hover:border-violet-500/30",
    label: "Product Strategy & Technical Leadership",
    headline: "Clarity before code.",
    tagline: "Lead Smarter",
    description:
      "The difference between successful products and failed ones is often strategy, not technology. I work with founders, startups, and teams to define product direction, make better technical decisions, and build with confidence.",
    servicesTitle: "Services",
    services: [
      "Product Discovery",
      "MVP Planning",
      "Product Roadmapping",
      "Technical Architecture Reviews",
      "Fractional CTO Support",
      "Engineering Consulting",
      "Frontend Team Leadership",
      "Development Process Improvement",
    ],
    outcomesTitle: "Outcomes",
    outcomes: [
      "Faster execution",
      "Reduced development waste",
      "Better technical decisions",
      "Clearer product direction",
    ],
  },
  {
    id: "research-innovation",
    icon: <FiBookOpen className="w-6 h-6" />,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    accentBg: "bg-emerald-50",
    accentBgDark: "dark:bg-emerald-950/40",
    accentText: "text-emerald-600",
    accentTextDark: "dark:text-emerald-400",
    accentBorder: "hover:border-emerald-500/40",
    accentBorderDark: "dark:hover:border-emerald-500/30",
    label: "Research & Innovation",
    headline: "Transform ideas into real-world solutions.",
    tagline: "Create Impact",
    description:
      "Great ideas create value when they move beyond research and into implementation. Drawing from my work building innovation-focused initiatives, I help researchers, institutions, and organizations bridge the gap between knowledge and impact.",
    servicesTitle: "Services",
    services: [
      "Research Commercialization",
      "Innovation Platforms",
      "Knowledge Products",
      "Technology Transfer Support",
      "Innovation Ecosystem Design",
      "Research-to-Market Strategy",
    ],
    outcomesTitle: "Outcomes",
    outcomes: [
      "Increased research impact",
      "New commercialization opportunities",
      "Stronger innovation ecosystems",
      "Practical implementation pathways",
    ],
  },
  {
    id: "funding-grant",
    icon: <FiDollarSign className="w-6 h-6" />,
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    accentBg: "bg-amber-50",
    accentBgDark: "dark:bg-amber-950/40",
    accentText: "text-amber-600",
    accentTextDark: "dark:text-amber-400",
    accentBorder: "hover:border-amber-500/40",
    accentBorderDark: "dark:hover:border-amber-500/30",
    label: "Funding & Grant Support",
    headline: "Secure resources to accelerate your vision.",
    tagline: "Fund Bigger",
    description:
      "Many impactful ideas never move forward because they lack funding, positioning, or a compelling narrative. I help startups, nonprofits, researchers, and mission-driven organizations develop strong proposals that communicate value and unlock opportunities.",
    servicesTitle: "Services",
    services: [
      "Grant Writing",
      "Proposal Development",
      "Funding Strategy",
      "Research Funding Applications",
      "Partnership Proposals",
      "Impact Reporting",
      "Program Documentation",
    ],
    outcomesTitle: "Outcomes",
    outcomes: [
      "Stronger funding applications",
      "Clearer impact communication",
      "Increased funding readiness",
      "Better stakeholder engagement",
    ],
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${service.accentBorder} ${service.accentBorderDark} hover:shadow-lg dark:hover:shadow-slate-900/50`}
    >
      {/* Gradient top accent bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${service.accentFrom} ${service.accentTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <button
        className="w-full text-left p-8 flex items-start gap-6 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {/* Icon */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${service.accentBg} ${service.accentBgDark} flex items-center justify-center ${service.accentText} ${service.accentTextDark} group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className={`text-[11px] font-bold uppercase tracking-widest ${service.accentText} ${service.accentTextDark} mb-1 block`}>
            {service.tagline}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug mb-2">
            {service.label}
          </h3>
          <p className="text-base font-semibold text-slate-500 dark:text-slate-400 italic">
            {service.headline}
          </p>
        </div>

        {/* Chevron */}
        <FiChevronDown
          className={`flex-shrink-0 w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 mt-1 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expanded body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 pb-8 pt-0 border-t border-slate-100 dark:border-slate-800/60">
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-6 mb-8 max-w-2xl">
            {service.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Services list */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                {service.servicesTitle}
              </h4>
              <ul className="space-y-2">
                {service.services.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accentFrom} ${service.accentTo} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Outcomes / Ideal For */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                {service.outcomesTitle}
              </h4>
              <ul className="space-y-2">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accentFrom} ${service.accentTo} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative py-24 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text overflow-hidden transition-colors duration-200 border-t border-slate-200 dark:border-slate-800/60">
      {/* Ambient glows */}
      <div className="bg-violet-400/5 dark:bg-violet-500/5 w-[600px] h-[600px] rounded-full blur-[140px] absolute -top-20 right-0 pointer-events-none" />
      <div className="bg-emerald-400/5 dark:bg-emerald-500/5 w-[500px] h-[500px] rounded-full blur-[120px] absolute bottom-0 left-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400 mb-3 block">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-6">
            Build Faster.{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Scale Smarter.
            </span>{" "}
            Create Greater Impact.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light">
            Whether you're launching a startup, modernizing an existing platform, or bringing a new idea to market, I help organizations design, build, and scale digital products that deliver measurable results.
          </p>
        </div>

        {/* Service Cards (expandable) */}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 relative group rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-violet-500/10 dark:from-cyan-500/5 dark:via-indigo-500/5 dark:to-violet-500/5" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500" />
          <div className="relative bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 md:p-14 backdrop-blur-md text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
              Need More Than Development?
            </h3>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-xl mx-auto mb-4">
              Many clients come for software engineering and stay for the strategic thinking behind it. Whether you need a high-converting website, a scalable product, technical leadership, or support bringing an ambitious idea to life, I can help you move from concept to execution with confidence.
            </p>
            <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 tracking-widest uppercase mb-8">
              Build. Scale. Fund. Impact.
            </p>
            <a
              href="mailto:isaacoluwadarasimi002@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Let's Work Together
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;

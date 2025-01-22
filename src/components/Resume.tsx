import { BsCodeSlash } from "react-icons/bs"
import { DiFirebase } from "react-icons/di"
import { FaReact } from "react-icons/fa6"
import { RiBootstrapLine, RiNextjsLine, RiTailwindCssLine } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { Link } from "react-router-dom"

const Resume = () => (
    <>
        <div className="flex flex-col items-start gap-10 w-5/6 py-12 mx-auto">
            <div className="flex items-center justify-start w-full">
                <span className="flex items-center gap-5 px-5 py-2 rounded-full border border-slate-100 text-slate-100 font-thin"><BsCodeSlash /> MY EXPERIENCE</span>
            </div>
            {/* <h1 className="text-white">My <span className="text-cyan-400">WORK EXPERIENCE</span> at a glance</h1> */}
            <div className="flex flex-col items-start gap-10">
                {/* RESONANS */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-purple-800 rounded-full"></div>
                        <p className="text-gray-300">November 2024 - Present</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://theresonans.com'} className="text-white text-2xl">Resonans - <span className="text-lg italic">Founder</span></Link>
                        <span className="text-gray-400">
                        Founded Resonans, a platform that decentralizes research data, making it accessible to innovators, policymakers, and the public. Collaborated with a team to host impactful events, engage over 30 industry experts, and launch the platform’s first MVP.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap</span>
                        </div>
                    </div>
                </div>
                {/* COHUT */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-blue-700 rounded-full"></div>
                        <p className="text-gray-300">October 2024 - Present</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://cohut.co'} className="text-white text-2xl">Cohut - <span className="text-lg italic">Lead Front-end Engineer</span></Link>
                        <span className="text-gray-400">
                        Leading the frontend development for Cohut, a platform for managing cohort-based programs. Took the project from inception to MVP launch, ensuring robust functionality and a seamless user experience.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap</span>
                        </div>
                    </div>
                </div>
                {/* HEROES */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-slate-600 rounded-full"></div>
                        <p className="text-gray-300">2024</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <h1 className="text-white text-2xl">Heroes - <span className="text-lg italic">Lead Front-end Engineer</span></h1>
                        <span className="text-gray-400">
                        Led a team of 8 to develop Heroes, a web-based gaming platform. Built the frontend, featuring an interactive drag-and-drop system where users match heroes with their creators, creating an engaging and dynamic gaming experience.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap</span>
                        </div>
                    </div>
                </div>
                {/* STELLAR EMINENCE */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-blue-600 rounded-full"></div>
                        <p className="text-gray-300">February - November 2024</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://stellareminence.com'} className="text-white text-2xl">Stellar Eminence - <span className="text-lg italic">Front-end Engineer</span></Link>
                        <span className="text-gray-400">
                        Contributed as a frontend developer to design a sleek and functional website for the Stellar Eminence brand, delivering a polished and professional digital presence.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiNextjsLine /> Next Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiTailwindCssLine /> Tailwind CSS</span>
                        </div>
                    </div>
                </div>
                {/* ELIXIR */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-purple-600 rounded-full"></div>
                        <p className="text-gray-300">November 2023 - July 2024</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://the-elixir-brand.netlify.app'} className="text-white text-2xl">Elixir - <span className="text-lg italic">Software Engineer</span></Link>
                        <span className="text-gray-400">
                        Designed and developed a full-stack eCommerce platform for the Elixir brand. Built the platform from the ground up, integrating payment gateways and database management systems—all without an existing UI/UX Figma design.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><DiFirebase /> Firebase</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap CSS</span>
                        </div>
                    </div>
                </div>
                {/* AGRICME */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-green-600 rounded-full"></div>
                        <p className="text-gray-300">November 2023 - Present</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://agricme.onrender.com'} className="text-white text-2xl">AgricMe - <span className="text-lg italic">Technical Co-Founder</span></Link>
                        <span className="text-gray-400">
                        Co-founded a platform designed to revolutionize agricultural processes by connecting farmers with vital resources and opportunities. Partnered closely with the engineering team to bring the platform to life
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiNextjsLine /> Next Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiTailwindCssLine /> Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Resume
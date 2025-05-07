import { BsCodeSlash } from "react-icons/bs"
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
                {/* Preview */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-purple-600 rounded-full"></div>
                        <p className="text-gray-300">March - May 2025 (Contract)</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'#'} className="text-white text-2xl">Preview - <span className="text-lg italic">Lead Front-end Engineer</span></Link>
                        <span className="text-gray-400">
                        Led the frontend development for Preview, an AI powered hiring platform for sales recruiters.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap</span>
                        </div>
                    </div>
                </div>
                {/* RESONANS */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-purple-800 rounded-full"></div>
                        <p className="text-gray-300">November 2024 - Present</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://theresonans.com'} className="text-white text-2xl">Resonans - <span className="text-lg italic">Founder</span></Link>
                        <span className="text-gray-400">
                        Founded Resonans, a platform that decentralizes research, helping academic researchers to build real-world solutions from their research. Collaborated with a team to host impactful events, engage over 30 industry experts, and launch the platform’s first MVP.
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
                        <p className="text-gray-300">October 2024 - February 2025 (Contract)</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://cohut.co'} className="text-white text-2xl">Cohut - <span className="text-lg italic">Lead Front-end Engineer</span></Link>
                        <span className="text-gray-400">
                        Led the frontend development for Cohut, a platform for managing cohort-based programs. Took the project from inception to MVP launch, ensuring robust functionality and a seamless user experience.
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
                
                {/* AGRICME */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-green-600 rounded-full"></div>
                        <p className="text-gray-300">November 2023 - December 2024</p>
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
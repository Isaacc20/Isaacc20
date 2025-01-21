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
            <h1 className="text-white">My <span className="text-cyan-400">WORK EXPERIENCE</span> at a glance</h1>
            <div className="flex flex-col items-start gap-10">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-purple-600 rounded-full"></div>
                        <p className="text-gray-300">2023 - 2024</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://the-elixir-brand.netlify.app'} className="text-white text-2xl">Elixir</Link>
                        <span className="text-gray-400">
                            Built a fullstack ecommerce website for the elixir brand end-to-tnd
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><DiFirebase /> Firebase</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap CSS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-blue-600 rounded-full"></div>
                        <p className="text-gray-300">2024</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://stellareminence.com'} className="text-white text-2xl">Stellar Eminence</Link>
                        <span className="text-gray-400">
                            Collaborated with the frontend team to develop the company website
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiNextjsLine /> Next Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiTailwindCssLine /> Tailwind CSS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-green-600 rounded-full"></div>
                        <p className="text-gray-300">2023 - Present</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://agricme.onrender.com'} className="text-white text-2xl">AgricMe</Link>
                        <span className="text-gray-400">
                            Worked with the engineering team as a technical co-founder
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiNextjsLine /> Next Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiTailwindCssLine /> Tailwind CSS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-slate-600 rounded-full"></div>
                        <p className="text-gray-300">2024</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <h1 className="text-white text-2xl">Heroes</h1>
                        <span className="text-gray-400">
                            Led a team of 7 frontend developers, collaborating with a backend and a design team to develop a drag and drop Heroes game
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="p-2 bg-blue-700 rounded-full"></div>
                        <p className="text-gray-300">2024 - Present</p>
                    </div>
                    <div className="pl-9 flex flex-col gap-3">
                        <Link to={'https://cohut.co'} className="text-white text-2xl">Cohut</Link>
                        <span className="text-gray-400">
                            Leading the frontend team for Cohut, working collaboratively in a team of frontend and backend developers and product designer.
                        </span>
                        <div className="flex gap-5">
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><FaReact /> React Js</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><SiTypescript /> Typescript</span>
                            <span className="flex items-center gap-3 px-3 py-1 rounded-full border bg-slate-100 hover:bg-slate-700 hover:text-slate-100 border-slate-100 text-xs font-normal cursor-default"><RiBootstrapLine /> Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Resume
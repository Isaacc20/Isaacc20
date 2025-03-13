import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { DiFirebase } from 'react-icons/di'
import { FaReact } from 'react-icons/fa6'
import { RiBootstrapLine } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <div className="flex flex-col items-start gap-10 w-5/6 py-12 mx-auto">
                <div className="flex items-center justify-start w-full">
                    <span className="flex items-center gap-5 px-5 py-2 rounded-full border border-slate-100 text-slate-100 font-thin"><BsCodeSlash /> PAST PROJECTS</span>
                </div>

                <div className="flex flex-col items-start gap-10">

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
                </div>
            </div>
        </>
    )
}

export default Projects
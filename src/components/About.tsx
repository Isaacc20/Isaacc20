import { FaMap } from "react-icons/fa6"

const About = () => {
    return (
        <>
            <div id="about" className="flex flex-col gap-10 items-start w-5/6 py-12 mx-auto">
                {/* <h1 className="text-white text-5xl text-center w-full underline decoration-cyan-400 pb-5">&nbsp; ABOUT ME &nbsp;</h1> */}
                <div className="flex items-center justify-start w-full">
                    <span className="flex items-center gap-5 px-5 py-2 rounded-full border border-slate-100 text-slate-100 font-thin"><FaMap /> ABOUT ME </span>
                </div>
                <span className="text-white text-xl font-thin leading-9 tracking-wide w-5/6">
                    <span className="text-2xl font-bold text-cyan-400">"</span>
                    I'm a frontend-focused fullstack software engineer with a sharp eye for design, performance, and user experience. I specialize in building modern, responsive web applications using technologies like React, Next.js, TypeScript, and Tailwind CSS, with solid experience integrating APIs and managing backend services when needed. I love turning complex problems into clean, scalable interfaces that users actually enjoy.
                    <br />
                    Outside of work, I'm building Resonans — a side project driven by my passion for innovation and social impact. It's a platform that helps academic researchers translate their work into real-world change. Whether collaborating on fast-paced teams or launching something from scratch, I bring a product mindset, technical depth, and a drive to build things that matter.
                    <span className="text-2xl font-bold text-cyan-400">"</span>
                </span>
            </div>
        </>
    )
}

export default About
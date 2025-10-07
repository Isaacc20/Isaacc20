import { FaMap } from "react-icons/fa6"

const About = () => {
    return (
        <>
            <div id="about" className="flex flex-col gap-10 items-start md:p-10 lg:p-20 py-12 mx-auto">
                {/* <h1 className="text-white text-5xl text-center w-full underline decoration-cyan-400 pb-5">&nbsp; ABOUT ME &nbsp;</h1> */}
                <div className="flex items-center justify-start w-full">
                    <span className="flex items-center gap-5 px-5 py-2 rounded-full border border-slate-100 text-slate-100 font-thin"><FaMap /> ABOUT ME </span>
                </div>
                <span className="text-white text-xl font-thin leading-9 tracking-wide w-5/6">
                    <span className="text-2xl font-bold text-cyan-400">"</span>
                    I’m a product-minded software engineer focused on frontend development. I build fast, responsive web apps with React, Next.js, TypeScript, and Tailwind — and handle the backend when it’s time to scale or integrate cleanly. <br /> My goal is simple: <span className="text-cyan-400">turn complex ideas into intuitive, enjoyable experiences</span>.
                    <br />
                    Whether I’m collaborating on a team or building from the ground up, I care about craft, clarity, and creating things that matter.
                    <br />
                    Right now, I’m leading Resonans — a platform helping researchers turn academic work into real-world impact through practical outcomes like technologies, products, and policy ideas.
                    <span className="text-2xl font-bold text-cyan-400">"</span>
                </span>
            </div>
        </>
    )
}

export default About
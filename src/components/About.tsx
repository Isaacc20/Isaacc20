import { FaMap } from "react-icons/fa6"

const About = () => {
    return (
        <>
            <div id="about" className="flex flex-col gap-10 items-start w-5/6 py-12 mx-auto">
                {/* <h1 className="text-white text-5xl text-center w-full underline decoration-cyan-400 pb-5">&nbsp; ABOUT ME &nbsp;</h1> */}
                <div className="flex items-center justify-start w-full">
                    <span className="flex items-center gap-5 px-5 py-2 rounded-full border border-slate-100 text-slate-100 font-thin"><FaMap /> MY JOURNEY</span>
                </div>
                <span className="text-white text-xl font-thin leading-9 tracking-wide w-5/6">
                    <span className="text-2xl font-bold text-cyan-400">"</span>
                    I started coding in 2022, which opened me up to new possibilities and gave me the opportunity to think bigger. Over time, I mastered full-stack development, built projects, and gained valuable experience working in fast-paced startups.
                    <br />
                    In 2024, I started building FLECT with a team of 8 and later founded Resonans to address challenges in the research industry. Along the way, I co-founded AgricMe and currently work as a Frontend Developer at Cohut, where we&apos;ve successfully launched the first MVP.
                    <span className="text-2xl font-bold text-cyan-400">"</span>
                </span>
            </div>
        </>
    )
}

export default About
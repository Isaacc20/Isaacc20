import { Link } from "react-router-dom";
import dp from "../assets/images/dp.jpeg";
import { FiMail } from "react-icons/fi";
import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Bio: FC = () => {
    return (
        <>
            <div className="lg:sticky top-5 bg-gradient-to-tr from-blue-400 to-green-400 rounded-[30px] w-full lg:w-1/3 min-w-80 h-full p-[1px] overflow-hidden">
                <div className=" bg-[#1E1E1E] flex flex-col md:flex-row lg:flex-col items-center md:items-end lg:items-center rounded-[30.5px] gap-10 px-10 py-6">
                    <div>
                    <div className="flex justify-between items-end w-full h-full">
                        <h3 className="text-slate-100 font-bold text-4xl"><span className="text-cyan-400">I</span>O</h3>
                        <span className="text-slate-100 font-thin text-medium text-end">Innovator <br />Entrepreneur</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img className="rounded-2xl w-full" src={dp} alt="Profile image" />
                        <span className="hidden lg:flex font-light text-3xl text-slate-100 text-center">Isaac Oyedele</span>
                    </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <span className="flex lg:hidden font-light text-5xl text-slate-100 text-center">Isaac Oyedele</span>
                        <div className="w-full flex justify-between">
                        <Link className="text-2xl text-slate-200 p-3 rounded-full border border-slate-200 hover:bg-slate-600" to={'https://linkedin.com/theisaac'}><FaLinkedinIn /></Link>
                        <Link className="text-2xl text-slate-200 p-3 rounded-full border border-slate-200 hover:bg-slate-600" to={'https://github.com/isaacc20'}><FaGithub /></Link>
                        <Link className="text-2xl text-slate-200 p-3 rounded-full border border-slate-200 hover:bg-slate-600" to={'https://instagram.com/hyzeekoyedele'}><FaInstagram /></Link>
                        <Link className="text-2xl text-slate-200 p-3 rounded-full border border-slate-200 hover:bg-slate-600" to={'mailto:isaacoluwadarasimi002@.com'}><FiMail /></Link>
                    </div>
                    <Link className="bg-cyan-400 w-full p-3 text-lg flex gap-3 items-center justify-center rounded-xl" to={'mailto:isaacoluwadarasimi002@gmail.com'}><FiMail /> HIRE ME</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio
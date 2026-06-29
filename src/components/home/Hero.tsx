import { FiArrowDown } from 'react-icons/fi'

const Hero = () => {
    return (
        <>
            {/* <div id='' className="h-screen"> */}
                <div className="hero flex flex-col gap-24 justify-center items-center p-5 md:p-10 lg:p-20">
                    {/* <div className="flex flex-col items-center gap-5"> */}
                        {/* <h1 className='text-cyan-400 text-8xl'>Isaac Oyedele</h1> */}
                        {/* <p className='text-white text-2xl'>Software Engineer | Innovator | Entrepreneur</p> */}
                    {/* </div> */}
                    <div className="w-full flex flex-col gap-10 bg-gradient-to-tr from-blue-400 to-green-400 bg-clip-text">
                        <span className='text-slate-100 text-6xl md:text-8xl text-start'>Building <span className="text-transparent">scalable</span>, <span className="text-transparent">impact led</span> and <span className="text-transparent">redemptive</span> solutions</span>
                        <span className="text-2xl text-white w-5/6">Software engineer and business strategist with a passion for innovation and a drive to make a difference in the world.</span>
                    </div>
                    <a href={'#about'} className=" text-cyan-400 shadow-slate-400 p-3 text-4xl flex gap-3 items-center justify-center rounded-full h1 hover:border border-cyan-400"><FiArrowDown /></a>
                </div>
            {/* </div> */}
        </>
    )
}

export default Hero
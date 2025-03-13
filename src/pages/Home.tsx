import About from '../components/About'
import Bio from '../components/Bio'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

const Home = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row items-start bg-[#1E1E1E] to-[#000000] bg-fixed p-5 min-h-screen">
          <Bio />
          <div className="flex flex-col">
              <Hero />
              <About />
              <Resume />
              <Projects />
          </div>
        </div>
    </>
  )
}

export default Home
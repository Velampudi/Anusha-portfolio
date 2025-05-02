import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
function Home() {
    const navigate = useNavigate(); 
    return (
        <div className="min-h-screen bg-gray-950  text-white font-mono flex items-center " >
            <div className="justify-between px-10 py-4 border-yellow-500">
                <main className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-40">
                    <div className="text-4xl font-bold text-white">
                        Hello, I'm{' '}
                        <span className="text-yellow-400">
                            <Typewriter
                                words={['Velampudi Anusha', 'Web Developer']}
                                loop={3}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <div className="flex gap-4 mb-8 flex-wrap justify-center">
                        <button onClick={() => navigate("/Contact")} className="border border-yellow-400 cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
                            Hire Me
                        </button>
                        <a href="https://drive.google.com/file/d/1n2LJ6wNMCHpsjU1D3nbN7VDvxT_orRIV/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="border border-yellow-400 cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
                            Download Resume
                        </a>

                    </div>

                    <div className="flex gap-6 text-xl">
                        <a href="https://www.linkedin.com/in/velampudi-anusha-2b2761247/" target="_blank"><FaLinkedin className="hover:text-yellow-300 cursor-pointer" /></a>
                        <a href="https://github.com/Velampudi" target="_blank"><FaGithub className="hover:text-yellow-300 cursor-pointer" /></a>
                        <a href="https://x.com/AnushaVelampudi" target="_blank"><FaTwitter className="hover:text-yellow-300 cursor-pointer" /></a>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Home;

{/*<div className="min-h-screen bg-gray-950  text-white font-mono">
            
            <header className="flex items-center justify-between px-10 py-4 border-yellow-500">
                
                <div className='flex'>
                    <p className='text-4xl font-bold text-yellow-400'>V</p>
                    <span className='pl-0 pt-2 text-2xl'>elampudi.</span>
                </div>


                
                <div className="space-x-6 hidden md:flex text-sm font-bold">
                    <Link to="/" className="hover:text-yellow-300">Home</Link>
                    <Link to="/About" className="hover:text-yellow-300">About</Link>
                    <Link to="/Skills" className="hover:text-yellow-300">Skills</Link>
                    <Link to="/Projects" className="hover:text-yellow-300">Projects</Link>
                    <Link to="/Resume" className="hover:text-yellow-300">Resume</Link>
                    <Link to="/Contact" className="hover:text-yellow-300">Contact</Link>
                </div>
            </header>

            
            <main className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-40">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I'm Velampudi Anusha.</h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">Web Developer</h2>

               
                <div className="flex gap-4 mb-8 flex-wrap justify-center">
                    <button className="border border-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
                        Hire Me
                    </button>
                    <button className="border border-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
                        Download Resume
                    </button>
                </div>

                
                <div className="flex gap-6 text-xl">
                    <FaLinkedin className="hover:text-yellow-300 cursor-pointer" />
                    <FaFacebook className="hover:text-yellow-300 cursor-pointer" />
                    <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
                    <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
                </div>
            </main>
        </div>*/}
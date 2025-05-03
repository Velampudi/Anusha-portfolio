import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-950 text-white font-mono flex items-center justify-center">
            <main className="w-full max-w-4xl px-6 py-10 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    Hello, I'm{" "}
                    <span className="text-yellow-400">
                        <Typewriter
                            words={['Velampudi Anusha', 'Web Developer']}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-6">
                    <button
                        onClick={() => navigate("/Contact")}
                        className="border border-yellow-400 px-6 py-2 rounded-md bg-yellow-400 text-black hover:bg-transparent hover:text-white transition"
                    >
                        Hire Me
                    </button>

                    <a
                        href="https://drive.google.com/file/d/1n2LJ6wNMCHpsjU1D3nbN7VDvxT_orRIV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
                        download
                    >
                        Download Resume
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center sm:justify-start gap-6 text-xl text-yellow-300">
                    <a href="https://www.linkedin.com/in/velampudi-anusha-2b2761247/" target="_blank">
                        <FaLinkedin className="hover:text-white" />
                    </a>
                    <a href="https://github.com/Velampudi" target="_blank">
                        <FaGithub className="hover:text-white" />
                    </a>
                    <a href="https://x.com/AnushaVelampudi" target="_blank">
                        <FaTwitter className="hover:text-white" />
                    </a>
                </div>
            </main>
        </div>
    );
}

export default Home;


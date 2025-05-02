import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDatabase, FaAndroid, FaApple, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="bg-gray-950 text-white px-6 md:px-20 py-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl text-white font-bold mb-6 border-b border-dotted border-yellow-400 pb-2">About Me</h2>

                    <h3 className="text-2xl font-semibold mb-4">Web Developer</h3>
                    <p className="text-yellow mb-6">
                    I’m a passionate and motivated web developer at the beginning of my journey in the tech world. I’ve been learning and building projects 
                    using HTML, CSS, JavaScript, and modern frameworks like React.js and Tailwind CSS.
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-8 relative inline-block">
                <span className="border-b-4 border-yellow-500 pb-1">EDUCATION</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="border border-yellow-500  p-4 rounded-md">
                    <h3 className="font-semibold text-yellow-400">
                        Bachelor of Technology,Agriculture
                    </h3>
                    <p className="text-white">Aditya enginnering college , Surampalem</p>
                    <p className="mt-1 text-white">2020 - 2024 </p>
                    <p> GPA: 8.01</p>
                </div>
                <div className="border border-yellow-500  p-4  rounded-md">
                    <h3 className="font-semibold text-yellow-400">
                        Intermediate, MPC
                    </h3>
                    <p className="text-white">Pragati vidyalaya junior college, Samalkot</p>
                    <p className="mt-1 text-white">2018 - 2020</p>
                    <p>GPA: 9.57</p>
                </div>
                <div className="border border-yellow-500  p-4  rounded-md">
                    <h3 className="font-semibold text-yellow-400">
                        10th Grade
                    </h3>
                    <p className="text-white">SPSR Zpp High School, G.Medapadu</p>
                    <p className="mt-1 text-white">2018</p>
                    <p>GPA: 9.2</p>
                </div>
            </div>
        </section>
    );
};

export default About;

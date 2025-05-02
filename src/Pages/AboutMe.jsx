import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDatabase, FaAndroid, FaApple, FaCode } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section id="about" className="bg-white text-yellow-400 px-6 md:px-20 py-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 border-b border-dotted border-yellow-400 pb-2">About Me</h2>

                    <h3 className="text-2xl font-semibold mb-4">Front End Developer</h3>
                    <p className="text-white mb-6">
                        Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with the skill of programming to deliver immersive and engaging user experiences. Proficient in efficient website development, feature optimization, and debugging.
                        Passionate about UI design with attention to detail and a focus on implementing design ideas for future employers.
                    </p>

                    <h4 className="text-xl font-bold mb-2 border-b border-dotted border-yellow-400 pb-2">Personal Information</h4>
                    <ul className="text-white space-y-2">
                        <li><span className="font-bold text-yellow-400">Name:</span> John Doe</li>
                        <li><span className="font-bold text-yellow-400">Age:</span> 27</li>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <span>India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-yellow-400" />
                            <span>demo@example.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-yellow-400" />
                            <span>+11 345678905</span>
                        </li>
                    </ul>
                </div>

                {/* Right Animation Orb */}
                <div className="relative md:w-1/2 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-yellow-500 bg-opacity-20 border border-yellow-400 relative animate-pulse shadow-[0_0_50px_#facc15]">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-400 text-2xl">
                            <FaDatabase />
                        </div>
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl">
                            <FaAndroid />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-yellow-400 text-2xl">
                            <FaApple />
                        </div>
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl">
                            <FaCode />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

{/*<section className="bg-gray-900 text-white py-16 px-4 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">What I do</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites.
                    I have a strong understanding of development principles and a keen eye for detail.
                    I am proficient in HTML, CSS, JavaScript, and frameworks like React, along with tools like Git and VS Code.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                
                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
                    <div className=' flex gap-10'>
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" className='w-20 h-15' />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-400">
                                I build responsive, modern web applications using React, JavaScript, HTML, and CSS.
                                I focus on performance, accessibility, and clean code.
                            </p>
                        </div>
                    </div>
                </div>

              
                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className=' flex gap-10'>
                        <img src="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Administrator.png" className='w-20 h-15' />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Salesforce Admin</h3>
                            <p className="text-gray-400">
                                Experienced in managing Salesforce CRM, automating workflows, and maintaining user access and data integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>*/}


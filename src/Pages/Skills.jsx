import { Link } from "react-router-dom";
import { FaCode, FaCloud } from 'react-icons/fa';

const Skills = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-4 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 border-b border-dotted border-yellow-400 pb-4">Skills</h2>
                <p className="bg-gray-950 max-w-2xl mx-auto">
                    I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites.
                    I have a strong understanding of development principles and a keen eye for detail.
                    I am proficient in HTML, CSS, JavaScript, and frameworks like React, along with tools like Git and VS Code.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-950 border border-yellow-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className=' flex gap-10'>
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" className='w-30 h-35' />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-400">
                                I build responsive, modern web applications using React, JavaScript, HTML, and CSS.
                                I focus on performance, accessibility, and clean code.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-950 border border-yellow-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className=' flex gap-10'>
                        <img src="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Advanced-Administrator.png" className='w-30 h-35' />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Salesforce Admin</h3>
                            <p className="text-gray-400">
                                Experienced in managing Salesforce CRM, automating workflows, and maintaining user access and data integrity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-950 border border-yellow-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className=' flex gap-10'>
                        <img src="https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png" className='w-30 h-35' />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Trailhead Ranger</h3>
                            <p className="text-gray-400">
                                Earned the highest rank on Trailhead by completing hundreds of badges, projects, and superbadges across Salesforce technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold m-10 text-center border-b border-dotted border-yellow-400 pb-2 ">Certifications</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                    <div className="bg-gray-950 border border-yellow-500 p-6  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-yellow-500">
                        <h3 className="text-xl font-semibold mb-2">Java Full Stack developer</h3>
                        <p className="text-teal-400 text-sm font-bold">Duration: 2024 Nov -2025 March</p>
                        <p className="mt-1 text-gray-400 text-sm flex items-center gap-1">by Digital Edify</p>
                    </div>
                    <div className="bg-gray-950 border border-yellow-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-yellow-500">
                        <h3 className="text-xl font-semibold mb-2">Salesforce Administrator,</h3>
                        <p className="text-teal-400 text-sm font-bold">Duration: 2023</p>
                        <p className="mt-1 text-gray-400 text-sm flex items-center gap-1">by Salesforce</p>
                    </div>
                    <div className="bg-gray-950 border border-yellow-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
                        <h3 className="text-xl font-semibold mb-2">Java Fundations</h3>
                        <p className="text-teal-400 text-sm font-bold">Duration: 2023</p>
                        <p className="mt-1 text-gray-400 text-sm flex items-center gap-1">by Oracle Academy,</p>
                    </div>
                </div>
            </div>


        </section>



    );
};

export default Skills;

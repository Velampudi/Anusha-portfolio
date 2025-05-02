import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-950 p-4 text-white flex justify-between items-center">
            <div className='flex'>
                <p className='text-4xl font-bold text-yellow-400'>V</p>
                <span className='pl-0 pt-2 text-2xl'>elampudi.</span>
            </div>
            <div className="flex space-x-6">
                <Link to="/" className="hover:text-yellow-300 font-bold">Home</Link>
                <Link to="/About" className="hover:text-yellow-300 font-bold">About</Link>
                <Link to="/Skills" className="hover:text-yellow-300 font-bold">Skills</Link>
                <Link to="/Projects" className="hover:text-yellow-300 font-bold">Projects</Link>
                <Link to="/Resume" className="hover:text-yellow-300 font-bold">Resume</Link>
                <Link to="/Contact" className="hover:text-yellow-300 font-bold">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;

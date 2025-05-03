import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white p-4 flex items-center justify-between">

      <div className='flex'>
        <p className='text-4xl font-bold text-yellow-400'>V</p>
        <span className='pl-0 pt-2 text-2xl'>elampudi.</span>
      </div>



      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <ul className={`md:flex md:gap-6 ${isOpen ? 'block' : 'hidden'} absolute md:static bg-black md:bg-transparent left-0 top-16 w-full md:w-auto text-center md:text-left`}>
        <li><Link to="/Anusha-portfolio" className="block py-2 px-4 hover:text-yellow-400">Home</Link></li>
        <li><Link to="/About" className="block py-2 px-4 hover:text-yellow-400">About</Link></li>
        <li><Link to="/Skills" className="block py-2 px-4 hover:text-yellow-400">Skills</Link></li>
        <li><Link to="/Projects" className="block py-2 px-4 hover:text-yellow-400">Projects</Link></li>
        <li><Link to="/Resume" className="block py-2 px-4 hover:text-yellow-400">Resume</Link></li>
        <li><Link to="/Contact" className="block py-2 px-4 hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

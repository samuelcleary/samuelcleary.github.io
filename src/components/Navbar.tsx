import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md border-b border-white/10 z-50 font-sans">
      <ul className="max-w-6xl h-full mx-auto flex justify-between items-center px-8 py-4 text-white">
          <li><Link to='/' className="py-4 px-4">Home</Link></li>
          <li className=""><Link to='/About' className="py-4 px-4">About</Link></li>
      </ul>
    </nav>
  );
}

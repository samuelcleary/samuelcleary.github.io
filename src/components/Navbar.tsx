import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
      <ul className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4 text-white">
        <Link to='/' className="">
        ML Research
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <li><Link to='/' className="">Home</Link></li>
          <li><Link to='/About' className="">About</Link></li>
        </div>
      </ul>
    </nav>
  );
}

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-baseline space-x-2 select-none">
            <span className="text-sm tracking-widest text-gray-900">0KM</span>
            <span className="font-semibold tracking-tight text-[#006D77]">COUNTRY MILES</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm text-gray-700 hover:text-[#006D77] transition-colors">Home</a>
            <a href="#why-us" className="text-sm text-gray-700 hover:text-[#006D77] transition-colors">Why Us</a>
            <a href="#packages" className="text-sm text-gray-700 hover:text-[#006D77] transition-colors">Packages</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-[#006D77] transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#E29578] px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#E29578]/40">Book Now</a>
          </div>

          <div className="md:hidden">
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#E29578] px-4 py-2 text-sm font-medium text-white shadow-sm">Book Now</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = 'John Doe - Portfolio';

    const primaryColor = '#212529'; // Dark gray for text/accents
    const secondaryColor = '#E9ECEF'; // Light gray for background

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${primaryColor}" /><stop offset="100%" stop-color="${secondaryColor}" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#212529] font-sans flex flex-col">
      <header className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white z-10 sticky top-0">
        <div className="text-2xl font-bold tracking-tight">John Doe</div>

        <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <a href="#hero" className="hover:text-gray-600 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-gray-600 transition-colors duration-200">About</a>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {
        isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-wide">
            <button onClick={toggleMenu} className="absolute top-4 right-6 p-2 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <a href="#hero" onClick={toggleMenu} className="hover:text-gray-600 transition-colors duration-200">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-gray-600 transition-colors duration-200">About</a>
          </div>
        )
      }

      <main className="flex-grow">
        <section id="hero" className="flex items-center justify-center min-h-[calc(100vh-65px)] text-center px-4 bg-white">
          <div className="max-w-xl mx-auto py-20">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-4 tracking-tighter">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Jsem developer na volné noze
            </p>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 px-6 bg-[#E9ECEF]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-left tracking-tight">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Jsem developer na volné noze
            </p>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 text-center text-sm text-gray-600 bg-white border-t border-gray-200">
        Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#212529]">DigitalFusion</a>
      </footer>
    </div>
  );
}

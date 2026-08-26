import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Sun, Moon, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Materials', path: '/materials' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 dark:bg-slate-950">
      {/* Top Bar */}
      <div className="bg-brand-dark text-slate-300 text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-4">
              <a href="tel:+919962675329" className="flex items-center gap-2 hover:text-brand-400 transition-colors"><Phone size={16} className="text-brand-500" /> +91 9962675329</a>
              <a href="tel:+919941083837" className="flex items-center gap-2 hover:text-brand-400 transition-colors"><Phone size={16} className="text-brand-500" /> +91 9941083837</a>
            </div>
            <a href="mailto:ruthrakavin@gmail.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors"><Mail size={16} className="text-brand-500" /> ruthrakavin@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-500" /> Chennai, Tamil Nadu
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
              <img src="/images/logo.png" alt="Sri Selvamurugan Logo" className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg sm:text-2xl text-brand-dark dark:text-white tracking-tight">Sri Selvamurugan</span>
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Transport & Suppliers</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors ${location.pathname === link.path
                      ? 'text-brand-500'
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="relative p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-700/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              >
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
                >
                  {isDark ? (
                    <Sun size={18} className="text-amber-400 fill-amber-400/20" />
                  ) : (
                    <Moon size={18} className="text-slate-700 fill-slate-700/10" />
                  )}
                </motion.div>
              </button>

              <Link to="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-500/30">
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Nav Toggle & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <motion.div
                  key={isDark ? 'dark-m' : 'light-m'}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <Sun size={18} className="text-amber-400 fill-amber-400/20" />
                  ) : (
                    <Moon size={18} className="text-slate-700 fill-slate-700/10" />
                  )}
                </motion.div>
              </button>
              <button
                aria-label="Toggle menu"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium text-lg ${location.pathname === link.path
                        ? 'text-brand-500'
                        : 'text-slate-600 dark:text-slate-300'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-500 text-white text-center py-3 rounded-xl font-medium mt-2"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark pt-16 pb-8 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="sm:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img src="/images/logo.png" alt="Sri Selvamurugan Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0" />
                <div className="flex flex-col leading-tight">
                  <span className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight">Sri Selvamurugan</span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">Transport & Suppliers</span>
                </div>
              </Link>
              <p className="text-slate-400 max-w-sm text-sm sm:text-base">
                Premium construction materials supplier providing River Sand, M-Sand, Aggregates along with JCB and Lorry logistics services.
              </p>
            </div>
            <div>
              <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-400 hover:text-brand-500 transition-colors flex items-center gap-2">
                      <ChevronRight size={14} /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-display font-semibold mb-6">Contact</h4>
              <ul className="flex flex-col gap-4 text-slate-400">
                <li className="flex items-start gap-3"><MapPin size={20} className="text-brand-500 shrink-0 mt-0.5" /> <span>Chennai, Tamil Nadu, India</span></li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919962675329" className="hover:text-brand-400 transition-colors">+91 9962675329</a>
                    <a href="tel:+919941083837" className="hover:text-brand-400 transition-colors">+91 9941083837</a>
                  </div>
                </li>
                <li className="flex items-center gap-3"><Mail size={20} className="text-brand-500 shrink-0" /> <a href="mailto:ruthrakavin@gmail.com" className="hover:text-brand-400 transition-colors">ruthrakavin@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Sri Selvamurugan Transport & Suppliers. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-xl shadow-brand-500/40 border border-brand-400/30 transition-all duration-300 focus:outline-none hover:scale-110"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919962675329?text=Hello%20Sri%20Selvamurugan%20Transport,%20I%20would%20like%20to%20inquire%20about%20materials/machinery."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp (+91 9962675329)"
        className="fixed bottom-6 left-6 z-50 group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-3 w-3 -mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}

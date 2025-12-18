
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Button } from './Button';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Features', href: '#' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}>
      <div className="container mx-auto px-4">
        <nav className={`glass mx-auto max-w-6xl rounded-3xl flex items-center justify-between px-6 py-3 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic">A</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">AffairNkap</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-colors flex items-center gap-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 mr-2">
              <Globe size={16} />
              <span>EN</span>
              <ChevronDown size={14} />
            </button>
            <Button variant="ghost" size="sm">Log in</Button>
            <Button variant="primary" size="sm" className="group">
              Open Account
              <div className="ml-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <span className="text-xs">↗</span>
              </div>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100 rounded-xl"
              >
                {item.label}
              </a>
            ))}
            <hr className="my-2 border-slate-200" />
            <div className="flex flex-col gap-3">
              <Button variant="secondary">Log in</Button>
              <Button variant="primary">Open Account</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

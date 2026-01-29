import React from 'react';
import { Link } from 'react-router-dom';
import LiquidEther from './LiquidEther';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Liquid Ether background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <LiquidEther
          colors={['#ffffff', '#f5f5f5', '#e5e5e5']}
          mouseForce={10}
          cursorSize={120}
          isViscous
          viscous={40}
          iterationsViscous={32}
          iterationsPoisson={30}
          resolution={0.6}
          isBounce={false}
          autoDemo
          autoSpeed={0.6}
          autoIntensity={2.5}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
          className="h-full"
        />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm" />
            <span className="text-lg font-semibold tracking-tight">Rabitah</span>
          </div>
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium">
            <Link to="/projects" className="hover:text-violet-200 transition-colors">
              Projects
            </Link>
            <a href="#about" className="hover:text-violet-200 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-violet-200 transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Rabitah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

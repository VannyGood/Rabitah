import React from 'react';
import LiquidEther from './LiquidEther';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] text-white overflow-hidden bg-slate-950">
      {/* Animated background */}
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

      {/* Navbar + hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm" />
            <span className="text-lg font-semibold tracking-tight">Rabitah</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/projects" className="hover:text-violet-200 transition-colors">
              Projects
            </Link>
            <a href="#about" className="hover:text-violet-200 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Contact
            </a>
          </nav>
          {/* Mobile menu */}
          <nav className="flex md:hidden items-center gap-4 text-sm">
            <a href="#projects" className="hover:text-violet-200 transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-violet-200 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-violet-200 transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero main: left text, right animated image */}
        <section className="pb-24 pt-10 sm:pt-16 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            {/* Left: About Rabitah */}
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] uppercase text-violet-100/70 mb-4">
                Digital Agency
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                Rabitah — your partner in
                <span className="block text-violet-100">Design, Marketing & Development.</span>
              </h1>
              <p className="text-sm sm:text-base text-violet-100/80 max-w-xl mb-6">
                We craft digital experiences that connect brands and people. From bold visual identities
                to performant products and data‑driven campaigns, Rabitah brings everything together in one
                studio.
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-black">
                <span className="px-3 py-1.5 rounded-full bg-white/90 shadow-sm">
                  UI/UX & Product Design
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/85 shadow-sm">
                  Growth & Performance Marketing
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/80 shadow-sm">
                  Web & App Development
                </span>
              </div>
            </div>

            {/* Right: animated circular image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 hero-orbit-wrapper">
                <div className="" />
                <div className="" />

                {/* Orbiting image container */}
                <div className="hero-orbit">
                  <div className="h-60 w-60 ">
                    {/* Replace /image.png with your actual asset path */}
                    <img
                      src="src/assets/3d.png"
                      alt="Rabitah work preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Small floating badges */}
                <div className="hero-orbit-badge hero-orbit-badge--top-left">
                  <span className="text-[11px] sm:text-xs font-medium text-black px-3 py-1.5 rounded-full bg-white/90 shadow">
                    Design
                  </span>
                </div>
                <div className="hero-orbit-badge hero-orbit-badge--bottom-right">
                  <span className="text-[11px] sm:text-xs font-medium text-black px-3 py-1.5 rounded-full bg-white/90 shadow">
                    Development
                  </span>
                </div>
                <div className="hero-orbit-badge hero-orbit-badge--top-right">
                  <span className="text-[11px] sm:text-xs font-medium text-black px-3 py-1.5 rounded-full bg-white/90 shadow">
                    Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
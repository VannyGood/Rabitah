import React from 'react';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import CardSwap, { Card } from '../components/CardSwap.tsx';
import Mission from '../components/Mission.tsx';
import TechnologyStack from '../components/TechnologyStack.tsx';
import DiscussProject from '../components/DiscussProject.tsx';
import Footer from '../components/Footer.tsx';
import { PROJECTS } from '../data/projects';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <section className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24 mt-20 sm:mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Projects created by us
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                A rotating peek at recent web, app and marketing work from Rabitah. Hover to pause,
                click a card to focus on a project.
              </p>
            </div>

            <div className="flex justify-end pr-2 sm:pr-6 lg:pr-12 mt-10">
              <CardSwap
                width={460}
                height={340}
                cardDistance={76}
                verticalDistance={64}
                delay={3000}
              >
                {PROJECTS.map((project) => (
                  <Card
                    key={project.id}
                    customClass="group overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/90 shadow-[0_24px_60px_rgba(0,0,0,0.75)] cursor-pointer hover:border-slate-400/90 hover:shadow-[0_28px_75px_rgba(0,0,0,0.9)] transition-colors duration-300"
                  >
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.28),transparent_60%)] pointer-events-none group-hover:opacity-100 opacity-90 transition-opacity duration-300" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-80 mix-blend-screen"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-colors duration-300" />
                      <div className="absolute inset-x-4 bottom-4 space-y-2">
                        <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100/90 backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                          {project.category}
                        </p>
                        <h3 className="text-sm sm:text-base font-semibold group-hover:text-white">
                          {project.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-200/90 line-clamp-2 group-hover:text-slate-100">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </section>
      <Mission />
      <TechnologyStack />
      <DiscussProject />
      <Footer />
    </>
  );
};

export default Home;


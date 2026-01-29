import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12">
        <header className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400 mb-3">
              Selected work
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              All projects
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:bg-slate-800"
          >
            ← Back to home
          </Link>
        </header>

        <section>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900/80 border border-slate-800 hover:border-slate-600 transition-colors shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
              >
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.35),transparent_60%)]" />
                <div className="relative flex flex-col h-full">
                  <div className="px-4 pt-4 sm:px-5 sm:pt-5 text-xs text-slate-300">
                    {project.category}
                  </div>

                  <div className="relative px-4 sm:px-5 pt-2">
                    <div className="overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-700/60 h-40 sm:h-44">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-80 mix-blend-screen"
                      />
                    </div>
                  </div>

                  <div className="relative px-4 sm:px-5 pt-4 pb-4 sm:pb-5 mt-auto">
                    <h2 className="text-base sm:text-lg font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mb-3 line-clamp-3">
                      {project.summary}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center text-xs sm:text-sm font-medium text-white/90 group-hover:text-blue-300"
                    >
                      Learn More
                      <span className="ml-1 text-base leading-none">↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;


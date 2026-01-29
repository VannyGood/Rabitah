import React from 'react';

const services = [
  {
    title: 'Web development',
    description: 'Marketing sites, landing pages and high‑performance corporate websites.',
    tag: 'HOT',
  },
  {
    title: 'Web & app development',
    description: 'React, Next.js and cross‑platform apps tailored to your product roadmap.',
    tag: 'NEW',
  },
  {
    title: 'Product & UX design',
    description: 'From wireframes to polished interfaces that convert and retain users.',
  },
  {
    title: 'Marketing strategy',
    description: 'Growth funnels, campaigns and analytics to keep your brand moving.',
    tag: 'HOT',
  },
  // {
  //   title: 'Brand & visual identity',
  //   description: 'Logos, design systems and guidelines to keep everything on‑brand.',
  // },
  // {
  //   title: 'Content & social media',
  //   description: 'Launch calendars, creative assets and community‑focused content.',
  // },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white text-slate-900 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
          {/* Left column */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              How can we
              <br />
              be of service
              <br />
              to you?
            </h2>

            <button
              type="button"
              className="inline-flex items-center gap-3 text-left group"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white">
                ▸
              </span>
              <span>
                <span className="block text-sm sm:text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  Development of web & app experiences
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 mt-1">
                  From idea to launch-ready products built with modern stacks.
                </span>
              </span>
            </button>
          </div>

          {/* Right column: list of services */}
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-4 sm:gap-6 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 sm:px-5 py-4 sm:py-5 hover:bg-slate-50 hover:border-slate-200 transition-colors"
              >
                {/* Icon placeholder – replace with your icons later */}
                <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-500">
                  Icon
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="text-sm sm:text-base font-semibold text-slate-900">
                      {service.title}
                    </p>
                    {service.tag && (
                      <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-[10px] sm:text-[11px] px-3 py-1 uppercase tracking-wide">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="mt-2 inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more
                    <span className="ml-1 text-base leading-none">↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


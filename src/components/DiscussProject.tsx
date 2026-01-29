import React, { useState } from 'react';
import discussionIcon from '../assets/discussion.png';

const DiscussProject: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optional: wire to backend or mailto
    const mailto = `mailto:hello@rabitah.com?subject=Project discussion from ${encodeURIComponent(name)}&body=${encodeURIComponent(description)}\n\n— ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="bg-white text-slate-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left: icon + headline */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src={discussionIcon}
                alt=""
                className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 object-contain"
              />
            </div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-500 mb-3">
              Get in touch
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Let&apos;s discuss your project together
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-md lg:max-w-none">
              Tell us about your idea and we&apos;ll help you bring it to life. From strategy and
              design to development and marketing — we&apos;re here for the full journey.
            </p>
          </div>

          {/* Right: form card */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What are you building? Goals, timeline, or any questions..."
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                  />
                </div>
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    Request 15-min consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussProject;

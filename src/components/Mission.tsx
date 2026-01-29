import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import missionAnimation from '../assets/mission.json';

const Mission: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Frame positions for each icon/state in the mission wheel
  const iconFrames = [40, 90, 140, 210, 280, 350, 420];

  const iconLabels = [
    'Strategy',
    'Mobile Apps',
    'Figma',
    'WebDev',
    'Telegram Apps',
    'Design',
    'Marketing',
  ];

  const handleIconHover = (index: number) => {
    setActiveIndex(index);
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(iconFrames[index] ?? 0, true);
    }
  };

  return (
    <section className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-2 lg:pr-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
          {/* Left: animated mission illustration with hover control */}
          <div className="flex justify-center lg:justify-start lg:-ml-16 xl:-ml-20">
            <div
              className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl cursor-pointer"
              style={{ minHeight: '350px' }}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={missionAnimation}
                loop={false}
                autoplay={false}
                style={{ width: '100%', height: '100%', minHeight: '350px' }}
              />
            </div>
          </div>

          {/* Right: mission copy */}
          <div className="lg:pl-4">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] uppercase text-slate-500 mb-2">
              Our mission
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight mb-3">
              Helping digital products
              <span className="block text-slate-800">launch faster and grow smarter.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-5 max-w-xl">
              At Rabitah, we blend strategy, design and engineering to ship experiences that feel
              effortless to use and meaningful to your business. From the first wireframe to the
              last marketing touchpoint, we stay focused on outcomes, not just deliverables.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
            >
              Free 15mins consultation
            </button>

            {/* Icon controls */}
            <div className="mt-5 flex flex-wrap gap-3">
              {iconLabels.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  onMouseEnter={() => handleIconHover(idx)}
                  className={[
                    'inline-flex items-center rounded-full border px-3 py-1.5 text-xs sm:text-sm transition-colors',
                    activeIndex === idx
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100',
                  ].join(' ')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;


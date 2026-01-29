import React from 'react';
import reactIcon from '../assets/tech/react.png';
import jsIcon from '../assets/tech/Js.png';
import nextIcon from '../assets/tech/nextjs.png';
import reduxIcon from '../assets/tech/redux.png';
import tsIcon from '../assets/tech/Ts.png';
import tlwIcon from '../assets/tech/tlw.png';
import htmlIcon from '../assets/tech/html.png';
import cssIcon from '../assets/tech/css.png';
import supabaseIcon from '../assets/tech/supabase.png';
import postgreIcon from '../assets/tech/postgre.png';
import mysqlIcon from '../assets/tech/mysql.png';
import nodeIcon from '../assets/tech/node.png';
import pythonIcon from '../assets/tech/python.png';
import phpIcon from '../assets/tech/php.png';
import swiftIcon from '../assets/tech/swift.png';
import nativeIcon from '../assets/tech/native.png';
import flutterIcon from '../assets/tech/flutter.png';


interface TechItem {
  name: string;
  icon: string | typeof reactIcon; // Path to PNG icon or imported asset
}

interface TechCard {
  title: string;
  items: TechItem[];
}

const TechnologyStack: React.FC = () => {
  const webTech: TechItem[] = [
    { name: 'TypeScript', icon: tsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'NextJS', icon: nextIcon },
    { name: 'Redux', icon: reduxIcon },
    { name: 'HTML', icon: htmlIcon },
    {name: 'CSS', icon: cssIcon } ,
    {name: 'Tailwind CSS', icon: tlwIcon },
  ];


  const databases: TechItem[] = [
    { name: 'PostgreSQL', icon: postgreIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Supabase', icon: supabaseIcon },
  ];

  const backends: TechItem[] = [
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'PHP', icon: phpIcon },
  ];

  const mobileTech: TechItem[] = [
    { name: 'Swift', icon: swiftIcon },
    { name: 'React Native', icon: nativeIcon },
    { name: 'Flutter', icon: flutterIcon },
  ];

  const renderTechCard = (card: TechCard) => (
    <div
      key={card.title}
      className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-5 sm:p-6"
    >
      <h3 className="text-sm sm:text-base font-semibold text-white mb-4">{card.title}</h3>
      <div className="grid grid-cols-5 gap-4 sm:gap-5">
        {card.items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
              {typeof item.icon === 'string' && item.icon.startsWith('/') ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              ) : typeof item.icon === 'string' ? (
                <div className="text-xs text-slate-400 font-medium">{item.name.slice(0, 2)}</div>
              ) : (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            <span className="text-[10px] sm:text-xs text-slate-300 text-center leading-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-[#0e111a] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            We use the latest advanced technologies, pumping our expertise daily
          </p>
        </div>

        {/* Web Section */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">Web</h3>
          {renderTechCard({ title: '', items: webTech })}
        </div>

        
       

        {/* Databases and Backends */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 mb-10">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">Databases</h3>
            {renderTechCard({ title: '', items: databases })}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">Backends</h3>
            {renderTechCard({ title: '', items: backends })}
          </div>
        </div>

        {/* Mobile Development Section */}
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
            Mobile development
          </h3>
          {renderTechCard({ title: '', items: mobileTech })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

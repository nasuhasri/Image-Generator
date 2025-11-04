
import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.182A6.75 6.75 0 019.315 7.584zM12 15a.75.75 0 01.75.75v7.182a6.75 6.75 0 01-2.436-12.436C13.883 7.617 15.75 4.332 15.75 1.5a.75.75 0 01-.75-.75C9.944.75 5.445 3.117 2.565 6.818A6.75 6.75 0 012.25 14.25a.75.75 0 01.75.75v7.182a6.75 6.75 0 012.436-12.436C6.117 16.383 4.25 19.668 4.25 22.5a.75.75 0 01-.75.75C1.116 23.25.75 20.184.75 17.25a6.75 6.75 0 015.001-6.465C8.383 9.117 10.25 5.832 10.25 3a.75.75 0 01.75-.75 6.75 6.75 0 01.785 12.815z"
      clipRule="evenodd"
    />
  </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="text-center my-8 md:my-12">
      <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2">
        <SparklesIcon className="w-5 h-5 text-cyan-400" />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">
          AI Image Generator
        </h1>
      </div>
      <p className="mt-4 max-w-2xl mx-auto text-slate-400">
        Turn your imagination into stunning visuals. Just type a description and let our AI bring your ideas to life.
      </p>
    </header>
  );
};

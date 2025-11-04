
import React from 'react';
import { Header } from './components/Header';
import { ImageGenerator } from './components/ImageGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main>
          <ImageGenerator />
        </main>
        <footer className="text-center mt-12 text-sm text-slate-500">
          <p>Powered by Gemini. Designed by a World-Class AI Engineer.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

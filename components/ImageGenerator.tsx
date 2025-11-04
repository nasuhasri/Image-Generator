
import React, { useState, useCallback } from 'react';
import { generateImage } from '../services/geminiService';
import { LoadingSpinner } from './LoadingSpinner';

const PhotoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

const WandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 .8 19.545M3 13.5a3 3 0 1 1 6 0v-1.5a3 3 0 0 1 6 0v1.5a3 3 0 1 1 6 0v-1.5a3 3 0 0 1 3-3V6a3 3 0 0 1-3-3V1.5a3 3 0 1 1-6 0v1.5a3 3 0 0 1-6 0v1.5a3 3 0 1 1-6 0v1.5a3 3 0 0 1 3 3v1.5Z" />
    </svg>
);


export const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate image. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A futuristic cityscape at sunset, with flying cars and neon lights..."
          className="w-full h-28 p-4 pr-32 bg-slate-800 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 disabled:scale-100"
        >
          {isLoading ? (
            <>
              <LoadingSpinner className="w-5 h-5" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <WandIcon className="w-5 h-5" />
              <span>Generate</span>
            </>
          )}
        </button>
      </form>

      <div className="w-full aspect-square bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center overflow-hidden transition-all">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2 text-slate-400">
             <LoadingSpinner className="w-10 h-10" />
             <p>Conjuring your masterpiece...</p>
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-400">
            <p className="font-semibold">Oh no! Something went wrong.</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} alt={prompt} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center text-slate-500">
            <PhotoIcon className="mx-auto h-12 w-12" />
            <p className="mt-2">Your generated image will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

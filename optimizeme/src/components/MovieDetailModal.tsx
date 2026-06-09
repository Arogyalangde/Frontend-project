import { useState } from "react";
import { BookmarkPlus, Clock, Play, X } from "lucide-react";
import type { Movie } from "./MovieCard";

interface MovieDetailModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieDetailModal({ movie, onClose }: MovieDetailModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="bg-[#18181b] max-w-2xl w-full rounded-2xl overflow-hidden border border-zinc-800 relative p-6">
        <button onClick={onClose} className="absolute right-4 top-4 text-zinc-400 hover:text-white bg-zinc-800/50 p-2 rounded-full z-10">
          <X className="w-5 h-5" />
        </button>

        {/* Dynamic Video Player Frame */}
        <div className="w-full h-64 bg-zinc-900 rounded-xl overflow-hidden mb-6 relative">
          {isPlaying ? (
           <iframe
                className="w-full h-full"
                src={"https://youtube.com" + movie.trailerId + "?autoplay=1"}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
>           </iframe>

          ) : (
            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
          )}
        </div>

        <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
          <span className="bg-zinc-800 px-2.5 py-1 rounded-md text-zinc-200">{movie.year}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#10b981]" /> {movie.duration}</span>
          <span className="text-[#f59e0b]">★ {movie.rating}</span>
        </div>
        <p className="text-zinc-300 leading-relaxed mb-6">This is a premium cinematic experience platform built using custom layout structures, optimized state vectors, and clean components designed by expert development teams.</p>
        
        <div className="flex gap-4">
          {!isPlaying && (
            <button onClick={() => setIsPlaying(true)} className="flex-1 bg-[#10b981] text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <Play className="w-4 h-4 fill-black" /> Play Trailer
            </button>
          )}
          <button className="bg-zinc-800 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all ml-auto">
            <BookmarkPlus className="w-4 h-4" /> Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

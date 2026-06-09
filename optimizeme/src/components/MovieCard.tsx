export interface Movie {
  id: number;
  title: string;
  year: string;
  rating: number;
  duration: string;
  category: string;
  image: string;
  trailerId: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div onClick={onClick} className="bg-[#18181b] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#10b981] transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
      <div className="overflow-hidden h-48 bg-zinc-900 relative">
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
        <span className="absolute top-3 right-3 bg-black/70 text-[#f59e0b] px-2 py-0.5 rounded-md text-xs font-bold">★ {movie.rating}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-zinc-100 group-hover:text-[#10b981] transition-colors truncate">{movie.title}</h3>
        <div className="flex justify-between items-center mt-2 text-sm text-zinc-400">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
      </div>
    </div>
  );
}

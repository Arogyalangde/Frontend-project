import { useState } from "react";
import { Film, Search, Flame, Compass } from "lucide-react";
import type { Movie } from "./MovieCard";
import MovieCard from "./MovieCard";
import MovieDetailModal from "./MovieDetailModal";

const moviesData: Movie[] = [
  { id: 1, title: "Nova Protocol: Endgame", year: "2025", rating: 8.8, duration: "2h 18m", category: "Trending", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxePCCYGXLBn27BeTikkJGdVrewmxGW9252OwYhhRyWw&s=10", trailerId: "b9MyLb6a66s"  },
  { id: 2, title: "Shadow Fall: Tokyo Drift", year: "2024", rating: 7.4, duration: "1h 55m", category: "Action", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWRmdVby2DuHUFsL1Fl7cQHUi5psGcej4taUUCdxSr15CF8WMXBv3HgGF&s=10", trailerId: "dQw4w9WgXcQ" },
  { id: 3, title: "Cyber Horizon 2099", year: "2026", rating: 9.1, duration: "2h 35m", category: "Sci-Fi", image: "https://m.media-amazon.com/images/M/MV5BMWZmNTIxYjAtODMxMi00NGRkLTk1NmUtMzQ5YWJlZjUwZGQ3XkEyXkFqcGc@._V1_.jpg", trailerId: "dQw4w9WgXcQ" },
  { id: 4, title: "The Last Echo Chronicles", year: "2023", rating: 8.2, duration: "2h 05m", category: "Action", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlIkt7NNnmaDZlWhhL-YVyiE3rUKprjp1rDyrVJq_rPDo-1_TUt5wM_WE&s=10", trailerId: "dQw4w9WgXcQ"},
  { id: 5, title: "Interstellar Voyage", year: "2025", rating: 8.9, duration: "2h 42m", category: "Sci-Fi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9WqHtUSGKEu9fLzelLCPer4Dmu7T7HZUYWp13lNGMA&s=10", trailerId: "dQw4w9WgXcQ" },
  { id: 6, title: "Rogue Agent", year: "2024", rating: 7.9, duration: "1h 48m", category: "Action", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXX-mZp5iXWUc3YQYa3H1pfuZTJYjuKZifLN4Ov_C9FQ&s=10", trailerId: "dQw4w9WgXcQ" }
];

export default function CineDashboard() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const heroMovie = moviesData[0];

  const trendingMovies = moviesData.filter(m => m.category === "Trending" || m.rating > 8.5);
  const actionMovies = moviesData.filter(m => m.category === "Action");

  const filteredMovies = search.trim() 
    ? moviesData.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full bg-[#09090b]/90 border-b border-zinc-900 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#10b981] font-black text-2xl tracking-tighter">
          <Film className="w-7 h-7" />
          <span>CINEVERSE</span>
        </div>

        {/* Search */}
        <div className="relative w-64 md:w-80">
          <Search className="absolute left-3 top-2.5 text-zinc-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#18181b] border border-zinc-800 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#10b981]"
          />
        </div>
      </header>

      {filteredMovies !== null ? (
        <div className="px-6 md:px-12 py-8">
          <h2 className="text-xl font-bold mb-6 text-zinc-400">Search Results</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Hero Banner */}
          <section className="relative w-full h-[50vh] md:h-[65vh] flex items-end overflow-hidden border-b border-zinc-900">
            <div className="absolute inset-0 z-0">
              <img src={heroMovie.image} alt="Hero Banner" className="w-full h-full object-cover brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent" />
            </div>

            <div className="relative z-10 px-6 md:px-12 pb-12 max-w-3xl flex flex-col gap-4 items-start">
              <span className="bg-[#10b981]/20 text-[#10b981] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                ★ Featured Movie
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white">{heroMovie.title}</h1>
              <p className="text-zinc-300 text-sm md:text-base">
                An absolute premium cinematic center built using customized responsive grids and native React workflows.
              </p>
              <button onClick={() => setSelectedMovie(heroMovie)} className="bg-white text-black font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-zinc-200 transition-all">
                Play Trailer
              </button>
            </div>
          </section>

          {/* Rows */}
          <section className="px-6 md:px-12 py-12 flex flex-col gap-12">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <Flame className="w-5 h-5 text-[#10b981]" /> Trending Now
              </h2>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {trendingMovies.map(movie => (
                  <div key={movie.id} className="w-48 shrink-0">
                    <MovieCard movie={movie} onClick={() => setSelectedMovie(movie)} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <Compass className="w-5 h-5 text-[#10b981]" /> Action Blockbusters
              </h2>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {actionMovies.map(movie => (
                  <div key={movie.id} className="w-48 shrink-0">
                    <MovieCard movie={movie} onClick={() => setSelectedMovie(movie)} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {selectedMovie && (
        <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

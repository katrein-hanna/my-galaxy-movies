import { useState, useEffect } from "react";
import axios from "axios";

const MOVIES_PER_PAGE = 4;
// http://www.omdbapi.com/?i=tt3896198&apikey=c8e9cbb2
export default function MoviesCarousel() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=star&type=movie&apikey=c8e9cbb2`
      );
      if (res.data.Search) setMovies(res.data.Search);
    };
    fetchMovies();
  }, []);

  const start = page * MOVIES_PER_PAGE;
  const currentMovies = movies.slice(start, start + MOVIES_PER_PAGE);

  const next = () => {
    if ((page + 1) * MOVIES_PER_PAGE < movies.length) {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section className="bg-primary text-bright py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Movies</h2>
      <div className="flex justify-center items-center gap-6">
        <button onClick={prev} className="text-2xl px-4">
          ⬅️
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {currentMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-highlights p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
              <p className="text-sm">{movie.Year}</p>
            </div>
          ))}
        </div>
        <button onClick={next} className="text-2xl px-4">
          ➡️
        </button>
      </div>
    </section>
  );
}

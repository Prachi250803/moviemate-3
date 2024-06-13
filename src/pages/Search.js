import { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { Card } from "../components/Card";

export const Search = ({ apiPath, queryTerm }) => {
  const [movies, setMovies] = useState([]);

  const { data: fetchedMovies, loading, error } = useAxios(apiPath, queryTerm);

  useEffect(() => {
    document.title = `${queryTerm} / Moviemate`;
  }, [queryTerm]);

  useEffect(() => {
    if (fetchedMovies) {
      setMovies(fetchedMovies);
    }
  }, [fetchedMovies]);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {loading ? "Loading..." : movies.length === 0 ? `No result found for '${queryTerm}'` : `Results for '${queryTerm}'`}
        </p>
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </section>
      <div className="flex flex-wrap justify-evenly">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Search;

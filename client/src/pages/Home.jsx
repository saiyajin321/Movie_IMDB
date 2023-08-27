import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/Card";
import DefaultCarousel from "../components/Carousel";
import NavBar from "../components/Navbar";
import { fetchMovies } from "../store/action";

export default function HomePage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const { movies } = useSelector((state) => state);

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <>
      <NavBar />
      <main className="p-20 h-85vh flex flex-col justify-center items-center">
        <div className="grid grid-cols-5 gap-8 p-4">
          {currentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>

      <div className="flex justify-center">
        <div className="flex">
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-600 rounded"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={endIndex >= movies.length}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

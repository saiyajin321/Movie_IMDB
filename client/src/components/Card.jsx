import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function MovieCard({ movie }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const URL = 'https://image.tmdb.org/t/p/w300/';
  const id = movie.id;

  return (
    <div className="rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72 mb-20 w-64" >
      <div className="pt-15 h-80 w-64 grid place-items-center font-mono">
        <div className="bg-neutral-800 h-80 w-64 rounded-md shadow-xl shadow-slate-900 ">
          <div className="flex flex-none justify-center items-center leading-none">
            <a href="" onClick={(e) => {
                e.preventDefault()
                navigate(`/${id}`)
            }}>
              <img
                src={`${URL}${movie.poster_path}`}
                alt="pic"
                className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
              />
            </a>
          </div>
          <div className="p-3">
            <p className="block mb-1 text-white font-extralight text-xl">{movie.original_title}</p>
            <p className="text-xs  text-white tracking-tighter text-gray-600">
              {formatDate(movie.release_date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

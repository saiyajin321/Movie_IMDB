import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config/api";
import axios from 'axios'
import Genre from "../components/Genre";
import Studio from "../components/Studio";

export default function DetailPage() {
    const URL = 'https://image.tmdb.org/t/p/w300'
    let { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const { data } = await axios({
                    url: `${BASE_URL}movies/${id}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                });
                setMovieDetails(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <>
            <NavBar />

            <div className="flex flex-col relative h-screen" style={{ backgroundImage: `url(${movieDetails && URL + movieDetails.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <div className="flex flex-1 text-white font-bold ml-20 items-center">
                    <div className="text-center">
                        <div className="text-7xl mb-2 font-mono">
                        {movieDetails && movieDetails.original_title}
                        </div>
                        <div className="text-xl mb-5 font-mono">
                        {movieDetails && movieDetails.tagline}

                        </div>
                        <div className="flex flex-row">
                            {movieDetails && movieDetails.genres.map(genre => (
                                <Genre key={genre.id} genreName={genre.name} />
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: "1px solid #fff ", marginLeft: 40, marginRight: 40, marginBottom: 20 }}></div>

                <div className="flex flex-1 font-bold flex-row ml-12 mr-12">
                    <div className="flex flex-row flex-1 w-64 ml-4">

                    <div className="flex-none max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={movieDetails && `${URL}${movieDetails.poster_path}`} alt="" />
    </a>
</div>

                        <div className="flex flex-col">
                            <div className="flex ml-12 mt-12 text-2xl">
                            {movieDetails && movieDetails.overview}
                            </div>
                            <div className="flex flex-row ml-12 mb-12 mt-6">
                            {movieDetails && movieDetails.production_companies.map(el => (
                                <Studio key={el.id} studio={el.name} />
                            ))}
           
                            </div>
                            <div className="ml-2">

                                <span className="ml-12 text-xl"> User Score</span>
                            </div>
                            <div className="flex w-32 ml-12 flex flex-col h-32 rounded-full border-4 flex items-center justify-center">
                                <div className="text-white font-extrabold font-mono text-lg text-center flex">
                                {movieDetails && movieDetails.vote_average}

                                </div>
                                <div className="text-white font-extrabold font-sans text-lg text-center flex">
                                {movieDetails && movieDetails.vote_count}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

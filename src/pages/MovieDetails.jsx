// import { MoviesGrid } from "../components/MoviesGrid";
import { useParams } from "react-router";
import { useEffect, useState } from 'react';

import { get } from "../utils/httpClient";
// import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails(){
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    // const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    // if (!movie) return null;

    if (isLoading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);

    // let imageUrl = "";
    // if (movie) {
    //     imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    // }
    return ( 
        <>
        {movie && (
            <div className={styles.detailsContainer}>
                <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <p><strong>Title:</strong> {movie.title}</p>
                    <p>
                        <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}
                    </p>
                    <p><strong>Description:</strong> {movie.overview}</p>
                </div>
            </div>
        )}
        </>
    )
}
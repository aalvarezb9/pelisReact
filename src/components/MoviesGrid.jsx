import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
// import get from "../utils/httpClient";
import { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
// import { useLocation } from "react-router";
// import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";



export function MoviesGrid({ search }) {

    // let movies = [];
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search ? `/search/movie?query=${search}&page=${page}`: `/discover/movie?page=${page}`; 
        get(searchUrl).then(data => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        })
    }, [search, page]);

    // if (isLoading) {
    //     return <Spinner />
    // }
    if (!isLoading && movies.length === 0) return <Empty />;

    return (
        <InfiniteScroll 
            dataLength={movies.length} 
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </ul>
        </InfiniteScroll>
    );
}
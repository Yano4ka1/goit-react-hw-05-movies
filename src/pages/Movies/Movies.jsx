import { MovieList } from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import * as API from '../../services/Api';
import { Container } from "./Movies.styled";
// import { toast } from 'react-toastify';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const nameMovie = searchParams.get('query');

    
    useEffect(() => {
        if (!nameMovie) return;
        
        searchMoviesByQuery(nameMovie);
        
        async function searchMoviesByQuery(nameMovie) {
            try {
                const results = await API.searchMovieByQuery(nameMovie);
                // console.log('results MoviesSearch', results);

                if (results.length === 0) {
                    alert(`There are no movies found. Please, try again`);
                }
                
                setMovies([...results]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, [nameMovie]);

    const handleFormSubmit = e => {
        e.preventDefault();
        const { query } = e.target.elements;
        const searchQuery = query.value.trim();

        if (!searchQuery) {
            alert('Please add a movie name!');
            return;
        }

        setSearchParams({ query: searchQuery });
        e.target.reset();
    }
    
    // if (!movies) return null;
    // console.log('location Movie :>> ', location);
    return (
        <Container>
            <SearchForm onSubmit={handleFormSubmit } /> 
            {movies.length > 0 && (
                <MovieList
                    movies={movies}
                    isMoviePage={true}
                    prevLocation={location.pathname + location.search }
                />
            )}
        </Container>
    )
};

export default Movies;
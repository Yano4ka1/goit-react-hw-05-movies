import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from "constants";
import { Link } from "react-router-dom";
import { MovieCardItemStyled, MovieListStyled } from "./MovieList.styled";
import PropTypes from 'prop-types';

export const MovieList = ({ movies, isMoviePage = false, prevLocation }) => {

    return (
        <MovieListStyled>
            {isMoviePage ? movies.map(({ id, title, poster_path }) => (
                <li key={id}>
                    <Link to={`${id}`} state={{ from: `${prevLocation}` }}>

                        <MovieCardItemStyled>
                            <img src={poster_path ? IMAGE_BASE_API_URL + poster_path : FALLBACK_IMAGE_URL} alt={title} width="200px" height="300px" />
                            <h3>{title}</h3>
                        </MovieCardItemStyled>
                    </Link>
                </li>
            ))
                :
                movies.map(({ id, title, poster_path }) => (
                    <li key={id}>
                        <Link to={`movies/${id}`} state={{ from: `${prevLocation}` }}>
    
                            <MovieCardItemStyled>
                                <img src={poster_path ? IMAGE_BASE_API_URL + poster_path : FALLBACK_IMAGE_URL} alt={title} width="200px" height="300px" />
                                <h3>{title}</h3>
                            </MovieCardItemStyled>
                        </Link>
                    </li>
                ))}
        </MovieListStyled>
    )
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    isMoviePage: PropTypes.bool,
    prevLocation: PropTypes.string.isRequired,
  };
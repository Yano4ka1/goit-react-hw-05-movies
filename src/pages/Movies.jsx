import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Links } from './Movies.styled';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = 'f527a40a6ce9b319b05653b678197392';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('q') ?? '';
    const location = useLocation();
  
    useEffect(() => {
      setQuery(search);
      if (query === '') {
        return;
      }
  
      fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}`)
        .then(response => response.json())
        .then(({ results }) => {
          setSearchMovies(results);
        })
        .catch(error => {
          alert(error);
        });
    }, [query, search]);
  
    const handleChange = searchValue => {
      setQuery(searchValue);
      setSearchParams({ q: searchValue });
    };
  
    return (
      <div>
        <SearchForm onSubmit={handleChange} />
        <ul>
          {searchMovies.map(({ id, title }) => (
            <Links key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Links>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Movies;
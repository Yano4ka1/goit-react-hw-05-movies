import * as API from '../../services/Api';
import { useEffect, useState } from 'react';
import { Container } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getPopularMovies();

        async function getPopularMovies() {
            try {
                const results = await API.getTrendingMovies();
        
                setMovies([...results]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, []);

    // console.log('location Home :>> ', location);
    return (
        <Container>
            <h2>Trending today</h2>
            
            <MovieList
                movies={movies}
                prevLocation={ location.pathname }
            />
        </Container>
    )
};

export default Home;
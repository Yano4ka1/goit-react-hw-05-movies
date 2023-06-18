import { Genres, ImageWrapper, MovieCardStyled, Overview, Rating } from "./MovieCard.styled"
// import PropTypes from 'prop-types';


export const MovieCard = ({ title, genres, overview, image, rating, year }) => {
    // console.log('title', title);
    return (
        <MovieCardStyled>
            <ImageWrapper>
                <img src={image} alt={title} width="200px" height="300px" />
            </ImageWrapper>
        
            <div>
                <h2>{title} ({year})</h2>
                <Rating>User score: {rating}%</Rating>
                
                <Overview>
                    <h3>Overwiev</h3>
                    <p>{overview}</p>
                </Overview>

                <Genres>
                    <h3>Genres</h3>
                    <p>{genres}</p>
                </Genres>
            </div>
        </MovieCardStyled>
    );
};

// MovieCard.propTypes = {
//     genres: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     year: PropTypes.string.isRequired,
//   };
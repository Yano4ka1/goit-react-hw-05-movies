import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewsList } from "./Reviews.styled";
import * as API from '../../services/Api';

const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviewsById();

        async function getMovieReviewsById() {

            const results = await API.getMovieReviewsById(movieId);
            // console.log('results Reviews :>> ', results);
            setReviews(results);
        }
    }, [movieId]);

    if (!reviews) return null;

    return (
        <>
            {reviews.length === 0 ? <p>We don't have any reviews yet</p> :
                (<ReviewsList>
                    {reviews.map(({ author, content, id }) =>
                    (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ReviewsList>)
            }
        </>
    )
};

export default Reviews;

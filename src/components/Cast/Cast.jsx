import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from 'constants';
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../services/Api';
import { ActorCard } from './ActorCard';
import { CastList } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCastById();

        async function getMovieCastById() {

            const results = await API.getMovieCastById(movieId);
            // console.log('results :>> ', results);
            const actorList = results.length > 24 ? results.slice(0, 24) : results;
            setCast(actorList);
        }
    }, [movieId]);

    if (!cast) return null;

    return (
        <CastList>
            {cast.map(({ original_name, character, profile_path, id }) =>
                (<li key={id}>
                    <ActorCard
                        photo={profile_path ? IMAGE_BASE_API_URL + profile_path : FALLBACK_IMAGE_URL}
                        name={original_name}
                        character={character}
                    />
                </li>)
            )}
        </CastList>
    );
};

export default Cast;
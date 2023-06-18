import { Card } from "./Cast.styled";
import React from 'react';
import PropTypes from 'prop-types';

export const ActorCard = ({ name, character, photo }) => {
    return (
        <Card>
            <img src={photo} alt={name} width="100px" height="150px" />
            <p>
                name: <span>{name}</span>
            </p>
            <p>
                character: <span>{character}</span>
            </p>
        </Card>
    );
};

ActorCard.propTypes = {
    photo: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
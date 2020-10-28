import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/characters/${character.id}`}>
      <CharacterItem {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="character-list">
      {characterElements}
    </ul>
  )
};

CharacterList.propTypes = {};

export default CharacterList;
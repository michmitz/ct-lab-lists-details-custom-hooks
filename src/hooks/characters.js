import { useState, useEffect } from 'react';
import { getCharacters, getCharacterById } from '../services/rickAndMorty-api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, [])

  return {
    loading,
    characters
  };
};

export const useCharacterById = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacterById(id)
      .then(fetchedCharacter => setCharacter(fetchedCharacter))
      .finally(() => setLoading(false));
  }, [id])

  return {
    loading,
    character
  };
};

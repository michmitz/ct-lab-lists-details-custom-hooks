import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMorty-api';

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

import React from 'react';
import { useState } from 'react';
import CharacterList from '../components/Characters/CharacterList'

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button 
        onClick={() => setPage(page => page -1)}
        disabled={page <=1}>
        &lt;
      </button>
      <button onClick={() => setPage(page => page + 1)}
        disabled={page >= 35}>
        &gt;
      </button>
      <CharacterList page={page} />
    </>
  );
};

export default CharacterPage;

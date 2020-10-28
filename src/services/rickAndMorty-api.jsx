const fetch = require('node-fetch');

export const getCharacters = async() => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    imageUrl: character.image
  }))
}

export const getCharacterById = async(id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return {
    id: json.id,
    name: json.name,
    status: json.status,
    species: json.species,
    imageUrl: json.image
  };
}
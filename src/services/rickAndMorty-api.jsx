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
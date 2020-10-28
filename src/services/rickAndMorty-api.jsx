export const getCharacters = async() => {
  const res = await fetch('');
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    imageUrl: character.image
  }))
}
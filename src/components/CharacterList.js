import React from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('%c Error Caught!', 'color: red; font-weight: bold;');
        console.log(err);
      })
  }, [])

  return (
    <section className='character-list grid-view'>
      {characters.map(character => {
        return <CharacterCard character={character} key={character.url} />
      })}
    </section>
  );
};

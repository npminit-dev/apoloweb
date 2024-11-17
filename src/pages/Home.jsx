import { useEffect, useState } from 'react';
import Character from '../components/Character';
import Navigation from '../components/Navigation';
import RickLogo from '../components/RickAndMortyLogo';
import useCharacteres from '../services/useCharacters';
import SearchBar from '../components/SearchBar';

const Home = () => {

  const { characters, loadState, reloadCharacters } = useCharacteres();
  const [search, setSearch] = useState('')

  return ( 
    <section>
      <Navigation/>
      <SearchBar search={search} setSearch={setSearch}/>
      <ul>
      {
        loadState === 'idle' && Array.isArray(characters) ? 
        characters.filter(char => search === '' || new RegExp(`${search}`, 'gi').test(char.name))
        .map(char => 
          <Character
            key={char.id}
            name={char.name}
            gender={char.gender}
            image={char.image}
            origin={char.origin.name}
            species={char.species}
            status={char.status}
          />
        ) : null
      }
      </ul>
    </section>
  );
}
 
export default Home;
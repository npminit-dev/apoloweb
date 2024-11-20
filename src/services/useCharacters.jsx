import { useState, useEffect } from 'react';

const useCharacteres = () => {

  const [loadState, setLoadState] = useState('loading')
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if(loadState === 'loading') loadCharacters()
  }, [loadState]);

  const loadCharacters = async () => {
    let pageCount = 1;
    setCharacters([])
    while(true) {
      let response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageCount}`)
      if(!response.ok) {
        setLoadState('error')
        setCharacters([])
        break;
      } else {
        let data = await response.json()
        pageCount++
        setCharacters(characters => [...characters, ...data.results])
        if(!data.info.next) break;
      }
    }
    if(loadState !== 'error') setLoadState('idle')
  }

  const reloadCharacters = () => setLoadState('loading')

  return { characters, loadState, reloadCharacters};
}
 
export default useCharacteres;
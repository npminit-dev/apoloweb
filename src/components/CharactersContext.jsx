import { createContext } from 'react';
import useCharacteres from '../services/useCharacters';
import useLocalCharacters from './useLocalCharacters';

export const charactersCtx = createContext()

export function CharactersContextProvider({ children }) {

  const { characters, loadState, reloadCharacters } = useCharacteres();
  const { characters: localCharacters, addCharacter, deleteCharacter, updateCharacter } = useLocalCharacters()

  return <charactersCtx.Provider
    value={{
      characters,
      localCharacters,
      loadState,
      reloadCharacters,
      addCharacter,
      deleteCharacter,
      updateCharacter
    }}
  >
    { children }
  </charactersCtx.Provider>

}


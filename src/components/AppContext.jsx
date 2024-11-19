import { createContext, useState } from 'react';
import useCharacteres from '../services/useCharacters';
import useLocalCharacters from '../hooks/useLocalCharacters';

export const appCtx = createContext()

export function AppCtxProvider({ children }) {

  const { characters, loadState, reloadCharacters } = useCharacteres();
  const { characters: localCharacters, addCharacter, deleteCharacter, updateCharacter } = useLocalCharacters()
  const [logged, setLogged] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  return <appCtx.Provider
    value={{
      characters,
      localCharacters,
      loadState,
      reloadCharacters,
      addCharacter,
      deleteCharacter,
      updateCharacter,
      logged,
      setLogged,
      theme,
      setTheme
    }}
  >
    { children }
  </appCtx.Provider>

}


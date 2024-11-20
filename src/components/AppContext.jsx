import { createContext, useState, useEffect } from 'react';
import useCharacteres from '../services/useCharacters';
import useLocalCharacters from '../hooks/useLocalCharacters';
import { useNavigate } from 'react-router-dom';

export const appCtx = createContext()

export function AppCtxProvider({ children }) {

  const { characters, loadState, reloadCharacters } = useCharacteres();
  const { characters: localCharacters, addCharacter, deleteCharacter, updateCharacter } = useLocalCharacters()
  const [logged, setLogged] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const navigate = useNavigate()

  useEffect(() => {
    const loginfo = localStorage.getItem('userLogged')
    if(!loginfo) {
      navigate('/login')
      setLogged(false)
    }
    else {
      navigate('/home')
      setLogged(true)
    }
  }, []);

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


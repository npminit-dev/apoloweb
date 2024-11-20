import { createContext, useState, useEffect } from 'react';
import useCharacteres from '../services/useCharacters';
import useLocalCharacters from '../hooks/useLocalCharacters';
import { useNavigate } from 'react-router-dom';

export const appCtx = createContext()

export function AppCtxProvider({ children }) {

  /* uso de custom hooks */
  const { characters, loadState, reloadCharacters } = useCharacteres();
  const { characters: localCharacters, addCharacter, deleteCharacter, updateCharacter } = useLocalCharacters()

  const [logged, setLogged] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const navigate = useNavigate()

  /* se verifica, en la carga inicial de la pagina, si hay un usuario guardado en el storage, y se redirige en consecuencia */
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


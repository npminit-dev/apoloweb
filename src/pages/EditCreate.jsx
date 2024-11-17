import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useEffect, useContext, useReducer } from 'react';
import { charactersCtx } from '../components/CharactersContext';
import CharacterForm from '../components/CharacterForm';

const EditCreate = () => {

  const { state: toUpdate } = useLocation()
  const { localCharacters, addCharacter, updateCharacter, deleteCharacter } = useContext(charactersCtx);
  const [character, dispatch] = useReducer(characterReducer, {...toUpdate, local:true});
  const navigate = useNavigate()

  useEffect(() => {
    console.log(character)
  }, [character])

  const handleUpdate = (e) => {
    e.preventDefault()
    Object.hasOwn(toUpdate, 'local') ? updateCharacter(character.id, character) : addCharacter(character)
  }

  return (
    <section>
      <Navigation />
      {
        toUpdate ?
          <div className='flex items-center justify-center pt-8'>
            <CharacterForm
              dispatch={dispatch}
              value={character}
              action={handleUpdate}
              cancelAction={() => navigate('/Home')}
            />
          </div>
          : null
      }
    </section>
  );
}

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload, local: true };
    case 'SET_ORIGIN':
      return { ...state, origin: action.payload, local: true };
    case 'SET_GENDER':
      return { ...state, gender: action.payload, local: true };
    case 'SET_SPECIES':
      return { ...state, species: action.payload, local: true };
    case 'SET_STATUS':
      return { ...state, status: action.payload, local: true };
    case 'SET_IMAGE':
      return { ...state, image: action.payload, local: true };
    default:
      return state;
  }
};

export default EditCreate;


import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useEffect, useContext, useReducer, useState } from 'react';
import { charactersCtx } from '../components/CharactersContext';
import CharacterForm from '../components/CharacterForm';
import { NEWCHAR_DEFVALUES } from '../constants';
import MortyLogo from '../components/MortyLogo';
import CharacterPhrase from '../components/CharacterPhrase';

const EditCreate = () => {

  const { state: toUpdate } = useLocation()
  const { addCharacter, updateCharacter } = useContext(charactersCtx);
  const [character, dispatch] = useReducer(characterReducer, toUpdate ? { ...toUpdate, local: true } : NEWCHAR_DEFVALUES);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    Object.hasOwn(toUpdate, 'local') ? updateCharacter(character.id, character) : addCharacter(character)
  }

  const handleCreateCharacter = (e) => {
    e.preventDefault()
    addCharacter(character)
    navigate('/Home')
  }

  return (
    <section>
      <Navigation />
      {
        toUpdate ?
          <div className='flex items-center justify-center pt-8 fadeinright'>
            <CharacterForm
              dispatch={dispatch}
              value={character}
              action={handleUpdate}
              cancelAction={() => navigate('/Home')}
            />
          </div> :
          !isCreateModalOpen ?
            <div className='flex flex-col items-center justify-center my-12 fadeinright'>
              <MortyLogo height={150} width={150} />
              <CharacterPhrase author={'Morty'}>
                Uh, alright, listen... You can go to the 
                <Link to={'/Home'} className='hover:underline font-RobReg font-bold'> character list</Link> to start editing your existing characters, or if you're feeling adventurous,
                you could create a whole <span className='hover:underline font-RobReg text-emph cursor-pointer' onClick={() => setIsCreateModalOpen(true)}>new character </span>
                from scratch! Just, uh... don't make it too complicated, okay?
              </CharacterPhrase>
            </div> :
            <div className='fadeinup'>
              <CharacterForm
                value={character}
                dispatch={dispatch}
                action={(e) => handleCreateCharacter(e)}
                cancelAction={() => setIsCreateModalOpen(false)}
                withImage={true}
              />
            </div>
      }
    </section>
  );
}

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_ORIGIN':
      return { ...state, origin: action.payload };
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    case 'SET_SPECIES':
      return { ...state, species: action.payload };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'SET_IMAGE':
      return { ...state, image: action.payload };
    case 'SET_ALL':
      return action.payload
    default:
      return state;
  }
};

export default EditCreate;


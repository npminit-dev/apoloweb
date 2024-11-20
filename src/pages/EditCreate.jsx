import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useReducer, useState } from 'react';
import { appCtx } from '../components/AppContext';
import CharacterForm from '../components/CharacterForm';
import { NEWCHAR_DEFVALUES } from '../constants';
import MortyLogo from '../components/MortyLogo';
import CharacterPhrase from '../components/CharacterPhrase';
import Button from '../components/Button';
import Lottie from 'react-lottie-player'
import RocketLight from '../assets/rocket-light.json'
import RocketDark from '../assets/rocket-dark.json'

const EditCreate = () => {

  const { state: toUpdate } = useLocation()
  const { addCharacter, updateCharacter, theme } = useContext(appCtx);
  const [character, dispatch] = useReducer(characterReducer, toUpdate ? { ...toUpdate, local: true } : NEWCHAR_DEFVALUES);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    Object.hasOwn(toUpdate, 'local') ? updateCharacter(character.id, character) : addCharacter(character)
    navigate('/Home')
  }

  const handleCreateCharacter = (e) => {
    e.preventDefault()
    addCharacter(character)
    navigate('/Home')
  }

  return (
    <section className='h-full overflow-hidden'>
      {
        toUpdate ?
          <div className='flex items-center justify-center pt-2 fadeinright'>
            <CharacterForm
              dispatch={dispatch}
              value={character}
              action={handleUpdate}
              cancelAction={() => navigate('/Home')}
            />
          </div> :
          !isCreateModalOpen ?
            <div className='h-[calc(100vh-44px)] flex flex-col items-center justify-evenly fadein'>
              <MortyLogo height={125} width={125} />
              <CharacterPhrase author={'Morty'} maxW={600}>
                Uh, alright, listen... You can go
                to <Link to={'/Home'} className='hover:underline font-RobReg font-bold'>home </Link> to start editing your existing characters, or if you're feeling adventurous,
                you could create a whole new character
                from scratch! Just, uh... don't make it too complicated, okay?
              </CharacterPhrase>
              <Button action={() => setIsCreateModalOpen(true)} classes={'dark:hover:bg-sec hover:bg-sec-light z-50'}>Create!</Button>
              <Lottie 
                loop animationData={theme === 'light' ? RocketLight : RocketDark} play
                style={{ height: 250, width: 250, margin: '-50px 0', backgroundColor: 'transparent', color: 'transparent' }}
              />
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


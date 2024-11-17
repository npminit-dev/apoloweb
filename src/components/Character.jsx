import { useInView } from 'react-intersection-observer';
import CharacterDataEntry from './CharacterDataEntry';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Character = ({ id, name, status, species, gender, origin, image, local, deleteCharacter }) => {

  const { ref, inView } = useInView({ delay: 100, triggerOnce: true })
  const navigate = useNavigate()

  return (
    <li ref={ref} className='min-h-[150px]'>
      {
        inView ? <div className='min-h-[150px] p-4 m-2 rounded-sm bg-sec/50 flex flex-col sm:flex-row items-center justify-start fadeinleft'>
          <img src={image} className={`h-[125px] w-[125px] rounded-full sm:mr-8 mb-4 ${status === 'Dead' ? 'grayscale' : ''}`} />
          <div className='flex flex-col items-center sm:items-start'>
            <h1 className='font-PopSB text-xl text-txt mb-2'>{name}</h1>
            <CharacterDataEntry title={'Origin'} value={origin} />
            <CharacterDataEntry title={'Gender'} value={gender} />
            <CharacterDataEntry title={'Species'} value={species} />
            <CharacterDataEntry title={'Status'} value={status} />
          </div>
          <div className='sm:ml-auto sm:mr-8 w-[100px]'>
            <Button classes={'w-full'} action={() => navigate('/EditCreate', { state: { id, name, status, species, gender, origin, image, ...(local && { local: true }) } })}>Edit</Button>
            {local ? <Button action={() => deleteCharacter(id)} classes={'bg-red-500'}>Remove</Button> : null}
          </div>
          {local ?
            <h4 className='absolute top-2 right-2 font-PopIt text-txt'>local</h4>
            : null
          }
        </div> : null
      }
    </li>
  );
}

export default Character;
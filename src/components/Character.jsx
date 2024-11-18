import { useInView } from 'react-intersection-observer';
import CharacterDataEntry from './CharacterDataEntry';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Character = ({ id, name, status, species, gender, origin, image, local, deleteCharacter }) => {

  const { ref, inView } = useInView({ delay: 100, triggerOnce: true })
  const navigate = useNavigate()

  const handleStartEdit = () => {
    navigate('/EditCreate', {
      state: {
        id, name, status, species, gender, origin, image,
        ...(local && { local: true })
      }
    })
  }

  return (
    <li ref={ref} className='min-h-[150px]'>
      {
        inView ? <div className='min-h-[150px] p-4 m-2 rounded-sm bg-sec/50 flex flex-col sm:flex-row items-center justify-start hover:outline hover:outline-[1px] hover:outline-emph fadeinleft '>
          <img src={image} className={`h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] rounded-full sm:mr-8 mb-4 ${status === 'Dead' ? 'grayscale' : ''} hover:grayscale-0 duration-300 cursor-pointer`} />
          <div className='flex flex-col items-center sm:items-start'>
            <h1 className='font-PopSB text-lg sm:text-xl text-txt mb-2'>{name}</h1>
            <CharacterDataEntry title={'Origin'} value={origin} />
            <CharacterDataEntry title={'Gender'} value={gender} />
            <CharacterDataEntry title={'Species'} value={species} />
            <CharacterDataEntry title={'Status'} value={status} />
          </div>
          <div className='sm:ml-auto sm:mr-8 flex sm:flex-col items-center justify-center sm:justify-end mt-4'>
            <Button classes={'w-full mt-[0px] mb-0 sm:mb-2'} action={handleStartEdit}>Edit</Button>
            {local ? <Button action={() => deleteCharacter(id)} classes={'bg-red-500 mt-[0px]'}>Remove</Button> : null}
          </div>
          <h4 className='absolute top-2 right-2 font-PopB text-txt/40'>{local? 'local' : 'API'}</h4>
        </div> : null
      }
    </li>
  );
}

export default Character;
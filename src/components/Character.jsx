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
        inView ? <div className='min-h-[150px] p-4 m-2 rounded-sm dark:bg-sec/70 bg-sec-light/70 flex flex-col sm:flex-row items-center justify-start hover:outline hover:outline-[1px] dark:hover:outline-emph hover:outline-emph-light fadeinleft duration-300'>
          <img src={image} alt='Character image' className={`h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] rounded-full sm:mr-8 mb-4 ${status === 'Dead' ? 'grayscale' : ''} hover:grayscale-0 duration-300 cursor-pointer`} />
          <div className='flex flex-col items-center sm:items-start'>
            <h1 className='font-PopSB text-lg sm:text-xl dark:text-txt text-txt-light mb-2'>{name}</h1>
            <CharacterDataEntry title={'Origin'} value={origin} />
            <CharacterDataEntry title={'Gender'} value={gender} />
            <CharacterDataEntry title={'Species'} value={species} />
            <CharacterDataEntry title={'Status'} value={status} />
          </div>
          <div className='w-[188px] sm:w-[94px] sm:ml-auto sm:mr-8 flex sm:flex-col items-end justify-center sm:justify-end mt-4'>
            <Button 
              classes={'mt-[0px] mb-[0px] !w-[94px]'} 
              action={handleStartEdit} 
              buttonProps={{ title: 'Edit character' }}
            >Edit</Button>
            {local ? <Button 
              action={() => deleteCharacter(id)} 
              classes={'bg-red-500 dark:bg-red-500 mt-[0px] !w-full !px-0 !mb-0'} 
              buttonProps={{ title: 'Remove character' }}
            >Remove</Button> : null}
          </div>
          <h4 className='absolute top-2 right-2 font-PopB dark:text-txt/40 text-txt-light/50'>{local? 'local' : 'API'}</h4>
        </div> : null
      }
    </li>
  );
}

export default Character;
import { useInView } from 'react-intersection-observer';
import CharacterDataEntry from './CharacterDataEntry';

const Character = ({ name, status, species, gender, origin, image }) => {

  const { ref, inView } = useInView({ delay: 100, triggerOnce: true })

  return (
    <li ref={ref} className='min-h-[150px]'>
      {
        inView ? <div className='min-h-[150px] p-4 m-2 rounded-sm bg-sec/50 flex flex-col sm:flex-row items-center justify-start fadein'>
          <img src={image} className={`h-[125px] w-[125px] rounded-full sm:mr-8 mb-4 ${status === 'Dead' ? 'grayscale' : ''}`}/>
          <div className='flex flex-col items-center sm:items-start'>
            <h1 className='font-PopSB text-xl text-txt mb-2'>{name}</h1>
            <CharacterDataEntry title={'Oigin'} value={origin}/>
            <CharacterDataEntry title={'Gender'} value={gender}/>
            <CharacterDataEntry title={'Species'} value={species}/>
            <CharacterDataEntry title={'Status'} value={status}/>
          </div>
        </div> : null
      }
    </li>
  );
}

export default Character;
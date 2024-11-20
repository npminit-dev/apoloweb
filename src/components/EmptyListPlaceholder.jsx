import RickLogo from './RickLogo'
import CharacterPhrase from './CharacterPhrase'

const EmptyListPlaceholder = ({ iconsize, message }) => {

  return (
    <li className='absolute w-full h-fit px-2 py-8 flex items-center justify-center flex-col myplaceholder'>
      <RickLogo height={iconsize} width={iconsize}/>
      <CharacterPhrase author={'Rick'} maxW={300}>{message}</CharacterPhrase>
    </li>
  );
}
 
export default EmptyListPlaceholder;
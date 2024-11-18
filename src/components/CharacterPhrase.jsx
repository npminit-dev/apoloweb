const CharacterPhrase = ({ author, children }) => {
  return (
    <p className='font-RobLgtIt text-xl sm:text-2xl text-txt text-center max-w-[450px] p-2'>
      <span className='font-RobBld'>{author}—</span>: "{children}"
    </p>
  );
}

export default CharacterPhrase;
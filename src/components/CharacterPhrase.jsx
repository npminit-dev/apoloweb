const CharacterPhrase = ({ author, children }) => {
  return (
    <p className='font-RobLgtIt sm:text-xl dark:text-txt text-txt-light text-center max-w-[450px] p-2'>
      <span className='font-RobBld'>{author}—</span>: "{children}"
    </p>
  );
}

export default CharacterPhrase;
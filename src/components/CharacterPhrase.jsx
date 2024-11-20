const CharacterPhrase = ({ author, children, maxW }) => {
  return (
    <p style={{ maxWidth: maxW }} className='font-RobLgtIt sm:text-xl dark:text-txt text-txt-light text-center w-full p-2'>
      <span className='font-RobBld'>{author}—</span>: "{children}"
    </p>
  );
}

export default CharacterPhrase;
const CharacterDataEntry = ({ title, value }) => {

  const statusColor = (title, value) => {
    if(title === 'Status') {
      switch(value) {
        case 'Dead':
          return 'text-red-500'
        case 'Alive':
          return 'text-green-500'
        case 'unknown':
          return 'text-yellow-500'
        default:
          return ''
      }
    }
  }

  return (
    <h1 className='font-PopReg text-sm sm:text-base dark:text-txt text-txt-light text-ellipsis text-nowrap overflow-hidden'>
      <b>{title}:</b> <span className={`font-PopLgt ${statusColor(title, value)}`}>{value}</span>
    </h1>
  );
}

export default CharacterDataEntry;
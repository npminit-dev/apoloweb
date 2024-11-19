import { useContext } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { appCtx } from './AppContext';

const GoToTop = ({ visible, action }) => {

  const { theme } = useContext(appCtx)

  return (
    visible ?
    <div
      title='Back to top' 
      className='h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] fixed flex items-center justify-center left-2 bottom-2 fadeinup z-50 
        border-2 border-txt-light dark:border-txt rounded-full hover:scale-105 duration-100 cursor-pointer dark:bg-main bg-main-light sm:ml-[50%]'
      onClick={action}
    >
      <FaArrowUp color={ theme === 'dark' ? '#E0E0E0' : '#2C2C2C'} size={30}/>
    </div> : null
  );
}
 
export default GoToTop;
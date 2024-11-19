import { useContext } from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import { appCtx } from './AppContext';

const Loading = ({ title, size }) => {

  const { theme } = useContext(appCtx)

  return (
    <div className='flex flex-col items-center justify-around w-full'>
      <h1 className='font-PopReg dark:text-txt text-txt-light text-2xl mb-4 pt-10'>{ title }</h1>
      <AiOutlineLoading size={size} color={ theme === 'dark' ? '#E0E0E0' : '#2C2C2C' } className='rotate'/>
    </div>
  );
}
 
export default Loading;
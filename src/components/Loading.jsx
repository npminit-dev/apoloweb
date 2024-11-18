import { AiOutlineLoading } from "react-icons/ai";


const Loading = ({ title, size }) => {
  return (
    <div className='flex flex-col items-center justify-around w-full'>
      <h1 className='font-PopReg text-txt text-2xl mb-4 pt-10'>{ title }</h1>
      <AiOutlineLoading size={size} color='#E0E0E0' className='rotate'/>
    </div>
  );
}
 
export default Loading;
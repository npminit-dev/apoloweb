import { FaArrowUp } from "react-icons/fa";

const GoToTop = ({ visible }) => {
  return (
    visible ?
    <div className='h-[50px] w-[50px] fixed top-10 bottom-10 fadeinup z-50'>
      <FaArrowUp color='#00ADB5' size={50}/>
    </div> : null
  );
}
 
export default GoToTop;
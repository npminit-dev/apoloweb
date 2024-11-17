import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className='w-full flex items-center justify-between p-2 sticky top-0 bg-main z-50'>
      <div>
        <Link to={'/Home'} className='mx-2 font-PopSB text-txt text-lg cursor-pointer hover:text-emph duration-200'>Home</Link>
        <Link to={'/EditCreate'} className='mx-2 font-PopSB text-txt text-lg cursor-pointer hover:text-emph duration-200'>Edit</Link>
      </div>
      <IoMdLogOut color='#E0E0E0' size={25} className='cursor-pointer rotate-180 hover:rotate-0 duration-200' title='Log out'/>
    </nav>
  );
}
 
export default Navigation;
import { Link, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import ThemeSwitch from './ThemeSwitch';
import { useContext } from 'react';
import { appCtx } from './AppContext';

const Navigation = () => {

  const navigate = useNavigate()
  const { setLogged } = useContext(appCtx)
  const { theme } = useContext(appCtx)

  let handleLogOut = () => {
    localStorage.removeItem('userLogged')
    setLogged(false)
    navigate('/Login')
  }

  return (
    <nav className='w-full flex items-center justify-between p-2 sticky top-0 z-50'>
      <div>
        <Link to={'/Home'} className='mx-2 font-PopSB dark:text-txt text-txt-light text-lg cursor-pointer hover:text-emph duration-200'>Home</Link>
        <Link to={'/EditCreate'} className='mx-2 font-PopSB dark:text-txt text-txt-light text-lg cursor-pointer hover:text-emph duration-200'>Edit</Link>
        <Link to={'/About'} className='mx-2 font-PopSB dark:text-txt text-txt-light text-lg cursor-pointer hover:text-emph duration-200'>About</Link>
      </div>
      <div className='flex items-center justify-center'>
        <ThemeSwitch/>
        <IoMdLogOut onClick={handleLogOut} color={theme === 'dark' ? '#E0E0E0' : '#2C2C2C'} size={25} className='cursor-pointer hover:scale-110 duration-100 mr-2 rounded-full ease-linear' title='Log out'/>
      </div>
    </nav>
  );
}
 
export default Navigation;
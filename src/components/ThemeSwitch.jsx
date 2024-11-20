import { useContext, useEffect } from 'react';
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { appCtx } from './AppContext';


const ThemeSwitch = () => {

  const { theme, setTheme } = useContext(appCtx)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if(theme === 'dark') document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [theme])

  const toggle = () => theme === 'dark' ? setTheme('light') : setTheme('dark')

  return (
    <div className='relative flex h-[25px] w-[25px] mr-3 items-start justify-center rounded-full cursor-pointer overflow-hidden' onClick={toggle}>
      <div key={theme + 'b'} className={`absolute w-[25px] h-[100px] z-50 ${theme === 'light' ? 'rotateup' : 'rotatedown'}`}>
        <IoSunny 
          size={25} color={theme === 'dark' ? '#E0E0E0' : '#2C2C2C'} 
          className='absolute block z-50'
        />
      </div>
      <div key={theme + 'a'} className={`absolute w-[25px] h-[100px] ${theme === 'dark' ? 'rotatedown' : 'rotateup'}`}>
        <IoMdMoon 
          size={25} color={theme === 'dark' ? '#E0E0E0' : '#2C2C2C'} 
          className='absolute block bottom-0 rotate-180'
        />
      </div>
    </div>
  );
}
 
export default ThemeSwitch;
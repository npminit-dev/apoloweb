import { useContext } from 'react';
import { appCtx } from './AppContext';
import Particles from './Particles'

const Singularity = () => {

  const { theme } = useContext(appCtx)

  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center z-0 overflow-hidden'>
      <div className='flex items-center justify-center h-[700px] w-[700px] dark:bg-emph/30 bg-emph-light/30 rounded-full blur-3xl breathe z-0'>
      </div>
      <div className='absolute h-[200px] w-[200px] border-[1px] dark:border-[2px] border-main-light dark:border-main/30 animate-ping rounded-full [animation-delay:200ms]'></div>
      <div className='absolute h-[100px] w-[100px] border-[3px] dark:border-[4px] border-main-light dark:border-main/30 animate-ping rounded-full'></div>
      <div className='absolute -rotate-12'>
        <svg className='fastbreathe blur-[1px]' width="100" height="100" strokeWidth={10} viewBox="0 0 76 48" fill="none">
          <path d="M74 22.0002H69.12C67.2365 21.9736 65.4067 21.3683 63.879 20.2663C62.3513 19.1644 61.1995 17.6191 60.58 15.8402V15.7902C58.8944 11.1637 55.8266 7.16764 51.7927 4.34401C47.7588 1.52039 42.954 0.00585937 38.03 0.00585938C33.106 0.00585937 28.3012 1.52039 24.2673 4.34401C20.2334 7.16764 17.1656 11.1637 15.48 15.7902V15.8402C14.857 17.6286 13.6961 19.1806 12.1565 20.2835C10.6169 21.3863 8.77381 21.9859 6.88 22.0002H2C1.46957 22.0002 0.960859 22.2109 0.585786 22.586C0.210714 22.961 0 23.4697 0 24.0002C0 24.5306 0.210714 25.0393 0.585786 25.4144C0.960859 25.7895 1.46957 26.0002 2 26.0002H6.88C8.76351 26.0267 10.5933 26.632 12.121 27.734C13.6487 28.836 14.8005 30.3813 15.42 32.1602C17.1016 36.7934 20.169 40.7965 24.2053 43.6254C28.2416 46.4544 33.051 47.972 37.98 47.972C42.909 47.972 47.7184 46.4544 51.7547 43.6254C55.791 40.7965 58.8584 36.7934 60.54 32.1602C61.1618 30.3749 62.3197 28.8251 63.8553 27.7226C65.391 26.6201 67.2296 26.0185 69.12 26.0002H74C74.5304 26.0002 75.0391 25.7895 75.4142 25.4144C75.7893 25.0393 76 24.5306 76 24.0002C76 23.4697 75.7893 22.961 75.4142 22.586C75.0391 22.2109 74.5304 22.0002 74 22.0002ZM38 44.0002C33.0419 44.0002 28.2605 42.1586 24.5834 38.8327C20.9064 35.5067 18.5958 30.9334 18.1 26.0002H57.9C57.4042 30.9334 55.0936 35.5067 51.4166 38.8327C47.7395 42.1586 42.9581 44.0002 38 44.0002ZM18.1 22.0002C18.5952 17.0665 20.9055 12.4926 24.5827 9.16612C28.2598 5.83962 33.0415 3.99767 38 3.99767C42.9585 3.99767 47.7402 5.83962 51.4173 9.16612C55.0945 12.4926 57.4048 17.0665 57.9 22.0002H18.1Z" 
            fill={theme === 'light' ? '#F5F5F5' : '#1E1E2F'}
          />
        </svg>
      </div>
      <Particles/>
    </div>
  );
}

export default Singularity;
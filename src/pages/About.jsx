import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import srcUrl from "./../assets/morty.lottie?url";

const About = () => {
  return (
    <section className='h-[calc(100vh-80px)] sm:h-[calc(100vh-92px)] w-full flex flex-col sm:flex-row items-center justify-around overflow-hidden fadeinleft'>
      <div className='z-50 text-center text-txt-light dark:text-txt'>
        <h2 className='font-RobMed text-3xl mb-4 text-txt-light dark:text-txt'>Made with ❤️</h2>
        <p className='w-[200px] text-lg text-txt-light dark:text-txt'>
          For more information about this technical test (libraries used, techniques, features), check the README.md file 🤠
        </p>
      </div>
      <DotLottieReact 
        src={srcUrl} loop autoplay 
        style={{ height: 250, width: 250 }}
      />
    </section>
  );
}
 
export default About;
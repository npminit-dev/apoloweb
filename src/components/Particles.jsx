import { useCallback, useContext, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { appCtx } from './AppContext';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const { theme } = useContext(appCtx)

  useEffect(() => {
    initParticlesEngine(async (engine) =>
      await loadBasic(engine)
    ).then(() => setInit(true));
  }, []);

  return (
    init && (
      <div className='absolute h-[1000px] w-[1000px] overflow-hidden flex items-center justify-center'>
        <Particles
          className={{ position:'absolute' }}
          id="tsparticles"
          options={{
            fpsLimit: 80,
            particles: {
              color: {
                value: theme === 'dark' ? '#1E1E2F' : '#F5F5F5',
              },
              move: {
                enable: true,
                direction: "outside",
                center: {
                  radius: 350,
                },
                random: false,
                speed: 12,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 300,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 }
              },
            },
          }}
        />
      </div>

    )
  );
};

export default ParticlesComponent

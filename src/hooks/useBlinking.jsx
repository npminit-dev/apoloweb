import { useState, useEffect } from 'react';

const useIsBlinking = (delay) => {

  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    if(isBlinking) setTimeout(() => setIsBlinking(false), 100)
    else setTimeout(() => setIsBlinking(true), Math.round(Math.random() * delay))
  }, [isBlinking]);

  return isBlinking;
}
 
export default useIsBlinking;


import { useState, useRef, useEffect } from 'react';

const useVerticalScroll = () => {
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkVerticalScroll = () => {
      if (ref.current) setHasVerticalScroll(ref.current.scrollTop > 0);
    };

    const element = ref.current;

    if (element) {
      element.addEventListener('scroll', checkVerticalScroll);
      checkVerticalScroll(); // Verificar al inicio
    }

    return () => {
      if (element) element.removeEventListener('scroll', checkVerticalScroll);  
    };
  }, []);

  return {hasVerticalScroll, ref};
};

export default useVerticalScroll;

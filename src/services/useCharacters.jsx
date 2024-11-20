import { useState, useEffect } from 'react';

/* Este es el hook que maneja la conexion a la API */

/* Como los datos de la API de Rick y Morty vienen paginados, y para no complicar el diseño,
realizo solicitudes en paralelo para obtener todos los datos de una vez conservando el orden.*/

/* Solo el json se carga de esta manera, las imagenes se cargan a medida que el usuario va haciendo scroll
por lo que el rendimiento no se ve afectado */

const useCharacters = () => {
  const [loadState, setLoadState] = useState('loading');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (loadState === 'loading') loadCharacters();
  }, [loadState]);

  const loadCharacters = async () => {
    try {
      setCharacters([]);

      const initialResponse = await fetch(`https://rickandmortyapi.com/api/character?page=1`);
      if (!initialResponse.ok) {
        throw new Error('Failed to fetch initial data');
      }
      const schemaData = await initialResponse.json();
      const pages = schemaData.info.pages;

      const pageUrls = Array.from({ length: pages }, (_, i) => 
        `https://rickandmortyapi.com/api/character?page=${i + 1}`
      );

      const responses = await Promise.all(pageUrls.map(url => fetch(url)));
      const okResponses = responses.filter(response => response.ok); 

      if (okResponses.length !== responses.length) throw new Error('Some requests failed');

      const dataPages = await Promise.all(okResponses.map(response => response.json()));
      const allCharacters = dataPages.flatMap(page => page.results);

      setCharacters(allCharacters);
      setLoadState('idle');
    } catch (error) {
      console.error('Error loading characters:', error);
      setLoadState('error');
      setCharacters([]);
    }
  };

  const reloadCharacters = () => setLoadState('loading');

  return { characters, loadState, reloadCharacters };
};

export default useCharacters;
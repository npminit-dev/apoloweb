import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('RickAndMortyDB', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('characters')) {
        db.createObjectStore('characters', { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

const useLocalCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const db = await initDB();
      const transaction = db.transaction('characters', 'readonly');
      const store = transaction.objectStore('characters');
      const request = store.getAll();
  
      request.onsuccess = () => {
        setCharacters(request.result.reverse()); 
      };
    })();
  }, []);

  const addCharacter = async (character) => {
    const db = await initDB();
    const transaction = db.transaction('characters', 'readwrite');
    const store = transaction.objectStore('characters');
  
    const newCharacter = { ...character, id: uuidv4(), local: true };
    store.add(newCharacter);
  
    transaction.oncomplete = () => {
      setCharacters((prev) => [newCharacter, ...prev]);
    };
  };

  const updateCharacter = async (id, updatedCharacter) => {
    const db = await initDB();
    const transaction = db.transaction('characters', 'readwrite');
    const store = transaction.objectStore('characters');

    const characterToUpdate = { ...updatedCharacter, local: true, id };
    store.put(characterToUpdate);

    transaction.oncomplete = () => {
      setCharacters((prev) => prev.map((char) => (char.id === id ? characterToUpdate : char)));
    };
  };

  const deleteCharacter = async (id) => {
    const db = await initDB();
    const transaction = db.transaction('characters', 'readwrite');
    const store = transaction.objectStore('characters');

    store.delete(id);

    transaction.oncomplete = () => {
      setCharacters((prev) => prev.filter((char) => char.id !== id));
    };
  };

  return {
    characters,
    addCharacter,
    updateCharacter,
    deleteCharacter,
  };
};

export default useLocalCharacters;

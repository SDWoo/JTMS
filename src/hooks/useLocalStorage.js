import { useState } from 'react';
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
      console.log(storedValue); // '404 NOT FOUND'
    } catch (error) {
      console.error(error);
    }
  };
  console.log(storedValue); // '200 OK'

  return [storedValue, setValue];
};

export default useLocalStorage;

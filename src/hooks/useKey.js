import { useCallback, useEffect } from 'react';
const useKey = (event = 'keydown', targetKey, handler) => {
  const handleKey = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        handler();
      }
    },
    [targetKey, handler]
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);
    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, handleKey]);
};

export default useKey;

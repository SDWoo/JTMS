// 웹 접근성을 담당하는 요소중 하나인 단축키를 구현할떄 사용되는 훅
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setkeyPressed] = useState(false);
  const handleKeyDown = useCallback(
    ({ key }) => {
      if (key === targetKey) setkeyPressed(true);
    },
    [targetKey]
  );

  const handleKeyUp = useCallback(
    ({ key }) => {
      if (key === targetKey) setkeyPressed(false);
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return keyPressed;
};

export default useKeyPress;

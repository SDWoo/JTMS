import { useState, useRef, useCallback, useEffect } from 'react';
const useHover = () => {
  const [state, setState] = useState(false);
  const ref = useRef(null); // 엘리멘트 받아오기 위함

  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref, handleMouseOut, handleMouseOver]);

  return [ref, state];
};

export default useHover;

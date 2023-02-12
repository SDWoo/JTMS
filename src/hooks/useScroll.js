import { useRef, useEffect } from 'react';
import useRafState from './useRafState';
const useScroll = () => {
  // requestAnimationFrame으로 약간의 이득을 볼 수 있다!
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };
    // passive를 true로 해주면 e.preventDefault를 체크하지 않아서 약간의 성능적 이득 볼 수있다!
    element.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [ref, setState]);

  return [ref, state];
};

export default useScroll;

// target엘리먼트의 사이즈가 변했을때 이벤트를 반환시키는 훅
import { useRef } from 'react';
import { useEffect } from 'react';

const useResize = (handler) => {
  const savedHandler = useRef(handler);
  const ref = useRef(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      savedHandler.current(entries[0].contentRect); // 해당 엘리먼트의 크기 반환
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return ref;
};

export default useResize;

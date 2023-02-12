import { useRef, useEffect, useCallback } from 'react';
const useIntervalFn = (fn, ms) => {
  const intervalId = useRef();
  const callback = useRef(fn); // 이게 굉장히 중요하다
  // 인터벌이 시작된 후에 callback이 바뀐 경우에는 문제가 생길 수 있다.
  // useRef를 하면, 문제가 생기지 않는다!

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useIntervalFn;

// 1. 함수 호출을 통한 방법
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
const useTimeoutFn = (fn, ms) => {
  const timeoutId = useRef();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  // 마지막에 클리어 해주기
  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useTimeoutFn;

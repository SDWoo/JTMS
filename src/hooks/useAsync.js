import useAsyncFn from './useAsyncFn';
import { useEffect } from 'react';

// 비동기 로직을 제거하기 위해 사용되는 훅 (네트워크나 타임아웃이 있을 때 사용)
const useAsync = (fn, deps) => {
  const [state, callback] = useAsyncFn(fn, deps);
  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;

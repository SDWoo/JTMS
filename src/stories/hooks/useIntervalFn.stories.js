import useIntervalFn from '../../hooks/useIntervalFn';
import { useState } from 'react';

export default {
  title: 'Hook/useIntervalFn',
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const [run, clear] = useIntervalFn(() => {
    setArray([...array, '추가됨']);
  }, 1000);

  return (
    <>
      <div>test</div>
      <div>{array}</div>
      <button onClick={run}>추가하기</button>
      <button onClick={clear}>멈춰</button>
    </>
  );
};

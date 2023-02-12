import useTimeoutFn from '../../hooks/useTimeoutFn';

export default {
  title: 'Hook/useTimeoutFn',
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert('시작');
  }, 3000);
  return (
    <>
      <div>useTimeoutFn 테스트</div>
      <button onClick={run}>3초 뒤 실행</button>
      <button onClick={clear}>멈춰</button>
    </>
  );
};

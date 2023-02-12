import useTimeout from '../../hooks/useTimeout';

export default {
  title: 'Hook/useTimeout',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('실행');
  }, 3000);

  return (
    <>
      <div>테스트</div>
      <button onClick={clear}>끝내자</button>
    </>
  );
};

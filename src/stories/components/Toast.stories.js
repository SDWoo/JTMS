import Toast from '../../components/Toast';

export default {
  title: 'Component/Toast',
};

export const Default = () => {
  console.log(Toast);
  return (
    <button onClick={() => Toast.show('안녕하세요!', 3000)}>Show Toast</button>
  );
};

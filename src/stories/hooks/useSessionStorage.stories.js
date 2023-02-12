import useSessionStorage from '../../hooks/useSessionStorage';

export default {
  title: 'Hook/useSessionStorage',
};

export const Default = () => {
  const [status, setStatus] = useSessionStorage('status', '404 NOT FOUND');
  console.log(status);

  return (
    <div>
      <button onClick={() => setStatus('200 OK')}>Resend</button>
      {status}
    </div>
  );
};

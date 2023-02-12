import Divider from '../../components/Divider';
import Text from '../../components/Text';

export default {
  title: 'Component/Divider',
  component: Divider,
};

export const Horizental = () => {
  return (
    <>
      <Text>위</Text>
      <Divider type='horizental'></Divider>
      <Text>아래</Text>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <Text>왼</Text>
      <Divider type='vertical'></Divider>
      <Text>오</Text>
      <Divider type='vertical'></Divider>
      <Text>오</Text>
    </>
  );
};

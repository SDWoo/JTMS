import Skeleton from '../../components/Skeletion';

export default {
  title: 'Component/Skeleton',
};

export const Box = (args) => <Skeleton.Box {...args} />;

Box.argTypes = {
  width: { defaultValue: 200, control: 'number' },
  height: { defaultValue: 200, control: 'number' },
};

export const Circle = (args) => <Skeleton.Circle {...args} />;

Circle.argTypes = {
  size: { defaultValue: 100, control: 'number' },
};

export const Paragraph = (args) => <Skeleton.Paragraph {...args} />;

Circle.argTypes = {
  size: { defaultValue: 100, control: 'number' },
};

export const Sample = () => {
  return (
    <>
      <div style={{ float: 'left', marginRight: 16 }}>
        <Skeleton.Circle size={60}></Skeleton.Circle>
      </div>
      <div style={{ float: 'left', width: '80%' }}>
        <Skeleton.Paragraph line={4}></Skeleton.Paragraph>
      </div>
      <div style={{ clear: 'both' }}></div>
    </>
  );
};

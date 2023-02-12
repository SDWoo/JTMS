import Spinner from '../../components/Spinner';

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 24,
      control: 'number',
    },
    color: {
      control: 'color',
    },
    loading: {
      defaultValue: true,
      control: 'boolean',
    },
  },
};

export const Default = (args) => {
  return <Spinner {...args} />;
};

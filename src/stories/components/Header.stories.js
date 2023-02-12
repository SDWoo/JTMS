import Header from '../../components/Header';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    level: { control: { type: 'range', min: 1, max: 10 } },
    color: { control: 'color' },
    underline: { control: 'boolean' },
    strong: { control: 'boolean' },
  },
};

export const Default = (args) => {
  return <Header {...args}>Header</Header>;
};

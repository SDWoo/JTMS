import Select from '../../components/Select';

export default {
  title: 'Component/Select',
  component: Select,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: 'text',
    },
    placeholder: {
      defaultValue: 'Placeholder',
      control: 'text',
    },
    block: {
      defaultValue: false,
      control: 'boolean',
    },
    invalid: {
      defaultValue: false,
      control: 'boolean',
    },
    required: {
      defaultValue: false,
      control: 'boolean',
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export const Default = (args) => (
  <Select
    data={['item1', 'item2', { label: 'item3', value: 'value' }]}
    {...args}
  />
);

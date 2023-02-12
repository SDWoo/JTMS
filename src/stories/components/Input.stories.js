import Input from '../../components/Input';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    label: {
      defaultValue: 'Label',
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
    readOnly: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export const Default = (args) => <Input {...args} />;

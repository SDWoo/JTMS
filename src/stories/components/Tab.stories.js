import Tab from '../../components/Tab';
import Header from '../../components/Header';

export default {
  title: 'Component/Tab',
  component: Tab,
};

export const Default = () => {
  return (
    <Tab>
      <Tab.Item title='Item1' index='item1'>
        Content1
      </Tab.Item>
      <Tab.Item title='Item2' index='item2'>
        Content2
      </Tab.Item>
      <Tab.Item title='Item3' index='item3'>
        <Header>Header</Header>
      </Tab.Item>
    </Tab>
  );
};

import Progress from '../../components/Progress';
import { useState } from 'react';

export default {
  title: 'Component/Progress',
  component: Progress,
};

export const Default = () => {
  const [value, setValue] = useState(20);
  return (
    <div>
      <button onClick={() => setValue(50)}>change Values</button>
      <Progress value={value}></Progress>
    </div>
  );
};

import Modal from '../../components/Modal';
import { useState } from 'react';

export default {
  title: 'Component/Modal',
  component: Modal,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        Hi
        <button onClick={() => setVisible(false)}>Close</button>
      </Modal>
    </div>
  );
};

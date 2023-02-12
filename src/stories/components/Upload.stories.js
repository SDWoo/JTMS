import Upload from '../../components/Upload';

export default {
  title: 'Component/Upload',
  component: Upload,
};

export const Default = () => {
  return (
    <Upload>
      <button> Click me </button>
    </Upload>
  );
};

export const AccessFile = () => {
  return (
    <Upload>
      {(file) => <button>{file ? file.name : 'Click me'}</button>}
    </Upload>
  );
};

export const Droppable = () => {
  return (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 300,
            border: '4px solid #aaa',
            bolderColor: dragging ? 'black' : '#aaa',
          }}
        >
          {file ? file.name : 'Click or Drag to this area to upload.'}
        </div>
      )}
    </Upload>
  );
};

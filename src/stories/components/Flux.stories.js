import Flux from '../../components/Flux';

const { Row, Col } = Flux;

export default {
  title: 'Component/Flux',
  component: Flux,
};

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: '#44b',
        width: '100%',
        height: 30,
        color: 'white',
        textAlign: 'center',
        borderRadius: 8,
      }}
    >
      Box
    </div>
  );
};

export const Default = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={3}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={12}>
        <Box />
      </Col>
      <Col offset={4} span={8}>
        <Box />
      </Col>
    </Row>
  );
};

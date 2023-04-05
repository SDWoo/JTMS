import styled from '@emotion/styled';
import Base from './Base';

type CircleProps = {
  size: string | number;
};

const Circle = styled(Base)<CircleProps>`
  width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  border-radius: 50%;
`;

export default Circle;

import styled from '@emotion/styled';
import Base from './Base';
import { CSSProperties } from 'react';

type BoxProps = {
  width: string | number;
  height: string | number;
};

const Box = styled(Base)<BoxProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }: { height: CSSProperties['height'] }) =>
    typeof height === 'number' ? `${height}px` : height};
`;

export default Box;

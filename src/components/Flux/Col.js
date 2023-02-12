import styled from '@emotion/styled';
import { useFlux } from './FluxProvider';
import { useMemo } from 'react';

const StyledCol = styled.div`
  max-width: 100% fit-content;
  box-sizing: border-box;

  // span에 따라 비율이 달라진다.
  width: ${({ span }) => span && `${(span / 12) * 100}%`};
  margin-left: ${({ offset }) => offset && `${(offset / 12) * 100}%`};
`;

const Col = ({ children, span, offset, ...props }) => {
  const { gutter } = useFlux();

  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizentalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        paddingTop: `${horizentalGutter / 2}px`,
        paddingBottom: `${horizentalGutter / 2}px`,
        paddingLeft: `${verticalGutter / 2}px`,
        paddingRight: `${verticalGutter / 2}px`,
      };
    } else {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      };
    }
  }, [gutter]);

  return (
    <StyledCol
      {...props}
      span={span}
      offset={offset}
      style={{ ...props.style, ...gutterStyle }}
    >
      {children}
    </StyledCol>
  );
};

export default Col;

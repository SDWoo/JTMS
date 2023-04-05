import styled from '@emotion/styled';
import FluxProvider from './FluxProvider';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';

type RowProps = {
  justify?: CSSProperties['justifyContent'];
  align?: 'flex-start' | 'center' | 'flex-end';
  gutter: number[] | number;
  style?: CSSProperties;
};

const AlignCssValue = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

const StyledRow = styled.div<{ justify: string; align: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => AlignCssValue[align]};
`;

const Row = ({
  children,
  justify,
  align,
  gutter,
  ...props
}: PropsWithChildren<RowProps>) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizentalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        marginTop: `-${horizentalGutter / 2}px`,
        marginBottom: `-${horizentalGutter / 2}px`,
        marginLeft: `-${verticalGutter / 2}px`,
        marginRight: `-${verticalGutter / 2}px`,
      };
    } else {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      };
    }
  }, [gutter]);
  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        {...props}
        align={align}
        justify={justify}
        style={{ ...props.style, ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  );
};

export default Row;

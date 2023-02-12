import styled from '@emotion/styled';
import React from 'react';
const Line = styled.hr`
  border: none;
  background-color: #aaa;

  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizental {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

const Divider = ({
  type = 'horizental', // horizental, vertical,
  size = 8,
  ...props
}) => {
  const dividerStyle = {
    margin: type === 'vertical' ? `0 ${size}px` : `${size}px 0`,
  };
  return (
    <Line
      className={type}
      {...props}
      style={{ ...dividerStyle, ...props.style }}
    />
  );
};

export default Divider;

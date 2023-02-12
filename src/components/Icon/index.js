import { Buffer } from 'buffer';
import styled from '@emotion/styled';
const IconWrapper = styled.i`
  display: inline-block;
`;
const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  rotate,
  color = '#222',
  ...props
}) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };
  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = require('feather-icons').icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : '';
  // img태그를 사용해서 svg를 사용하려면 base64를 써줘야함
  const base64 = Buffer.from(svg, 'utf8').toString('base64');

  return (
    <IconWrapper {...props} style={shapeStyle}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;

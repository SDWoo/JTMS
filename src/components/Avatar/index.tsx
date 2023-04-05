import ImageComponent, { ImagePropsType } from '../Image';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import AvatarGroup from './AvatarGroup';

type AvatarProps = {
  size: number;
  __TYPE: 'Avatar';
} & AvatarWrapperStyledProps &
  ImagePropsType;

type AvatarWrapperStyledProps = {
  shape?: 'circle' | 'round' | 'square';
};

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
};
const AvatarWrapper = styled.div<AvatarWrapperStyledProps>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out;
  }
`;
const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle', // round, square 등이 있음
  placeholder,
  alt,
  __TYPE,
  mode = 'cover',
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  });

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: 'Avatar',
};

Avatar.Group = AvatarGroup;

export default Avatar;

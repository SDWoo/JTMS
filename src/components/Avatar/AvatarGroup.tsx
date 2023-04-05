import React, { PropsWithChildren, ReactElement } from 'react';

interface AvatarGroupProps {
  shape?: 'circle' | 'round' | 'square';
  size?: number;
}

const AvatarGroup = ({
  children,
  shape = 'circle',
  size = 70,
  ...props
}: PropsWithChildren<AvatarGroupProps>) => {
  const avatars = React.Children.toArray(children)
    .filter((element): element is ReactElement => {
      if (React.isValidElement(element) && element.props.__TYPE === 'Avatar') return true;
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });
  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;

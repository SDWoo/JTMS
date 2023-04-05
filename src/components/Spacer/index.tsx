// 스페이서 => 하위 컴포넌트나 요소를 조작하여 자동으로 간격을 만들게 하는 것!
import React, {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

type SpacerProps = {
  type: 'vertical' | 'horizontal';
  size: number;
  props: HTMLAttributes<HTMLDivElement>;
  style: CSSProperties;
};

const Spacer = ({
  children,
  type = 'horizontal',
  size = 8,
  ...props
}: PropsWithChildren<SpacerProps>) => {
  const spacerStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  };

  // 자식 컴포넌트에 직접 접근하기
  const nodes = React.Children.toArray(children)
    .filter((element): element is ReactElement<SpacerProps> =>
      React.isValidElement<SpacerProps>(element)
    )
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight:
            type === 'horizontal' && index !== elements.length - 1 ? size : undefined,
          marginBottom:
            type === 'vertical' && index !== elements.length - 1 ? size : undefined,
        },
      });
    });

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  );
};

export default Spacer;

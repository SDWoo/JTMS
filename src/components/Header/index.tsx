// 동적 태그 이용
import { CSSProperties, PropsWithChildren, ReactElement, ReactNode } from 'react';

type HeaderProps = {
  level: number;
  strong: boolean;
  underline: boolean;
  style: CSSProperties;
  color: string;
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
  ...props
}: PropsWithChildren<HeaderProps>) => {
  let Tag = `h${level}` as HeadingTag;
  if (level < 1 || level > 6) {
    console.warn('Header only accept `1~6` as `label`');
    Tag = 'h1';
  }

  const fontStyle = {
    fontWeight: strong ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : undefined,
    color,
  };
  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default Header;

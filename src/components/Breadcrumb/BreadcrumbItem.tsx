import styled from '@emotion/styled';
import Text from '../Text';
import Icon from '../Icon';
import { PropsWithChildren } from 'react';

export type BreadCrumbItemProps = {
  href?: string;
  active?: boolean;
  __TYPE?: string;
} & PropsWithChildren;

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadcrumbItem = ({
  children,
  href,
  active,
  __TYPE,
  ...props
}: BreadCrumbItemProps) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name='chevron-right' size={22} strokeWidth={1} />}
    </BreadcrumbItemContainer>
  );
};

BreadcrumbItem.defaultProps = {
  __TYPE: 'BreadcrumbItem',
};

BreadcrumbItem.propTypes = {
  __TYPE: 'BreadcrumbItem',
};

export default BreadcrumbItem;

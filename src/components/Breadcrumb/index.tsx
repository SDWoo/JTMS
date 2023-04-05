// 현재 내가 어디에 있는지 알려주는 컴포넌트 (루트부터 지금까지 지나온 경로 표시)
// breadcrumb 자체는 아이템의 Wrapper 이다. 아이템을 구현해야한다.
import styled from '@emotion/styled';
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const BreadcrumbContainer = styled.div`
  display: inline-block;
`;

const Breadcrumb = ({ children }: PropsWithChildren) => {
  const items = Children.toArray(children)
    .filter((element): element is ReactElement => {
      if (isValidElement(element) && element.props.__TYPE === 'BreadcrumbItem') {
        return true;
      }

      console.warn('Only accepts BreadcrumbItem');
      return false;
    })
    .map((element, index, elements) => {
      return cloneElement(element, {
        ...element.props,
        active: index === elements.length - 1,
      });
    });
  return <BreadcrumbContainer>{items}</BreadcrumbContainer>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;

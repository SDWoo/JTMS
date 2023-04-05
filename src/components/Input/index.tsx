import styled from '@emotion/styled';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type InputProps = {
  label: string;
  block: boolean;
  invalid: boolean;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  wrapperProps: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  props: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
};
// Wrapper로 감싼 형태의 input 만들기
const Wrapper = styled.div`
  display: ${({ block }: { block: boolean }) => (block ? 'block' : 'inline-block')};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }: { invalid: boolean }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  wrapperProps,
  ...props
}: InputProps) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;

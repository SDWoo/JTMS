import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

type ProgressProps = {
  value: number;
  onChange: () => void;
  props: HTMLAttributes<HTMLDivElement>;
};

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;
  background-size: 20px;

  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent 100%
  );
  animation: move 1000ms linear;
  transition: width 100ms linear;

  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 40px 0;
    }
  }
`;

const Progress = ({ value, onChange, ...props }: ProgressProps) => {
  return (
    <ProgressContainer {...props}>
      <Rail />
      <Track style={{ width: `${value}%` }} />
    </ProgressContainer>
  );
};

export default Progress;

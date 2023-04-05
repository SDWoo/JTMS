import { HTMLAttributes } from 'react';
import Box from './Box';

type ParagraphProps = {
  line: number;
  props: HTMLAttributes<HTMLDivElement>;
};

const Paragraph = ({ line = 3, ...props }: ParagraphProps) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <Box width='100%' height={16} key={index}></Box>
        ) : (
          <Box width='64%' height={16} key={index}></Box>
        )
      )}
    </div>
  );
};

export default Paragraph;

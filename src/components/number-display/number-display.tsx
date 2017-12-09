import * as React from 'react';

interface Props {
  value: number;
}

export default function NumberDisplay(props: Props) {
  return (
    <div>{props.value}</div>
  );
}

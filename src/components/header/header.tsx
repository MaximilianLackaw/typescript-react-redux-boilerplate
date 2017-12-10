
import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Title>Awesome live calculator</Title>
  );
}

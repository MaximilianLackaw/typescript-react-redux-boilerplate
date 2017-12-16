import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  route: string;
  text: string;
}

const NavigationLink: React.StatelessComponent<Props> = ({ route, text }) => {
  return (
    <Link to={route}>{text}</Link>
  );
};

export default NavigationLink;

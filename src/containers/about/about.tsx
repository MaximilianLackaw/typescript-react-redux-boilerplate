import * as React from 'react';

import NavigationLink from '../../components/navigation-link/navigation-link';
import * as styles from './about.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About page</h1>
      <NavigationLink route="/" text="Calculator page" />
    </div>
  );
}

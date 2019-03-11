// @flow

import * as React from 'react';
import styles from './Welcome.less';

type Props = {
  name: string,
};

export default class Welcome extends React.Component<Props> {
  render() {
    const { name } = this.props;

    return <p className={styles.container}>Welcome, {name}!</p>;
  }
}

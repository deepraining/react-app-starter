// @flow

import * as React from 'react';
import styles from './Hello.less';

type Props = {
  name: string,
};

export default class Hello extends React.Component<Props> {
  render() {
    const { name } = this.props;

    return <p className={styles.container}>Hello, {name}!</p>;
  }
}

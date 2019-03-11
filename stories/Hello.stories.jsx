import React from 'react';

import { storiesOf } from '@storybook/react';

import Hello from '../src/components/Hello';

storiesOf('Hello', module)
  .add('Hello JavaScript', () => <Hello name="JavaScript" />)
  .add('Hello TypeScript', () => <Hello name="TypeScript" />);

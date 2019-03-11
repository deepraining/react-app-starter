import React from 'react';

import { storiesOf } from '@storybook/react';

import Welcome from '../src/components/Welcome';

storiesOf('Welcome', module)
  .add('Welcome JavaScript', () => <Welcome name="JavaScript" />)
  .add('Welcome TypeScript', () => <Welcome name="TypeScript" />);

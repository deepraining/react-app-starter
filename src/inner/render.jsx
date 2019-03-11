import React from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import Welcome from '../components/Welcome';

render(
  <div>
    <Button>Ant Design</Button>
    <Welcome name="inner" />
  </div>,
  document.getElementById('root'),
);

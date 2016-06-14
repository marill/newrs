console.log('This is working!');

import React from 'react';
import { render } from 'react-dom';
import App from '../frontend/components/App';

render(
  <App />,
  document.getElementById('app')
);

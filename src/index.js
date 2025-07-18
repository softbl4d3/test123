
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MaxUI } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import App from './App';

const Root = () => (
  <MaxUI platform="android" colorScheme="light">
    <App />
  </MaxUI>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
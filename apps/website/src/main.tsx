import App from './app';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') as HTMLElement
);

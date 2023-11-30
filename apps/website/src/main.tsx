import App from './app';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './common/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

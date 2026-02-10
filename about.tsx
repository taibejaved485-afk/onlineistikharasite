
import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutPage from './AboutPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AboutPage />
    </React.StrictMode>
  );
}

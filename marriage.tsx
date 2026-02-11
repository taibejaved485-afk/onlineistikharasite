
import React from 'react';
import ReactDOM from 'react-dom/client';
import MarriagePage from './MarriagePage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MarriagePage />
    </React.StrictMode>
  );
}

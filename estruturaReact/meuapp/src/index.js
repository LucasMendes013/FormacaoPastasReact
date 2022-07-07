// Componente é uma parte da interface da nossa aplicação que pode ser repetida , inclusive com informações diferentes

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

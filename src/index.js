import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import useStyles from './Tools/styles';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
document.getElementById('root')
);
reportWebVitals();
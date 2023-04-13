import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createGlobalState } from 'react-hooks-global-state';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const {setGlobalState, useGlobalState} = createGlobalState({
    loading: false,
    refresh: 0
})
  

root.render(
  <App />
);

export { setGlobalState, useGlobalState };  
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
) ;


/*

import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <h1>Helllo Fuckking World!!!...</h1>
    <p>ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17</p>
  </>
  , 
  document.getElementById("root")
) ;


<React.StrictMode>
  <App />
</React.StrictMode>

*/




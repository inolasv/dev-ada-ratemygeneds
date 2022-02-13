import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
// app
import Search from './Search';

// ReactDOM.render(<Search />, document.getElementById('root'));

// var element = React.createElement('h1', { className: 'appname' }, 'Rate My Geneds @ UIUC');// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* search is home for now */}
      {/* <Search /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom';
import Feedback from 'react-bootstrap/esm/Feedback';
import News from './components/Helper/News';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Route  component={App}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

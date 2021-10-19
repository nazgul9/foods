import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ap from './app/Ap'
import swal from 'sweetalert';
import {BrowserRouter,} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
      <Ap/>
    </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/footer.css'
import App from './App';
import Footer from './Footer';

import 'bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/Home/HomePage';
import NewRecordPage from './pages/NewRecord/NewRecordPage';
import SelectVaccinePage from './pages/NewRecord/SelectVaccinePage';
import SearchPage from './pages/NewRecord/SearchPage';




import { BrowserRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
  
  <Router>
    <Route path="/" component={App} />
    <Route path="/home" component={HomePage} />

    {/* <Route path="/" component={HomePage} /> */}
    <Route path="/newrecord" component={NewRecordPage} />
    <Route path="/selectVaccine" component={SelectVaccinePage} />
    <Route path="/search" component={SearchPage} />


    {/* <Route path="/" component={Footer} /> */}
    

  </Router>, document.getElementById('root')
);

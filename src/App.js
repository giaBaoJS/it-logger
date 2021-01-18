import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    //Initialize materialize JS
    M.AutoInit();
  });

  return (
    <div className='App'>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <Logs/>
        </div>
      </Fragment>
    </div>
  );
};

export default App;

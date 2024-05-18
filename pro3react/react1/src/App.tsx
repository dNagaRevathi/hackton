import React from 'react';
//import logo from './logo.svg';
import './App.css';
import A from './a'
import V from './v'
import N from './n'

function App() {
  return (

    <div className="App">
      <div className="con1">
        <h1 className="head1">Covid-19 Data Web Portal</h1>
        <br/>
          <div>
            <a href="<A />">Affected Page</a>
            <a href="<V />">Vaccinated Page</a>
            <a href="<N />">Neighboring Countries Page</a>
          </div>                                                               
      </div>
    </div>

  );
}

export default App;

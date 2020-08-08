import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Resume from './Resume';


function App() {




  return (
    <div>
      <header className="header">
        Resume Application
      </header>
      <BrowserRouter>
        <Route exact path="/" component={Home}  />
  <Route exact path="/resume" component={Resume}  />
      </BrowserRouter>
    </div>
  );
}

let Home=()=>{


  return (
    <section className="parent">
     
      {data.profile.map((val, index) => (
        
        <article className="child" key={index}>
          <h2>{val.basic.name}</h2>
            <Link className="btn" to="/resume" >View Profile</Link>

        </article>

      ))}

    </section>
  );
}

export default App;

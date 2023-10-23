import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components/navigation';
import Footer from './components/footer';
import JsonData from './data/data.json';
import Home from './components/home';
import {Legal} from './components/legal'; 
import {Confidentiality} from './components/confidentiality'; 



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
  
      <Switch>
        <Route path="/legales">
          <Legal />
        </Route>
        <Route path="/confidentiality">
          <Confidentiality />
        </Route>
        <Route path="/#features">
          <Home scrollTarget="features" />
        </Route>
        <Route path="/whoweare">
          <Home scrollTarget="whoweare" />
        </Route>
        <Route path="/portfolio">
          <Home scrollTarget="portfolio" />
        </Route>
        <Route path="/services">
          <Home scrollTarget="services" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
      
      <Footer />
    </div>
  );
};

export default App;

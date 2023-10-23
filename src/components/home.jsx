import React, { useState, useEffect, useRef } from 'react';
import { Header } from './header';
import { Features } from './features';
import { Gallery } from './gallery';
import { Whoweare } from './whoweare';

import { Services } from './services';
import JsonData from '../data/data.json';

import { PopupWidget } from "react-calendly";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const featuresRef = useRef(null); // Reference for the Features section


  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Header data={landingPageData.Header} />
      <Features id="features" data={landingPageData.Features} ref={featuresRef} />
      <Whoweare id="whoweare" />
      <Gallery id="portfolio" />
      <Services id="services" data={landingPageData.Services} />
      <PopupWidget
        url="https://calendly.com/azenergiecom/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Rendez-vous téléphonique"
        textColor="#ffffff"
        color="#82BB50"
      />
    </>
    
  );
};

export default Home; 
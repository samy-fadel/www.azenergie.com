import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='container text-center'>
       

        <div className='row'>
            <div className='col-lg-12'>
              <h3>AZ ENERGIE</h3>
              <div>
                <Link to='/legales' style={{ marginRight: '20px' }}>
                  Mentions légales
                </Link>
                <Link to='/confidentiality'>
                  Politique de confidentialité
                </Link>
              </div>
              <div className="text-center">
                <h5>© AZ ENERGIE 2023. All Rights Reserved.</h5>
              </div>
            </div>
          </div>







      </div>
    </div>
  );
};

export default Footer;

import React from 'react';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header' style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          {/* Logo Image */}
          <a className='navbar-brand page-scroll' href='#page-top' style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={`img/logo-az.png`}
              alt='Logo'
              className='logo-image'
              style={{ maxHeight: '250%', maxWidth: 'auto', marginRight: '10px' }} // Adjust margins as needed
            />
            <span>AZ ENERGIES</span>
          </a>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Energie Solaire
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Qui Sommes-Nous
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Nos Prestations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

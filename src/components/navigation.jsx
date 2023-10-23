import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link to="/">
            <a className='navbar-brand page-scroll'>
              <img
                src='/img/logo.png'
                alt='Your Logo'
                style={{
                  maxWidth: '50px',
                }}
              />
            </a>
          </Link>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              
              
              <ScrollLink to="features" smooth={true} duration={500}>
              <Link to="/#features" style={{ color: 'white' }} >
                Pourquoi choisir l'énergie Solaire ?
                </Link>
              </ScrollLink>
              
            </li>
            <li>
              <ScrollLink to="whoweare" smooth={true} duration={500}>
              <Link to="/#whoweare" style={{ color: 'white' }} >
                Qui Sommes-Nous ?
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="portfolio" smooth={true} duration={500}>
              <Link to="/#portfolio" style={{ color: 'white' }} >
                Nos valeurs
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500}>
              <Link to="/#services" style={{ color: 'white' }} >
                Nos Prestations
                </Link>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

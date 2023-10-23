import React from 'react';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Pourquoi choisir l'energie solaire</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-2'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import './Banner.scss';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Banner = () => {
  return (
    <div className='banner'>

      <div className="row">
        <div className="col-md-6">
          <div className='banner1'>
            <h1>Over 150 expert editors worldwide.</h1>
          </div>

        </div>
        <div className="col-md-6">
          <div className='banner2'>
            <h1>1.8M apps available worldwide.</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner
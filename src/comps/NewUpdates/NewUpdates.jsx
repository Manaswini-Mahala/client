import React from 'react';
import './NewUpdates.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import update1 from './update1.PNG';
import update2 from './update2.PNG';
import update3 from './update3.PNG';
import StarRateIcon from '@mui/icons-material/StarRate';

const NewUpdates = () => {
    return (
        <div className='newUpdates'>

            <div className='heading'>
                <h2>New Updates</h2>
            </div>

            <div className='newUpdatesProducts'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='imageDiv'>
                            <img src={update1} alt="update1" className='image' />
                        </div>
                        <div className='row details'>
                            <div className="col-md-6">
                                <h6>Asphalt 9</h6>
                                <p>Racing</p>
                                <p>4.1 <StarRateIcon className='fontSize'/></p>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-success'>Update</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='imageDiv'>
                            <img src={update2} alt="update2" className='image' />
                        </div>
                        <div className='row details'>
                            <div className="col-md-6">
                                <h6>New York Times</h6>
                                <p>Word</p>
                                <p>4.1 <StarRateIcon className='fontSize'/></p>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-success'>Update</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='imageDiv'>
                            <img src={update3} alt="update3" className='image' />
                        </div>
                        <div className='row details'>
                            <div className="col-md-6">
                                <h6>Math Riddles</h6>
                                <p>Puzzle</p>
                                <p>4.1 <StarRateIcon className='fontSize'/></p>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-success'>Update</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default NewUpdates
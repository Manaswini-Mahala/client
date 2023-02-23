import React from 'react';
import './RecommendedGames.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import chess from './chess.PNG';
import cube from './cube.PNG';
import math from './math.PNG';
import StarRateIcon from '@mui/icons-material/StarRate';

const RecommendedGames = () => {
    return (
        <div className='RecommendedGames'>

            <div className='heading'>
                <div className='row'>
                    <div className="col-md-6">

                    <h2>Recommended Games</h2>

                    </div>
                    
                </div>
                
            </div>

            <div className='RecommendedProducts'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='imageDiv'>
                            <img src={chess} alt="update1" className='image' />
                        </div>
                        <div className='row details'>
                            <div className="col-md-6">
                                <h6>Chess.com</h6>
                                <p>Board</p>
                                <p>4.1 <StarRateIcon className='fontSize'/></p>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-info'>Install</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='imageDiv'>
                            <img src={cube} alt="cube" className='image' />
                        </div>
                        <div className='row details'>
                            <div className="col-md-6">
                                <h6>Cube Offline</h6>
                                <p>Offline</p>
                                <p>4.1 <StarRateIcon className='fontSize'/></p>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-info'>Install</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='imageDiv'>
                            <img src={math} alt="math" className='image' />
                        </div>
                        <div className='row details'>
                            <div className="col-md-6">
                                <h6>Math Riddles</h6>
                                <p>Puzzle</p>
                                <p>4.1 <StarRateIcon className='fontSize'/></p>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-info'>Install</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default RecommendedGames;
import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Categories = () => {
    return (
        <div className='categories'>

            <Container>
            <div className='row'>
                <div className='col-md-3 categoryDiv'>
                    <img src="https://picsum.photos/id/1/1300/1300" alt="" />
                    <button>
                        <Link className="link" to="/apps/1">
                            Apps
                        </Link>
                    </button>
                </div>
                <div className='col-md-3 categoryDiv'>
                    <img src="https://picsum.photos/id/96/1300/1300" alt="" />
                    <button>
                        <Link className="link" to="/apps/2">
                            Games
                        </Link>
                    </button>
                </div>

                <div className='col-md-3 categoryDiv'>
                    <img src="https://picsum.photos/id/184/1300/1300" alt="" />
                    <button>
                        <Link className="link" to="/apps/3">
                            Movies
                        </Link>
                    </button>
                </div>
                <div className='col-md-3 categoryDiv'>
                    <img src="https://picsum.photos/id/60/1300/1300" alt="" />
                    <button>
                        <Link className="link" to="/apps/1">
                            Accessories
                        </Link>
                    </button>
                </div>

            </div>
            </Container>
        </div>
    )
}

export default Categories
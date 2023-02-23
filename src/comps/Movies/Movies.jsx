import React from 'react';
import './Movies.scss';
// import chess from './chess.PNG';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

import useFetch from '../../hooks/useFetch';
import Container from 'react-bootstrap/Container';

const Movies = ({ type }) => {


    // const data = [
    //     {
    //         id: 1,
    //         img: "https://dummyimage.com/300",
    //         title: "Chess.com",
    //         isUpdate: true,
    //         rating: 4,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://dummyimage.com/300",
    //         title: "Micosoft Word",
    //         isUpdate: true,
    //         rating: 4,
    //         price: 12,
    //     },
    //     {
    //         id: 3,
    //         img:"https://dummyimage.com/300",
    //         title: "Chrome",
    //         isUpdate: false,
    //         rating: 4,
    //         price: 12,
    //     },
    //     {
    //         id: 4,
    //         img: "https://dummyimage.com/300",
    //         title: "Instagram",
    //         isUpdate: false,
    //         rating: 4,
    //         price: 12,
    //     },
    // ];

    const { data, loading, error } = useFetch(`/items?populate=*&[filters][type][$eq]=${type}`)





    return (
        <div className='movies'>

            <Container className="container-item">

                <div className='top'>
                    <div className='row'>
                        <div className="col-md-6">

                            <h2>{type} Movies</h2>

                        </div>

                    </div>

                </div>
                <div className='bottom'>
                    {error ? "Error. PLease check if something went wrong"
                        : loading
                            ? "loading"
                            : data?.map(item => (
                                <Card item={item} key={item.id} />
                            ))}

                </div>

            </Container>
        </div>
    )
}

export default Movies;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Reviews.scss';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetch from '../../hooks/useFetch';
// import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import Container from 'react-bootstrap/Container';
import Star from '../../comps/Star/Star';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Reviews from '../../comps/Reviews/Reviews';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useEffect } from 'react';

const Review = () => {

    const id = useParams().id;

    // const dispatch = useDispatch();

    const [open, setOpen] = useState(false);



    const { data, loading, error } = useFetch(
        `/items/${id}?populate=*`);


    // console.log(data);


    const [text, setText] = useState('');
    const [review, setReview] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [displayreview, setDisplayreview] = useState('');
    
    const [starArray, setStarArray] = useState({
        r1: false,
        r2: false,
        r3: false,
        r4: false,
        r5: false,
    })
    const [rating, setRating] = useState(0)
    const [displayRating, setDisplayRating] = useState('')
    const [displayDate, setDisplayDate] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        setDisplayText(text);
        setDisplayreview(review);
        setDisplayRating(rating);
        setDisplayDate("January 17, 2023");
    };

    const handleChange = e => {
        setText(e.target.value);
    };

    // const handleSubmit2 = e => {
    //     e.preventDefault();
    //     setDisplayreview(review);
    // };

    const handleChange2 = e => {
        setReview(e.target.value);
    };

    const setStar = rate => {
        setRating(rate)
        for (let i = 1; i <= rate; i++) starArray[`r${i}`] = true
        for (let i = rate + 1; i <= 5; i++) starArray[`r${i}`] = false
    }



    if (data?.attributes?.reviewContent === null) {

        return (


            <div className='reviewsCmp'>

                <Container className="container-item">

                    {loading
                        ? "loading"
                        : (<><div className="row">




                            <div className='feedback'>






                                {/* <p>No reviews yet. Be the first one to review this App!</p> */}

                                <form className='reviewForm' onSubmit={e => handleSubmit(e)}>
                                    {/* <label className='userNameInput'>Name </label><br/> */}
                                    <div className='starIconsForReview'>
                                        {starArray.r1 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(1)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(1)} />}
                                        {starArray.r2 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(2)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(2)} />}
                                        {starArray.r3 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(3)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(3)} />}
                                        {starArray.r4 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(4)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(4)} />}
                                        {starArray.r5 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(5)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(5)} />}
                                    </div>
                                    <input placeholder='Name' className='NameInput' type="text" value={text} onChange={e => handleChange(e)} /><br />
                                    {/* <label className='userReviewInput'>Review </label><br/> */}
                                    <input placeholder='Review' className='ReviewInput' type="text" value={review} onChange={e => handleChange2(e)} /><br />
                                    <button className='userReviewSubmitButtom' type="submit" onClick={handleSubmit} disabled={rating === 0}>
                                        Submit
                                    </button>

                                </form>


                                <div className="reviewPersonParent">

                                    <div className='reviewPerson'>
                                        {displayText && <p className='userName'><PersonOutlineIcon className='personIcon' /> {displayText}</p>}
                                        {/* <p className='userDate'>January 17, 2023</p> */}
                                        {displayDate && <p className='userDate'>{displayDate}</p>}
                                        {displayRating && <p className='userRating'>{displayRating} <Star stars={displayRating} /></p>}
                                        {displayreview && <p className='userDesc'>{displayreview}</p>}
                                    </div>

                                </div>






                            </div>
                        </div>





                        </>
                        )
                    }

                </Container>

            </div >
        )

    }



    else {
        return (


            <div className='reviewsCmp'>

                <Container className="container-item">

                    {loading
                        ? "loading"
                        : (<><div className="row">





                            <div className='feedback'>





                            <form className='reviewForm' onSubmit={e => handleSubmit(e)}>
                                    {/* <label className='userNameInput'>Name </label><br/> */}
                                    <div className='starIconsForReview'>
                                        {starArray.r1 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(1)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(1)} />}
                                        {starArray.r2 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(2)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(2)} />}
                                        {starArray.r3 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(3)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(3)} />}
                                        {starArray.r4 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(4)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(4)} />}
                                        {starArray.r5 ? <StarIcon className='starIconsForReviewIcons' onClick={() => setStar(5)} /> : <StarOutlineIcon className='starIconsForReviewIcons' onClick={() => setStar(5)} />}
                                    </div>
                                    <input placeholder='Name' className='NameInput' type="text" value={text} onChange={e => handleChange(e)} /><br />
                                    {/* <label className='userReviewInput'>Review </label><br/> */}
                                    <input placeholder='Review' className='ReviewInput' type="text" value={review} onChange={e => handleChange2(e)} /><br />
                                    <button className='userReviewSubmitButtom' type="submit" onClick={handleSubmit} disabled={rating === 0}>
                                        Submit
                                    </button>

                                </form>


                                <div className="reviewPersonParent">

                                    <div className='reviewPerson'>
                                        {displayText && <p className='userName'><PersonOutlineIcon className='personIcon' /> {displayText}</p>}
                                        {/* <p className='userDate'>January 17, 2023</p> */}
                                        {displayDate && <p className='userDate'>{displayDate}</p>}
                                        {displayRating && <p className='userRating'>{displayRating} <Star stars={displayRating} /></p>}
                                        {displayreview && <p className='userDesc'>{displayreview}</p>}
                                    </div>

                                </div>





                                {[data?.attributes].map(item => (




                                    item?.reviewContent?.reviews.map(val => (

                                        <div className='reviewPerson' key={val.user}>
                                            <p className='userName'><PersonOutlineIcon className='personIcon' /> {val.user}</p>
                                            <p className='userDate'>{val.date}</p>
                                            <p className='userRating'>{val.rating} <Star stars={val.rating} /></p>
                                            <p className='userDesc'>{val.description}</p>
                                        </div>


                                    ))




                                ))}




                                

                                {/* <h6>{data?.attributes?.reviewContent.reviews[0].user}</h6> */}







                            </div>


                        </div>

                        </>
                        )
                    }

                </Container>

            </div >
        )
    }


}







//     if (data?.attributes?.reviewContent === null) {

//         return (


//             <div className='reviewsCmp'>

//                 <Container className="container-item">

//                     {loading
//                         ? "loading"
//                         : (<>
//                             <div>


//                                 <form onSubmit={e => handleSubmit(e)}>
//                                     <label>Name </label>
//                                     <input type="text" value={text} onChange={e => handleChange(e)} /><br/>
//                                     <label>Review </label>
//                                     <input type="text" value={review} onChange={e => handleChange2(e)} /><br/>
//                                     <button type="submit" onClick={ handleSubmit }>
//                                         Show
//                                     </button>
//                                     {displayText && <p>{displayText}</p>}
//                                     {displayreview && <p>{displayreview}</p>}
//                                 </form>




//                             </div></>
//                         )
//                     }

//                 </Container>

//             </div >
//         )

//     }



//     else {
//         return (


//             <div className='reviewsCmp'>

//                 <Container className="container-item">

//                     {loading
//                         ? "loading"
//                         : (<>something
//                         </>
//                         )
//                     }

//                 </Container>

//             </div >
//         )
//     }


// }

export default Review
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./Star.scss";



const Star = ({ stars }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.45;

        return (
            <span key={index}>
    
                {stars >= index + 1
                    ? <StarIcon className='icon'/>
                    : stars >= number
                        ? <StarHalfIcon className='icon'/>
                        : <StarOutlineIcon className='icon'/>}
    
            </span>
        )

    });

    return (
        <span className='starIcon'>
            
                {ratingStar}

                {/* <p>({reviews} customer reviews)</p> */}
            
        </span>
    )

    // console.log(stars);
   
}

export default Star;
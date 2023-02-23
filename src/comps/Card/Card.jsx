import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import Star from '../Star/Star';

const Card = ({item}) => {

    
    return (
        <Link className='link' to={`/item/${item.id}`}>
            <div className='cardItem'>

                <div className="image">
                    <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />

                </div>

                <div className='details'>

                    <h6>{item?.attributes.title}</h6>
                    <p> <Star stars={item?.attributes?.rating} /></p>
                    <p className='priceTag'>{item?.attributes?.price===0 ? <span>Free</span> : <span>$ {item.attributes.price}</span>}</p>
                </div>

                {/* {item?.attributes.price}{item?.attributes.isUpdate && <span>Sale $2 */}
            </div>
        </Link>
    )
}

export default Card